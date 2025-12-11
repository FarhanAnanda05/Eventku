import { useState } from "react";
import loginAuth from "../store/loginAuth";
import { Link } from "react-router-dom";

function Admin() {
  const { logout } = loginAuth();


  const [eventData, setEventData] = useState({
    judul: "",
    banner: "",
    tanggal: "",
    lokasi: "",
    harga: "",
    deskripsi: "",
    syarat: "",
    kategori: "",
  });


  const [deleteJudul, setDeleteJudul] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };


  const handleAddEvent = async () => {
    if (!eventData.judul) {
      alert("Judul wajib diisi!");
      return;
    }

    try {
      const res = await fetch("http://localhost:6969/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Event berhasil ditambahkan!");
        console.log(data);
        setEventData({
          judul: "",
          banner: "",
          tanggal: "",
          lokasi: "",
          harga: "",
          deskripsi: "",
          syarat: "",
          kategori: "",
        });
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error("Error tambah event:", err);
      alert("Terjadi kesalahan koneksi ke server.");
    }
  };

 
  const handleDeleteEvent = async () => {
    if (!deleteJudul) {
      alert("Masukkan judul event yang ingin dihapus!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:6969/event/${deleteJudul}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        alert(`Event "${deleteJudul}" berhasil dihapus!`);
        setDeleteJudul("");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error("Error hapus event:", err);
      alert("Terjadi kesalahan koneksi ke server.");
    }
  };

  return (
    <div className="bg-primary p-5 min-h-screen">
     
      <div className="flex justify-center">
        <div className="flex flex-col bg-navbar1 gap-4 p-5 rounded-2xl w-[500px] mb-10">
          <h1 className="text-white text-center text-5xl">Tambah Event</h1>

          <input
            type="text"
            name="judul"
            placeholder="Judul"
            value={eventData.judul}
            onChange={handleChange}
            className="bg-white p-2 rounded-sm"
          />
          <input
            type="text"
            name="banner"
            placeholder="Banner"
            value={eventData.banner}
            onChange={handleChange}
            className="bg-white p-2 rounded-sm"
          />
          <input
            type="text"
            name="tanggal"
            placeholder="Tanggal"
            value={eventData.tanggal}
            onChange={handleChange}
            className="bg-white p-2 rounded-sm"
          />
          <input
            type="text"
            name="lokasi"
            placeholder="Lokasi"
            value={eventData.lokasi}
            onChange={handleChange}
            className="bg-white p-2 rounded-sm"
          />
          <input
            type="text"
            name="harga"
            placeholder="Harga"
            value={eventData.harga}
            onChange={handleChange}
            className="bg-white p-2 rounded-sm"
          />
          <input
            type="text"
            name="deskripsi"
            placeholder="Deskripsi"
            value={eventData.deskripsi}
            onChange={handleChange}
            className="bg-white p-2 rounded-sm"
          />
          <input
            type="text"
            name="syarat"
            placeholder="Syarat"
            value={eventData.syarat}
            onChange={handleChange}
            className="bg-white p-2 rounded-sm"
          />
          <input
            type="text"
            name="kategori"
            placeholder="Kategori"
            value={eventData.kategori}
            onChange={handleChange}
            className="bg-white p-2 rounded-sm"
          />

          <div className="flex justify-center">
            <button
              onClick={handleAddEvent}
              className="text-2xl text-navbar1 bg-secondary p-3 rounded-2xl hover:bg-transparent hover:text-white hover:border border-white"
            >
              Tambah
            </button>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center mb-10">
        <div className="flex flex-col bg-navbar1 gap-4 p-5 rounded-2xl w-[500px]">
          <h1 className="text-white text-center text-5xl">Hapus Event</h1>
          <input
            type="text"
            placeholder="Judul Event (case sensitive)"
            value={deleteJudul}
            onChange={(e) => setDeleteJudul(e.target.value)}
            className="bg-white p-2 rounded-sm"
          />
          <div className="flex justify-center">
            <button
              onClick={handleDeleteEvent}
              className="text-2xl text-navbar1 bg-secondary p-3 rounded-2xl hover:bg-transparent hover:text-white hover:border border-white"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center">
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
  );
}

export default Admin;
