import { readonly, ref } from "vue";
import users from "@/data/users.json";

const currentUser = ref(null);
const isUserLoggedIn = ref("idle");
export function useAuth() {
  const login = (user) => {
    currentUser.value = users.find(
      (u) => u.email === user.email && u.password === user.password,
    );
    isUserLoggedIn.value = currentUser.value ? "success" : "error";
    return currentUser;
  };

  const logout = () => {
    isUserLoggedIn.value = "idle";
    currentUser.value = null;
  };

  return {
    currentUser,
    isUserLoggedIn: readonly(isUserLoggedIn),
    login,
    logout,
  };
}
