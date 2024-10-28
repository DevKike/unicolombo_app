import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { DeptMaintTypeAssignmentUseCase } from "../../../../application/usecases/deptMaintTypeAssignment/DeptMaintTypeAssignmentUseCase";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../middlewares/schemaValidator";
import { createDeptMaintTypeAssignmentSchema } from "../../../schemas/deptMaintTypeAssignment/deptMaintTypeAssignmentSchema";

export class DeptMaintTypeAssignmentRouter implements IRouterModule {
  private readonly deptMaintTypeAssignmentRouter: Router;

  constructor(private readonly deptMaintTypeAssignmentUseCase: DeptMaintTypeAssignmentUseCase) {
    this.deptMaintTypeAssignmentRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.deptMaintTypeAssignmentRouter.post("/", schemaValidator(createDeptMaintTypeAssignmentSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.createDeptMaintTypeAssignment(req.body), res, HttpStatusCode.CREATED, Message.DEPARTMENT_MAINTENANCE_TYPE_ASSIGNMENT_CREATED_SUCCESSFULLY);
    });
  }

  getRouter(): Router {
    return this.deptMaintTypeAssignmentRouter;
  }
}
