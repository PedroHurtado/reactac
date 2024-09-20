import {useEffect, useState} from 'react'
//React Suspense
//https://react.dev/reference/react/Suspense
//https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/
export function useQuery(initialUrl){
    
    const [url,setUrl] = useState(initialUrl)
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{      
        
        setLoading(true)
        setData(null)
        setError(null)

        fetch(url)        
        //OK
        .then(response=>{
            if(response.status ===200){
                return response.json()
            }
            else{
                throw new Error("El cliente no existe")
            }
        })        
        .then(data=>{
            if(!Array.isArray(data))
            {
                data =[data]
            }
            setData(data)

        })
        //ERROR
        .catch(err=>{
            setError(err.message)
        })
        //LOADING
        .finally(()=>{
            setLoading(false)
        })

    },[url])

    return [loading,error,data,setUrl]
}