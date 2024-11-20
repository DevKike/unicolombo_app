import express, { Application as App } from "express";
import { AppDataSource } from "../database/config/typeorm";
import { Environment } from "../environment/Environment";
import { IRouterManager } from "./interfaces/IRouterManager";
import { RouterManager } from "./driving/RouterManager";
import { RoleRouter } from "./driving/role/RoleRouter";
import { RoleUseCase } from "../../application/usecases/role/RoleUseCase";
import { RoleService } from "../services/role/RoleService";
import { RoleRepository } from "../repositories/role/RoleRepository";
import { ActorRepository } from "../repositories/actor/ActorRepository";
import { ActorService } from "../services/actor/ActorService";
import { ActorUseCase } from "../../application/usecases/actor/ActorUseCase";
import { ActorRouter } from "./driving/actor/ActorRouter";
import cors from "cors";
import { DepartmentRouter } from "./driving/department/DepartmentRouter";
import { DepartmentUseCase } from "../../application/usecases/department/DepartmentUseCase";
import { DepartmentService } from "../services/department/DepartmentService";
import { DepartmentRepository } from "../repositories/department/DepartmentRepository";
import { MaintenanceRouter } from "./driving/maintenance/MaintenanceRouter";
import { MaintenanceUseCase } from "../../application/usecases/maintenance/MaintenanceUseCase";
import { MaintenanceService } from "../services/maintenance/MaintenanceService";
import { MaintenanceRepository } from "../repositories/maintenance/MaintenanceRepository";
import { MaintenanceTypeRouter } from "./driving/maintenanceType/MaintenanceTypeRouter";
import { MaintenanceTypeUseCase } from "../../application/usecases/maintenanceType/MaintenanceTypeUseCase";
import { MaintenanceTypeRepository } from "../repositories/maintenanceType/MaintenanceTypeRepository";
import { MaintenanceTypeService } from "../services/maintenanceType/MaintenanceTypeService";
import { DeptMaintTypeAssignmentUseCase } from "../../application/usecases/deptMaintTypeAssignment/DeptMaintTypeAssignmentUseCase";
import { DeptMaintTypeAssignmentRouter } from "./driving/deptMaintTypeAssignment/DeptMaintTypeAssignmentRouter";
import { DeptMaintTypeAssignmentRepository } from "../repositories/deptMaintTypeAssignment/deptMaintTypeAssignmentRepository";
import { DeptMaintTypeAssignmentService } from "../services/deptMaintTypeAssignment/deptMaintTypeAssignmentService";
import { StageRepository } from "../repositories/stage/StageRepository";
import { StageService } from "../services/stage/StageService";
import { StageUseCase } from "../../application/usecases/stage/StageUseCase";
import { StageRouter } from "./driving/stage/StageRouter";
import { TemplateFormRepository } from "../repositories/templateForm/TemplateFormRepository";
import { TemplateFormService } from "../services/templateForm/TemplateFormService";
import { TemplateFormUseCase } from "../../application/usecases/templateForm/TemplateFormUseCase";
import { TemplateFormRouter } from "./driving/templateForm/TemplateFormRouter";
import fileUpload from "express-fileupload";
import { FileUploadService } from "../services/fileUpload/FileUploadService";
import { FileUploadUseCase } from "../../application/usecases/fileUpload/FileUploadUseCase";
import { FileUploadRouter } from "./driving/file/FileUploadRouter";
import path from "path";
import { CompletedFormRepository } from "../repositories/completedForm/CompletedFormRepository";
import { CompletedFormService } from "../services/completedForm/CompletedFormService";
import { CompletedFormUseCase } from "../../application/usecases/completedForm/CompletedFormUseCase";
import { CompletedFormRouter } from "./driving/completedForm/CompletedFormRouter";
import { ExecutionRepository } from "../repositories/execution/ExecutionRepository";
import { ExecutionService } from "../services/execution/ExecutionService";
import { ExecutionUseCase } from "../../application/usecases/execution/ExecutionUseCase";
import { ExecutionRouter } from "./driving/execution/ExecutionRouter";
import { ExecutorRouter } from "./driving/executor/ExecutorRouter";
import { ExecutorUseCase } from "../../application/usecases/executor/ExecutorUseCase";
import { ExecutorService } from "../services/executor/ExecutorService";
import { ExecutorRepository } from "../repositories/executor/ExecutorRepository";
import { AuthService } from "../services/auth/AuthService";
import { AuthRepository } from "../repositories/auth/AuthRepository";
import { JwtService } from "../services/jwt/JwtService";

