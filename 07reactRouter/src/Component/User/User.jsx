import react from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()
  return (
    <div className="bg-gray-300 text-2xl text-red-900">user:{userid}</div>
  )
}
export default User