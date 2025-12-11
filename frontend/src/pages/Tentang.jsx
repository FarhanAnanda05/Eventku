import image1 from '../assets/about_us/mpo.jpg'
import image2 from '../assets/about_us/so7.jpg'
import image3 from '../assets/about_us/artjog.avif'
import image4 from '../assets/about_us/tangan_love.jpg'
import image5 from '../assets/about_us/beauty2.avif'

export default function Tentang() {
  return (
    <main>
      <div className="bg-primary py-5 px-[300px]">
        <section className="bg-secondary flex flex-col items-center rounded-2xl px-5 py-5 gap-10">
          <h1 className='text-5xl bg-navbar1 text-secondary p-5 rounded-2xl'>Ticket Smarter, Event Better</h1>

         
            <img src={image1} alt="MPO Benefit Concert" className='w-full rounded-2xl'/>
         

          <div className="hero-description">
            <p className='text-justify text-2xl indent-8'>
              Eventku adalah platform Ticket Management Service (TMS) yang
              dirancang untuk mendukung pengelolaan tiket berbagai acara dan
              destinasi wisata. Melalui teknologi yang inovatif, Eventku
              memudahkan penyelenggara untuk membuat, memasarkan, menjual,
              mendistribusikan, serta mengelola laporan tiket acara secara
              mandiri dan efisien. 
            </p>
            <br></br>
            <p className='text-justify text-2xl indent-8'>
              Sejak berdiri pada tahun 2025, Eventku memiliki tujuan untuk
              menghadirkan solusi digital yang mempermudah, memperkuat, dan
              memberikan kepuasan bagi penyelenggara maupun pengelola tempat,
              mulai dari tahap distribusi tiket hingga pelaporan setelah acara
              selesai.
            </p>
            <br></br>
            <p className='text-justify text-2xl indent-8'>
              Kini Eventku telah menjadi mitra bagi ratusan acara dengan ribuan
              hingga jutaan pembeli tiket di seluruh Indonesia bahkan lintas
              negara. Saatnya Anda merasakan sendiri kemudahan dan keunggulan
              dalam menjual tiket acara Anda bersama Eventku!
            </p>
          </div>

          <div className="w-full flex gap-5">
                <div className='flex-1 '>
                    <img src={image2} className='rounded-2xl h-full w-full' />
                </div>

                <div className='flex-2 flex gap-5'>
                    <div className='flex flex-col gap-5 w-full'>
                        <img src={image3} className = "bg-red-200 flex-1 rounded-2xl" />
                        <img src={image4} className = "bg-red-200 flex-2 rounded-2xl" />
                        
                
                    </div>
                    <div className='flex flex-col w-full gap-5'>
                        <img src={image5} className = "bg-red-200 flex-2 rounded-2xl" />
                        <img src={image1} className = "bg-red-200 flex-1 rounded-2xl" />
                        
                    </div>
                </div>
         
          
          </div>
        </section>
      </div>
    </main>
  );
}
