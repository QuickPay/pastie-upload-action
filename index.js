import * as core from "@actions/core";
import { run } from "./src/main";

(async () => {
  const credentials = core.getInput("credentials", { required: true });
  const doc = core.getMultilineInput("document", { required: true });
  const url = await run(credentials, doc);
  core.setOutput("url", url);
})();
