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
import { TemplateFormRouter } from "./templateForm/TemplateFormRouter";
import { CompletedFormRouter } from "./completedForm/CompletedFormRouter";
import { IRouterModule } from "../interfaces/IRouterModule";

export class RouterManager implements IRouterManager {
  constructor(
    private readonly app: Application,
    private readonly roleRouter: IRouterModule,
    private readonly actorRouter: IRouterModule,
    private readonly departmentRouter: IRouterModule,
    private readonly maintenanceTypeRouter: IRouterModule,
    private readonly deptMaintTypeAssignmentRouter: IRouterModule,
    private readonly maintenanceRouter: IRouterModule,
    private readonly stageRouter: IRouterModule,
    private readonly fileUploadRouter: IRouterModule,
    private readonly templateFormRouter: IRouterModule,
    private readonly completedFormRouter: IRouterModule,
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
    this.app.use("/api/completed-form", this.completedFormRouter.getRouter())
  }
}
