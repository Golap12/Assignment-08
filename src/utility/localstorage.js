import { json } from "react-router-dom";

const getStoredBook = () =>{
    const storedBook = localStorage.getItem('book-application');

    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [];
}


const saveBook = id => {
    const storedBook = getStoredBook();
    const exists = storedBook.find(bookId => bookId === id)
    if(!exists){
        storedBook.push(id);
        localStorage.setItem('book-application', JSON.stringify(storedBook))
    }
}













const getStoredWish = () =>{
    const storedWish = localStorage.getItem('wish-book');

    if(storedWish){
        return JSON.parse(storedWish)
    }
    return [];
}




const saveWish = id => {
    const storedWish = getStoredWish();
    const exists = storedWish.find(bookId => bookId === id)
    if(!exists){
        storedWish.push(id);
        localStorage.setItem('wish-book', JSON.stringify(storedWish))
    }
}





export {getStoredBook, saveBook, getStoredWish, saveWish}