import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/logo2.png'
import { NavLinks } from '../constants'
const Sidebar = () => {
  return (
    <div className="sidebar bg-white xl:shadow-lg py-6 px-4 h-screen w-full border-r border-border overflow-auto relative z-[50]">
      {/* logo */}
      <Link to="/" className="p-0 m-0">
        <img src={Logo} alt="logo" className="w-4/5 h-auto ml-2 object-contain" />
      </Link>

      {/* links */}
      <div className="flex-colo gap-2 mt-6">
        {NavLinks.map((item) => (
          <NavLink key={item.title} className={`
            flex gap-4 transitions group items-center w-full p-4 rounded-lg hover:bg-text`} to={item.path}>
            {<item.icon className="text-subMain text-xl" />}
            <p className="text-sm font-medium group-hover:text-subMain text-gray-500 transitions">{item.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar