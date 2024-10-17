interface BlogCardProps {
    title: string;
    content: string;
    publishedDate: string;
    authorName: string;
}

export function BlogCard({ title, content, publishedDate, authorName }: BlogCardProps) {
    return <div className="border-b-2 border-slate-200 pb-4 mb-3 lg:min-w-[740px] cursor-pointer">
        <div className="flex gap-3 items-center"> <Avatar authorName={authorName} />
            <div className="font-thin text-sm" >{authorName}</div>
            <div className="flex flex-col justify-center"><SmallCircle/></div>
            
            <div className="font-thin text-slate-500 text-sm" >{publishedDate} </div></div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="font-extralight text-base">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(content.length / 100)} min read`}</div>
        {/* <div className="bg-slate-200 h-1 w-full"></div> */}
    </div>
}
export function SmallCircle(){
    return <div className="h-1 w-1 rounded-full bg-slate-400"></div>
}

export function Avatar({ authorName, size="small" }: { authorName: string, size?: "small" | "large" }) {
    return <div className={`relative inline-flex items-center justify-center ${size=="small" ? "w-6 h-6" : "w-10 h-10"}  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={` ${size=="small" ? "text-xs" : "text-md"} font-medium text-gray-600 dark:text-gray-300`}>{(authorName.split(" ").length == 2) ? authorName.split(" ")[0][0] + authorName.split(" ")[1][0] : authorName.split("")[0]}</span>
    </div>

}