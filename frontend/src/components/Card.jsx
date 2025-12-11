import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Card({ search }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);

        const url = search
          ? `http://localhost:6969/event/search?q=${encodeURIComponent(search)}`
          : "http://localhost:6969/event";

        const res = await fetch(url);
        const data = await res.json();

        if (res.ok) {
          setEvents(data);
        } else {
          console.error("Gagal ambil event:", data.error);
          setEvents([]);
        }
      } catch (err) {
        console.error("Error fetch events:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [search]);

  if (loading) {
    return <p className="text-white text-2xl text-center mt-10">Memuat event...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-5 p-10">
      {events.length === 0 ? (
        <p className="text-white text-2xl">Tidak ada event ditemukan</p>
      ) : (
        events.map((data) => (
          <div
            key={data.id}
            onClick={() => navigate(`/checkout/${data.id}`)} 
            className="cursor-pointer bg-white rounded-2xl flex flex-col shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <img
              src={data.banner}
              alt={data.judul}
              className="rounded-tl-2xl rounded-tr-2xl w-full h-60 object-cover"
            />
            <div className="px-5 py-3">
              <p className="text-3xl truncate">{data.judul}</p>
              <p className="text-gray-500">{data.tanggal}</p>
              <p className="text-gray-500 font-bold truncate">{data.lokasi}</p>
              <p className="text-2xl font-bold">Rp.{data.harga}</p>

              <div className="text-end">
                <p className="bg-primary inline-block p-2 rounded-2xl text-white">
                  {data.kategori}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
