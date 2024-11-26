export interface IJwtPayload {
  id: number;
  email: string;
  department: number;
  role: number;
  iat?: number;
  exp?: number;
}
