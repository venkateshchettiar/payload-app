import { buildConfig } from "payload/config";
import Orders from "./collections/Orders";
import TodoLists from "./collections/TodoLists";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [TodoLists, Users, Orders],
});
