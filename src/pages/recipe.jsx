import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"

const Recipe=()=>{
    const {id}=useParams()
    let fetchRecipe=async()=>{
        let data=await axios.get(`https://dummyjson.com/recipes/${id}`)
        return data.data
    }
      const { isLoading, data } = useQuery({
    queryKey: ['recipeData'],
    queryFn: () =>fetchRecipe()
      })    
      console.log(data)
      return(
        <>
        <div>Recipe</div>
        {isLoading?
            <span>Loading....</span>
            :
            <div>
            <h2>{data.name}</h2>
            </div>
        }
        </>
    )
}
export default Recipe