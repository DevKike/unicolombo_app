export interface IJwtPayload {
  id: number;
  email: string;
  iat?: number;
  exp?: number;
}
