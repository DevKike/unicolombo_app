import { ICreateCompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
import { ICompletedFormService } from "../../../domain/entities/completedForm/ICompletedFormService";
import { IDeptMaintTypeAssignmentService } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentService";
import { IExecutionService } from "../../../domain/entities/execution/IExecutionService";
import { ICreateMaintenance, IMaintenance, IUpdateMaintenance, IUpdateMaintenanceWithStage } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceService } from "../../../domain/entities/maintenance/IMaintenanceService";
import { IMaintenanceUseCase } from "../../../domain/entities/maintenance/IMaintenanceUseCase";
import { IStageService } from "../../../domain/entities/stage/IStageService";
import { ITemplateFormService } from "../../../domain/entities/templateForm/ITemplateFormService";
import { ExecutionStatus } from "../../../domain/enums/execution/ExecutionStatus";
import { MaintenanceStatus } from "../../../domain/enums/maintenance/MaintenanceStatus";
import { MaintenanceTypeEnum } from "../../../domain/enums/maintenanceType/MaintenanceType";
import { SortDirection } from "../../../domain/enums/sortOrder/SortOrder";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";

export class MaintenanceUseCase implements IMaintenanceUseCase {
  constructor(
    private readonly maintenanceService: IMaintenanceService,
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

  async createPreventiveMaintenance(departmentId: number, maintenance: ICreateMaintenance, completedForm: ICreateCompletedForm): Promise<void> {
    try {
      const assignment = await this.assignmentService.getAssignmentByDeptIdAndMaintTypeId(departmentId, MaintenanceTypeEnum.PREVENTIVE);

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

  async updateMaintenanceById(id: number, maintenance: IUpdateMaintenance): Promise<void> {
    try {
      await this.maintenanceService.updateMaintenanceById(id, maintenance);
    } catch (error) {
      throw error;
    }
  }

  async updatePreventiveMaintenanceWithStage(departmentId: number, maintenanceId: number, data: IUpdateMaintenanceWithStage): Promise<void> {
    try {
      const maintenance = await this.maintenanceService.getMaintenanceById(maintenanceId);

      if (!maintenance || maintenance.deptMaintTypeAssignment.department.id !== departmentId) {
        throw new NotFoundException("Maintenance not found");
      }

      const latestExecution = maintenance.executions[maintenance.executions.length - 1];

      if (!latestExecution) {
        throw new NotFoundException("No execution found for this maintenance");
      }

      const newStage = await this.stageService.getStageById(data.stageId);
      if (!newStage) {
        throw new NotFoundException("Stage not found");
      }

      await this.maintenanceService.updateMaintenanceById(maintenanceId, data.maintenance);
      await this.executionService.updateExecution(latestExecution.id, { stage: newStage });

      const templateForm = await this.templateFormService.getTemplateFormByStage(data.stageId);
      console.log("🚀 ~ MaintenanceUseCase ~ updatePreventiveMaintenanceWithStage ~ templateForm:", templateForm)

      if (!templateForm || !templateForm[0]) {
        throw new NotFoundException("Template form not found for this stage");
      }

      console.log(data.completedForm);
      
     /*  await this.completedFormService.saveCompletedForm({
        ...data.completedForm,
        execution: latestExecution,
        templateForm: templateForm[0],
      }); */
    } catch (error) { 
      throw error;
    }
  }
}
