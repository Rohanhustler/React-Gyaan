import React from 'react'
import { useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const follower = useLoaderData()
    // const [follower , setFollower] = useState(0)
    // useEffect(() => {
    //     fetch("https://api.github.com/users/rohanhustler")
    //     .then((res) => res.json())
    //     .then((data) => setFollower(data))
    // }, [])

  return (
    <div className='bg-gray-400 text-3xl text-white p-4 text-center'>GitHub followers : {follower["followers"]}
        <img width="100px" src={follower["avatar_url"]} alt="" />
        <p>Please Follow 😊</p>
     </div>
     
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/rohanhustler") 
    return response.json();
}