import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

import ProcessCurrecy from '../helpers/ProcessCurrency';
import ProcessLanguage from '../helpers/ProcessLanguage';
import ProcessNativename from '../helpers/ProcessNativename';
import ProcessBorder from '../helpers/ProcessBorder';

import { CountryDetail } from "../types";

export default function CountryDetails() {

    const [country, setCountry] = useState([])
    const [borders, setBorders] = useState([])

    const { code } = useParams();

    useEffect( () => {
         fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => res.json())
            .then(data => {
                    setCountry(data)
                    ProcessBorder(data[0].borders).then(border => {
                        setBorders(border)
                    })
            })
    }, [code]);

    return (
        <>
            <Link to={'/'}
                  className="flex justify-center items-center shadow-md w-1/3 h-[40px] rounded-sm"
            >Back</Link>
                {
                    country.map((item: CountryDetail, index: number) => (
                        <article key={index} className="my-16 flex flex-col gap-10 lg:gap-24 lg:flex-row lg:justify-center lg:items-center">
                            <picture className="block lg:w-1/2">
                                <img
                                    className="h-full sm:max-h-[400px] w-full object-cover"
                                    src={item.flags.svg}
                                    alt={item.flags.alt}
                                />
                            </picture>
                            <div className="grid gap-8 lg:w-1/2 lg:grid-cols-2">
                                <h3 className="font-bold lg:col-span-2 text-2xl lg:text-4xl">{item.name.common}</h3>
                                <ul className="flex flex-col gap-4">
                                    <li className="font-light"><span className="font-normal">Native Name: </span>{ProcessNativename(item.name)}</li>
                                    <li className="font-light"><span className="font-normal">Population: </span>{ new Intl.NumberFormat('es-ES').format(item.population) }</li>
                                    <li className="font-light"><span className="font-normal">Region: </span>{item.region}</li>
                                    <li className="font-light"><span className="font-normal">Sub Region: </span>{item.subregion}</li>
                                    <li className="font-light"><span className="font-normal">Capital: </span>{item.capital}</li>
                                </ul>
                                <ul className="flex flex-col gap-4">
                                    <li className="font-light"><span className="font-normal">Top Level Domain: </span>{item.tld[0]}</li>
                                    <li className="font-light"><span className="font-normal">Currencies: </span>{ProcessCurrecy(item.currencies)}</li>
                                    <li className="font-light"><span className="font-normal">Languages: </span>{ProcessLanguage(item.languages)}</li>
                                </ul> 
                                <div className="flex flex-col gap-4 lg:lg:col-span-2">
                                    <h3 className="font-normal">Border Countries:</h3>
                                    <ul className="flex flex-wrap gap-5">
                                        { 
                                            item.borders &&
                                                                                        
                                            borders.map((border, index) => (
                                                     <li key={index}
                                                         className="shadow-md flex-[100px] py-2 px-4 text-center capitalize"
                                                     >{border}</li>
                                                 )
                                            )
                                        }
                                        {
                                            !item.borders &&
                                            <li>Doesn't have borders</li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))
                }
        </>
    )
}


