import { config } from "dotenv";
config();

export class Environment {
  static readonly PORT = process?.env?.PORT || "3001";
  static readonly DB_TYPE = process?.env?.DB_TYPE;
  static readonly DB_HOST = process?.env?.DB_HOST;
  static readonly DB_PORT = process?.env?.DB_PORT;
  static readonly DB_USERNAME = process?.env?.DB_USERNAME;
  static readonly DB_PASSWORD = process?.env?.DB_PASSWORD;
  static readonly DB_NAME = process?.env?.DB_NAME;
  static readonly AUTH_EMAIL = process?.env.ADMIN_EMAIL  || "admin@unicolombo.edu.co";
  static readonly AUTH_PASSWORD = process?.env.ADMIN_PASSWORD || "admin123";
  static readonly JWT_SECRET_KEY = process?.env?.JWT_SECRET_KEY || "default_secret";
  static readonly JWT_EXPIRES_IN = process?.env?.JWT_EXPIRES_IN || "24h";
}
