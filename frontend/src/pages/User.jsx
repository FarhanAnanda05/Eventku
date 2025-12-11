import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loginAuth from "../store/loginAuth";

function User() {
  const { logout } = loginAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token tidak ditemukan. Harap login ulang.");
        return;
      }

      try {
        const res = await fetch("http://localhost:6969/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data);
        } else {
          console.error("Gagal mengambil profil:", data.error);
        }
      } catch (err) {
        console.error("Error fetch profile:", err);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) {
    return (
      <div className="bg-primary h-screen flex justify-center items-center text-white text-3xl">
        Memuat profil user...
      </div>
    );
  }
  
  return (
    <div className="bg-primary min-h-screen flex flex-col items-center justify-center text-white">
      <div className="bg-secondary p-10 rounded-2xl shadow-xl w-[500px] text-center">
        <h1 className="text-5xl mb-5 text-navbar1">Profil Saya</h1>
        <p className="text-2xl text-navbar1">
          <span className="font-bold">Nama:</span> {user.nama}
        </p>
        <p className="text-2xl text-navbar1">
          <span className="font-bold">Email:</span> {user.email}
        </p>
        <p className="text-2xl text-navbar1">
          <span className="font-bold">Saya Pengguna ke</span> {user.id}
        </p>
        <div className="mt-10">
          <Link to="/">
            <button
              onClick={logout}
              className="text-2xl text-white bg-red-500 p-3 rounded-2xl hover:bg-transparent hover:text-red-500 hover:border border-red-500"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
