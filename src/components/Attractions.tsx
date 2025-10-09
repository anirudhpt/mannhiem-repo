"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MagnetLines from './MagnetLines.jsx';

const beers = [
  {
    name: "HEFEWEIZEN",
    type: "Standard",
    colour: "Rich golden",
    flavour: "Banana, clove, refreshing",
    abv: "5.30%",
    ibu: "12",
    description: "Traditional Bavarian wheat beer with a cloudy appearance and fruity/clove aromas from a unique yeast strain.",
    awards: ["🥉 Beer of India: Bronze (2022)"]
  },
  {
    name: "HELLES LAGER",
    type: "Standard",
    colour: "Straw yellow",
    flavour: "Clean, mildly sweet, low bitterness",
    abv: "4.90%",
    ibu: "20",
    description: "A light and crisp traditional Bavarian 'bright' Lager with restrained bitterness and a malty finish.",
    awards: ["🥇 Beer of India: Gold (2022, 2023)", "🥈 Asia Beer Championship: Silver (2022)", "🥉 Asia Beer Championship: Bronze (2024)", "🏅 Chairman Selection (2021)"]
  },
  {
    name: "NEIPA",
    type: "New England IPA",
    colour: "Hazy, deep golden",
    flavour: "Fruity, low bitterness, full body",
    abv: "6.80%",
    ibu: "25",
    description: "A modern, unfiltered IPA with pronounced tropical/stone fruit hop aroma and a full, sweet malt body.",
    awards: ["🥈 Beer of India: Silver (2023)", "🏅 Asia Beer Championship: Chairman Selection (2022)"]
  },
  {
    name: "PILSNER",
    type: "Standard",
    colour: "Clear Light Gold",
    flavour: "Soft, low sweet and bitter",
    abv: "4.80%",
    ibu: "30",
    description: "Easy drinking, light, crisp, and refreshing traditional Czech Pilsner with a clean flavour.",
    awards: []
  },
  {
    name: "WEIZENBOCK",
    type: "Standard",
    colour: "Amber",
    flavour: "Malty, creamy, banana, clove, caramel",
    abv: "7.00%",
    ibu: "26",
    description: "The strong, malty 'big brother' to Hefeweizen, combining wheat beer flavours with the richness of a Bock.",
    awards: ["🥇 Beer of India: Gold (2023)"]
  },
  {
    name: "RAUCHBIER",
    type: "Standard",
    colour: "Reddish amber",
    flavour: "Smokey, toasty, campfire",
    abv: "5.60%",
    ibu: "24",
    description: "Elegant, malty German lager with a balanced beechwood smoke character from smoked barley malt.",
    awards: []
  },
  {
    name: "DOPPELBOCK",
    type: "Standard",
    colour: "Chestnut Brown",
    flavour: "Clean, toasty, dark fruits",
    abv: "7.10%",
    ibu: "32",
    description: "A strong, very rich German Lager with deep malt flavours and hints of toasty aromas and dried fruits.",
    awards: []
  },
  {
    name: "KOLSCH",
    type: "Standard",
    colour: "Straw yellow",
    flavour: "Fruity, mild bitterness",
    abv: "5.20%",
    ibu: "26",
    description: "A clear, pale gold ale from Cologne, Germany with delicate fruit notes and a soft, dry finish.",
    awards: []
  },
  {
    name: "WEST COAST IPA",
    type: "Standard",
    colour: "Golden Yellow",
    flavour: "Intensely hoppy, low bitterness",
    abv: "6.60%",
    ibu: "45",
    description: "A classic IPA with intense hop aroma, medium body, and noticeable bitterness.",
    awards: []
  },
  {
    name: "STOUT",
    type: "Standard",
    colour: "Dark brown",
    flavour: "Roasty, nutty, coffee, dark chocolate",
    abv: "4.80%",
    ibu: "32",
    description: "American stout with bold roasted malt, dark chocolate/coffee flavours, and a velvety, creamy texture.",
    awards: ["🏅 Asia Beer Championship: Chairman Selection (2021)"]
  },
  {
    name: "COLD BREW STOUT",
    type: "Special",
    colour: "Chocolate brown",
    flavour: "Roasty, nutty, coffee, dark chocolate",
    abv: "4.80%",
    ibu: "32",
    description: "Our award-winning stout blended with in-house cold brew from single-estate coffee beans.",
    awards: []
  },
  {
    name: "BERLINER WEISSE",
    type: "Sour",
    colour: "Pale yellow",
    flavour: "Mild sourness",
    abv: "4.00%",
    ibu: "12",
    description: "A German sour wheat beer from Berlin, with a light color and mild sourness from special cultures.",
    awards: ["🥈 Asia Beer Championship: Silver (2024)"]
  },
  {
    name: "MANGO WEISSE",
    type: "Seasonal Sour",
    colour: "Chrome yellow",
    flavour: "Mango explosion, mild sourness",
    abv: "4.00%",
    ibu: "12",
    description: "Our Berliner Weisse generously infused with Alphonso Mango for a smooth, fruity experience.",
    awards: []
  },
  {
    name: "TAMARIND SOUR",
    type: "Seasonal Sour",
    colour: "Dark Golden",
    flavour: "Tamarind, Chilli, Sour",
    abv: "4.00%",
    ibu: "12",
    description: "A unique Berliner Weisse infused with tangy tamarind and dried red chilies for a spicy kick.",
    awards: []
  },
  {
    name: "MANGO HEFE",
    type: "Seasonal",
    colour: "Yellow-Orange",
    flavour: "Hint of Mango, hefeweizen notes",
    abv: "5.20%",
    ibu: "12",
    description: "A classic Hefeweizen with a delicate, complementary aroma of Totapuri and Alphonso mangoes.",
    awards: []
  },
  {
    name: "MILLET LAGER",
    type: "Collaboration",
    colour: "Golden",
    flavour: "Earthy, refreshing",
    abv: "4.90%",
    ibu: "17",
    description: "A crisp lager blending Maharashtra's golden millet (30%) with Bavarian Pilsner malt (70%).",
    awards: []
  },
  {
    name: "AMBER ALE",
    type: "Seasonal",
    colour: "Orange to amber",
    flavour: "Caramel, toffee, red fruits",
    abv: "6.20%",
    ibu: "27",
    description: "An American ale with sweet caramel/toffee flavours balanced by a generous dose of fruity American hops.",
    awards: []
  },
  {
    name: "WC WHEAT ALE",
    type: "Collaboration",
    colour: "Lemony Yellow",
    flavour: "Fruity",
    abv: "5.50%",
    ibu: "29",
    description: "American-style wheat beer dry-hopped with Falconers Flight for a fruity, fresh, and refreshing bitterness.",
    awards: []
  },
  {
    name: "MARZEN",
    type: "Seasonal",
    colour: "Amber to copper",
    flavour: "Toasted bread",
    abv: "6.20%",
    ibu: "27",
    description: "A rich Bavarian lager with notes of toasted bread, traditionally served at Oktoberfest.",
    awards: []
  },
  {
    name: "BLACK IPA",
    type: "Collaboration",
    colour: "Deep brown to black",
    flavour: "Hop explosion, dark fruits",
    abv: "6.50%",
    ibu: "45",
    description: "A highly drinkable black IPA with a strong hop aroma of blackcurrant and blackberry.",
    awards: []
  },
  {
    name: "MEAD",
    type: "Standard",
    colour: "Pale yellow",
    flavour: "Honey notes, fizzy, mild sweet finish",
    abv: "5.60%",
    ibu: "N/A",
    description: "A mildly sweet, honey-based alcoholic drink similar to sparkling wine.",
    awards: []
  },
  {
    name: "AMBROSIA MEAD",
    type: "Special",
    colour: "Purple",
    flavour: "Mixed Berry",
    abv: "5.60%",
    ibu: "N/A",
    description: "Honey-based mead infused with a combination of mixed berry and blue pea flower.",
    awards: []
  }
];

