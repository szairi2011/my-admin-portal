import { channels } from "src/app/consts";

export interface UserInfo {
  id: string;
  // Account
  username: string;
  password: string;
  email: string;
  // User details
  firstname: string;
  lastname: string;
  country?: string;
  city?: string;
  address?: string;
  // Business details
  company?: string;
  role?: string;
  notify?: boolean;
  com_channels?: channels[];
  skills?: string[];
}
