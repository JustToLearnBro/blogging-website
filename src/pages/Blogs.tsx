import { BlogCard } from "../components/BlogCard"
import { AppBar } from "../components/AppBar"
import { useBlogs } from "../hooks"
import { Link } from "react-router-dom"
import { BlogSkeleton } from "../components/BlogSkeleton"
export const Blogs = () => {

    const { loading, blogs } = useBlogs();
   
    if (loading) {
        return (
            <div>
                <AppBar />
                <div className="flex justify-center p-3">
                    <div className="space-y-4">
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }
    return <div>
        <AppBar />

        <div className="flex justify-center p-3">
            <div className="">

                {blogs.map(blog =>
                    <Link to={`/blog/${blog.id}`}><BlogCard title={blog.title} content={blog.content} publishedDate={"2nd Feb 2024"} authorName={blog.author.name || "Anonymous"} /></Link>
                )
                }
                {/* <BlogCard title={"How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"} content={"No need to create a fancy and modern website with hundreds of pages to make money online. — Making money online is the dream for man"} publishedDate={"2nd Feb 2024"} authorName={"Soumya Ranjan"} /> */}
            </div>
        </div>
    </div>
}