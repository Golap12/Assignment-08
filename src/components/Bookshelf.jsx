
import { useLoaderData } from "react-router-dom";
import BookshelfCard from "./BookshelfCard";


const Bookshelf = () => {


    const bookshelf = useLoaderData();
    



    return (


        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">

            {
                bookshelf.map((book, index) =>
                    <BookshelfCard
                        key={index} book={book}>

                    </BookshelfCard>)
            }

        </div>

    )
}

export default Bookshelf;