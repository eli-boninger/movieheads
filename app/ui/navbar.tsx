import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <header className="pb-4 pt-4">
            <nav className="flex items-center gap-8">
                <Link href="/" className="mr-10">
                    <Image
                        src="/movieheads.png"
                        alt="Movieheads logo"
                        width={276.25}
                        height={29.375}
                        priority
                    />
                </Link>
                <Link href="/movies" className="font-bold text-main-900 text-lg">
                    MOVIES
                </Link>
                <Link href="/movies" className="font-bold text-main-900 text-lg">
                    THEATERS
                </Link>
                <Link href="/movies" className="font-bold text-main-900 text-lg">
                    NEWS
                </Link>
                <Link href="/movies" className="font-bold text-main-900 text-lg">
                    WRITING
                </Link>
            </nav>
        </header>
    )
}

export default NavBar;