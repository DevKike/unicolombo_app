/* import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1730912677978 implements MigrationInterface {
    name = ' $npmConfigName1730912677978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`template_form\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` int NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`path\` varchar(255) NOT NULL, \`extension\` varchar(255) NOT NULL, \`registered_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`stage_id\` int NULL, UNIQUE INDEX \`IDX_b4b361ca5b3cffd5098aba7d1e\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`template_form\` ADD CONSTRAINT \`FK_8e0e39913109429e85cea7c491a\` FOREIGN KEY (\`stage_id\`) REFERENCES \`stage\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`template_form\` DROP FOREIGN KEY \`FK_8e0e39913109429e85cea7c491a\``);
        await queryRunner.query(`DROP INDEX \`IDX_b4b361ca5b3cffd5098aba7d1e\` ON \`template_form\``);
        await queryRunner.query(`DROP TABLE \`template_form\``);
    }

}
 */