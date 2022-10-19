import fetch, { Headers } from "node-fetch";

export const run = async (credentials, doc) => {
  let result = await fetch("https://pastie.0auth.io/documents", {
    method: "POST",
    body: doc,
    headers: new Headers({
      Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
    }),
  });
  let key = await result.text();
  return `https://pastie.0auth.io/${key}`;
};
