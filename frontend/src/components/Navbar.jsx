import logo from "../assets/general/logo.png"
import { Link} from "react-router-dom";
import loginAuth from "../store/loginAuth.jsx";


function Navbar(){
    const {condition,admin} = loginAuth();
    return(
        <div className="flex justify-evenly items-center pt-5 pb-5 bg-navbar1 text-white">
            <Link to = "/"><img src={logo} alt="logo" className="h-10"/></Link>
            <ul className="flex gap-3 bg-navbar2 px-5 py-2 rounded-2xl">
                <Link to = "/"><li className = "hover:bg-navbar1 hover:px-2 hover:rounded-2xl transition-all duration-150">Beranda</li></Link>
                <Link to = "/Tentang"><li className = "hover:bg-navbar1 hover:px-2 hover:rounded-2xl transition-all duration-150">Tentang</li></Link>
                <Link to = "/Event"><li className = "hover:bg-navbar1 hover:px-2 hover:rounded-2xl transition-all duration-150">Event</li></Link>
                <Link to = "/Kontak"><li className = "hover:bg-navbar1 hover:px-2 hover:rounded-2xl transition-all duration-150">Hubungi Kami</li></Link>    
            </ul>

            
            {
                condition ? (admin == "admin" ? (<Link to = "/Admin"><p className = "bg-navbar2 px-5 py-2 rounded-2xl hover:bg-transparent hover:border border-navbar2 transition-all duration-150">Dashboard</p></Link>) : 
                (<Link to = "/User"><p className = "bg-navbar2 px-5 py-2 rounded-2xl hover:bg-transparent hover:border border-navbar2 transition-all duration-150">Dashboard</p></Link>)) : 

                ( <Link to = "/Login"><p className = "bg-navbar2 px-5 py-2 rounded-2xl hover:bg-transparent hover:border border-navbar2 transition-all duration-150">Masuk</p></Link>)
            }

           
            
    
        </div>
    )
}

export default Navbar