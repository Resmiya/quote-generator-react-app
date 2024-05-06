import axios from "axios";

export const randomQuote1 = async()=>{
    try{
        const result=await axios.get("https://dummyjson.com/quotes")
        return result.data
    }
    catch(err){
        console.log("error ");
    }
   
}