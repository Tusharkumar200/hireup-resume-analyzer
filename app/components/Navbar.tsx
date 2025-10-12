import {Link} from "react-router";

type NavbarProps = {
    dark?: boolean;
}

const Navbar = ({ dark }: NavbarProps) => {
    return (
        <nav className={`navbar ${dark ? 'navbar-dark' : ''}`}>
            <Link to="/">
                <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-cyan-500'}`}>HireUP</p>
            </Link>
            <Link to="/upload" className="w-fit px-6 py-2.5 cursor-pointer text-indigo-700 hover:text-white text-sm tracking-wider font-medium border-2 border-indigo-700 outline-0 bg-transparent hover:bg-indigo-700 transition-all duration-300 rounded-2xl">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar



