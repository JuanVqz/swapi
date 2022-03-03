import { Router } from "@vaadin/router";
import "/pages/index.js";
import "/pages/people.js";
import "/pages/not-found.js";

export const router = new Router();

router.setRoutes([
  { path: "/", component: "page-index" },
  { path: "/people", component: "page-people" },
  { path: "(.*)", component: "not-found" },
]);
