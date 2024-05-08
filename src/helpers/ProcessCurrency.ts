// export default function ProcessCurrency(currencies) {

//     let results = []

//     for (let currency in currencies) {
//         let result = currencies[currency].name
//         results.push(result)
//     }

//     return results.map(result => result)
// }

export default function ProcessCurrency(currencies) {

    const results : string[] = []

    for (const currency in currencies) {
        const result = currencies[currency].name
        results.push(result)
    }

    return results.map(result => result)
}

