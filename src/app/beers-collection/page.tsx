"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MagnetLines from '@/components/MagnetLines.jsx';

const beers = [
  {
    name: "HEFEWEIZEN",
    type: "Standard",
    colour: "Rich golden",
    flavour: "Banana, clove, refreshing",
    abv: "5.30%",
    ibu: "12",
    description: "Traditional Bavarian wheat beer with a cloudy appearance and fruity/clove aromas from a unique yeast strain.",
    awards: ["Beer of India: Bronze (2022)"],
    image: "/Beer/Hefenweizen.png"
  },
  {
    name: "HELLES LAGER",
    type: "Standard",
    colour: "Straw yellow",
    flavour: "Clean, mildly sweet, low bitterness",
    abv: "4.90%",
    ibu: "20",
    description: "A light and crisp traditional Bavarian 'bright' Lager with restrained bitterness and a malty finish.",
    awards: ["Beer of India: Gold (2022, 2023)", "Asia Beer Championship: Silver (2022)", "Asia Beer Championship: Bronze (2024)", "Chairman Selection (2021)"],
    image: "/Beer/helles.png"
  },
  {
    name: "NEIPA",
    type: "New England IPA",
    colour: "Hazy, deep golden",
    flavour: "Fruity, low bitterness, full body",
    abv: "6.80%",
    ibu: "25",
    description: "A modern, unfiltered IPA with pronounced tropical/stone fruit hop aroma and a full, sweet malt body.",
    awards: ["Beer of India: Silver (2023)", "Asia Beer Championship: Chairman Selection (2022)"],
    image: "/Beer/neipa.png"
  },
  {
    name: "PILSNER",
    type: "Standard",
    colour: "Clear Light Gold",
    flavour: "Soft, low sweet and bitter",
    abv: "4.80%",
    ibu: "30",
    description: "Easy drinking, light, crisp, and refreshing traditional Czech Pilsner with a clean flavour.",
    awards: [],
    image: "/Beer/pilsner.png"
  },
  {
    name: "WEIZENBOCK",
    type: "Standard",
    colour: "Amber",
    flavour: "Malty, creamy, banana, clove, caramel",
    abv: "7.00%",
    ibu: "26",
    description: "The strong, malty 'big brother' to Hefeweizen, combining wheat beer flavours with the richness of a Bock.",
    awards: ["Beer of India: Gold (2023)"],
    image: "/Beer/Weizen.png"
  },
  {
    name: "RAUCHBIER",
    type: "Standard",
    colour: "Reddish amber",
    flavour: "Smokey, toasty, campfire",
    abv: "5.60%",
    ibu: "24",
    description: "Elegant, malty German lager with a balanced beechwood smoke character from smoked barley malt.",
    awards: [],
    image: "/Beer/Rauchbier.png"
  },
  {
    name: "DOPPELBOCK",
    type: "Standard",
    colour: "Chestnut Brown",
    flavour: "Clean, toasty, dark fruits",
    abv: "7.10%",
    ibu: "32",
    description: "A strong, very rich German Lager with deep malt flavours and hints of toasty aromas and dried fruits.",
    awards: [],
    image: "/Beer/12.png"
  },
  {
    name: "KOLSCH",
    type: "Standard",
    colour: "Straw yellow",
    flavour: "Fruity, mild bitterness",
    abv: "5.20%",
    ibu: "26",
    description: "A clear, pale gold ale from Cologne, Germany with delicate fruit notes and a soft, dry finish.",
    awards: [],
    image: "/Beer/13.png"
  },
  {
    name: "WEST COAST IPA",
    type: "Standard",
    colour: "Golden Yellow",
    flavour: "Intensely hoppy, low bitterness",
    abv: "6.60%",
    ibu: "45",
    description: "A classic IPA with intense hop aroma, medium body, and noticeable bitterness.",
    awards: [],
    image: "/Beer/14.png"
  },
  {
    name: "STOUT",
    type: "Standard",
    colour: "Dark brown",
    flavour: "Roasty, nutty, coffee, dark chocolate",
    abv: "4.80%",
    ibu: "32",
    description: "American stout with bold roasted malt, dark chocolate/coffee flavours, and a velvety, creamy texture.",
    awards: ["Asia Beer Championship: Chairman Selection (2021)"],
    image: "/Beer/15.png"
  },
  {
    name: "COLD BREW STOUT",
    type: "Special",
    colour: "Chocolate brown",
    flavour: "Roasty, nutty, coffee, dark chocolate",
    abv: "4.80%",
    ibu: "32",
    description: "Our award-winning stout blended with in-house cold brew from single-estate coffee beans.",
    awards: [],
    image: "/Beer/16.png"
  },
  {
    name: "BERLINER WEISSE",
    type: "Sour",
    colour: "Pale yellow",
    flavour: "Mild sourness",
    abv: "4.00%",
    ibu: "12",
    description: "A German sour wheat beer from Berlin, with a light color and mild sourness from special cultures.",
    awards: ["Asia Beer Championship: Silver (2024)"],
    image: "/Beer/17.png"
  },
  {
    name: "MANGO WEISSE",
    type: "Seasonal Sour",
    colour: "Chrome yellow",
    flavour: "Mango explosion, mild sourness",
    abv: "4.00%",
    ibu: "12",
    description: "Our Berliner Weisse generously infused with Alphonso Mango for a smooth, fruity experience.",
    awards: [],
    image: "/Beer/berliner.png"
  },
  {
    name: "TAMARIND SOUR",
    type: "Seasonal Sour",
    colour: "Dark Golden",
    flavour: "Tamarind, Chilli, Sour",
    abv: "4.00%",
    ibu: "12",
    description: "A unique Berliner Weisse infused with tangy tamarind and dried red chilies for a spicy kick.",
    awards: [],
    image: "/Beer/berliner.png"
  },
  {
    name: "MANGO HEFE",
    type: "Seasonal",
    colour: "Yellow-Orange",
    flavour: "Hint of Mango, hefeweizen notes",
    abv: "5.20%",
    ibu: "12",
    description: "A classic Hefeweizen with a delicate, complementary aroma of Totapuri and Alphonso mangoes.",
    awards: [],
    image: "/Beer/Hefenweizen.png"
  },
  {
    name: "MILLET LAGER",
    type: "Collaboration",
    colour: "Golden",
    flavour: "Earthy, refreshing",
    abv: "4.90%",
    ibu: "17",
    description: "A crisp lager blending Maharashtra's golden millet (30%) with Bavarian Pilsner malt (70%).",
    awards: [],
    image: "/Beer/helles.png"
  },
  {
    name: "AMBER ALE",
    type: "Seasonal",
    colour: "Orange to amber",
    flavour: "Caramel, toffee, red fruits",
    abv: "6.20%",
    ibu: "27",
    description: "An American ale with sweet caramel/toffee flavours balanced by a generous dose of fruity American hops.",
    awards: [],
    image: "/Beer/12.png"
  },
  {
    name: "WC WHEAT ALE",
    type: "Collaboration",
    colour: "Lemony Yellow",
    flavour: "Fruity",
    abv: "5.50%",
    ibu: "29",
    description: "American-style wheat beer dry-hopped with Falconers Flight for a fruity, fresh, and refreshing bitterness.",
    awards: [],
    image: "/Beer/wcip.png"
  },
  {
    name: "MARZEN",
    type: "Seasonal",
    colour: "Amber to copper",
    flavour: "Toasted bread",
    abv: "6.20%",
    ibu: "27",
    description: "A rich Bavarian lager with notes of toasted bread, traditionally served at Oktoberfest.",
    awards: [],
    image: "/Beer/12.png"
  },
  {
    name: "BLACK IPA",
    type: "Collaboration",
    colour: "Deep brown to black",
    flavour: "Hop explosion, dark fruits",
    abv: "6.50%",
    ibu: "45",
    description: "A highly drinkable black IPA with a strong hop aroma of blackcurrant and blackberry.",
    awards: [],
    image: "/Beer/stout.png"
  },
  {
    name: "MEAD",
    type: "Standard",
    colour: "Pale yellow",
    flavour: "Honey notes, fizzy, mild sweet finish",
    abv: "5.60%",
    ibu: "N/A",
    description: "A mildly sweet, honey-based alcoholic drink similar to sparkling wine.",
    awards: [],
    image: "/Beer/helles.png"
  },
  {
    name: "AMBROSIA MEAD",
    type: "Special",
    colour: "Purple",
    flavour: "Mixed Berry",
    abv: "5.60%",
    ibu: "N/A",
    description: "Honey-based mead infused with a combination of mixed berry and blue pea flower.",
    awards: [],
    image: "/Beer/neipa.png"
  }
];

