import ConsoleColors from "../ConsoleColors";

export namespace FileSystemCache {
  const MAX_CACHE_SIZE = 100;

  let PATH_CACHE: string[] = [];

  //Burasi daha da detaylandirilacak
  export function cache(path: string) {
    //console.log(ConsoleColors.BgBlack + ConsoleColors.FgCyan + `[CACHED]: ${PATH_CACHE.length}`)
    if (PATH_CACHE.length === MAX_CACHE_SIZE) {
      PATH_CACHE.shift();
    }

    PATH_CACHE.push(path);
  }

  export function isCached(path: string): boolean{
    const parts = path.split('/');
    const parent = parts.slice(0, parts.length - 2).join('/');
    if(PATH_CACHE.includes(path) || PATH_CACHE.includes(parent)){
      console.log(ConsoleColors.BgBlack + ConsoleColors.FgCyan + `[CACHED]: ${true}`)
      return true;
    }
    return false;
  }
}
