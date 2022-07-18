import { usePost } from "@/common/utils/axios";
import { computed, reactive } from "vue";
import router from "@/router";

const jwt = reactive({
  token: "",
});

const getToken = computed(() => jwt.token);

const setToken = (token: string) => {
  jwt.token = token;
  localStorage.setItem("token", token);
};

const getCachedToken = () => {
  return localStorage.getItem("token");
};

const logUserOut = () => {
  localStorage.removeItem("token");
  jwt.token = "";
  router.push("/signin");
};

const getHeader = async () => {
  await validateCachedToken();
  return { authorization: `Bearer ${getToken.value}` };
};

const validateCachedToken = async () => {
  const token = getCachedToken();

  if (token) {
    const requestHeader = { authorization: `Bearer ${token}` };
    const { error } = await usePost("auth/check", {}, requestHeader);

    if (error) logUserOut();
    else setToken(token);
  }
  return token;
};

export default {
  getToken,
  setToken,
  validateCachedToken,
  logUserOut,
  getHeader,
};