export class Application {
  public app: App;
  private routerManager: IRouterManager;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initRoutes();
  }

  private initMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(fileUpload());
    this.app.use("/public/uploads", express.static(path.join(__dirname, "../uploads")));
  }

  private initRoutes(): void {
    const roleRepository = new RoleRepository(AppDataSource);
    const roleService = new RoleService(roleRepository);
    const roleUseCase = new RoleUseCase(roleService);
    const roleRouter = new RoleRouter(roleUseCase);

    const jwtService = new JwtService();

    const authRepository = new AuthRepository(AppDataSource);
    const authService = new AuthService(authRepository, jwtService);

    const actorRepository = new ActorRepository(AppDataSource);
    const actorService = new ActorService(actorRepository);
    const actorUseCase = new ActorUseCase(actorService, authService);
    const actorRouter = new ActorRouter(actorUseCase);

    const departmentRepository = new DepartmentRepository(AppDataSource);
    const departmentService = new DepartmentService(departmentRepository);
    const departmentUseCase = new DepartmentUseCase(departmentService);
    const departmentRouter = new DepartmentRouter(departmentUseCase);
    
    const maintenanceTypeRepository = new MaintenanceTypeRepository(AppDataSource);
    const maintenanceTypeService = new MaintenanceTypeService(maintenanceTypeRepository)
    const maintenanceTypeUseCase = new MaintenanceTypeUseCase(maintenanceTypeService);
    const maintenanceTypeRouter = new MaintenanceTypeRouter(maintenanceTypeUseCase);

    const deptMaintTypeAssignmentRepository = new DeptMaintTypeAssignmentRepository(AppDataSource);
    const deptMaintTypeAssignmentService = new DeptMaintTypeAssignmentService(deptMaintTypeAssignmentRepository);
    const deptMaintTypeAssignmentUseCase = new DeptMaintTypeAssignmentUseCase(deptMaintTypeAssignmentService);
    const deptMaintTypeAssignmentRouter = new DeptMaintTypeAssignmentRouter(deptMaintTypeAssignmentUseCase);

    const maintenanceRepository = new MaintenanceRepository(AppDataSource);
    const maintenanceService = new MaintenanceService(maintenanceRepository);
    const maintenanceUseCase = new MaintenanceUseCase(maintenanceService);
    const maintenanceRouter = new MaintenanceRouter(maintenanceUseCase);

    const stageRepository = new StageRepository(AppDataSource);
    const stageService = new StageService(stageRepository);
    const stageUseCase = new StageUseCase(stageService);
    const stageRouter = new StageRouter(stageUseCase);

    const fileService = new FileUploadService();
    const fileUseCase = new FileUploadUseCase(fileService);
    const fileRouter = new FileUploadRouter(fileUseCase);

    const templateFormRepository = new TemplateFormRepository(AppDataSource);
    const templateFormService = new TemplateFormService(templateFormRepository);
    const templateFormUseCase = new TemplateFormUseCase(templateFormService);
    const templateFormRouter = new TemplateFormRouter(templateFormUseCase);
    
    const completedFormRepository = new CompletedFormRepository(AppDataSource);
    const completedFormService = new CompletedFormService(completedFormRepository);
    const completedFormUseCase = new CompletedFormUseCase(completedFormService);
    const completedFormRouter = new CompletedFormRouter(completedFormUseCase);

    const executionRepository = new ExecutionRepository(AppDataSource);
    const executionService = new ExecutionService(executionRepository);
    const executionUseCase = new ExecutionUseCase(executionService);
    const executionRouter = new ExecutionRouter(executionUseCase);

    const executorRepository = new ExecutorRepository(AppDataSource);
    const executorService = new ExecutorService(executorRepository);
    const executorUseCase = new ExecutorUseCase(executorService);
    const executorRouter = new ExecutorRouter(executorUseCase);

    this.routerManager = new RouterManager(
      this.app,
      roleRouter,
      actorRouter,
      departmentRouter,
      maintenanceTypeRouter,
      deptMaintTypeAssignmentRouter,
      maintenanceRouter,
      stageRouter,
      fileRouter,
      templateFormRouter,
      completedFormRouter,
      executionRouter,
      executorRouter
    );
    this.routerManager.manageRoutes();
  }

  private async initDatabase(): Promise<void> {
    try {
      await AppDataSource.initialize();
      console.log("Data source was init successfully");
    } catch (error) {
      console.error("Error", error);
      process.exit(1);
    }
  }

  public async listen(): Promise<void> {
    await this.initDatabase();
    this.app.listen(Environment.PORT);
    console.log(`Server running at http://localhost:${Environment.PORT}`);
  }
}
