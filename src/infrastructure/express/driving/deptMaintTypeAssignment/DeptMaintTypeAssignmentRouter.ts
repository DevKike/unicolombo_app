import { Router } from "express";
import { IRouterModule } from "../../interfaces/IRouterModule";
import { ResponseModel } from "../../response/ResponseModel";
import { HttpStatusCode } from "../../../../domain/enums/http/HttpStatusCode";
import { Message } from "../../../../domain/enums/message/Message";
import { schemaValidator } from "../../../joi/middleware/schemaValidator";
import { createDeptMaintTypeAssignmentSchema, updateDeptMaintTypeAssignmentSchema } from "../../../joi/schemas/deptMaintTypeAssignment/deptMaintTypeAssignmentSchema";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { IDeptMaintTypeAssignmentUseCase } from "../../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignmentUseCase";

export class DeptMaintTypeAssignmentRouter implements IRouterModule {
  private readonly deptMaintTypeAssignmentRouter: Router;

  constructor(private readonly deptMaintTypeAssignmentUseCase: IDeptMaintTypeAssignmentUseCase) {
    this.deptMaintTypeAssignmentRouter = Router();
    this.initRoutes();
  }

  initRoutes(): void {
    this.deptMaintTypeAssignmentRouter.post("/", authMiddleware(), schemaValidator(createDeptMaintTypeAssignmentSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.createDeptMaintTypeAssignment(req.body), res, HttpStatusCode.CREATED, Message.DEPT_MAINT_TYPE_ASSIGNMENT_CREATED_SUCCESSFULLY);
    });

    this.deptMaintTypeAssignmentRouter.get("/", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.getAllDeptMaintTypeAssignment(), res, HttpStatusCode.OK, Message.DEPT_MAINT_TYPE_ASSIGNMENTS_OBTAINED_SUCCESSFULLY);
    });

    this.deptMaintTypeAssignmentRouter.get("/:id", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.getDeptMaintTypeAssignmentById(Number(req.params.id)), res, HttpStatusCode.OK, Message.DEPT_MAINT_TYPE_ASSIGNMENT_OBTAINED_SUCCESSFULLY)
    });

    this.deptMaintTypeAssignmentRouter.get("/by-department/:id", authMiddleware(), async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.getAllDeptMaintTypeAssignmentByDepartmentId(Number(req.params.id)), res, HttpStatusCode.OK, Message.DEPT_MAINT_TYPE_ASSIGNMENT_OBTAINED_SUCCESSFULLY)
    });

    this.deptMaintTypeAssignmentRouter.patch("/:id", authMiddleware(), schemaValidator(updateDeptMaintTypeAssignmentSchema), async (req, res) => {
      await ResponseModel.manageResponse(this.deptMaintTypeAssignmentUseCase.updateDeptMaintTypeAssignmentById(Number(req.params.id), req.body), res, HttpStatusCode.OK, Message.DEPT_MAINT_TYPE_ASSIGNMENT_UPDATED_SUCCESSFULLY);
    })
  }

  getRouter(): Router {
    return this.deptMaintTypeAssignmentRouter;
  }
}
