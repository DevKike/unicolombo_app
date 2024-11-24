export enum Message {
  //Codes for role (100 - 199)
  ROLES_OBTAINED_SUCCESSFULLY = "COD100",
  NOT_ROLES_FOUND = "COD120",

  // Codes for Actors (200 - 299)
  ACTOR_CREATED_SUCCESSFULLY = "COD200",
  ACTORS_OBTAINED_SUCCESSFULLY = "COD201",
  ACTOR_OBTAINED_SUCCESSFULLY = "COD202",
  ACTOR_UPDATED_SUCCESSFULLY = "COD203",
  ACTOR_ALREADY_EXISTS_EXCEPTION = "COD220",
  NOT_ACTORS_FOUND = "COD221",
  NOT_ACTOR_FOUND = "COD222",

  // Codes for Departments (300 - 399)
  DEPARTMENT_CREATED_SUCCESSFULLY = "COD300",
  DEPARTMENTS_OBTAINED_SUCCESSFULLY = "COD301",
  DEPARTMENT_UPDATED_SUCCESSFULLY = "COD302",

  // Codes for Maintenance Types (400 - 499)
  MAINTENANCE_TYPE_CREATED_SUCCESSFULLY = "COD400",
  MAINTENANCE_TYPES_OBTAINED_SUCCESSFULLY = "COD401",
  MAINTENANCE_TYPE_UPDATED_SUCCESSFULLY = "COD402",
  NOT_MAINTENANCE_TYPES_FOUND = "COD420",

  // Codes for Dept-Maintenance Type Assignments (500 - 599)
  DEPT_MAINT_TYPE_ASSIGNMENT_CREATED_SUCCESSFULLY = "COD500",
  DEPT_MAINT_TYPE_ASSIGNMENTS_OBTAINED_SUCCESSFULLY = "COD501",
  DEPT_MAINT_TYPE_ASSIGNMENT_OBTAINED_SUCCESSFULLY = "COD502",
  DEPT_MAINT_TYPE_ASSIGNMENT_UPDATED_SUCCESSFULLY = "COD503",

  // Codes for Maintenance (600 - 699)
  MAINTENANCE_CREATED_SUCCESSFULLY = "COD600",
  MAINTENANCES_OBTAINED_SUCCESSFULLY = "COD601",
  MAINTENANCE_OBTAINED_SUCCESSFULLY = "COD602",
  MAINTENANCE_UPDATED_SUCCESSFULLY = "COD603",

  // Codes for Stages (700 - 799)
  STAGE_CREATED_SUCCESSFULLY = "COD700",
  STAGES_OBTAINED_SUCCESSFULLY = "COD701",
  STAGE_OBTAINED_SUCCESSFULLY = "COD702",
  STAGE_UPDATED_SUCCESSFULLY = "COD703",
  NOT_STAGES_FOUND = "COD720",
  NOT_STAGE_FOUND = "COD721",

  //Codes for file upload (800, 899)
  TEMPLATE_FILE_UPLOADED_SUCCESSFULLY = "COD800",

  // Codes for Template Forms (900 - 999)
  TEMPLATE_FORM_SAVED_SUCCESSFULLY = "COD901",
  TEMPLATES_FORM_OBTAINED_SUCCESSFULLY = "COD902",
  TEMPLATE_FORM_OBTAINED_SUCCESSFULLY = "COD903",
  TEMPLATE_UPDATED_SUCCESSFULLY = "COD904",

  // Codes for Completed Forms (1000 - 1099)
  COMPLETED_FORM_SAVED_SUCCESSFULLY = "COD1000",
  COMPLETED_FORMS_OBTAINED_SUCCESSFULLY = "COD1001",
  COMPLETED_FORM_OBTAINED_SUCCESSFULLY = "COD1002",
  COMPLETED_FORM_UPDATED_SUCCESSFULLY = "COD1003",

  // Codes for Coordinators (1100 - 1199)
  COORDINATOR_ALREADY_EXISTS = "COD1100",
  NOT_COORDINATOR_FOUND = "COD1101",

  // Codes for File Errors (1200 - 1299)
  INVALID_FILE_FORMAT = "COD1200",
  INVALID_FILE_TYPE = "COD1201",
  NOT_FILE_EXTENSION_ALLOWED = "COD1202",

  //Codes for execution (1300 - 1399)
  EXECUTION_CREATED_SUCCESSFULLY = "COD1300",
  EXECUTIONS_OBTAINED_SUCCESSFULLY = "COD1301",
  EXECUTION_OBTAINED_SUCCESSFULLY = "COD1302",
  EXECUTION_UPDATED_SUCCESSFULLY = "COD1303",

  //Codes for execution (1400 - 1499)
  EXECUTOR_CREATED_SUCCESSFULLY = "1400",
  EXECUTORS_OBTAINED_SUCCESSFULLY = "1401",
  EXECUTOR_OBTAINED_SUCCESSFULLY = "1402",
  EXECUTOR_UPDATED_SUCCESSFULLY = "1403",

  // General Codes
  SUCCESS = "COD2000",
  BAD_REQUEST = "COD4000",
  UNAUTHORIZED = "COD_4001",
  INTERNAL_SERVER_ERROR = "COD5000",
}
