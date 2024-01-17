import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row  justify-start items-center my-8 text-sm font-medium text-gray-4 hover:text-cyan-400 "
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className=" flex-row  md:block  hidden w-[240px]   py-10 px-4 bg-[#191624] justify-start ">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />

        <NavLinks />
      </div>

      <div className='absolute md:hidden top-6   block right-2'>
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={ ()=>setMobileMenuOpen(false)}></RiCloseLine>
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={ ()=>setMobileMenuOpen(true)}></HiOutlineMenu>
        )}
      </div>

      <div className= {`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0': '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />

        <NavLinks handleClick = {()=>setMobileMenuOpen(false)}/>
      </div>

    </>
  );
};

export default Sidebar;
