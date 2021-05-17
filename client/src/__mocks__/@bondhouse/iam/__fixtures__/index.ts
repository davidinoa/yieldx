import { User } from "@bondhouse/iam";
import { UserType } from "..";

export const mockAdminUser: User = {
  id: "id-admin",
  email: "mock.admin@bondhouse.com",
  first: "Mock",
  last: "Admin",
  userType: UserType.ADMIN,
  terms: true
};
