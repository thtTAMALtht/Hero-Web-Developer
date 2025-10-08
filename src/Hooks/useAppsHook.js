import axios from "axios"
import { useEffect, useState } from "react"

const useAppsHook = ()=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        axios("/apps.json")
        .then(data=>setProducts(data.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
    },[])

    return {products,loading,error}

}
export default useAppsHook;