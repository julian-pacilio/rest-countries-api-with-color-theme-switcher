import Header  from "./components/HeaderComponent"
import { SearchComponent } from "./components/SearchComponent"

export default function App() {

    return (
        <>
            <Header/>
            <main className="max-w-[1440px] mx-auto my-10 px-5">
                <SearchComponent></SearchComponent>
            </main>
        </>
    )
}