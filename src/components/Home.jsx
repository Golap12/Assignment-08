import { useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero'
import BooksContainer from './BooksContainer';

const Home = () => {

    const books = useLoaderData()
    // console.log(books);
    return (

        <>
            <Hero></Hero>
            <BooksContainer books={books}></BooksContainer>
        </>
    )
}

export default Home;