import { useParams } from "react-router-dom"

const Users = () => {
    const {id} = useParams()
  
    return (
    <>
    <div className='flex items-center justify-center max-h-full text-4xl m-10 bg-neutral-900 text-white p-50' >
        <h1>Users: {id}</h1>
    </div>
    </>
  )
}

export default Users