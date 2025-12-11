import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Checkout() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams(); 
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`${API_URL}/event/${id}`);
        const data = await res.json();

        if (res.ok) {
          setEvent(data);
        } else {
          console.error("Event tidak ditemukan:", data.error);
        }
      } catch (err) {
        console.error("Error fetch event:", err);
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div className="bg-primary h-screen flex justify-center items-center text-white text-3xl">
        Memuat data event...
      </div>
    );
  }

  return (
    <div className="bg-primary px-5 py-10 text-center text-white">
      <div className="bg-secondary inline-block p-5 rounded-2xl max-w-3xl">
        <div className="flex flex-col items-center gap-5 mb-5">
          <h1 className="text-5xl font-bold text-navbar1">{event.judul}</h1>
          <img
            src={event.banner}
            alt={event.judul}
            className="w-[600px] h-[350px] object-cover rounded-xl"
          />
        </div>

        <div className=" text-white rounded-2xl p-5 flex flex-col gap-5">
            <div className="bg-primary rounded-2xl">
                <p className = "text-2xl "><span className="font-bold">Tanggal:</span> {event.tanggal}</p>
                <p className = "text-2xl "><span className="font-bold">Harga:</span> Rp.{event.harga}</p>
                <p className = "text-2xl "><span className="font-bold">Lokasi:</span> {event.lokasi}</p>
                <p className = "text-2xl "><span className="font-bold">Kategori:</span> {event.kategori}</p>
            </div>
          
          <p className = "text-2xl bg-navbar2 rounded-2xl p-5"><span className="font-bold">Deskripsi:</span> {event.deskripsi}</p>
          <p className = "text-2xl bg-navbar2 rounded-2xl p-5"><span className="font-bold">Syarat:</span> {event.syarat}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
