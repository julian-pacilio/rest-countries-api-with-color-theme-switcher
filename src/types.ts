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

export type Error = {
    status: number,
    statusText: string,
    internal: boolean,
    data: string,
    message: string,
    stack: string
}

export interface NativeName {
    common: string,
    official: string,
    nativeName: {
        [key: string] :  {
            official: string,
            common: string
        }
    }
}

export interface Languaje {
    [key: string] : string,
}

export interface Currencies {
    [key: string] : {
        name: string,
        symbol: string
    }
}
