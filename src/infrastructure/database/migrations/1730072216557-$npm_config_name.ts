import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1730072216557 implements MigrationInterface {
    name = ' $npmConfigName1730072216557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`maintenance_type\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance\` CHANGE \`status\` \`status\` enum ('requested', 'under_evaluation', 'approved', 'assigned', 'in_progress', 'paused', 'completed', 'rejected', 'closed', 'canceled') NOT NULL DEFAULT 'requested'`);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` CHANGE \`status\` \`status\` enum ('active', 'inactive', 'expired', 'pending_approval', 'rejected') NOT NULL DEFAULT 'active'`);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` CHANGE \`priority\` \`priority\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` CHANGE \`comments\` \`comments\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`phone_number\` \`phone_number\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`status\` \`status\` enum ('active', 'inactive', 'suspended', 'closed', 'pending_approval', 'disbanded') NOT NULL DEFAULT 'active'`);
        await queryRunner.query(`ALTER TABLE \`actor\` CHANGE \`phone_number\` \`phone_number\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`actor\` CHANGE \`status\` \`status\` enum ('active', 'inactive', 'suspended') NOT NULL DEFAULT 'active'`);
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`description\` \`description\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`description\` \`description\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`actor\` CHANGE \`status\` \`status\` enum ('active', 'inactive', 'suspended') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`actor\` CHANGE \`phone_number\` \`phone_number\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`status\` \`status\` enum ('active', 'inactive', 'suspended', 'closed', 'pending_approval', 'disbanded') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`phone_number\` \`phone_number\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`department\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` CHANGE \`comments\` \`comments\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` CHANGE \`priority\` \`priority\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`department_maintenance_type_assignment\` CHANGE \`status\` \`status\` enum ('Active', 'Inactive', 'Expired', 'PendingApproval', 'Rejected') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance\` CHANGE \`status\` \`status\` enum ('requested', 'under_evaluation', 'approved', 'assigned', 'in_progress', 'paused', 'completed', 'rejected', 'closed', 'canceled') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`maintenance_type\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
    }

}
