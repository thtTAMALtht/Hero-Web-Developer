import { Link, NavLink } from "react-router";
import logoImage from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apps">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/installation">Installation</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar p-0">
      <div className="navbar-start flex justify-between lg:block">
        <div className="dropdown">
          <div tabIndex={0} role="" className="cursor-pointer lg:hidden  border border-[#632ee3] rounded-sm">
          <MdOutlineMenu className="text-3xl text-[#632ee3]" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box  mt-5 w-52 shadow border border-gray-100"
          >
            {links}
          </ul>
        </div>
        <Link className="flex items-center gap-2">
          <img className="w-12" src={logoImage} alt="logo-image" />
          <span className="font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/thtTAMALtht?tab=repositories" target="_blank" className="btn bg-gradient-to-r from-[#6933E5] to-[#995CF1] "><FaGithub className="text-white text-xl" /><span className="text-white">Contribute</span></a>
      </div>
    </div>
  );
};

export default Navbar;
