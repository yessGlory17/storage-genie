import ConsoleColors from "./src/core/ConsoleColors";
import scan from "./src/core/file-system";
import fetchDirectory from "./src/core/file-system/fetchDirectory";
console.log("SERVICE WORKER RUNNING!");
(async () => {})();

async function main() {
  const paths = await fetchDirectory("/home/ozgur/Downloads");
  console.log(ConsoleColors.BgGreen + ConsoleColors.FgRed + `[PATHS]:`, paths);

  const tree = await scan(paths);

  console.log("[TREE]: ", tree);
}

chrome.runtime.onMessage.addListener(async (message) => {
    console.log("Mesaj geldi!");
    main();
})
