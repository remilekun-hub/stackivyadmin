import {Link} from 'react-router-dom'
import SidebarLogo from "../assets/sidebarlogo.svg"
import glassIcon from "../assets/search-normal.svg"
import dashboardicon from '../assets/Dashboardicon.svg'
import Sidebaritem from './Sidebaritem'

function Sidebar() {
  return (
    <aside className='min-h-screen w-[300px] bg-[#1E2C31]'>

    <header className=' h-[100px] pl-5 items-center flex'>
    <Link to={'/'}>
        <img src={SidebarLogo} alt="Stackivy Logo"  />
    </Link>
    </header>
    
  <div className='p-6'>
    <div className=' flex items-center gap-3 border-0 pl-4 bg-[#2B3E46] mt-5 rounded-[4px] overflow-hidden'>
            <img src={glassIcon} className='w-5 h-5'/>
            <input type="text" placeholder='Search' className='p-3 outline-0 border-0 bg-[#2B3E46] text-white placeholder:text-white' />
        </div>
  </div>

    <div className='px-6'>

    <Sidebaritem link='/dashboard' icon={dashboardicon} title='Dashboard'/>
    </div>
    </aside>
  )
}

export default Sidebar