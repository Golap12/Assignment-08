import { Outlet } from "react-router-dom";
import Navbar from '../Navbar'


const Root = () => {
    return (
        <div className="md:px-20 md:pt-10  p-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root;