import { useState } from "react";
import icon1 from "../assets/general/envelope.png";
import person from "../assets/general/person3.png";
import phone from "../assets/general/phone_1.png";
import envelope from "../assets/general/envelope2.png";

function Kontak() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        alert("Pesan berhasil dikirim!");
        setFormData({ nama: "", email: "", subjek: "", pesan: "" });
      } else {
        setStatus("error");
        alert("Gagal mengirim pesan: " + data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert("Terjadi kesalahan koneksi ke server");
    }
  };

  return (
    <div className="bg-primary p-20">
      <div className="mb-10">
        <div className="flex items-center gap-5 justify-center">
          <img src={icon1} alt="icon" />
          <h1 className="text-5xl text-white font-bold">Hubungi Kami</h1>
        </div>
        <p className="text-2xl text-center text-white">
          Kami senang mendengar dari kamu! <br />
          Kirim pesan atau pertanyaanmu, tim Eventku siap membantu kapan pun.
        </p>
      </div>

      <div className="flex flex-col items-center gap-5 mb-15">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[700px]">
          <input
            name="nama"
            placeholder="Masukkan Nama Kamu"
            type="text"
            value={formData.nama}
            onChange={handleChange}
            className="bg-white p-2 w-full text-2xl rounded-[10px]"
          />
          <input
            name="email"
            placeholder="User@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white p-2 w-full text-2xl rounded-[10px]"
          />
          <input
            name="subjek"
            placeholder="Subjek"
            type="text"
            value={formData.subjek}
            onChange={handleChange}
            className="bg-white p-2 w-full text-2xl rounded-[10px]"
          />
          <textarea
            name="pesan"
            placeholder="Pesan"
            value={formData.pesan}
            onChange={handleChange}
            className="bg-white p-2 w-full text-2xl rounded-[10px] h-52 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-navbar1 text-white py-2 px-20 text-2xl rounded-2xl hover:bg-transparent hover:border border-navbar1 hover:text-navbar1 transition-all duration-150"
          >
            {status === "loading" ? "Mengirim..." : "Kirim"}
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-10">
        <div className="flex flex-col bg-secondary w-[700px] p-10 rounded-2xl gap-5">
          <div className="flex gap-5 items-center justify-center">
            <img src={person} alt="person" />
            <p className="text-2xl bg-navbar1 text-white rounded-2xl p-3">
              Atau Hubungi kami langsung
            </p>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <img src={phone} alt="phone" />
            <p className="text-2xl">Telepon atau WhatsApp (08131322323)</p>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <img src={envelope} alt="envelope" />
            <p className="text-2xl">Email (eventku@gmail.com)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontak;
