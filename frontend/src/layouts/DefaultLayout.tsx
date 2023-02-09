import NavbarLeftSide from '../components/nav/NavbarLeftSide'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-slate-800">
    <div className="flex">
      <NavbarLeftSide />
      <Outlet />
    </div>
  </div>
  )
}

export default DefaultLayout