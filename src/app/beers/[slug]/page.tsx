"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

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

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BeerPage({ params }: PageProps) {
  const { slug } = use(params);
  
  // Convert slug back to beer name
  const beerName = slug.toUpperCase().replace(/-/g, ' ');
  const beer = beers.find(b => b.name === beerName);

  if (!beer) {
    notFound();
  }

  // Dominant colors extracted from actual beer image logos (excluding black/grey/white)
  const getImageTheme = (beerName: string) => {
    switch (beerName) {
      case 'HEFEWEIZEN':
        // From Hefenweizen.png - rich golden yellow from the beer circle logo
        return {
          primary: 'from-yellow-400/30 to-black',
          border: 'border-yellow-400/40',
          accent: 'text-white'
        };
      case 'HELLES LAGER':
        // From helles.png - sky blue from the actual logo
        return {
          primary: 'from-sky-400/30 to-black',
          border: 'border-sky-400/40',
          accent: 'text-white'
        };
      case 'NEIPA':
        // From neipa.png - olive green from the actual logo
        return {
          primary: 'from-green-600/30 to-black',
          border: 'border-green-600/40',
          accent: 'text-white'
        };
      case 'PILSNER':
        // From pilsner.png - light blue from the actual logo
        return {
          primary: 'from-blue-400/30 to-black',
          border: 'border-blue-400/40',
          accent: 'text-white'
        };
      case 'WEIZENBOCK':
        // From Weizen.png - golden yellow from the actual logo
        return {
          primary: 'from-yellow-600/30 to-black',
          border: 'border-yellow-600/40',
          accent: 'text-white'
        };
      case 'RAUCHBIER':
        // From Rauchbier.png - deep red from the actual logo
        return {
          primary: 'from-red-700/30 to-black',
          border: 'border-red-700/40',
          accent: 'text-white'
        };
      case 'DOPPELBOCK':
        // From 12.png - golden amber from the actual logo
        return {
          primary: 'from-amber-500/30 to-black',
          border: 'border-amber-500/40',
          accent: 'text-white'
        };
      case 'KOLSCH':
        // From 13.png - pink/rose from the actual logo
        return {
          primary: 'from-pink-400/30 to-black',
          border: 'border-pink-400/40',
          accent: 'text-white'
        };
      case 'WEST COAST IPA':
        // From 14.png - lime green from the actual logo
        return {
          primary: 'from-lime-500/30 to-black',
          border: 'border-lime-500/40',
          accent: 'text-white'
        };
      case 'STOUT':
        // From 15.png - orange from the actual logo
        return {
          primary: 'from-orange-500/30 to-black',
          border: 'border-orange-500/40',
          accent: 'text-white'
        };
      case 'COLD BREW STOUT':
        // From 16.png - brown from the actual logo
        return {
          primary: 'from-amber-700/30 to-black',
          border: 'border-amber-700/40',
          accent: 'text-white'
        };
      case 'BERLINER WEISSE':
        // From 17.png - coral/pink from the actual logo
        return {
          primary: 'from-orange-400/30 to-black',
          border: 'border-orange-400/40',
          accent: 'text-white'
        };
      default:
        return {
          primary: 'from-amber-500/30 to-black',
          border: 'border-amber-500/40',
          accent: 'text-white'
        };
    }
  };

  const theme = getImageTheme(beer.name);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Fixed viewport container optimized for 1920x1080 */}
      <div className="w-screen h-screen max-w-[1920px] max-h-[1080px] mx-auto relative">
        
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-8 left-8 z-50"
        >
          <Link href="/#beers" className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-lg font-medium" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>Back to Beers</span>
          </Link>
        </motion.div>

        {/* Main content grid - optimized for 1920x1080 */}
        <div className="grid grid-cols-2 h-full">
          
          {/* Left side - Beer Image with interactive effects */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-center p-12"
          >
            {beer.image ? (
              <motion.div 
                className="relative w-[500px] h-[500px]"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={beer.image}
                  alt={beer.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  quality={100}
                  priority
                />
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.primary} opacity-20 rounded-full blur-3xl -z-10`}></div>
              </motion.div>
            ) : (
              <div className="w-[500px] h-[500px] bg-gradient-to-br from-neutral-800 to-black rounded-full flex items-center justify-center border-2 border-white/30">
                <span className="text-4xl font-bold text-center px-4" style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>
                  {beer.name}
                </span>
              </div>
            )}
          </motion.div>

          {/* Right side - Beer Information */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col justify-center p-8 space-y-4"
          >
            
            {/* Beer Name & Type */}
            <div>
              <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: 'modesto-condensed, serif' }}>
                {beer.name}
              </h1>
              <p className="text-lg text-gray-300" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>
                {beer.type}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-b ${theme.primary} p-3 rounded-lg border ${theme.border} shadow-lg`}
              >
                <h3 className="text-xs text-gray-300 mb-1" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>ABV</h3>
                <p className={`text-xl font-bold ${theme.accent}`} style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.abv}</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-b ${theme.primary} p-3 rounded-lg border ${theme.border} shadow-lg`}
              >
                <h3 className="text-xs text-gray-300 mb-1" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>IBU</h3>
                <p className={`text-xl font-bold ${theme.accent}`} style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.ibu}</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-b ${theme.primary} p-3 rounded-lg border ${theme.border} shadow-lg`}
              >
                <h3 className="text-xs text-gray-300 mb-1" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>Color</h3>
                <p className={`text-base font-medium ${theme.accent}`} style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.colour}</p>
              </motion.div>
            </div>

            {/* Flavor Profile */}
            <motion.div 
              className={`bg-gradient-to-b ${theme.primary} p-4 rounded-lg border ${theme.border} shadow-lg`}
            >
              <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>Flavor Profile</h3>
              <p className={`text-base ${theme.accent}`} style={{ fontFamily: 'kobenhavn-c, sans-serif' }}>{beer.flavour}</p>
            </motion.div>

            {/* Description */}
            <motion.div 
              className={`bg-gradient-to-b ${theme.primary} p-4 rounded-lg border ${theme.border} shadow-lg`}
            >
              <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>Description</h3>
              <p className="text-sm leading-relaxed text-gray-200" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>
                {beer.description}
              </p>
            </motion.div>

            {/* Awards */}
            {beer.awards && beer.awards.length > 0 && (
              <motion.div 
                className={`bg-gradient-to-b ${theme.primary} p-4 rounded-lg border ${theme.border} shadow-lg`}
              >
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>Awards & Recognition</h3>
                <div className="space-y-1">
                  {beer.awards.map((award, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-2 p-2 bg-black/20 rounded border border-white/10"
                    >
                      <span className="text-xs" style={{ fontFamily: 'modesto-light-condensed, sans-serif' }}>{award}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </div>
  );
}