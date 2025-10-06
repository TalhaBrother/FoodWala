import axios from "axios";
import { useState } from "react";
import { useQuery,keepPreviousData } from "@tanstack/react-query";

const Recipes = () => {
    const [search,setSearch]=useState("")
    let fetchData = async () => {
        let data = await axios.get(search?`https://dummyjson.com/recipes/search?q=${search}` :"https://dummyjson.com/recipes")
        return data

    }
    const { error, data,isLoading } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetchData(),
        placeholderData:keepPreviousData
    })

    // if (isPending) return 'Loading...'
    console.log(data)
    if (error) return 'An error has occurred: ' + error.message
    return (
        <>
        <div>FoodWala</div>
        <div>
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Find a Recipe"/>
        </div>
        {isLoading?
        <span>Loading.................</span>
        :
         <div>{data?.data?.recipes?.map((elm)=>(
            <>
            <h2>{elm?.name}</h2>
          <div>  <img src={elm.image}></img></div>
          <p>{elm?.ingredients}</p>
          </>
        ))}</div>
    }
       
        </>
    )
}

export default Recipes