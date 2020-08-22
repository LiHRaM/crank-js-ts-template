import { renderer } from "@bikeshaving/crank/dom"

import { App } from "./app";

renderer.render(App(), document.getElementById("app"));