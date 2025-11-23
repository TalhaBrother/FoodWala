import axios from "axios";
import Recipe from "./recipe.jsx";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import {Routes,Route } from "react-router";
import NewRecipe from "../components/NewRecipe.jsx";


const Recipes = () => {
    const [search, setSearch] = useState("")
    const { theme, setTheme } = useContext(ThemeContext);
    console.log("Current Theme:",theme)

    let fetchData = async () => {
        let data = await axios.get(search ? `https://dummyjson.com/recipes/search?q=${search}` : "https://dummyjson.com/recipes")
        return data

    }
    const { error, data, isLoading } = useQuery({
        queryKey: ['repoData',search],
        queryFn: () => fetchData(),
        placeholderData: keepPreviousData
    })

    // if (isPending) return 'Loading...'
    console.log(data)
    if (error) return 'An error has occurred: ' + error.message
    return (
        <>
       
            <Navbar />
          
           
            {/* <Recipe /> */}
            <div className="w-full flex justify-end"><button  onClick={()=>{setTheme(theme==="light"? "dark" : "light")}}>{theme==="light"? "dark" : "light"}</button></div>
            <div className="w-full">
                <input value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Find a Recipe" />
            </div>
            
            {isLoading ?
                <span>Loading.................</span>
                :
                <div className={`${theme==="light"? "flex w-full flex-wrap bg-amber-400" :"flex w-full flex-wrap bg-amber-900"}`}>
                    {data?.data?.recipes?.map((elm) => (
                        <>
                            <div className="flex flex-col justify-center items-center p-3 lg:w-[20%] sm:w-[50%] h-[25rem] border border-amber-100">
                                <div  className="text-3xl font-bold mb-[0.5em]"><h2>{elm?.name}</h2></div>
                                <div className="size-50 mb-[0.5em]">  <img src={elm.image}></img></div>
                               <div className="w-[90%]"> <p>Category: {elm?.cuisine}</p></div>
                               <div className="w-[90%]"> <p>Cook time: {elm?.cookTimeMinutes}</p></div>
                               <div className="w-[90%]"> <p>Difficulty: {elm?.difficulty}</p></div>
                            </div>

                        </>
                    ))}</div>
            }

        </>
    )
}

export default Recipes