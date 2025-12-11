import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'


import image1 from '../assets/login/login_icon.svg'
import image2 from '../assets/login/email.svg'
import image3 from '../assets/login/password.svg'
import logo from "../assets/general/logo.png"

export default function Login() {

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:6969/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, email, password, confirmPassword }),
        });

        const data = await res.json();
        if (res.ok) {
            alert("Registrasi berhasil!");
        navigate("/Login");
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert("Gagal konek ke server");
    }
    };

 
  return (
    <div className="bg-primary py-10 px-5">
      <div className="flex gap-5 items-center justify-center mb-5">
        <img src={image1} className="h-[150px]" />
        <p className="text-7xl text-white">Registrasi</p>
      </div>

        <div className="flex justify-center">
            <div className="bg-secondary w-[600px] p-5 rounded-2xl flex flex-col items-center gap-5 relative">
                <p className="text-3xl text-navbar1">Silahkan Buat Akun</p>

                <div className="flex items-center gap-2">
                    <img src={image2} />
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-white text-2xl py-2 pl-3 w-[400px] rounded-2xl"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}

                    />
                </div>

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
                        placeholder="Password"
                        className="bg-white text-2xl py-2 pl-3 w-[400px] rounded-2xl"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
                </div>

                 <div className="flex items-center gap-2 ">
                    <img src={image3}/>
                    <input
                        type="password"
                        placeholder="Konfirmasi password"
                        className="bg-white text-2xl py-2 pl-3 w-[400px] rounded-2xl"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        
                    />
                </div>

                <button
                    onClick={handleRegister}
                    className="bg-navbar1 text-white py-2 px-10 text-2xl rounded-2xl hover:bg-transparent hover:border border-navbar1 hover:text-navbar1 transition-all duration-150"
                    >Register
                </button>


                <p>
                Sudah punya akun?{" "}
                <Link to="/Login">
                    <span className="text-navbar1" id="sign">Login disini</span>
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
