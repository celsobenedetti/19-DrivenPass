import { computed, reactive } from "vue";

const jwt = reactive({
  token: "",
});

const getToken = computed(() => jwt.token);
const setToken = (token: string) => (jwt.token = token);

export default {
  getToken,
  setToken,
};
