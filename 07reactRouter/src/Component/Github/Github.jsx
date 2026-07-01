import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data, setData] = useState(null);
  //  useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(setData);
    
    // }, []);
    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
     <img src={data?.avatar_url} alt="github profile" className='w-20 h-20 rounded-full m-auto' />
    </div>
    
  )

}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
return response.json();
}