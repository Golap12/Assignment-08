import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from '../utility/localstorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';


const RoundedRectBar = (props) => {
    const { fill, x, y, width, height } = props;

    return (
        <rect x={x} y={y} width={width} height={height} rx={5} ry={5} fill={fill} />
    );
};

const PagesToRead = () => {
    const books = useLoaderData();
    const [displayBook, setDisplayBook] = useState([]);

    useEffect(() => {
        const storedBookId = getStoredBook();
        if (books.length) {
            const bookRead = [];
            for (const id of storedBookId) {
                const book = books.find((book) => book.id === id);
                if (book) {
                    bookRead.push({ name: book.bookName, pages: book.totalPages });
                }
            }
            setDisplayBook(bookRead);
        }
    }, [books]);


    

    
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
        <div className="flex justify-center items-center mt-10">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={displayBook}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="pages" />
                    <Tooltip />
                    
                    <Bar dataKey="pages" shape={<RoundedRectBar />}>
                        {displayBook.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PagesToRead;
