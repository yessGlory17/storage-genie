import { SOURCE } from "./constants";
import extract from "./extract";
import { FetchPathReturn } from "./types";

//bu fonksiyon verilen pathe gore file:// + path seklinde file:// sayfasini ceker
async function fetchDirectory(
  path: string = "/home/"
): Promise<FetchPathReturn> {
  const response = await fetch(SOURCE + path);
  const blob = await response.blob();
  const text = await blob.text();
  const DOM = new DOMParser();
  const HTML = DOM.parseFromString(text, "text/html");

  const scipts = HTML.querySelectorAll("script");
  
  let full = '';
  scipts.forEach((script) => {
    if(script?.textContent?.startsWith("start")){
      full = script.textContent.replace("start(", "").replace(");", "")?.replaceAll('"', "");
    }
  })
    
  const parts = full.split("/").filter((part: string) => part !== "");
  const paths = extract(HTML);

  return { paths, parent: { parts, full } };
}

export default fetchDirectory;
