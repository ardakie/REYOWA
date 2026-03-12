import { motion } from "framer-motion";
import { useRef, useState } from "react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import { ArrowDownRight, Recycle, Users, Factory, ChevronLeft, ChevronRight, X, CheckCircle2, PenTool, Video, Calendar, Sparkles } from "lucide-react";

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
  const colorScrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const colorScrollLeft = () => {
    if (colorScrollContainerRef.current) {
      colorScrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const colorScrollRight = () => {
    if (colorScrollContainerRef.current) {
      colorScrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white h-screen overflow-y-auto snap-y snap-proximity scroll-smooth relative font-sans text-black selection:bg-reyowa-green selection:text-white overflow-x-hidden">
      {/* Global Noise Texture Overlay */}
      <div className="texture-overlay z-50 mix-blend-multiply opacity-30"></div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-between p-3 md:p-6 overflow-hidden snap-start">
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-[0.40]">
          <img 
            src="/hero-background.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated Background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-reyowa-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-reyowa-green/10 rounded-full blur-[100px] pointer-events-none"></div>

        <header className="flex justify-between items-start z-10 w-full relative">
          <div className="w-32 md:w-40">
            <img 
               src="/logo.png" 
               alt="REYOWA Logo" 
               className="w-full h-auto object-contain mix-blend-multiply"
             />
          </div>
          <div className="w-32 md:w-40">
            <img 
               src="/oakberry-logo.png" 
               alt="Oakberry Logo" 
               className="w-full h-auto object-contain scale-[0.66] -mt-4 md:-mt-8"
             />
          </div>
        </header>

        <main className="z-10 flex-1 flex flex-col justify-center items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-1 overflow-hidden"
          >
            <div className="overflow-hidden">
              <motion.h1 variants={textReveal} className="text-[5.5vw] md:text-[3.5vw] font-black leading-[0.85] tracking-tighter uppercase">
                Oakberry X Reyowa <span className="text-outline">—</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden flex items-center gap-4 md:gap-8 mt-2 md:mt-4">
              <motion.div variants={textReveal} className="h-2 w-16 md:w-32 bg-reyowa-blue"></motion.div>
              <motion.h1 variants={textReveal} className="text-[5.5vw] md:text-[3.5vw] font-bold leading-none tracking-tight uppercase text-reyowa-green">
                Tasarımcı Daveti & Brief
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
      <section className="snap-start py-24 md:py-40 px-6 md:px-12 bg-white relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 flex items-start">
            <h2 className="text-sm md:text-base font-bold uppercase tracking-widest border-l-4 border-reyowa-blue pl-4">
              Merhaba!
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
              Oakberry'nin Tersane İstanbul'daki yeni lokasyonu için klasik bir mağaza kurgusunun ötesine geçiyoruz. Reyowa’nın destekleriyle, geri dönüştürülmüş plastiğin sınırlarını zorlayacağımız, malzemenin, mekanın ve tasarımın organik bir bağ kuracağı sürdürülebilir tasarım alanı yaratıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tersane Istanbul Section */}
      <section className="relative py-32 md:py-48 bg-reyowa-green text-white overflow-hidden z-20">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-[0.40] blur-[15px]">
          <img 
            src="/background-image.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
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
              <span className="uppercase text-sm font-bold tracking-wider">LOKASYON</span>
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
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter">Neden Tersane?</h3>
              <p>
                Tersane İstanbul, yüzyıllar boyunca ahşabın ve demirin işlendiği, gemilere hayat veren bir üretim merkezi oldu. Bugün ise Contemporary İstanbul gibi etkinliklerin yer aldığı, kentin sanat ve tasarım kalbi olma yolunda dünya standartlarında bir komplekse dönüşüyor.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white text-black p-8 rounded-xl mt-4 shadow-2xl relative overflow-hidden">
              <div className="speckled-bg absolute inset-0 opacity-30"></div>
              <p className="relative z-10 text-lg md:text-xl leading-relaxed">
                Projede, Tersane’nin "üretim birikiminden” esinlenerek yola çıktık. Fakat bu sefer ahşabı veya demiri değil, çağımızın en yoğun kullanılan materyali plastiğin geri dönüştürülmüş halini -Reyowa panellerini- işleyerek ve göstererek Tersane'nin üretim geçmişine atıfta bulunuyoruz. Beklentimiz, bu dönüşüm hikayesine kendi estetik çizgisiyle katkı sağlayacak, kompozit plastiğin de yeni dünyada sanat/tasarım medyumuna dönüşebileceğini gösterecek yaratıcılar ile çalışmak.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1. Reyowa Kompozit Paneller & Tasarım Felsefesi */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-reyowa-grey relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
              Reyowa <br/> Kompozit Paneller
            </h2>
            <div className="w-16 h-2 bg-reyowa-green mb-8"></div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Projede %100 geri dönüştürülmüş plastikten üretilen <span className="font-bold text-reyowa-blue">Reyowa kompozit panelleri</span> sunuyoruz.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-reyowa-blue relative overflow-hidden group"
          >
            <div className="speckled-bg absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-reyowa-blue mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">Tasarım Felsefemiz</h3>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-700">
                Bu malzemenin sadece bir "kaplama" olarak değil. Kendi başına heykelsi, mimari ve güçlü bir estetik dil üreten materyal olarak ele alınması.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Tasarım Kriterlerimiz */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-reyowa-blue text-white relative z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Tasarım Kriterlerimiz
            </h2>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex gap-6 items-start bg-black/20 p-8 rounded-2xl backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-reyowa-green flex-shrink-0 mt-1" />
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                Tasarımın ana omurgasını <span className="font-bold underline decoration-reyowa-green underline-offset-4">(minimum %60)</span> Reyowa geri dönüştürülmüş kompozit paneller oluşturmalı.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-6 items-start bg-black/20 p-8 rounded-2xl backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-reyowa-green flex-shrink-0 mt-1" />
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                Malzemenin "geri dönüştürülmüş" karakteristik dokusu saklanmamalı, aksine gururla sergilenmeli.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-6 items-start bg-black/20 p-8 rounded-2xl backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-reyowa-green flex-shrink-0 mt-1" />
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                Tasarlanacak obje, kamusal bir yeme-içme alanının (Oakberry) dinamiklerine dayanacak fonksiyonellikte olmalı.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Tasarım Hikayesini Nasıl Anlatacağız? */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 md:mb-24 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Tasarım Hikayesini <br className="hidden md:block"/> Nasıl Anlatacağız?
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-reyowa-blue">
              Bu projede süreç ortaya çıkan obje kadar değerli.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-black text-white p-10 md:p-14 rounded-[2rem] hover:rounded-[3rem] transition-all duration-500"
            >
              <PenTool className="w-12 h-12 text-reyowa-green mb-8" />
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">Tasarımcının İmzası</h3>
              <p className="text-lg text-gray-300 font-medium leading-relaxed">
                Tasarlanan her objenin üzerinde künye bilgileri yer alacak. Eserin kime ait olduğu her zaman görünür olacak.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-reyowa-grey p-10 md:p-14 rounded-[2rem] hover:rounded-[1rem] transition-all duration-500"
            >
              <Video className="w-12 h-12 text-reyowa-blue mb-8" />
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">Belgeleme</h3>
              <p className="text-lg font-medium leading-relaxed text-gray-700">
                Atölye çalışmaları, "sketch-to-prototype" süreci belgelenerek içerikler üretilecek. Mağaza içindeki ekranlarda ve medya kanalları üzerinden bu belgesel servis edilecek. Mass ve dijital medya kanallarından projenin - dolayısıyla tasarımcıların - PR çalışması yapılacak. Ayrıca özel bir katalog hazırlanacak.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-reyowa-green text-white p-10 md:p-16 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/background-image.jpg')] opacity-20 mix-blend-overlay object-cover"></div>
            <p className="relative z-10 text-xl md:text-2xl font-medium leading-relaxed">
              Tersane İstanbul’un kültür ve sanat odaklı gelişimi, projeye dahil olan tasarımcı ve sanatçılar için güçlü bir görünürlük potansiyeli sunacaktır. Bölgede markaların tasarımı merkezine alan amiral mağazalarının bulunması ve Contemporary Istanbul, Türkiye'nin ilk özel müzesi olan Sadberk Hanım Müzesi'nin yeni sergi mekanının açılacak olması gibi uluslararası etkinliklerin düzenlenmesi, tasarımcıların üretimlerinin daha geniş bir kitleye ulaşmasını sağlayacaktır. Oakberry mağazasının Tersane içindeki en görünür alanlardan birinde konumlanması ise bu etkiyi daha da güçlendirecek ve projede yer alan tasarımcıların görünürlüğünü artıracaktır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Takvimimiz */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-black text-white relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20 text-center flex flex-col items-center"
          >
            <Calendar className="w-16 h-16 text-reyowa-green mb-6" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Takvimimiz
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-1 bg-white/20 -z-10"></div>
            
            {[
              { month: "Mart", event: "Konsept ve Eskiz Önerilerinin Paylaşılması" },
              { month: "Nisan", event: "Tasarımın Geliştirilmesi ve Prototip" },
              { month: "Mayıs", event: "Üretim Süreci" },
              { month: "Mayıs Ortası", event: "Tersane İstanbul'da Kurulum ve Açılış" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-black border-4 border-reyowa-blue flex items-center justify-center font-bold text-xl mb-6 shadow-[0_0_30px_rgba(40,116,252,0.3)]">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-reyowa-green mb-4">{item.month}</h3>
                <p className="text-lg font-medium text-gray-300 leading-relaxed max-w-[200px]">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Tersane Görselleri Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
              KONUM
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-8 md:gap-12 items-center">
            {/* Left side: Main Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-3xl overflow-hidden shadow-2xl group w-full aspect-[4/5]"
            >
              <img 
                src="/tersane-main.jpg" 
                alt="Tersane Ana Görsel" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Right side: Two Secondary Images in a column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8"
            >
              <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-xl group aspect-square">
                <img 
                  src="/tersane-secondary1.jpg" 
                  alt="Tersane Görsel 1" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-xl group aspect-square">
                <img 
                  src="/tersane-secondary2.png" 
                  alt="Tersane Görsel 2" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
          </div>
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Card 1: Küratöryel Uyum */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-reyowa-blue text-white p-8 md:p-12 rounded-[2rem] relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Giant abstract shapes */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-10 h-10 text-reyowa-green" />
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Küratöryel Uyum</h3>
                </div>
                <div className="w-12 h-1.5 bg-white mb-6"></div>
                <div className="space-y-4 text-lg md:text-xl font-medium leading-relaxed">
                  <p>
                    Ürünler farklı tasarımcılara ait olsa da aynı mekan içinde birlikte var olacaklardır. 
                  </p>
                  <p>
                    Bu nedenle tasarımlar arasında renk paleti, form dili veya detaylar üzerinden bir uyum düşünülmesi faydalı olacaktır. Detaylar ilerleyen aşamada birlikte şekillendirilecektir.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Materyal ve Üretim Şartları */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-reyowa-grey text-black p-8 md:p-12 rounded-[2rem] hover:rounded-[15px] transition-all duration-500 relative overflow-hidden group"
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
                    Tasarımın ağırlıklı karakterini ve gövdesini bu paneller oluşturmalıdır. Ancak eserinizi güçlendirecek ahşap, metal, cam vb. gibi farklı yan materyaller elbette tasarıma entegre edilebilir.
                  </p>
                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Materyal ve Renk Örnekleri Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-reyowa-grey relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">
              MATERYAL VE RENK ÖRNEKLERİ
            </h2>
          </motion.div>

          <div className="relative mb-12">
            <button onClick={colorScrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-reyowa-green transition-colors md:hidden">
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div ref={colorScrollContainerRef} className="flex gap-4 overflow-x-auto md:overflow-visible md:flex-nowrap scroll-smooth pb-4 px-0 md:px-0 hide-scrollbar snap-x md:snap-none snap-mandatory">
              {[
                { src: '/assets/color1.jpg', name: 'Gri' },
                { src: '/assets/color2.jpg', name: 'Kahve' },
                { src: '/assets/color3.jpg', name: 'Yeşil' }
              ].map((color, i) => (
                <div key={i} className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] snap-center">
                  <div className="aspect-[16/9] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={color.src} 
                      alt={color.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button onClick={colorScrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-reyowa-green transition-colors md:hidden">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center"
          >
            <a
              href="/reyowa-granule-recipe.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-reyowa-green transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Tüm Renk Seçenekleri
            </a>
          </motion.div>
        </div>
      </section>

      {/* Plastikten Panele Dönüşüm Section */}
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
              Plastikten Panele Dönüşüm
            </h2>
          </motion.div>

          <div className="w-full">
            <div className="w-full max-w-[900px] mx-auto">
              <svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <defs>
                    <filter id="sk" x="-6%" y="-6%" width="112%" height="112%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.042" numOctaves="4" seed="5" result="n"/>
                      <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4"
                                        xChannelSelector="R" yChannelSelector="G"/>
                    </filter>
                    <filter id="sk-belt" x="-2%" y="-20%" width="104%" height="160%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.025 0.06" numOctaves="4" seed="11" result="n"/>
                      <feDisplacementMap in="SourceGraphic" in2="n" scale="3"
                                        xChannelSelector="R" yChannelSelector="G"/>
                    </filter>
                    <clipPath id="bclip"><rect x="0" y="162" width="900" height="30"/></clipPath>
                    <clipPath id="m1-inner"><rect x="200" y="52" width="136" height="137"/></clipPath>
                    <clipPath id="m2-inner"><rect x="554" y="52" width="136" height="137"/></clipPath>
                  </defs>

                  {/* Conveyor Belt */}
                  <g filter="url(#sk-belt)">
                    <rect x="6" y="165" width="888" height="22" rx="11"
                          fill="#e5e5e5" stroke="#1a1a1a" strokeWidth="2.8"/>
                  </g>

                  {/* Scrolling dashes */}
                  <g id="belt-dashes" clipPath="url(#bclip)" filter="url(#sk)" className="animate-belt-scroll">
                    <line x1="-32" y1="176" x2="-16" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="0"   y1="176" x2="16"  y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="32"  y1="176" x2="48"  y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="64"  y1="176" x2="80"  y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="96"  y1="176" x2="112" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="128" y1="176" x2="144" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="160" y1="176" x2="176" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="192" y1="176" x2="208" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="224" y1="176" x2="240" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="256" y1="176" x2="272" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="288" y1="176" x2="304" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="320" y1="176" x2="336" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="352" y1="176" x2="368" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="384" y1="176" x2="400" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="416" y1="176" x2="432" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="448" y1="176" x2="464" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="480" y1="176" x2="496" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="512" y1="176" x2="528" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="544" y1="176" x2="560" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="576" y1="176" x2="592" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="608" y1="176" x2="624" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="640" y1="176" x2="656" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="672" y1="176" x2="688" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="704" y1="176" x2="720" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="736" y1="176" x2="752" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="768" y1="176" x2="784" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="800" y1="176" x2="816" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="832" y1="176" x2="848" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="864" y1="176" x2="880" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                    <line x1="896" y1="176" x2="912" y2="176" stroke="#888" strokeWidth="2.2" strokeLinecap="round"/>
                  </g>

                  {/* Belt shadow */}
                  <ellipse cx="450" cy="190" rx="430" ry="5" fill="rgba(0,0,0,0.05)" filter="url(#sk)"/>

                  {/* Cup */}
                  <g id="cup" filter="url(#sk)" className="animate-cup-move">
                    <rect x="-3" y="84" width="68" height="13" rx="6"
                          fill="#edede8" stroke="#111" strokeWidth="2.6"/>
                    <path d="M3,97 L8,165 L55,165 L60,97 Z"
                          fill="#fafaf7" stroke="#111" strokeWidth="2.6" strokeLinejoin="round"/>
                    <line x1="5"  y1="104" x2="58" y2="104" stroke="#ccc" strokeWidth="1.3"/>
                    <line x1="8"  y1="100" x2="7"  y2="162" stroke="#d0d0c8" strokeWidth="1.8" strokeLinecap="round"/>
                    <line x1="13" y1="98" x2="11" y2="162" stroke="#dddddd" strokeWidth="1.2" strokeLinecap="round"/>
                    <ellipse cx="36" cy="117" rx="5.5" ry="5" fill="#111"/>
                    <path d="M40,116 Q44,116 43,119 Q40,120 40,118" fill="#111"/>
                    <circle cx="37" cy="116" r="1.5" fill="#fafaf7"/>
                    <path d="M30,122 Q26,128 28,134 Q32,138 38,136 Q44,132 42,124 Q40,119 34,120 Z"
                          fill="#111"/>
                    <path d="M28,128 Q22,126 24,132" fill="none" stroke="#fafaf7" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M29,134 Q24,140 22,146" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M31,136 Q28,142 27,148" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round"/>
                    <line x1="4" y1="137" x2="57" y2="137" stroke="#111" strokeWidth="1.8" strokeLinecap="round"/>
                    <text x="32" y="135" textAnchor="middle"
                          fontFamily="'Courier New',monospace" fontSize="9.5"
                          fontWeight="bold" fill="#fafaf7" letterSpacing="1">OAK</text>
                    <line x1="4" y1="148" x2="57" y2="148" stroke="#111" strokeWidth="1.8" strokeLinecap="round"/>
                    <text x="32" y="146" textAnchor="middle"
                          fontFamily="'Courier New',monospace" fontSize="9"
                          fontWeight="bold" fill="#fafaf7" letterSpacing="0.5">BERRY</text>
                    <line x1="28" y1="148" x2="25" y2="156" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="28" y1="156" x2="22" y2="156" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="32" y1="148" x2="31" y2="156" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
                  </g>

                  {/* Granules */}
                  <g id="granules" filter="url(#sk)" className="animate-gran-move">
                    <ellipse cx="11"  cy="152" rx="8"   ry="5"   fill="#fafaf7" stroke="#111" strokeWidth="2.4" transform="rotate(-22,11,152)"/>
                    <ellipse cx="27"  cy="147" rx="9"   ry="5.5" fill="#fafaf7" stroke="#111" strokeWidth="2.4" transform="rotate(12,27,147)"/>
                    <ellipse cx="45"  cy="149" rx="8.5" ry="5.2" fill="#fafaf7" stroke="#111" strokeWidth="2.4" transform="rotate(-6,45,149)"/>
                    <ellipse cx="63"  cy="146" rx="9"   ry="5.5" fill="#fafaf7" stroke="#111" strokeWidth="2.4" transform="rotate(18,63,146)"/>
                    <ellipse cx="78"  cy="150" rx="7.5" ry="5"   fill="#fafaf7" stroke="#111" strokeWidth="2.4" transform="rotate(-11,78,150)"/>
                    <ellipse cx="5"   cy="161" rx="7"   ry="4.8" fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(7,5,161)"/>
                    <ellipse cx="20"  cy="160" rx="9"   ry="5.5" fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(-14,20,160)"/>
                    <ellipse cx="38"  cy="162" rx="8.5" ry="5"   fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(4,38,162)"/>
                    <ellipse cx="55"  cy="159" rx="8"   ry="5.2" fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(-19,55,159)"/>
                    <ellipse cx="72"  cy="161" rx="8.5" ry="5"   fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(9,72,161)"/>
                    <ellipse cx="12"  cy="170" rx="7.5" ry="4.5" fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(-5,12,170)"/>
                    <ellipse cx="29"  cy="169" rx="8"   ry="4.5" fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(15,29,169)"/>
                    <ellipse cx="47"  cy="171" rx="8"   ry="4.5" fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(-9,47,171)"/>
                    <ellipse cx="64"  cy="168" rx="8.5" ry="4.5" fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(7,64,168)"/>
                    <ellipse cx="80"  cy="170" rx="7"   ry="4.5" fill="#fafaf7" stroke="#111" strokeWidth="2.2" transform="rotate(-13,80,170)"/>
                  </g>

                  {/* Panel */}
                  <g id="panel" filter="url(#sk)" className="animate-panel-move">
                    <rect x="2" y="108" width="90" height="57" rx="4"
                          fill="#fafaf7" stroke="#111" strokeWidth="3"/>
                    <ellipse cx="14" cy="120" rx="6"   ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-14,14,120)"/>
                    <ellipse cx="30" cy="117" rx="7"   ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(18,30,117)"/>
                    <ellipse cx="47" cy="119" rx="6.5" ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-5,47,119)"/>
                    <ellipse cx="63" cy="116" rx="7"   ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(22,63,116)"/>
                    <ellipse cx="78" cy="120" rx="5.5" ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-10,78,120)"/>
                    <ellipse cx="14" cy="131" rx="6.5" ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(9,14,131)"/>
                    <ellipse cx="30" cy="129" rx="7"   ry="4.2" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-16,30,129)"/>
                    <ellipse cx="47" cy="131" rx="6"   ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(5,47,131)"/>
                    <ellipse cx="63" cy="128" rx="7"   ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-11,63,128)"/>
                    <ellipse cx="79" cy="131" rx="6"   ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(13,79,131)"/>
                    <ellipse cx="14" cy="143" rx="6.5" ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-7,14,143)"/>
                    <ellipse cx="30" cy="141" rx="7"   ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(20,30,141)"/>
                    <ellipse cx="47" cy="143" rx="6"   ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-10,47,143)"/>
                    <ellipse cx="64" cy="140" rx="6.5" ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(8,64,140)"/>
                    <ellipse cx="79" cy="143" rx="5.5" ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-15,79,143)"/>
                    <ellipse cx="14" cy="155" rx="6.5" ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(11,14,155)"/>
                    <ellipse cx="31" cy="153" rx="7"   ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-8,31,153)"/>
                    <ellipse cx="48" cy="155" rx="6.5" ry="4"   fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(4,48,155)"/>
                    <ellipse cx="65" cy="152" rx="7"   ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(-17,65,152)"/>
                    <ellipse cx="80" cy="155" rx="5.5" ry="3.8" fill="#fafaf7" stroke="#222" strokeWidth="1.9" transform="rotate(10,80,155)"/>
                  </g>

                  {/* Machine 1 */}
                  <g id="mach1" className="animate-mach1">
                    <rect x="200" y="52" width="136" height="135" rx="5"
                          fill="#f3f2ee" stroke="none"/>
                    <rect x="200" y="52" width="136" height="135" rx="5"
                          fill="none" stroke="#111" strokeWidth="3.2"
                          filter="url(#sk)"/>
                    <g clipPath="url(#m1-inner)" opacity="0.09">
                      <line x1="202" y1="52" x2="336" y2="186" stroke="#000" strokeWidth="4"/>
                      <line x1="218" y1="52" x2="336" y2="170" stroke="#000" strokeWidth="4"/>
                      <line x1="238" y1="52" x2="336" y2="150" stroke="#000" strokeWidth="4"/>
                      <line x1="260" y1="52" x2="336" y2="128" stroke="#000" strokeWidth="4"/>
                      <line x1="284" y1="52" x2="336" y2="104" stroke="#000" strokeWidth="4"/>
                      <line x1="312" y1="52" x2="336" y2="76"  stroke="#000" strokeWidth="4"/>
                      <line x1="202" y1="72" x2="332" y2="202" stroke="#000" strokeWidth="4"/>
                      <line x1="202" y1="98" x2="310" y2="206" stroke="#000" strokeWidth="4"/>
                      <line x1="202" y1="128" x2="278" y2="204" stroke="#000" strokeWidth="4"/>
                      <line x1="202" y1="158" x2="248" y2="204" stroke="#000" strokeWidth="4"/>
                    </g>
                    <line x1="204" y1="72" x2="332" y2="72"
                          stroke="#444" strokeWidth="1.6" strokeDasharray="5 7" filter="url(#sk)"/>
                    <circle cx="214" cy="63" r="5" fill="#4a4a4a" filter="url(#sk)"/>
                    <circle cx="322" cy="63" r="5" fill="#4a4a4a" filter="url(#sk)"/>
                    <path d="M222,52 Q228,41 234,52 Q240,41 246,52 Q252,41 258,52 Q264,41 270,52 Q276,41 282,52 Q288,41 294,52 Q300,41 306,52 Q312,41 318,52"
                          fill="none" stroke="#1a1a1a" strokeWidth="2.4" filter="url(#sk)"/>
                    <text x="268" y="130" textAnchor="middle"
                          fontFamily="'Courier New',monospace" fontSize="13"
                          fill="#383838" letterSpacing="2">M·01</text>
                  </g>

                  {/* Machine 2 */}
                  <g id="mach2" className="animate-mach2">
                    <rect x="554" y="52" width="136" height="135" rx="5"
                          fill="#f3f2ee" stroke="none"/>
                    <rect x="554" y="52" width="136" height="135" rx="5"
                          fill="none" stroke="#111" strokeWidth="3.2"
                          filter="url(#sk)"/>
                    <g clipPath="url(#m2-inner)" opacity="0.09">
                      <line x1="556" y1="52" x2="690" y2="186" stroke="#000" strokeWidth="4"/>
                      <line x1="572" y1="52" x2="690" y2="170" stroke="#000" strokeWidth="4"/>
                      <line x1="592" y1="52" x2="690" y2="150" stroke="#000" strokeWidth="4"/>
                      <line x1="614" y1="52" x2="690" y2="128" stroke="#000" strokeWidth="4"/>
                      <line x1="638" y1="52" x2="690" y2="104" stroke="#000" strokeWidth="4"/>
                      <line x1="666" y1="52" x2="690" y2="76"  stroke="#000" strokeWidth="4"/>
                      <line x1="556" y1="72" x2="686" y2="202" stroke="#000" strokeWidth="4"/>
                      <line x1="556" y1="98" x2="664" y2="206" stroke="#000" strokeWidth="4"/>
                      <line x1="556" y1="128" x2="632" y2="204" stroke="#000" strokeWidth="4"/>
                      <line x1="556" y1="158" x2="602" y2="204" stroke="#000" strokeWidth="4"/>
                    </g>
                    <line x1="558" y1="72" x2="686" y2="72"
                          stroke="#444" strokeWidth="1.6" strokeDasharray="5 7" filter="url(#sk)"/>
                    <circle cx="568" cy="63" r="5" fill="#4a4a4a" filter="url(#sk)"/>
                    <circle cx="676" cy="63" r="5" fill="#4a4a4a" filter="url(#sk)"/>
                    <path d="M576,52 Q582,41 588,52 Q594,41 600,52 Q606,41 612,52 Q618,41 624,52 Q630,41 636,52 Q642,41 648,52 Q654,41 660,52 Q666,41 672,52"
                          fill="none" stroke="#1a1a1a" strokeWidth="2.4" filter="url(#sk)"/>
                    <text x="622" y="130" textAnchor="middle"
                          fontFamily="'Courier New',monospace" fontSize="13"
                          fill="#383838" letterSpacing="2">M·02</text>
                  </g>
                </svg>
              </div>
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
            <button onClick={scrollLeft} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-reyowa-green transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            
             <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-0 md:px-12 hide-scrollbar">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-72 md:w-96 aspect-square rounded-2xl overflow-hidden group relative">
                  <img 
                    src={`/assets/image${i + 1}.jpg`} 
                    alt={`Örnek Çalışma ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => setSelectedImage(`/assets/image${i + 1}.jpg`)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white text-5xl md:text-7xl font-black opacity-50 rotate-[-30deg] select-none">ÖRNEK</span>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={scrollRight} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-reyowa-green transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative cursor-default flex items-center justify-center"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 z-10 bg-black/80 text-white p-3 rounded-full hover:bg-black transition-colors shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-8 md:py-12 px-4 md:px-6 border-t-[16px] border-reyowa-green relative">
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4 md:gap-12 mb-6 md:mb-10">
          <div className="w-20 md:w-32 flex-shrink-0">
            <img 
               src="/logo.png" 
               alt="REYOWA Logo" 
               className="w-full h-auto brightness-125 saturate-150 scale-[0.77] origin-left"
             />
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 md:gap-2">
            <a
              href="https://reyowa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-base md:text-lg font-bold opacity-70 hover:opacity-100 hover:text-reyowa-green transition-all duration-300"
            >
              reyowa.com
            </a>
            <a
              href="https://oakberry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm md:text-base font-bold opacity-70 hover:opacity-100 hover:text-reyowa-green transition-all duration-300"
            >
              oakberry.com
            </a>
          </div>
          <div className="w-20 md:w-32 flex-shrink-0">
            <img 
               src="/atersist.png" 
               alt="Tersane İstanbul" 
               className="w-full h-auto scale-[0.77] origin-right"
             />
          </div>
        </div>
        
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex items-center gap-2">
          <span className="text-[12px] font-light tracking-wider opacity-60">Powered by</span>
          <img 
            src="/weiss-logo.png" 
            alt="WEISS" 
            className="h-[12px] w-auto opacity-[0.70] -translate-y-0.5"
          />
        </div>
      </footer>
    </div>
  );
}
