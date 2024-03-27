
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook} from "../utility/localstorage";



const Details = () => {

    const books = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt);


    

    const handleRead = () => {

        saveBook(idInt);
        toast('Added To ReadList')
    }




    const handleWish = () => {

        toast('Added To WishList')
    }

    

    return (

        <div className="mt-16 md:flex gap-10 space-y-5">
            <div className="flex-1 bg-[#1313130D] p-16 rounded-2xl">
                <img className="md:w-[400px] md:h-[500px]" src={book.image} alt="" />
            </div>


            <div className=" flex-1">
                <div className="space-y-5">
                    <div><h1 className="font-bold md:text-4xl text-3xl text-[#131313]">{book.bookName}</h1></div>
                    <div className="font-medium md:text-xl text-[#131313CC]"><p>{book.author}</p></div>
                    <div className="border border-b border-dashed"></div>
                    <div className="font-medium md:text-xl text-[#131313CC]"><p>{book.category}</p></div>
                    <div className="border border-b border-dashed"></div>
                    <div><p><span className="font-bold">Review : </span>{book.review}</p></div>
                </div>

                <div className="space-y-5 mt-16">
                    <div className="flex items-center gap-16 font-semibold">
                        <p className="">Tag</p>
                        <p className="text-[#23BE0A]">#{book.tags[0]}</p>
                        <p className="text-[#23BE0A]">#{book.tags[1]}</p>
                    </div>
                    <div className="border border-b border-dashed"></div>
                    <div className="space-y-3 md:w-[400px] flex items-center justify-between">

                        <div className=" text-sm space-y-3">
                            <p>Number Of Pages :</p>
                            <p>Publisher :</p>
                            <p>Year Of Publishing :</p>
                            <p>Rating :</p>
                        </div>

                        <div className="space-y-3">
                            <p className="font-bold">{book.totalPages}</p>
                            <p className="font-bold">{book.publisher}</p>
                            <p className="font-bold">{book.yearOfPublishing}</p>
                            <p className="font-bold">{book.rating}</p>
                        </div>

                    </div>
                    <div className="flex gap-5">
                        <button onClick={handleRead} className="border-2 border-black rounded-lg text-lg font-bold px-6 py-3">Read</button>

                        <button onClick={handleWish} className="bg-[#50B1C9] text-white rounded-lg text-lg font-bold px-6 py-3">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default Details;