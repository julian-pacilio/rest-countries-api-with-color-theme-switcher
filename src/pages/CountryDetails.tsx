import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

import ProcessCurrecy from '../helpers/ProcessCurrency';
import ProcessLanguage from '../helpers/ProcessLanguage';

export default function CountryDetails() {

    const [country, setCountry] = useState([])

    const { code } = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => res.json())
            .then(data => { 
                setCountry(data)
                console.log(data)
            })
    }, [code]);

    return (
        <>
            <h1>Country</h1>
            <Link to={'/'}>Back</Link>
                {
                    country.map((item, index: number) => (
                        <article key={index}>
                            <ul>
                                <li>{item.name.common}</li>
                                <li>// item.nativename.common</li>
                                <li>{item.population}</li>
                                <li>{item.region}</li>
                                <li>{item.subregion}</li>
                                <li>{item.capital}</li>
                                <li>{item.tld[0]}</li>
                                <li>{ProcessCurrecy(item.currencies)}</li>
                                <li>{ProcessLanguage(item.languages)}</li>
                            </ul> 
                            <ul>
                                { 
                                    item.borders.map((border, index) => <li key={index}>{border}</li>)
                                }
                            </ul>
                        </article>
                    ))
                }
        </>
    )
}


