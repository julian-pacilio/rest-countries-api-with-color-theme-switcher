export default function ProcessLanguaje(languages) {

    let results = []

    for (let language in languages) {
        let result = languages[language]
        results.push(result)
    }

    return results.map(result => ( " " + result )).toString()
}
