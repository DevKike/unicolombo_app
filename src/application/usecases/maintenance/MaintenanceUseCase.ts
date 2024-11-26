import { IAuthService } from "../../../domain/entities/auth/IAuthService";
import { ICreateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
import { ICompletedFormService } from "../../../domain/entities/completedForm/ICompletedFormService";
import { IDeptMaintTypeAssignmentService } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentService";
import { IExecutionService } from "../../../domain/entities/execution/IExecutionService";
import {
  ICreateMaintenance,
  IMaintenance,
  IUpdateMaintenance,
} from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceService } from "../../../domain/entities/maintenance/IMaintenanceService";
import { IMaintenanceUseCase } from "../../../domain/entities/maintenance/IMaintenanceUseCase";
import { IStageService } from "../../../domain/entities/stage/IStageService";
import { ITemplateFormService } from "../../../domain/entities/templateForm/ITemplateFormService";
import { ExecutionStatus } from "../../../domain/enums/execution/ExecutionStatus";
import { MaintenanceTypeEnum } from "../../../domain/enums/maintenanceType/MaintenanceType";
import { SortDirection } from "../../../domain/enums/sortOrder/SortOrder";
import { IJwtPayload } from "../../../infrastructure/jwt/interfaces/IJwtPayload";

export class MaintenanceUseCase implements IMaintenanceUseCase {
  constructor(
    private readonly maintenanceService: IMaintenanceService,
    private readonly authService: IAuthService,
    private readonly stageService: IStageService,
    private readonly assignmentService: IDeptMaintTypeAssignmentService,
    private readonly executionService: IExecutionService,
    private readonly templateFormService: ITemplateFormService,
    private readonly completedFormService: ICompletedFormService
  ) {}

  async createMaintenance(maintenance: ICreateMaintenance): Promise<IMaintenance> {
    try {
      return await this.maintenanceService.createMaintenance(maintenance);
    } catch (error) {
      throw error;
    }
  }

  async getAllMaintenances(): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceService.getAllMaintenances();
    } catch (error) {
      throw error;
    }
  }

  async getMaintenanceById(id: number): Promise<IMaintenance | null> {
    try {
      return await this.maintenanceService.getMaintenanceById(id);
    } catch (error) {
      throw error;
    }
  }

  async updateMaintenanceById(id: number, maintenance: IUpdateMaintenance): Promise<void> {
    try {
      await this.maintenanceService.updateMaintenanceById(id, maintenance);
    } catch (error) {
      throw error;
    }
  }

  async createPreventiveMaintenance(authActor: IJwtPayload, maintenance: ICreateMaintenance, completedForm: ICreateCompletedForm): Promise<void> {
    try {
      const currentActor = await this.authService.getAuthDataById(authActor.id);

      const assignment = await this.assignmentService.getAssignmentByDeptIdAndMaintTypeId(currentActor?.actor.department.id!, MaintenanceTypeEnum.PREVENTIVE);

      const stages = await this.stageService.getStagesByAssignment(assignment!.id, SortDirection.ASC);

      const scheduleStage = stages.find((stage) => stage.order === 1);

      const assignedMaintenance: ICreateMaintenance = {...maintenance, deptMaintTypeAssignment: assignment!};

      const createdMaintenance = await this.createMaintenance(assignedMaintenance);

      const execution = await this.executionService.createExecution({
        status: ExecutionStatus.IN_PROGRESS,
        maintenance: createdMaintenance,
        stage: scheduleStage!,
      });

      const templateForm = await this.templateFormService.getTemplateFormByStage(scheduleStage!.id);

      await this.completedFormService.saveCompletedForm({
        name: completedForm.name,
        code: completedForm.code,
        description: completedForm.description,
        fileExtension: completedForm.fileExtension,
        filePath: completedForm.filePath,
        execution: execution,
        templateForm: templateForm[0],
      });
    } catch (error) {
      throw error;
    }
  }
}
