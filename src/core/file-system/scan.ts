import ConsoleColors from '../ConsoleColors';
import { FileSystemCache } from './cache';
import fetchDirectory from './fetchDirectory';
import { FetchPathReturn } from './types';

let DIRECTORIES = 0;

async function scan(files: FetchPathReturn) {
  const promises: Promise<FetchPathReturn>[] = [];

  files.paths.filter(async path => {
    const full = files.parent.full + '/' + path.name;

    if (path.isDir && !FileSystemCache.isCached(full)) {
      DIRECTORIES++;
      console.log(`[FULL PATH]: `, full);
      console.log(ConsoleColors.BgBlack + ConsoleColors.FgRed + `[DIRECTORIES]: ${DIRECTORIES}`, path);
      console.log(ConsoleColors.FgMagenta + `[PARENT]: ${files.parent.full}`);
      console.log(ConsoleColors.FgGreen + `[PATH]: ${full}`);

      FileSystemCache.cache(full)
      promises.push(fetchDirectory(files.parent.full + '/' + path.name));
    } else {
      //BURADA DOSYALAR PATHLERE GORE KAYDEDILECEK
    }
  });

  if (promises.length > 0) {
    const t = await Promise.all(promises);
    for (const a of t) {
      await scan(a);
    }
  }
}

export default scan;
