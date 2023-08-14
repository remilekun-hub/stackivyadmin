
import {Link} from 'react-router-dom'
type SidebarType = {
    link:string,
    icon:string,
    title:string
}

function Sidebaritem({link, icon, title}:SidebarType) {

  return (
    
    <Link to={link} className="flex items-center gap-4 py-5 px-4 rounded-[4px]">
        <img src={icon} className="w-5 h-5 text-red-900"/>
        <p className="text-[#a9b1bc]">{title}</p>
    </Link>
  )
}

export default Sidebaritem