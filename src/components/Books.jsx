
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Books = ({ book }) => {

    const { bookId, bookName, image, author, tags, category, rating } = book;

    console.log(book);

    return (
        <Link to={`/details/${bookId}`}>

            <div className=" space-y-6 p-6 border rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                <div className="flex justify-center bg-[#F3F3F3] p-8 rounded-2xl"><img className="w-[134px] h-[166px]" src={image} alt="" /></div>
                <div className="flex justify-between font-medium text-sm text-[#23BE0A]">
                    <h3>{tags[0]}</h3>
                    <h3>{tags[1]}</h3>
                </div>
                <div className="text-2xl font-bold">
                    <h2>{bookName}</h2>
                </div>
                <div className="font-medium text-sm">
                    <p>By : {author}</p>
                </div>
                <div className="border border-b border-dashed"></div>
                <div className="flex justify-between font-medium text-sm">
                    <p>{category}</p>
                    <div className="flex gap-2 items-center">
                        <p>{rating}</p>
                        <p className="text-xl"><CiStar></CiStar></p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Books;