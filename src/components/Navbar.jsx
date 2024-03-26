import { NavLink } from "react-router-dom"


const Navbar = () => {

  const links = <>
    <li><NavLink className={` px-4 py-2 text-lg font-semibold  border rounded-lg`} to='/'>Home</NavLink></li>
    <li><NavLink className={`px-4 py-2 text-lg font-semibold border rounded-lg`} to='/listedbooks'>Listed Books</NavLink></li>
    <li><NavLink className={`px-4 py-2 text-lg font-semibold border rounded-lg`} to='/pagestoRead'>Pages To Read</NavLink></li>
  </>

  return (
    // <div className="md:p-10 p-5 flex justify-between items-center">
    //   <div>
    //     <button className="text-2xl text-[#131313] font-bold">Book Vive</button>
    //   </div>
    //   <div className="md:flex gap-5 hidden list-none">
    //     {/* <li><a className="px-5 py-3 text-lg font-semibold text-[#23BE0A] border-[#23BE0A] border rounded-lg">Home</a></li>
    //     <li><a className="px-5 py-3 border rounded-lg">Listed Books</a></li>
    //     <li><a className="px-5 py-3 border rounded-lg">Pages To Read</a></li> */}
    //     {links}
    //   </div>
    //   <div className=" flex gap-5">
    //     <button className="md:px-6 px-3 md:py-3 py-2 text-white font-semibold bg-[#23BE0A] rounded-lg">Sign In</button>
    //     <button className="md:px-6 px-3 md:py-3 py-2 text-white font-semibold bg-[#59C6D2] rounded-lg">Sign Up</button>
    //   </div>
    // </div>


    <div className="navbar bg-base-100 ">
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
