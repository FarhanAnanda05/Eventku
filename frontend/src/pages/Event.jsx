import { useState } from "react";
import Card from "../components/Card";

function Event() {
  const [searchTerm, setSearchTerm] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    setKeyword(searchTerm.trim());
  };

  return (
    <div className="bg-primary py-5 px-[300px] flex justify-center items-start min-h-screen">
      <div className="w-full bg-secondary p-5 rounded-2xl">
        <h1 className="text-center text-navbar1 text-5xl mb-5">Cari Event</h1>

        <div className="flex justify-center items-center gap-5">
          <input
            className="bg-white text-2xl mb-5 pl-2 pr-10 w-3xl border border-navbar1 rounded-2xl py-3"
            placeholder="Masukkan nama Event"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="mb-5 bg-navbar1 py-3 px-10 text-white rounded-2xl text-2xl"
          >
            Cari
          </button>
        </div>

        <div>
          
          <Card search={keyword} />
        </div>
      </div>
    </div>
  );
}

export default Event;
