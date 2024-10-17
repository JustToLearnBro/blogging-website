import { SmallCircle } from "./BlogCard";

export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse border-b-2 border-slate-200 pb-4 mb-3 lg:min-w-[740px] cursor-pointer">
            {/* Avatar and Metadata Row */}
            <div className="flex gap-3 items-center mb-3">
                {/* Avatar Skeleton */}
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>

                {/* Author Name Skeleton */}
                <div className="h-4 w-24 bg-gray-200 rounded-full"></div>

                {/* Small Circle */}
                <div className="flex flex-col justify-center">
                    <SmallCircle />
                </div>

                {/* Published Date Skeleton */}
                <div className="h-4 w-20 bg-gray-200 rounded-full"></div>
            </div>

            {/* Title Skeleton */}
            <div className="h-6 bg-gray-200 rounded-full mb-4 w-3/4"></div>

            {/* Content Skeleton */}
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
            </div>

            {/* Read Time Skeleton */}
            <div className="text-slate-500 text-sm font-thin pt-4">
                <div className="h-4 bg-gray-200 rounded-full w-16"></div>
            </div>

            <span className="sr-only">Loading...</span>
        </div>
    );
};
