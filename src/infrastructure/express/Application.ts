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
import { DeptMaintTypeAssignmentRepository } from "../repositories/deptMaintTypeAssignment/deptMaintTypeAssignmentRepository";
import { DeptMaintTypeAssignmentService } from "../services/deptMaintTypeAssignment/deptMaintTypeAssignmentService";
import { DeptMaintTypeAssignmentUseCase } from "../../application/usecases/deptMaintTypeAssignment/DeptMaintTypeAssignmentUseCase";
import { DeptMaintTypeAssignmentRouter } from "./driving/deptMaintTypeAssignment/DeptMaintTypeAssignmentRouter";


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
  }

  private initRoutes(): void {
    const roleRepository = new RoleRepository(AppDataSource);
    const roleService = new RoleService(roleRepository);
    const roleUseCase = new RoleUseCase(roleService);
    const roleRouter = new RoleRouter(roleUseCase);

    const actorRepository = new ActorRepository(AppDataSource);
    const actorService = new ActorService(actorRepository);
    const actorUseCase = new ActorUseCase(actorService, roleService);
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

    this.routerManager = new RouterManager(
      this.app,
      roleRouter,
      actorRouter,
      departmentRouter,
      maintenanceTypeRouter,
      deptMaintTypeAssignmentRouter,
      maintenanceRouter
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
