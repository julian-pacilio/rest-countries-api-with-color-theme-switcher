import { useEffect, useState } from "react"
import Country from "./CountryComponent"
import { CountryProps } from '../types';

export const SearchComponent = () => {

    let results : CountryProps[] = [];
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState<string>("")
    const [select, setSelect] = useState<string>("")
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(data => {
            setCountries(data)
            //console.log(data)
        })
    }, [])

    if(!search && !select) {
        results = countries;
    } else if (search && select) {
        results = countries.filter( (data : CountryProps) =>
            data.name.common.toLowerCase().includes(search.toLowerCase()) && 
            data.region.toLowerCase().includes(select.toLowerCase())
        )
    } else if(search) {
        results = countries.filter( (data : CountryProps) => data.name.common.toLowerCase().includes(search.toLowerCase()))
    } else if(select) {
        results = countries.filter( (data : CountryProps) => data.region.toLowerCase().includes(select.toLowerCase()))
    } 

    const handleSearchByCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleFilterByRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelect(e.target.value)
    }

    return (
        <>
            <section className="input-search my-10">
                <div className="inputs flex flex-col md:flex-row gap-10 justify-between">
                    <label htmlFor="search" className="sr-only">Search Country</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input value={search} onChange={handleSearchByCountry}
                            type="search" id="search" className="block w-full p-4 ps-16 text-sm rounded-md shadow-md" placeholder="Search for a country..." />
                        </div>
                    <label htmlFor="region" className="sr-only">Select Filter By Region</label>
                        <select name="region" id="region" value={select} onChange={handleFilterByRegion}
                            className="block py-4 px-8 text-sm rounded-md shadow-md w-[180px]"
                        >
                            <option value="">Filter by region</option>
                            <option value="africa">Africa</option>
                            <option value="america">America</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                </div>
            </section>
            <section id="result-search" className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {
                results.map((item : CountryProps, index: number) => (
                        <Country
                            key={index}
                            code={item.cca3}
                            name={item.name.common}
                            image={item.flags.svg} 
                            imageAlt={item.flags.alt}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                        >
                        </Country>
                    )
                )
            }
            {
                results.length == 0 && 
                <h2 className="sm:col-span-2">There are no results for your search</h2>
            }
        </section>
    </>
    )
}
