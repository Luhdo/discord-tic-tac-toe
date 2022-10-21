import { components } from "../../index";

import reset from "./reset";

const COMPONENTS = [reset];

COMPONENTS.forEach((c) => {
  components.set(c.data.name, c);
});

export default components;
