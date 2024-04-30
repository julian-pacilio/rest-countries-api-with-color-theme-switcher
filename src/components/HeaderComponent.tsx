import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {

    return(
        <header className='shadow-md'>
            <nav className='max-w-[1440px] p-5 mx-auto flex justify-between items-center'>
                <h1 className='font-bold sm:text-2xl'>Where in the world?</h1>
                <div>
                    <ThemeSwitcher />
                </div>
            </nav>
        </header>
    )
}