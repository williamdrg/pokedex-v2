import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
  const userName = useSelector(store => store.userName)
  if (userName.length >= 3) {
    return (
      <div>
        <Outlet/>
      </div>
    )
  } else {
    return <Navigate to='/'/>
  }
}

export default ProtectedRoutes