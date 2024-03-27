import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWish } from "../utility/localstorage";
import WishListed from "./WishListed";


const WishList = () => {


    const books = useLoaderData();

    const [wish, setWish] = useState([]);

    useEffect(()=>{
        const storedWishId = getStoredWish();

        if(books.length > 0){

            const wishedBooks = [];
            for(const id of storedWishId){
                const book = books.find(book => book.id === id)
                if(book){
                    wishedBooks.push(book)
                }
            }

            setWish(wishedBooks);

        }
    }, [])

    return (
        <div className="flex flex-col gap-5">
            {
                wish.map(book => <WishListed key={book.key} book={book}></WishListed>)
            }
        </div>
    )
}

export default WishList;