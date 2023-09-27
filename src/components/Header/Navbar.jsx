import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <NavLink to="/"><img src="\assets\Logo.png"  className="btn btn-ghost" alt="" /></NavLink>
                </div>
                <div className="flex-none gap-2 font-medium sm:gap-10 lg:gap-12 text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Statistics
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;