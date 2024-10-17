import { AppBar } from "../components/AppBar";
import FullBlog from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { UseBlog } from "../hooks";
import { useParams } from "react-router-dom";


export function Blog() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>Error: Blog ID not found</div>;
  }

  const { loading, blog } = UseBlog({ id });

  if (loading) return <div>
    <AppBar></AppBar>
    <div className=" flex justify-center items-center h-screen">
      <Spinner />
    </div>
  </div>;

  if (!blog) {
    return <div>Error: Blog not found</div>;
  }

  return <div><FullBlog blog={blog} /></div>;
}
