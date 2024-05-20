export {};

export type Roles = "USER" | "MANAGER";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
