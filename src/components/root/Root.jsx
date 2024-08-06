import { Outlet } from "react-router-dom";
import Navbar from '../Navbar'
import Footer from "../Footer";


const Root = () => {
    return (
        <>
            <div className="container mx-auto mt-5 xl:px-20 p-5">
                <Navbar></Navbar>
                <div className="min-h-[calc(85vh-172px)]">
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Root;