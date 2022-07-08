import Vue from "nativescript-vue";
import {
  ModalStack,
  overrideModalViewMethod,
  VueWindowedModal,
} from "nativescript-windowed-modal";
overrideModalViewMethod();

import Home from "./components/Home";

Vue.registerElement("ModalStack", () => ModalStack);
Vue.use(VueWindowedModal);

new Vue({
  render: (h) => h("frame", [h(Home)]),
}).$start();
