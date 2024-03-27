import { NavLink } from "react-router-dom"


const Navbar = () => {

  const links = <>
    <li><NavLink className={` px-4 py-2 text-lg font-semibold  border rounded-lg`} to='/'>Home</NavLink></li>
    <li><NavLink className={`px-4 py-2 text-lg font-semibold border rounded-lg`} to='/listedbooks'>Listed Books</NavLink></li>
    <li><NavLink className={`px-4 py-2 text-lg font-semibold border rounded-lg`} to='/pagestoRead'>Pages To Read</NavLink></li>
  </>

  return (
    <div className="navbar ">
      <div className="navbar-start w-full md:w-[50%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
            {links}
          </ul>
        </div>

        <a className=" text-4xl text-[#131313] font-bold">Book Vive</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-5 hidden md:flex">
        <a className="btn text-white font-semibold bg-[#23BE0A] rounded-lg">Sign In</a>
        <a className="btn text-white font-semibold bg-[#59C6D2] rounded-lg">Sign Up</a>
      </div>
    </div>
  )
}

export default Navbar
