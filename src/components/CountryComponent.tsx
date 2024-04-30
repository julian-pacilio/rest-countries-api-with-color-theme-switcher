import { Link } from "react-router-dom";
import { Country } from "../types"

type Props = Country;

export default function Country ({ code, name, image, imageAlt, population, region, capital } : Props) {

    return(
        <>
                <Link to={`/country/${code}`}>
                    <article className="max-w-xs shadow-md rounded-md">
                        <picture className="block">
                            <img className="rounded-tr-md rounded-tl-md h-[180px] w-[320px] object-cover"
                                src={image}
                                alt={imageAlt} 
                            />
                        </picture>
                        <div className="px-5 pt-8 pb-12">
                            <h2 className="mb-4 font-bold text-xl">{name}</h2>
                            <ul className="flex flex-col gap-2">
                                <li><b>Population:</b> { new Intl.NumberFormat('es-ES').format(population) }</li>
                                <li><b>Region:</b> {region}</li>
                                <li><b>Capital:</b> {capital}</li>
                            </ul>
                        </div>
                    </article>
                </Link>
        </>
    )
}