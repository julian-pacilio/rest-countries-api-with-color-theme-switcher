import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {

    return(
        <header>
            <h1>Where in the world?</h1>
            <div>
                <ThemeSwitcher />
            </div>
        </header>
    )
}