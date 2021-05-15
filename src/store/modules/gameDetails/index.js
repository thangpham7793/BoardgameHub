import getters from "./getters";
import mutations from "./mutations";
import module from "./module";

export default {
  ...getters,
  ...mutations,
  ...module,
};
