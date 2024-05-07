export type TypeUser = {
  _id: string;
  email: string;
} | null;

export interface IAuthData {
  user: TypeUser;
  accessToken: string;
}
