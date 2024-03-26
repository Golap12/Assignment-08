// import { useLoaderData } from "react-router-dom";

import { useLoaderData, useParams } from "react-router-dom";



const Details = () => {

    const books = useLoaderData()
    const {id} = useParams()
    console.log(id);

    return (

        <div className="mt-16">
            <div>
                <img src="" alt="" />
            </div>
            <div className="space-y-10">
                <div>
                    <div><h1>Book Name</h1></div>
                    <div><p>Author Name</p></div>
                    <div className="border border-b border-dashed"></div>
                    <div><p>Category</p></div>
                    <div className="border border-b border-dashed"></div>
                    <div><p>Review</p></div>
                </div>

                <div className="space-y-10">
                    <div className="flex justify-between">
                        <p>Tag</p>
                        <p>Dynamic</p>
                        <p>Dynamic</p>
                    </div>
                    <div className="border border-b border-dashed"></div>
                    <div>
                        <div className="flex justify-between">
                            <p>Number Of Pages :</p>
                            <p>Daynamic</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Publisher</p>
                            <p>Daynamic</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Year Of Publishing</p>
                            <p>Daynamic</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Rating</p>
                            <p>Daynamic</p>
                        </div>

                    </div>
                    <div className="flex gap-5">
                        <button>Read</button>
                        <button>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details;