import { components } from "../../index";
import { runButton } from "../utilities/ticTacToe";

import reset from "./reset";

const COMPONENTS = [reset];

Array(9)
  .fill(null)
  .forEach((o, i) =>
    COMPONENTS.push({ data: { name: `btn-${i}` }, run: runButton })
  );

COMPONENTS.forEach((c) => {
  components.set(c.data.name, c);
});

export default components;
