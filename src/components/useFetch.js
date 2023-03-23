import { useState, useEffect } from "react";

//to running the json file
//npx json-server --watch data/db.json --port 8000

const useFetch = (url) => {
  const [data, setData] = useState(null);

  //Loading when the data is slower
  const [isPending, setIsPending] = useState(true);

  //when we have an error
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("could not fetch the data for this resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
