import "./style.css";
import { haptic, setup } from "haptic-util";
import App from "./components/App.svelte";

setup(() => {
  const node = haptic.rootNode.querySelector("#app")!;

  new App({
    target: node
  });
});
