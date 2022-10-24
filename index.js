import * as core from "@actions/core";
import { run } from "./src/main";
import * as fs from "fs"

(async () => {
  const credentials = core.getInput("credentials", { required: true });
  const doc_env = core.getInput("document_env", { required: false });
  const doc_path = core.getInput("document_path", { required: false });
  let doc = ""

  if (doc_env) {
    doc = process.env[doc_env];
  }
  else if (doc_path) {
    try {
      doc = fs.readFileSync(doc_path, 'utf8');
    } catch (err) {
      core.setFailed(`Error occurred while reading document: ${err}`);
    }
  }
  else {
    core.setFailed(`Neither document_env nor document_path are set. Specify one of these.`);
  }

  const url = await run(credentials, doc);
  core.setOutput("url", url);
})();
