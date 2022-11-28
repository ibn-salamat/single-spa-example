import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

import "./styles.css";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  }
}).map(i => {
  i.customProps = {
    todos: []
  }
  return i;
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

console.log(applications)

layoutEngine.activate();
start();
