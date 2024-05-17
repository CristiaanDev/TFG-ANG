export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  age?: number;
  weight?: number;
  height?: number;
  gender?: string;
  activityLevel?: string;
  goal?: string;
}
