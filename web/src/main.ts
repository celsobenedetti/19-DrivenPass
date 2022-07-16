import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLock,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLock, faArrowRightFromBracket);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
