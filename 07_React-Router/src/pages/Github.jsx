import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  // const [data, setData] = useState([])
  // const [username, setUsername] = useState('')
  // const [submitted, setSubmitted] = useState("");
  const data = useLoaderData()

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/papu-hacker`)
  //     .then((res) => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })
  // }, [])

  return (
    <>
      <div className='flex flex-wrap items-center justify-center m-10 p-10 text-4xl text-white font-mono bg-neutral-900'> Github Followers of {data.login} : {data.followers}
      </div>
      {/* <div>
        <input className='flex flex-wrap items-center justify-center m-10 p-2 text-4xl text-white font-mono bg-neutral-900'
          // id={user_id}
          type="text"
          placeholder='username'
          value={username}
          // onChange={(e) => setUsername(e.target.value)}
          onClick={(value) => setUsername}
        />
      </div> */}
    </>
  )
}

export default Github

export const ghDataLoader = async () => {
  const res = await fetch('https://api.github.com/users/papu-hacker')
  return res.json()
}