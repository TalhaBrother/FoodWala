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
            <div>FoodWala</div>
            <div>
                <input value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Find a Recipe" />
            </div>
            <button onClick={()=>{setTheme(theme==="light"? "dark" : "light")}}>Toggle Theme</button>
            {isLoading ?
                <span>Loading.................</span>
                :
                <div className={`${theme==="light"? "flex w-full flex-wrap bg-amber-400" :"flex w-full flex-wrap bg-amber-900"}`}>
                    {data?.data?.recipes?.map((elm) => (
                        <>
                            <div className="flex flex-col justify-center align-center p-3 w-[20%] h-[30rem]">
                                <h2 className="text-3xl font-bold">{elm?.name}</h2>
                                <div className="size-50">  <img src={elm.image}></img></div>
                                <p>{elm?.ingredients}</p>
                            </div>

                        </>
                    ))}</div>
            }

        </>
    )
}

export default Recipes