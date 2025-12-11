import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import loginAuth from "../store/loginAuth.jsx";

import image1 from '../assets/login/login_icon.svg'
import image2 from '../assets/login/email.svg'
import image3 from '../assets/login/password.svg'
import logo from "../assets/general/logo.png"


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {login,author} = loginAuth();


  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email dan password wajib diisi!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:6969/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        

        if(email === "admin@gmail.com"){author();}

        alert("Login berhasil!");
        login()
        navigate("/"); 
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error("Error saat login:", err);
      alert("Terjadi kesalahan koneksi ke server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary py-10 px-5">
      <div className="flex gap-5 items-center justify-center mb-5">
        <img src={image1} className="h-[150px]" />
        <p className="text-7xl text-white">Login</p>
      </div>

        <div className="flex justify-center mb-10">
            <div className="bg-secondary w-[600px] p-5 rounded-2xl flex flex-col items-center gap-5 relative">
                <p className="text-3xl text-navbar1">Masuk ke Akun Eventku</p>

                <div className="flex items-center gap-2">
                    <img src={image2} />
                    <input
                        type="text"
                        placeholder="user@gmail.com"
                        className="bg-white text-2xl py-2 pl-3 w-[400px] rounded-2xl"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>

                <div className="flex items-center gap-2 ">
                    <img src={image3}/>
                    <input
                        type="password"
                        placeholder="password"
                        className="bg-white text-2xl py-2 pl-3 w-[400px] rounded-2xl"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                type="submit"
                    disabled={loading}
                    className="bg-navbar1 text-white py-2 px-20 text-2xl rounded-2xl hover:bg-transparent hover:border border-navbar1 hover:text-navbar1 transition-all duration-150"
                    onClick = {handleLogin}
                    >
                    {loading ? "Memproses..." : "Login"}
                </button>


                <p>
                Belum punya akun?{" "}
                <Link to="/Register">
                    <span className="text-navbar1" id="sign">Daftar Disini</span>
                </Link>
                </p>

               
            </div>

            
        </div>

        <div className="flex justify-center">
            <img src={logo} className="h-[100px]" />
        </div>
        
    </div>
  );
}
