import { Link } from "react-router-dom";
import background from "../../public/img/hero.png";

const componentName = () => {
    return (
        <div className="bg-[#1313130D] md:mt-12 mt-8 md:px-20 md:py-16 p-5 rounded-xl">
            <div className="">
                <div className="md:flex space-y-10 items-center justify-between flex-col lg:flex-row-reverse">
                    <img src={background} className="" />
                    <div className="flex flex-col space-y-10">
                        <h1 className="md:text-5xl text-3xl font-bold md:w-[450px]">Books to freshen up your bookshelf</h1>

                        <Link to='/listedbooks'>
                            < div >
                                <button className="btn bg-[#23BE0A] text-white text-xl font-bold">View The List</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default componentName