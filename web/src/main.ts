import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fontAwesomeIcons } from "./common/icons/fontAwesomeIcons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(...fontAwesomeIcons);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
