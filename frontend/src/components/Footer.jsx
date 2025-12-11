import logo from "../assets/general/logo.png"
function Footer(){
    return(
        <>
            <div className="flex flex-col bg-navbar1 gap-10">
                <div className="flex items-center justify-evenly">
                    <div className="text-white flex flex-col items-center">
                        <img src={logo} alt="logo" />
                        <p className="font-bold">Ticket Smarter , Event Better</p>
                    </div>

                    <div className="flex gap-10 items-start text-white">
                        <ul>
                            <li className="font-bold">Hubungi Kami</li>
                            <li>Hubungi Kami</li>
                            <li>Tentang Kami</li>
                        </ul>

                         <ul>
                            <li className="font-bold">Informasi</li>
                            <li>Syarat & Ketentuan</li>
                            <li>FAQ</li>
                        </ul>

                         <ul>
                            <li className="font-bold">Kategori Event</li>
                            <li>Concert</li>
                            <li>Workshop</li>
                            <li>Webinar</li>
                        </ul>

                        
                    </div>
                    
                </div>

                <div className="text-white ">
                    <hr></hr>
                    <p className="text-center font-bold">© 2025 Eventku — Menghubungkan Kamu dengan Setiap Momen Spesial</p>
                </div>
            </div>
        </>
    )
}

export default Footer