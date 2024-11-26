import { DataSource, Repository } from "typeorm";
import { ICreateMaintenance, IMaintenance, IUpdateMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { IMaintenanceRepository } from "../../../domain/entities/maintenance/IMaintenanceRepository";
import { Maintenance } from "../../database/entities/Maintenance";

export class MaintenanceRepository implements IMaintenanceRepository {
  private readonly maintenanceRepository: Repository<Maintenance>;

  constructor(private readonly dataSource: DataSource) {
    this.maintenanceRepository = this.dataSource.getRepository(Maintenance);
  }

  async save(maintenance: ICreateMaintenance): Promise<IMaintenance> {
    try {
      return await this.maintenanceRepository.save(maintenance);
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceRepository.find({
        relations: [
          "deptMaintTypeAssignment",
          "deptMaintTypeAssignment.department",  
          "deptMaintTypeAssignment.maintenanceType",  
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  async getByDepartmentId(departmentId: number): Promise<IMaintenance[]> {
    try {
      return await this.maintenanceRepository.find({
        where: { deptMaintTypeAssignment: { department: { id: departmentId } } },
        relations: [
          "deptMaintTypeAssignment",
          "deptMaintTypeAssignment.department",  
          "deptMaintTypeAssignment.maintenanceType",  
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: number): Promise<IMaintenance | null> {
    try {
      return await this.maintenanceRepository.findOne({
        where: { id: id },
        relations: [
          "deptMaintTypeAssignment",
          "deptMaintTypeAssignment.department",  
          "deptMaintTypeAssignment.maintenanceType",  
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: number, maintenance: IUpdateMaintenance): Promise<void> {
    try {
      await this.maintenanceRepository.update(id, maintenance);
    } catch (error) {
      throw error;
    }
  }
}
