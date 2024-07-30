import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
//    const [data ,setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/tusharkadam2003')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(setData);
//                 setData(data)
//             })
//     },[])
  return (
      <div className='text-3xl bg-gray-700 text-white p-4 m-5'>Github Followers: {data.followers}
          <img src={data.avatar_url} width={300} alt="" />

        </div>
      
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/tusharkadam2003')
    return response.json()
}