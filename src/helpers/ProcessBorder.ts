// export default async function ProcessBorder(borders) {
    
//     let results = [];
    
//     await Promise.all(borders.map(async (code) => {
//         const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name,common`);
//         const data = await response.json();
//         results.push([data.name.common, code]);
//     }));
    
//     return results;
// }

export default async function processBorder(borders: string[]): Promise<string[][]> {
    const results: string[][] = [];

    await Promise.all(borders.map(async (code) => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name,common`);
        const data: { name: { common: string } } = await response.json();
        results.push([data.name.common, code]);
    }));

    return results;
}

