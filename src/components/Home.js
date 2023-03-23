import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //let name ="faten";

  //bsmaiya 7assab l data yali bdi yeha for example hon name

  // const [name, setName] = useState("faten");
  //   const [age, setAge] = useState(19);

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // const handelClick = () => {
  //   setName("Faten khoder");
  // };
  //   const handelClickAgain = (name, e) => {
  //     console.log("hello " + name, e.target);
  //   };

  // const handelDelete = (id) => {
  //   //if the id of blog equal to the id filter the blogs and get the new blog without the (blo.id==id)
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  //awal chi bya3mlu run after the render and re-render
  //this effect hook useful for running any kind of code that u need to run at every render
  //and it can be used for things like fetching data

  return (
    <div className="home">
      {/* <h2>Homepage</h2>
      <p>
        {name} is {age} YO
      </p> */}
      {/* <p>{age}</p> */}
      {/* <button onClick={handelClick}>Click me</button> */}
      {/* *  ma bte5od l e ele ma 7ta bl funct w 3mlt arrow func kerml y2dar ya3ml click kaza mara b7alt eza fi parameter(name)
      <button onClick={(e) => handelClickAgain("faten", e)}>clickkk</button> */}
      {/* <p>{name}</p>
      <button onClick={() => handelClick("faten")}>clickkk</button> */}

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {/* la2n ken 3m yred error 3l mapping null fa bdu wa2t la yl2ot data buttt i dont understand la 3ml hk */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Faten")}
          title="Faten Blogs"
        />
      )}
    </div>
  );
};

export default Home;
