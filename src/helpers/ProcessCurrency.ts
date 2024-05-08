import { Currencies } from "../types"

export default function ProcessCurrency(currencies: Currencies) {

    const results : string[] = []

    for (const currency in currencies) {
        const result = currencies[currency].name
        results.push(result)
    }

    return results.map(result => result)
}