export default function OurBeers() {
  const [hoveredBeer, setHoveredBeer] = useState<string | null>(null);
  const router = useRouter();

  // Show only the first 12 beers (the ones with images)
  const displayedBeers = beers.slice(0, 12);

  // Function to handle beer click and navigate to individual beer page
  const handleBeerClick = (beerName: string) => {
    const slug = beerName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/beers/${slug}`);
  };

  // Function to get adjacent beer indices in the grid (6x2 grid)
  const getAdjacentIndices = (currentIndex: number) => {
    const columns = 6;
    const row = Math.floor(currentIndex / columns);
    const col = currentIndex % columns;
    const adjacentIndices = [];

    // Check all 8 directions (including diagonals)
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue; // Skip current cell
        const newRow = row + dr;
        const newCol = col + dc;
        if (newRow >= 0 && newRow < Math.ceil(displayedBeers.length / columns) && newCol >= 0 && newCol < columns) {
          const newIndex = newRow * columns + newCol;
          if (newIndex < displayedBeers.length) {
            adjacentIndices.push(newIndex);
          }
        }
      }
    }
    return adjacentIndices;
  };

  return (
    <section id="beers" className="scroll-section bg-black relative overflow-hidden">

      {/* Magnetic field lines background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <MagnetLines
          rows={32}
          columns={28}
          containerSize="100vw"
          lineColor="rgba(255, 253, 253, 0.25)"
          lineWidth="1.2px"
          lineHeight="5vmin"
          baseAngle={0}
          style={{ margin: "0" }}
        />
      </div>
      
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-4" style={{ fontFamily: 'modesto-condensed, serif' }}>
            MANNHEIM MANIFEST
          </h2>
        </motion.div>

        {/* Grid layout for beer circles - 6x2 centered grid */}
        <div className="grid grid-cols-6 gap-x-16 gap-y-8 w-full max-w-7xl mx-auto px-12 mb-12">
          {displayedBeers.map((beer, index) => {
            const hoveredIndex = hoveredBeer ? displayedBeers.findIndex(b => b.name === hoveredBeer) : -1;
            const isHovered = hoveredBeer === beer.name;
            const adjacentIndices = hoveredIndex !== -1 ? getAdjacentIndices(hoveredIndex) : [];
            const isAdjacent = adjacentIndices.includes(index);
            
            return (
              <motion.div
                key={beer.name}
                className="flex justify-center items-center cursor-pointer perspective-1000"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                onMouseEnter={() => setHoveredBeer(beer.name)}
                onMouseLeave={() => setHoveredBeer(null)}
              >
                <motion.div
                  className="relative w-36 h-36 preserve-3d"
                  animate={{
                    rotateY: isHovered ? 180 : 0,
                    scale: isHovered ? 1.4 : isAdjacent ? 0.95 : 1,
                    zIndex: isHovered ? 50 : 1
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  onClick={() => handleBeerClick(beer.name)}
                >
                  {/* Front side - Beer name circle */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-black/80 rounded-full flex items-center justify-center border-2 border-white/30 hover:border-white/60 transition-all duration-300 overflow-hidden">
                    {beer.name === "HEFEWEIZEN" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/Hefenweizen.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "HELLES LAGER" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/helles.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "NEIPA" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/neipa.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "PILSNER" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/pilsner.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "RAUCHBIER" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/Rauchbier.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "WEIZENBOCK" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/Weizen.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-4"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "DOPPELBOCK" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/12.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "KOLSCH" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/13.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "WEST COAST IPA" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/14.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "STOUT" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/15.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "COLD BREW STOUT" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/16.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : beer.name === "BERLINER WEISSE" ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="/Beer/17.png"
                          alt={beer.name}
                          fill
                          className="object-contain scale-145 translate-y-3"
                          quality={100}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <span className={`text-white font-medium text-center px-1 ${isHovered ? 'text-sm' : isAdjacent ? 'text-sm' : 'text-base'}`} style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>
                        {beer.name}
                      </span>
                    )}
                  </div>
                  
                  {/* Back side - Beer information */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-neutral-800/95 to-black/95 rounded-full flex flex-col items-center justify-center border-2 border-white/70 shadow-inner">
                    <div className="flex flex-col items-center justify-center h-full w-full p-8">
                      {/* Small info boxes */}
                      <div className="flex justify-center gap-2 mb-3">
                        {/* ABV Box */}
                        <div className="bg-gradient-to-b from-gray-400/20 to-gray-600/10 border border-white/50 rounded-md px-1.5 py-1 min-w-[32px] shadow-sm backdrop-blur-sm">
                          <div className="text-[6px] text-gray-300 uppercase tracking-wider font-semibold text-center" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>ABV</div>
                          <div className="text-[9px] text-white font-bold leading-none text-center mt-0.5" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.abv}</div>
                        </div>
                        
                        {/* IBU Box */}
                        <div className="bg-gradient-to-b from-gray-400/20 to-gray-600/10 border border-white/50 rounded-md px-1.5 py-1 min-w-[32px] shadow-sm backdrop-blur-sm">
                          <div className="text-[6px] text-gray-300 uppercase tracking-wider font-semibold text-center" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>IBU</div>
                          <div className="text-[9px] text-white font-bold leading-none text-center mt-0.5" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.ibu}</div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="text-[7px] text-gray-300 leading-relaxed text-center max-w-[115px] opacity-90" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>
                        {beer.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore All Collection Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-gray-700 border border-gray-600/50 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-gray-700/25 backdrop-blur-sm"
            style={{ fontFamily: 'kobenhavn-c, sans-serif' }}
            onClick={() => {
              router.push('/beers-collection');
            }}
            suppressHydrationWarning
          >
            EXPLORE ALL COLLECTION
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}