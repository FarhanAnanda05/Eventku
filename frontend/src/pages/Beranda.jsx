import banner from "../assets/Beranda/hero-banner.jpg"
import Card from "../components/Card"
function Beranda() {
    
    return(
        <>
            <div className="px-10 py-5 bg-primary">
                <div  className="relative w-full rounded-2xl overflow-hidden mb-10">
                    <img src={banner} alt="" className="w-full h-[500px] rounded-2xl"/>
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <p className="text-white text-6xl">Event Season</p>
                        <p className="text-white text-6xl">Grab yout ticket fast</p>
                    </div>
                    
                </div>

                <div>
                    <div className="text-center">   
                        <h1 className="text-center mb-5 text-5xl bg-navbar1 text-secondary inline-block p-3 rounded-2xl">Our Events</h1>
                    </div>
                    <div>
                        <Card/>
                    </div>
                </div>
                
               
            </div>
        </>
    )
}

export default Beranda