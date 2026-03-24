import {useState,useEffect} from 'react'



function useCurrencyInfo(currency){
    let currencyURL = `https://v6.exchangerate-api.com/v6/841701c6d88305e3247cec37/latest/${currency}`
    const [data,setData] = useState({})
    useEffect( () =>{
        const fetchData = async() =>{
          try{
            const response = await fetch(currencyURL)
            let res = await response.json()
            setData(res.conversion_rates)
          }catch(error){
            console.log("Error in fetching currency API")
          }
        }  
        fetchData()
    },[currency])
    return data
}

export default useCurrencyInfo;