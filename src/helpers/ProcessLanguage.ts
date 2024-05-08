import { Languaje } from "../types"

export default function ProcessLanguaje(languages : Languaje) {

    const results : string[] = []

    for (const language in languages) {
        const result = languages[language]
        results.push(result)
    }

    return results.map(result => ( " " + result )).toString()
}
