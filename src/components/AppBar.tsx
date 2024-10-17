import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const AppBar = () => {
    return <div className="border-b flex justify-between px-10 items-center p-4">
        <Link to={"/blogs"} > <div className="font-bold text-lg">Medium</div> </Link>

        <div>
            <Link to={"/publish"} >
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">publish</button>
            </Link>
            <Avatar authorName="Soumya" size={"large"} />
        </div>
    </div>
}