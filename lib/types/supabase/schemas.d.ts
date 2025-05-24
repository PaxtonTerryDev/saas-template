import { Database } from "./database";

export type UserProfile = Database['public']['Tables']['user_profiles']['Row'];
export type Tenant = Database['public']['Tables']['tenants']['Row'];