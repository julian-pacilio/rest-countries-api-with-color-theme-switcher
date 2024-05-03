export interface Country {
    code: string;
    name: string,
    population: number,
    region: string,
    capital: string
    image: string,
    imageAlt: string,
}

export type CountryProps = {
    cca3: string;
    name: {
        common: string;
    };
    flags: {
        svg: string;
        alt: string;
    };
    population: number;
    region: string;
    capital: string;
}

export interface CountryDetail extends CountryProps {
    subregion: string,
    tld: Array<string>;
    currencies: string,
    languages: string,
    borders: Array<string>,
}