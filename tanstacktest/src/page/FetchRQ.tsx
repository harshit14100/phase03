import { useQuery } from "@tanstack/react-query";
import { fetchposts } from "../api/Api"



// this uses react query to fetch notes
function FetchRQ() {

  const {data, isLoading , isError, error} = useQuery({
    queryKey:['posts'],
    queryFn:fetchposts,
  })

  if(isLoading)return <p>Loading...</p>
  if(isError)return <p>Error:{error.message || "Something went wrong..."}</p>
  return (
    <div className="flex flex-col items-center pl-[30%] bg-amber-300">
      <ul>
        {data?.map((elem)=>{
          const {id,title,body} = elem;
          return (
            <div className=" p-5 border-2 border-black w-[50%] bg-zinc-400">
            <li key={id}>
              <p className=" font-bold text-white">{title}</p>
              <p className="text-white">{body}</p>
            </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default FetchRQ
