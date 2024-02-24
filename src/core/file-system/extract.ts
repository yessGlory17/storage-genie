import { Path } from './types';

//Bu fonksiyon file:// sayfasi icindeki script taglerinin icindeki dosya bilgilerini ayiklar.
function extract(html: Document) {
  const paths: Path[] = [];
  const scripts = Array.from(html.querySelectorAll('script')).filter(script => script.innerText.includes('addRow'));
  scripts.map(script => {
    const pathString = script.innerHTML.replace('addRow(', '').replace(');', '').split(',');
    if (pathString.length > 2 && !pathString[0].includes('function name')) {
      const path: Path = {
        name: pathString[0]?.replaceAll('"', '').replaceAll('/)', ')'),
        isDir: parseInt(pathString[2]) === 1 ? true : false,
        size: parseInt(pathString[3]) / 1024,
      };
      paths.push(path);
    }
  });

  return paths;
}

export default extract;
