import { IActorService } from "../../../domain/entities/actor/IActorService";
import { ICreateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
import { ICompletedFormService } from "../../../domain/entities/completedForm/ICompletedFormService";
import { IDeptMaintTypeAssignmentService } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentService";
import { IExecutionService } from "../../../domain/entities/execution/IExecutionService";
import { IExecutorService } from "../../../domain/entities/executor/IExecutorService";
import { ICreateMaintenance, IMaintenance, IUpdateMaintenance, IUpdateMaintenanceWithStage } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceService } from "../../../domain/entities/maintenance/IMaintenanceService";
import { IMaintenanceUseCase } from "../../../domain/entities/maintenance/IMaintenanceUseCase";
import { IStageService } from "../../../domain/entities/stage/IStageService";
import { ITemplateFormService } from "../../../domain/entities/templateForm/ITemplateFormService";
import { ExecutionStatus } from "../../../domain/enums/execution/ExecutionStatus";
import { ExecutorStatus } from "../../../domain/enums/executors/ExecutorStatus";
import { MaintenanceStatus } from "../../../domain/enums/maintenance/MaintenanceStatus";
import { MaintenanceTypeEnum } from "../../../domain/enums/maintenanceType/MaintenanceType";
import { SortDirection } from "../../../domain/enums/sortOrder/SortOrder";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";
import { IJwtPayload } from "../../../infrastructure/jwt/interfaces/IJwtPayload";

export class MaintenanceUseCase implements IMaintenanceUseCase {
  constructor(
    private readonly maintenanceService: IMaintenanceService,
    private readonly stageService: IStageService,
    private readonly assignmentService: IDeptMaintTypeAssignmentService,
    private readonly executionService: IExecutionService,
    private readonly templateFormService: ITemplateFormService,
    private readonly completedFormService: ICompletedFormService,
    private readonly executorService: IExecutorService,
    private readonly actorService: IActorService,
  ) {}

  async createMaintenance(maintenance: ICreateMaintenance): Promise<IMaintenance> {
    try {
      return await this.maintenanceService.createMaintenance(maintenance);
    } catch (error) {
      throw error;
    }
  }

  async createPreventiveMaintenance(authActor: IJwtPayload, maintenance: ICreateMaintenance, completedForm: ICreateCompletedForm): Promise<void> {
    try {
      const assignment = await this.assignmentService.getAssignmentByDeptIdAndMaintTypeId(authActor.department, MaintenanceTypeEnum.PREVENTIVE);

      const stages = await this.stageService.getStagesByAssignment(assignment!.id, SortDirection.ASC);

      const scheduleStage = stages.find((stage) => stage.order === 1);

      const assignedMaintenance: ICreateMaintenance = { ...maintenance, deptMaintTypeAssignment: assignment!, status: MaintenanceStatus.IN_PROGRESS  };

      const createdMaintenance = await this.createMaintenance(assignedMaintenance);

      const execution = await this.executionService.createExecution({
        status: ExecutionStatus.IN_PROGRESS,
        maintenance: createdMaintenance,
        stage: scheduleStage!,
      });

      const templateForm = await this.templateFormService.getTemplateFormByStage(scheduleStage!.id);

      await this.completedFormService.saveCompletedForm({
        ...completedForm,
        execution: execution,
        templateForm: templateForm[0],
      });

      const currentActorData = await this.actorService.getActorsByQueryParams({ id: authActor.id });

      await this.executorService.createExecutor({
        status: ExecutorStatus.ASSIGNED,
        actor: currentActorData[0],
        execution: execution,
      });
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

  async getPreventiveMaintenancesByDepartment(departmentId: number): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceService.getPreventiveMaintenancesByDepartment(departmentId);
    } catch(error) {
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

  async updatePreventiveMaintenanceWithStage(maintenanceId: number, authActor: IJwtPayload, data: IUpdateMaintenanceWithStage): Promise<void> {
    try {
      const departmentId = authActor.department;

      const maintenance = await this.maintenanceService.getMaintenanceById(departmentId);

      if (!maintenance || maintenance.deptMaintTypeAssignment.department.id !== departmentId) {
        throw new NotFoundException("Maintenance not found");
      }

      const latestExecution = maintenance.executions[maintenance.executions.length - 1];

      if (!latestExecution) {
        throw new NotFoundException("No execution found for this maintenance");
      }

      const newStage = await this.stageService.getStageById(data.stage);
      
      if (!newStage) {
        throw new NotFoundException("Stage not found");
      }

      await this.updateMaintenanceById(maintenanceId, data.maintenance);
      
      await this.executionService.updateExecution(latestExecution.id, { stage: newStage });

      const templateForm = await this.templateFormService.getTemplateFormByStage(data.stage);

      if (!templateForm || !templateForm[0]) {
        throw new NotFoundException("Template form not found for this stage");
      }

      if (data.completedForm) {
        await this.completedFormService.saveCompletedForm({
          ...data.completedForm,
          execution: latestExecution,
          templateForm: templateForm[0],
        });
      }

      const currentActor = await this.actorService.getActorsByQueryParams({ id: authActor.id });

      await this.executorService.createExecutor({
        status: ExecutorStatus.ASSIGNED,
        actor: currentActor[0],
        execution: latestExecution,
      });
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
}
