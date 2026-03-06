import { motion } from "framer-motion";
import { useRef } from "react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import { ArrowDownRight, Recycle, Users, Factory, Square, ChevronLeft, ChevronRight } from "lucide-react";

// Animation Variants
const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const textReveal: any = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 1 } }
};

export function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen relative font-sans text-black selection:bg-reyowa-green selection:text-white overflow-hidden">
      {/* Global Noise Texture Overlay */}
      <div className="texture-overlay z-50 mix-blend-multiply opacity-30"></div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden">
        {/* Animated Background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-reyowa-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-reyowa-green/10 rounded-full blur-[100px] pointer-events-none"></div>

        <header className="flex justify-between items-start z-10 w-full">
          <div className="w-32 md:w-40">
            <img 
               src="/logo.png" 
               alt="REYOWA Logo" 
               className="w-full h-auto object-contain mix-blend-multiply"
             />
          </div>
          <div className="text-right max-w-[200px] md:max-w-sm text-xs md:text-sm font-semibold uppercase leading-tight opacity-70">
            Oakberry X Reyowa <br /> | Tersane Koleksiyonu
          </div>
        </header>

        <main className="z-10 flex flex-col mt-auto mb-20 md:mb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-1 overflow-hidden"
          >
            <div className="overflow-hidden">
              <motion.h1 variants={textReveal} className="text-[6.5vw] md:text-[4vw] font-black leading-[0.85] tracking-tighter uppercase">
                Sürdürülebilir <span className="text-outline"></span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 variants={textReveal} className="text-[6.5vw] md:text-[4vw] font-black leading-[0.85] tracking-tighter uppercase text-reyowa-green">
                Tasarım
              </motion.h1>
            </div>
            <div className="overflow-hidden flex items-center gap-4 md:gap-8 mt-2 md:mt-4">
              <motion.div variants={textReveal} className="h-2 w-16 md:w-32 bg-reyowa-blue"></motion.div>
              <motion.h1 variants={textReveal} className="text-[6vw] md:text-[4vw] font-bold leading-none tracking-tight uppercase text-black/20">
                Alanı
              </motion.h1>
            </div>
          </motion.div>
        </main>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-12 right-6 md:right-12 z-10 flex flex-col items-end"
        >
          <p className="text-xs uppercase font-bold tracking-widest mb-2">Scroll</p>
          <ArrowDownRight className="w-8 h-8 text-reyowa-green animate-bounce" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 flex items-start">
            <h2 className="text-sm md:text-base font-bold uppercase tracking-widest border-l-4 border-reyowa-blue pl-4">
              AMACIMIZ
            </h2>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="md:col-span-8"
          >
            <p className="text-xl md:text-3xl lg:text-4xl font-semibold leading-snug md:leading-tight">
              Bu proje, REYOWA'nın geri dönüştürülmüş plastikten ürettiği kompozit panellerin tasarım potansiyelini görünür kılmayı amaçlayan mekânsal bir girişimdir.
            </p>
            <p className="mt-8 text-lg md:text-2xl text-gray-600 font-medium leading-relaxed">
              Temel amacımız, atık plastikten elde edilen REYOWA panellerinin sadece teknik bir kaplama yüzeyi değil; güçlü bir estetik dil üreten, heykelimsi ve mimari bir materyal olarak ele alınmasıdır.
            </p>
            <div className="mt-8 text-lg md:text-xl font-medium leading-relaxed bg-reyowa-grey p-6 md:p-8 rounded-2xl relative overflow-hidden group">
              <div className="speckled-bg absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <span className="relative z-10">Amacımız klasik bir mağaza dekorasyonu üretmekten öte; malzeme, tasarım ve mekan arasında organik bir ilişki kurarak Oakberry Tersane lokasyonunu bir Sürdürülebilir Tasarım alanına dönüştürmektir.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tersane Istanbul Section */}
      <section className="relative py-32 md:py-48 bg-reyowa-green text-white overflow-hidden z-20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 transform skew-x-[-15deg] translate-x-20"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-reyowa-blue/30 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Factory className="w-5 h-5 text-reyowa-blue" />
              <span className="uppercase text-sm font-bold tracking-wider">Lokasyon</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
              Tersane <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}>İstanbul</span>
            </h2>
            <div className="w-20 h-2 bg-reyowa-blue mb-12"></div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-8 text-lg md:text-2xl font-medium leading-relaxed"
          >
            <motion.p variants={fadeInUp}>
              Tersane İstanbul, yüzyıllar boyunca üretimin, inşanın ve gemi sanayisinin kalbi olmuştur. Uzun yıllar atıl kalan bu bölgenin kente kazandırılması sürecinde, mekanın <span className="text-reyowa-blue font-bold">"üretim hafızasına"</span> güçlü bir atıf yapıyoruz.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Burayı AVM veya tüketim algısının ötesine taşıyarak, "tüketilen" değil, yeniden "üretilen" bir alan olarak yorumluyoruz.
            </motion.p>
            <motion.div variants={fadeInUp} className="bg-white text-black p-8 rounded-xl mt-4 shadow-2xl relative overflow-hidden">
              <div className="speckled-bg absolute inset-0 opacity-30"></div>
              <p className="relative z-10 font-bold text-2xl md:text-3xl">
                Günümüzün atığı olan plastiği işleyerek ona ikinci bir hayat veriyoruz.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tasarım ve Koleksiyon Kurgusu */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20 md:mb-32 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Tasarım ve Koleksiyon Kurgusu
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-600">
              Projeye davet edilen 5 tasarımcıdan biri olarak, geri dönüştürülmüş kompozit malzeme ile özel bir koleksiyonun parçasını oluşturacaksınız.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Card 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-black text-white p-8 md:p-12 rounded-[2rem] hover:rounded-[3rem] transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-reyowa-blue/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Square className="w-8 h-8 text-reyowa-blue" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase">Üretim</h3>
                <p className="text-lg text-gray-300 font-medium leading-relaxed">
                  Her tasarımcı belirli bir tipolojiye odaklanarak kendi özgün formunu yaratacaktır.
                </p>
                <ul className="text-lg text-gray-300 font-medium leading-relaxed mt-4 space-y-2">
                  <li>• Sandalye</li>
                  <li>• Masa</li>
                  <li>• Tabure</li>
                  <li>• Şezlong</li>
                  <li>• Saksı</li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-reyowa-grey text-black p-8 md:p-12 rounded-[2rem] hover:rounded-[1rem] transition-all duration-500 relative overflow-hidden group"
            >
              <div className="speckled-bg absolute inset-0 opacity-50"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                    <Recycle className="w-8 h-8 text-reyowa-green" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase">Materyal ve Üretim Şartları</h3>
                  <p className="text-lg font-medium leading-relaxed mb-4">
                    Ana üretim malzememiz 100x100 cm standartlarında dökülebilen, geri dönüştürülmüş plastik panellerdir. Bu paneller CNC kesime ve işlemeye uygundur.
                  </p>
                  <p className="text-lg font-medium leading-relaxed bg-white/60 p-4 rounded-xl backdrop-blur-sm">
                    Tasarımın ağırlıklı karakterini ve gövdesini bu paneller oluşturmalıdır. Ancak eserinizi güçlendirecek ahşap, metal, cam vb. gibi farklı yan materyalleri tasarıma entegre etmekte özgürsünüz.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Spans full width */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:col-span-2 bg-reyowa-blue text-black p-8 md:p-16 rounded-[2rem] relative overflow-hidden group"
            >
              {/* Giant abstract shapes */}
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Kolektif Uyum</h3>
                  <div className="w-16 h-2 bg-black mb-8"></div>
                  <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                    Eserler birbirlerinden bağımsız sanatçıların elinden çıksa da, aynı mekanda yaşayacaklardır. 
                  </p>
                </div>
                <div className="bg-black text-white p-8 rounded-2xl relative">
                  <Users className="absolute -top-6 -right-6 w-20 h-20 text-reyowa-green opacity-50 rotate-12" />
                  <p className="text-lg font-medium leading-relaxed relative z-10">
                    Bu nedenle tasarımların doğrudan veya dolaylı <span className="text-reyowa-blue font-bold">(ortak bir renk paleti, birleşim detayı veya form dili üzerinden)</span> birbiriyle uyum içinde olması beklenmektedir.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Örnek Çalışmalar Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
              ÖRNEK ÇALIŞMALAR
            </h2>
          </motion.div>

          <div className="relative">
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-reyowa-green transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-12 hide-scrollbar">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-72 md:w-96 aspect-square rounded-2xl overflow-hidden group relative">
                  <img 
                    src={`/assets/image${i + 1}.jpg`} 
                    alt={`Örnek Çalışma ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-5xl md:text-7xl font-black opacity-50 rotate-[-30deg] select-none">ÖRNEK</span>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-reyowa-green transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center mt-12"
          >
            <a
              href="/reyowa-granule-recipe.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-reyowa-green transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Materyal Örnekleri ve Renkler
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t-[16px] border-reyowa-green">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="w-32">
            <img 
               src="/logo.png" 
               alt="REYOWA Logo" 
               className="w-full h-auto brightness-125 saturate-150 scale-[0.77] origin-left"
             />
          </div>
          <div className="w-32">
            <img 
               src="/atersist.png" 
               alt="Tersane İstanbul" 
               className="w-full h-auto scale-[0.77] origin-right"
             />
          </div>
        </div>
      </footer>
    </div>
  );
}
