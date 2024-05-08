export default function ProcessNativeName(names) {
  const results: string[] = [];

  for (const name in names.nativeName) {
    const result = names.nativeName[name].common;
    results.push(result);
  }

  const index = results.length - 1;
  
  return results[index];
}