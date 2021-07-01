export interface UserInfo {
  id: string;
  firstname: string;
  lastname: string;
  username?: string;
  password?: string;
  email?: string;
  company?: string;
  role?: string;
  skills?: string[];
}
