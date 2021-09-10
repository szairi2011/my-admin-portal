import { channels } from "src/app/consts";

export interface UserInfo {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  company?: string;
  role?: string;
  notify?: boolean;
  com_channels?: channels[];
  skills?: string[];
}
