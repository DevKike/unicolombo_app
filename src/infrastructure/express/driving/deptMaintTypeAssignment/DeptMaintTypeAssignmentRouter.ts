import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { DeptMaintTypeAssignmentUseCase } from "../../../../application/usecases/deptMaintTypeAssignment/DeptMaintTypeAssignmentUseCase";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import { createDeptMaintTypeAssignmentSchema, updateDeptMaintTypeAssignmentSchema } from "../../../joi/schemas/deptMaintTypeAssignment/deptMaintTypeAssignmentSchema";

export class DeptMaintTypeAssignmentRouter implements IRouterModule {
  private readonly deptMaintTypeAssignmentRouter: Router;

  constructor(private readonly deptMaintTypeAssignmentUseCase: DeptMaintTypeAssignmentUseCase) {
    this.deptMaintTypeAssignmentRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.deptMaintTypeAssignmentRouter.post("/", schemaValidator(createDeptMaintTypeAssignmentSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.createDeptMaintTypeAssignment(req.body), res, HttpStatusCode.CREATED, Message.DEPT_MAINT_TYPE_ASSIGNMENT_CREATED_SUCCESSFULLY);
    });

    this.deptMaintTypeAssignmentRouter.get("/", async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.getAllDeptMaintTypeAssignment(), res, HttpStatusCode.OK, Message.DEPT_MAINT_TYPE_ASSIGNMENTS_OBTAINED_SUCCESSFULLY);
    });

    this.deptMaintTypeAssignmentRouter.get("/:id", async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.getDeptMaintTypeAssignmentById(Number(req.params.id)), res, HttpStatusCode.OK, Message.DEPT_MAINT_TYPE_ASSIGNMENT_OBTAINED_SUCCESSFULLY)
    });

    this.deptMaintTypeAssignmentRouter.patch("/:id", schemaValidator(updateDeptMaintTypeAssignmentSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.updateDeptMaintTypeAssignmentById(Number(req.params.id), req.body), res, HttpStatusCode.OK, Message.DEPT_MAINT_TYPE_ASSIGNMENT_UPDATED_SUCCESSFULLY);
    })
  }

  getRouter(): Router {
    return this.deptMaintTypeAssignmentRouter;
  }
}
