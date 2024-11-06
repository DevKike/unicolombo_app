import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1730913627197 implements MigrationInterface {
    name = ' $npmConfigName1730913627197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template_form\` CHANGE \`description\` \`description\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template_form\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
    }

}
