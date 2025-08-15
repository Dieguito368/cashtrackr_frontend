import Link from "next/link"

type NavProps = {
    links: { text: string, action: string, url: string }[]
}

const Nav = ({ links } : NavProps) => (
    <nav className="mt-5 flex flex-col gap-5 items-center">
        {
            links.map(link => (
                <p 
                    className="text-slate-400"
                    key={ link.url }
                >
                    { link.text } { "" }
                    <Link 
                        className="hover:underline text-purple-800 hover:text-purple-950 font-bold transition-all" 
                        href={ link.url }
                    >{ link.action }</Link>
                </p>
            ))
        }
    </nav>
)

export default Nav
