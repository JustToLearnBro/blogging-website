import { AppBar } from "./AppBar"
import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"
export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <AppBar />
      <div className="grid grid-cols-12 pt-10 px-10">
        <div className="col-span-8">
          <div className="text-5xl font-extrabold max-w-[600px]">{blog.title}</div>
          <div className="text-slate-500 pt-2">Posted on August 24 2023</div>
          <div className="pt-3">{blog.content}</div>
        </div>
        <div className=" col-span-4">
          <div className="text-slate-600 text-lg">Author</div>
          <div className="flex  items-center ">
            <div className="pr-3">
              <Avatar size="large" authorName={blog.author.name || 'Anonymous'} />
            </div>
            <div className="flex  flex-col ">
              <div className="text-2xl font-bold">{blog.author.name || "Anonymous"}</div>
              <div>Some Random quote or details about the author</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