export default function BeersCollectionPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("All");
  const [hoveredBeer, setHoveredBeer] = useState<string | null>(null);

  const handleBeerClick = (beerName: string) => {
    const slug = beerName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/beers/${slug}`);
  };

  // Get unique beer types for filtering
  const beerTypes = ["All", ...Array.from(new Set(beers.map(b => b.type)))];

  // Filter beers based on selected type
  const filteredBeers = filter === "All" 
    ? beers 
    : beers.filter(b => b.type === filter);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Magnetic field lines background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-40">
        <MagnetLines
          rows={32}
          columns={28}
          containerSize="100vw"
          lineColor="rgba(246, 246, 191, 0.15)"
          lineWidth="1.2px"
          lineHeight="5vmin"
          baseAngle={0}
          style={{ margin: "0" }}
        />
      </div>

      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/#beers" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group">
            <motion.svg 
              className="w-6 h-6 group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </motion.svg>
            <span className="text-lg font-medium" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>Back to Home</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-wider" 
            style={{ fontFamily: 'modesto-condensed, serif' }}
          >
            BEER COLLECTION
          </motion.h1>
          <div className="w-32 text-right">
            
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-[1600px] mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>
              Explore our complete collection of handcrafted beers, each brewed with precision and passion following authentic Bavarian traditions
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {beerTypes.map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === type
                    ? 'bg-white text-black shadow-lg shadow-white/20'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}
                style={{ fontFamily: 'kobenhavn-c, sans-serif' }}
              >
                {type}
              </motion.button>
            ))}
          </motion.div>

          {/* Beer Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredBeers.map((beer, index) => (
              <motion.div
                key={beer.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 group-hover:border-gray-400/50 rounded-2xl overflow-hidden cursor-pointer group relative transition-all duration-300"
                onClick={() => handleBeerClick(beer.name)}
                onMouseEnter={() => setHoveredBeer(beer.name)}
                onMouseLeave={() => setHoveredBeer(null)}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-500/0 via-gray-500/0 to-gray-500/0 group-hover:from-gray-500/20 group-hover:via-gray-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-gray-500/5 to-zinc-500/10"></div>
                </div>
                
                {/* Beer Image */}
                <div className="relative h-62 bg-gradient-to-b from-black/60 to-black/20 flex items-center justify-center overflow-hidden">
                  {beer.image ? (
                    <motion.div
                      animate={{
                        scale: hoveredBeer === beer.name ? 1.3 : 1.1,
                        rotate: hoveredBeer === beer.name ? 8 : 0
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative w-52 h-52"
                    >
                      <Image
                        src={beer.image}
                        alt={beer.name}
                        fill
                        className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                        quality={100}
                      />
                    </motion.div>
                  ) : (
                    <div className="w-40 h-40 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center border-2 border-white/20">
                      <span className="text-xl font-bold text-center px-4" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>
                        {beer.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Beer Info */}
                <div className="p-6 space-y-4 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: 'modesto-condensed, serif' }}>
                        {beer.name}
                      </h3>
                      {/* Type badge */}
                      <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20 group-hover:border-gray-400/60 group-hover:bg-gray-500/10 transition-all duration-300 text-xs text-gray-400 group-hover:text-gray-300" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>
                        {beer.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>
                      {beer.colour}
                    </p>
                  </div>

                  {/* Specs - Compact Grid */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gradient-to-br from-white/5 to-white/0 rounded-lg p-3 border border-white/10 group-hover:border-gray-400/60 group-hover:bg-gray-500/5 transition-all duration-300">
                      <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>ABV</p>
                      <p className="font-bold text-lg group-hover:text-gray-300 transition-colors" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.abv}</p>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-white/5 to-white/0 rounded-lg p-3 border border-white/10 group-hover:border-gray-400/60 group-hover:bg-gray-500/5 transition-all duration-300">
                      <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>IBU</p>
                      <p className="font-bold text-lg group-hover:text-gray-300 transition-colors" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.ibu}</p>
                    </div>
                  </div>

                  {/* Flavor Profile */}
                  <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-lg p-3 border border-white/10 group-hover:border-gray-400/60 group-hover:bg-gray-500/5 transition-all duration-300">
                    <p className="text-gray-500 text-xs mb-1 group-hover:text-gray-400 transition-colors" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>Flavor Profile</p>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.flavour}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>
                    {beer.description}
                  </p>

                  {/* Awards Badge */}
                  {beer.awards && beer.awards.length > 0 && (
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500/20 to-amber-700/20 rounded-full flex items-center justify-center border border-amber-500/30">
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="text-xs text-amber-400" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>
                        {beer.awards.length} Award{beer.awards.length > 1 ? 's' : ''}
                      </div>
                    </div>
                  )}

                  {/* Learn More Arrow */}
                  <div className="pt-3 flex items-center justify-between text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    <span className="text-sm font-medium" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>View Details</span>
                    <motion.svg 
                      className="w-5 h-5"
                      animate={{
                        x: hoveredBeer === beer.name ? 8 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
