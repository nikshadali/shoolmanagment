import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import logo from  '../../img/logo.png'
import stdImg  from '../../img/admin.jpg'

const Navbar = () => {
  return (
    <div className='nav'>
     
      <div className="left">
      <img src={logo} alt='logo' />
      <div className="sidebtn">
      <span></span>
      <span className='centerbtn'></span>
      <span></span>
      </div>
      </div>
      
        <div className="center">
            <SearchOutlinedIcon className='search'/>
            <input type='text' placeholder='Find Something....' />
          </div>  
        
        <div className="right">
            <div className="user">
                <sapn>Nikshad Ali</sapn>
                <img src={stdImg} alt='ali'/>
              <div className="icons">
              <EmailOutlinedIcon className='email' />
              <NotificationsOutlinedIcon className='notification'/>
              <div className="emailinfo">
                5
              </div>
              <div className="notiinfo">
                5
              </div>
              </div>
          
              
            </div> 

        </div>

       
    </div>
  )
}

export default Navbar