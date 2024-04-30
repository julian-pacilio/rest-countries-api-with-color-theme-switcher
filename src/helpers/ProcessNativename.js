export default function ProcessNativeName(names) {
  let results = [];

  for (let name in names.nativeName) {
    let result = names.nativeName[name].common;
    results.push(result);
  }

  let index = results.length - 1;
  
  return results[index];
}
