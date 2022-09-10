import './sidebar.scss';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

function Sidebar() {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="sidebar">
        <div className="top">
          <Link to="/">
            <span className="logo">Admin Panel</span>
          </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li><Link to="/" className='link'><DashboardOutlinedIcon className='icon'/><span>Dashboard</span></Link></li>
                <p className="title">LISTS</p>
                <li><Link to="/users" className='link'><PersonOutlineOutlinedIcon className='icon'/><span>Users</span></Link></li>
                <li><Link to="/products" className='link'><StoreMallDirectoryOutlinedIcon className='icon'/><span>Products</span></Link></li>
                <li><Link to="" className='link'><CreditCardOutlinedIcon className='icon'/><span>Orders</span></Link></li>
                <li><Link to="" className='link'><LocalShippingOutlinedIcon className='icon'/><span>Delivery</span></Link></li>
                <p className="title">USEFUL</p>
                <li><Link to="" className='link'><InsertChartOutlinedRoundedIcon className='icon'/><span>Stats</span></Link></li>
                <li><Link to="" className='link'><NotificationsNoneOutlinedIcon className='icon'/><span>Notifications</span></Link></li>
                <p className="title">SERVICE</p>
                <li><Link to="" className='link'><SettingsSystemDaydreamOutlinedIcon className='icon'/><span>System Health</span></Link></li>
                <li><Link to="" className='link'><PsychologyOutlinedIcon className='icon'/><span>Logs</span></Link></li>
                <p className="title">USER</p>
                <li><Link to="" className='link'><SettingsApplicationsOutlinedIcon className='icon'/><span>Settings</span></Link></li>
                <li><Link to="" className='link'><AdminPanelSettingsOutlinedIcon className='icon'/><span>Profile</span></Link></li>
                <li><Link to="" className='link'><LogoutOutlinedIcon className='icon'/><span>Logout</span></Link></li>
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
          <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar