

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../utility/localstorage";
import ReadList from "./ReadList";

const Read = () => {

    const books = useLoaderData();

    const [bookApplied, setBookApplied] = useState([]);

    useEffect(()=>{
        const storedBookId = getStoredBook();
        if(books.length){

            const bookRead = [];
            for (const id of storedBookId){
                const book = books.find(book => book.id === id);
                if(book){
                    bookRead.push(book)
                }
            }

            setBookApplied(bookRead);
        }

    } ,[])






    return (
        <div className="flex flex-col gap-5">
            {
              bookApplied.map(book => <ReadList book={book} key={book.id}></ReadList>)  
            }
        </div>
    )
}

export default Read;