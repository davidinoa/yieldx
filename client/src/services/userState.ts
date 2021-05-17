import { User } from "@bondhouse/iam";
import { atom, selector } from "recoil";
import { usersApi } from "./UserService";

export const userState = atom({
  key: "userState",
  default: selector<User>({
    key: "userState/default",
    get: async () => {
      const {
        data: { user }
      } = await usersApi.getCurrentUser();
      // @ts-expect-error
      FS.identify(user.id, {
        email: user.email,
        userType: user.userType,
        name: `${user.first} ${user.last}`,
        institutionId: user.institutionId
      }); // userVars is a JSON dictionary
      return user;
    }
  })
});
