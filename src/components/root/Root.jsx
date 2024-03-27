import { Outlet } from "react-router-dom";
import Navbar from '../Navbar'


const Root = () => {
    return (
        <div className="container mx-auto mt-5 xl:px-20 p-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Root;