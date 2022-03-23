import { FaChartBar, FaCloudSun, FaCalendarAlt, FaSun, FaSignal, FaCog, FaBox } from 'react-icons/fa'
import {Link} from 'react-router-dom';
const Footer = () => {
    return (      
        <div className='nav'>
            <span>
            
            <FaCloudSun /> <FaBox style={{color: 'white'}} ></FaBox>
            <Link to="/calendar"><FaCalendarAlt style={{color: 'black'}} /></Link> <FaBox style={{color: 'white'}} ></FaBox>
            <Link to="/"><FaSun style={{color: 'black'}} /></Link> <FaBox style={{color: 'white'}} ></FaBox>
            <FaSignal /><FaBox style={{color: 'white'}} ></FaBox>
            <Link to="/settings"><FaCog style={{color: 'black'}} /></Link>
            </span>
        </div>
    )
}
export default Footer