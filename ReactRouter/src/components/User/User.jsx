import {useParams } from 'react-router-dom'

export default function User(){
    const {userid} = useParams()
    return(
    <h1 className="bg-black text-white text-2xl">User:{userid}</h1>
    )
}