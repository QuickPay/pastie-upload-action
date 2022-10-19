import * as core from "@actions/core";
import { run } from "./src/main";

(async () => {
  const credentials = core.getInput("credentials", { required: true });
  const doc_env = core.getMultilineInput("document_env", { required: true });
  const doc = process.env[doc_env];
  const url = await run(credentials, doc);
  core.setOutput("url", url);
})();
