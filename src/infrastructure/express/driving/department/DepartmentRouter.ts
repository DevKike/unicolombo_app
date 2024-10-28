import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { IDepartmentUseCase } from "../../../../domain/entities/department/IDepartmentUseCase";
import { schemaValidator } from "../../middlewares/schemaValidator";
import { createDepartmentSchema, updateDepartmentSchema } from "../../../schemas/department/departmentSchema";

export class DepartmentRouter implements IRouterModule {
  private readonly departmentRouter: Router;

  constructor(private readonly departmentUseCase: IDepartmentUseCase) {
    this.departmentRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.departmentRouter.post("/", schemaValidator(createDepartmentSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.departmentUseCase.createDepartment(req.body), res, HttpStatusCode.CREATED, Message.DEPARTMENT_CREATED_SUCCESSFULLY);
    });

    this.departmentRouter.get("/", async (req, res) => {
      await ResponseModel.manageResponse(this.departmentUseCase.getDepartments(), res, HttpStatusCode.OK, Message.DEPARTMENTS_OBTAINED_SUCCESSFULLY);
    });

    this.departmentRouter.patch("/:id", schemaValidator(updateDepartmentSchema), async (req, res) => {
       await ResponseModel.manageResponse(this.departmentUseCase.updateDepartment(Number(req.params.id), req.body), res, HttpStatusCode.OK, Message.DEPARTMENT_UPDATED_SUCCESSFULLY);
    });
  }
  
  getRouter(): Router {
    return this.departmentRouter;
  }
}
