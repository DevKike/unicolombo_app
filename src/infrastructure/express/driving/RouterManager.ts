import { Application } from "express";
import { IRouterManager } from "../interfaces/IRouterManager";
import { ActorRouter } from "./actor/ActorRouter";
import { RoleRouter } from "./role/RoleRouter";
import { DepartmentRouter } from "./department/DepartmentRouter";
import { MaintenanceRouter } from "./maintenance/MaintenanceRouter";
import { MaintenanceTypeRouter } from "./maintenanceType/MaintenanceTypeRouter";
import { DeptMaintTypeAssignmentRouter } from "./deptMaintTypeAssignment/DeptMaintTypeAssignmentRouter";
import { StageRouter } from "./stage/StageRouter";
import { FileUploadRouter } from "./file/FileUploadRouter";
import { TemplateFormRouter } from "./form/TemplateFormRouter";

export class RouterManager implements IRouterManager {
  constructor(
    private readonly app: Application,
    private readonly roleRouter: RoleRouter,
    private readonly actorRouter: ActorRouter,
    private readonly departmentRouter: DepartmentRouter,
    private readonly maintenanceTypeRouter: MaintenanceTypeRouter,
    private readonly deptMaintTypeAssignmentRouter: DeptMaintTypeAssignmentRouter,
    private readonly maintenanceRouter: MaintenanceRouter,
    private readonly stageRouter: StageRouter,
    private readonly fileUploadRouter: FileUploadRouter,
    private readonly templateFormRouter: TemplateFormRouter,
  ) {}

  manageRoutes(): void {
    this.app.use("/api/roles", this.roleRouter.getRouter());
    this.app.use("/api/actors", this.actorRouter.getRouter());
    this.app.use("/api/departments", this.departmentRouter.getRouter());
    this.app.use("/api/maintenances-types", this.maintenanceTypeRouter.getRouter());
    this.app.use("/api/dept-maint-type-assignment", this.deptMaintTypeAssignmentRouter.getRouter());
    this.app.use("/api/maintenances", this.maintenanceRouter.getRouter());
    this.app.use("/api/stage", this.stageRouter.getRouter());
    this.app.use("/api/file", this.fileUploadRouter.getRouter());
    this.app.use("/api/template-form", this.templateFormRouter.getRouter());
  }
}
