export interface Hotspot {
  id: string;
  xPercent: number;
  yPercent: number;
  side: 'left' | 'right';
  title: string;
  detail: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string[];
  features: string[];
  specs: Record<string, string>;
  textureImage: string;
  images: string[];
  hotspots?: Hotspot[];
}

export const productsData: Record<string, Product> = {
  'michael-angelo': {
    slug: 'michael-angelo',
    name: 'Michael Angelo',
    category: 'Exotic Marble',
    description: [
      'Michael Angelo Marble is a masterwork of natural stone design, defined by its dramatic sweeping patterns, vibrant tonal contrast, and artistic visual rhythm. Every slab features a unique arrangement of deep hues and graceful veining that commands instant attention.',
      'Inspired by classical artistry and built for contemporary luxury, this stone converts plain architecture into an expressive masterpiece. Ideal for bold feature elements and high-end residential or commercial spaces.'
    ],
    features: [
      'Striking artistic patterns with high visual contrast.',
      'Smooth, highly polishable surface that accentuates natural detail.',
      'Adds immediate sophistication to modern and classical interiors.',
      'High resistance to wear when properly sealed and maintained.'
    ],
    specs: {
      'Material Type': 'Exotic Italian-Style Marble',
      'Applications': 'Feature Walls, Luxury Flooring, Countertops, Reception Desks, Accent Panels',
      'Finish Options': 'Polished, Honed'
    },
    textureImage: '/assets/images/products/michael-angelo/texturebg.png',
    images: [
      '/assets/images/products/michael-angelo/01.png',
      '/assets/images/products/michael-angelo/02.png',
      '/assets/images/products/michael-angelo/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 20, yPercent: 25, side: 'left', title: 'Flowing Veining', detail: 'Sweeping natural golden-brown veining running diagonally across the slab.' },
      { id: '2', xPercent: 25, yPercent: 75, side: 'left', title: 'A Grade Quality', detail: 'High-density marble matrix ensuring zero micro-fractures and mirror polish.' },
      { id: '3', xPercent: 78, yPercent: 30, side: 'right', title: 'Natural Art', detail: 'Unique organic mineral deposits formed over millions of years.' },
      { id: '4', xPercent: 82, yPercent: 72, side: 'right', title: 'Masterpiece Slab', detail: 'Hand-selected slab cut ideal for book-matched feature wall installations.' }
    ]
  },
  'pearl-white': {
    slug: 'pearl-white',
    name: 'Pearl White',
    category: 'White Marble',
    description: [
      'Pearl White Marble showcases a luminous white backdrop infused with delicate pearlescent tones and soft subtle veining. It reflects ambient light beautifully, filling rooms with brightness, clarity, and open atmosphere.',
      'Its clean aesthetic makes it a favorite choice for minimalist designs, spacious living areas, and high-end bathroom vanity units.'
    ],
    features: [
      'Bright pearlescent white tone with soft subtle veining.',
      'High light reflective index to make spaces feel bigger and brighter.',
      'Durable structure ideal for residential and commercial flooring.',
      'Versatile aesthetic matching both light and dark interior accents.'
    ],
    specs: {
      'Material Type': 'Premium White Marble',
      'Applications': 'Flooring, Bathroom Cladding, Countertops, Staircases',
      'Finish Options': 'Polished, Satin, Matte'
    },
    textureImage: '/assets/images/products/pearl-white/texturebg.png',
    images: [
      '/assets/images/products/pearl-white/01.png',
      '/assets/images/products/pearl-white/02.png',
      '/assets/images/products/pearl-white/03.png',
      '/assets/images/products/pearl-white/04.png',
      '/assets/images/products/pearl-white/05.png'
    ],
    hotspots: [
      { id: '1', xPercent: 22, yPercent: 28, side: 'left', title: 'Pearlescent Luster', detail: 'Subtle light reflection that illuminates interior spaces softly.' },
      { id: '2', xPercent: 26, yPercent: 70, side: 'left', title: 'A Grade Quality', detail: 'Ultra-pure white calcite composition with uniform crystal density.' },
      { id: '3', xPercent: 75, yPercent: 32, side: 'right', title: 'Natural Art', detail: 'Whisper-thin silver grey veining providing elegant depth.' },
      { id: '4', xPercent: 80, yPercent: 74, side: 'right', title: 'Masterpiece Finish', detail: 'High-gloss mirror polish for luxurious flooring and vanity tops.' }
    ]
  },
  'lilac-white': {
    slug: 'lilac-white',
    name: 'Lilac White',
    category: 'White Marble',
    description: [
      'Lilac White Marble is renowned for its crystalline white surface accented by striking purple and bluish-grey spider veining. Its dramatic geometric lines create a distinct designer statement in any luxury interior.',
      'Highly valued by architects and interior decorators for book-matched feature walls and statement island countertops.'
    ],
    features: [
      'Distinctive violet-grey veining over a clean white background.',
      'Ideal for book-matching to form captivating symmetrical wall art.',
      'Smooth polish finish that enhances depth and light reflection.',
      'Adds a touch of rare elegance to boutique commercial and home spaces.'
    ],
    specs: {
      'Material Type': 'Natural White Marble',
      'Applications': 'Feature Walls, Bathroom Vanities, Tabletops, Decorative Panels',
      'Finish Options': 'Polished'
    },
    textureImage: '/assets/images/products/lilac-white/texturebg.png',
    images: [
      '/assets/images/products/lilac-white/01.png',
      '/assets/images/products/lilac-white/02.png',
      '/assets/images/products/lilac-white/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 20, yPercent: 25, side: 'left', title: 'Lilac Spider Veining', detail: 'Intricate purple-grey branching veins unique to Lilac marble.' },
      { id: '2', xPercent: 28, yPercent: 72, side: 'left', title: 'A Grade Quality', detail: 'Non-porous crystalline body resistant to moisture and staining.' },
      { id: '3', xPercent: 76, yPercent: 28, side: 'right', title: 'Natural Art', detail: 'Bold linear contrast creating striking geometric visual focal points.' },
      { id: '4', xPercent: 82, yPercent: 70, side: 'right', title: 'Masterpiece Cut', detail: 'Precision-cut 20mm slab thickness ready for seamless installation.' }
    ]
  },
  'bynkoy-white': {
    slug: 'bynkoy-white',
    name: 'Bynkoy White',
    category: 'White Marble',
    description: [
      'Bynkoy White Marble provides a serene, creamy white aesthetic with subtle organic veining. Its harmonious tone creates a peaceful, timeless environment suitable for both grand halls and cozy living rooms.',
      'It combines durability with effortless maintenance, making it an essential stone for everyday luxury.'
    ],
    features: [
      'Soft creamy white base with minimal organic veining.',
      'Uniform texture ideal for expansive flooring applications.',
      'Excellent thermal and structural durability.',
      'Timeless appeal that outlasts changing design trends.'
    ],
    specs: {
      'Material Type': 'White Calcite Marble',
      'Applications': 'Main Hall Flooring, Staircases, Wall Cladding',
      'Finish Options': 'Polished, Honed'
    },
    textureImage: '/assets/images/products/bynkoy-white/texturebg.png',
    images: [
      '/assets/images/products/bynkoy-white/01.png',
      '/assets/images/products/bynkoy-white/02.png',
      '/assets/images/products/bynkoy-white/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 22, yPercent: 26, side: 'left', title: 'Creamy Tone', detail: 'Warm undertones that soften lighting and enhance room warmth.' },
      { id: '2', xPercent: 24, yPercent: 74, side: 'left', title: 'A Grade Quality', detail: 'Homogeneous slab structure ideal for high foot traffic areas.' },
      { id: '3', xPercent: 74, yPercent: 30, side: 'right', title: 'Natural Art', detail: 'Delicate clouds of natural mineral variation.' },
      { id: '4', xPercent: 78, yPercent: 72, side: 'right', title: 'Masterpiece Slab', detail: 'Calibrated surface for zero-gap floor alignment.' }
    ]
  },
  'exotic-marble': {
    slug: 'exotic-marble',
    name: 'Exotic Marble',
    category: 'Exotic Marble',
    description: [
      'Exotic Marble is a premium natural stone celebrated for its dramatic patterns, bold color variations, and luxurious surface texture. Each slab carries a unique blend of natural formations, making it a standout choice for high-end interior spaces.',
      'Its rich visual depth and striking veining make it perfect for projects that demand exclusivity, character, and timeless elegance. Whether used in modern or classic settings, this marble instantly transforms any area into a statement feature.'
    ],
    features: [
      'Distinctive natural veining and bold color variations.',
      'Premium stone ideal for luxurious and artistic interior designs.',
      'Perfect for creating high-impact feature walls and statement surfaces.',
      'Polishes exceptionally well for a refined, glossy appearance.',
      'Strong and durable composition suitable for long-term installations.'
    ],
    specs: {
      'Material Type': 'Exotic Premium Marble',
      'Applications': 'Feature Walls, Countertops, Flooring, Luxury Bathrooms, Interior Accents'
    },
    textureImage: '/assets/images/products/exotic-marble/texturebg.png',
    images: [
      '/assets/images/products/exotic-marble/01.png',
      '/assets/images/products/exotic-marble/02.png',
      '/assets/images/products/exotic-marble/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 20, yPercent: 24, side: 'left', title: 'Statuario Variation', detail: 'Bold charcoal and slate veining cutting across crystalline white stone.' },
      { id: '2', xPercent: 25, yPercent: 72, side: 'left', title: 'A Grade Quality', detail: 'First-choice slab cut with zero resin fills or structural flaws.' },
      { id: '3', xPercent: 78, yPercent: 28, side: 'right', title: 'Natural Art', detail: 'Captivating wave patterns created over millennia of tectonic metamorphism.' },
      { id: '4', xPercent: 82, yPercent: 74, side: 'right', title: 'Master Piece', detail: 'Ideal centerpiece stone for luxury villa entrances and feature walls.' }
    ]
  },
  'pentagoria': {
    slug: 'pentagoria',
    name: 'Pentagoria Marble',
    category: 'Exotic Marble',
    description: [
      'Pentagoria Marble features a captivating mesh of geometry and natural earthen tones. Its distinctive crystalline structure creates high visual depth under natural and indoor illumination.',
      'Crafted by nature over millions of years, Pentagoria brings warmth, character, and grandeur to sophisticated architectural projects.'
    ],
    features: [
      'Rich multi-tonal grain with dynamic earthen veining.',
      'High density and polish longevity.',
      'Perfect for grand lobbies and luxury wall paneling.',
      'Complements timber, gold, and bronze interior elements.'
    ],
    specs: {
      'Material Type': 'Exotic Earthen Marble',
      'Applications': 'Lobby Flooring, Wall Paneling, Fireplace Surrounds',
      'Finish Options': 'Polished, Antique Finish'
    },
    textureImage: '/assets/images/products/pentagoria/texturebg.png',
    images: [
      '/assets/images/products/pentagoria/01.png',
      '/assets/images/products/pentagoria/02.png',
      '/assets/images/products/pentagoria/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 20, yPercent: 25, side: 'left', title: 'Geometric Grain', detail: 'Natural crystalline geometry producing 3D visual depth.' },
      { id: '2', xPercent: 26, yPercent: 74, side: 'left', title: 'A Grade Quality', detail: 'Dense earthen marble body crafted for high-traffic prestige spaces.' },
      { id: '3', xPercent: 76, yPercent: 30, side: 'right', title: 'Natural Art', detail: 'Warm bronze and terracotta mineral hues.' },
      { id: '4', xPercent: 80, yPercent: 72, side: 'right', title: 'Masterpiece Slab', detail: 'Polished to a deep mirror reflection that amplifies spatial grandeur.' }
    ]
  },
  'bluecutmarble': {
    slug: 'bluecutmarble',
    name: 'Blue Cut Side Marble',
    category: 'Exotic Marble',
    description: [
      'Blue Cut Side Marble offers a dramatic aesthetic with deep oceanic blue tones infused with silver and grey linear cuts. It offers an exclusive color signature found in rare quarry formations.',
      'Ideal for homeowners and commercial spaces seeking a statement stone that stands out from conventional marbles.'
    ],
    features: [
      'Striking blue and steel-grey coloration with crisp linear veining.',
      'Highly prized for contemporary executive spaces and luxury bars.',
      'Stain-resistant finish when sealed appropriately.',
      'Creates a cool, soothing, and high-end ambiance.'
    ],
    specs: {
      'Material Type': 'Exotic Blue Marble',
      'Applications': 'Bar Counters, Feature Walls, Bathroom Accents',
      'Finish Options': 'Polished, High-Gloss'
    },
    textureImage: '/assets/images/products/bluemarble/texturebg.png',
    images: [
      '/assets/images/products/bluemarble/01.png',
      '/assets/images/products/bluemarble/02.png',
      '/assets/images/products/bluemarble/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 21, yPercent: 26, side: 'left', title: 'Oceanic Blue Bands', detail: 'Rare natural blue mineral bands formed in specialized geological zones.' },
      { id: '2', xPercent: 25, yPercent: 72, side: 'left', title: 'A Grade Quality', detail: 'Diamond-cut linear precision for sleek contemporary installations.' },
      { id: '3', xPercent: 75, yPercent: 29, side: 'right', title: 'Natural Art', detail: 'Shimmering steel-grey linear strata.' },
      { id: '4', xPercent: 82, yPercent: 70, side: 'right', title: 'Masterpiece Stone', detail: 'Exclusive quarry batch with high color saturation.' }
    ]
  },
  'panna-white': {
    slug: 'panna-white',
    name: 'Panna White',
    category: 'White Marble',
    description: [
      'Panna White Marble is characterized by an ultra-clean milky white surface with subtle mint-emerald undertones. It evokes pure elegance and tranquility.',
      'Extremely popular for modern residential villa flooring and luxurious spa-inspired master bathrooms.'
    ],
    features: [
      'Milky white surface with subtle refreshing undertones.',
      'Exceptionally uniform color consistency across slabs.',
      'Smooth texture that feels cool and luxurious underfoot.',
      'Resistant to moisture and ideal for wet areas.'
    ],
    specs: {
      'Material Type': 'Dolomitic White Marble',
      'Applications': 'Villa Flooring, Spa Bathrooms, Kitchen Backsplashes',
      'Finish Options': 'Polished, Satin'
    },
    textureImage: '/assets/images/products/panna white/texturebg.png',
    images: [
      '/assets/images/products/panna white/01.png',
      '/assets/images/products/panna white/02.png',
      '/assets/images/products/panna white/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 20, yPercent: 25, side: 'left', title: 'Mint Emerald Glow', detail: 'Subtle emerald mineral undertones radiating natural freshness.' },
      { id: '2', xPercent: 26, yPercent: 72, side: 'left', title: 'A Grade Quality', detail: 'Zero porous cavities; optimal for spa floors and wet areas.' },
      { id: '3', xPercent: 76, yPercent: 30, side: 'right', title: 'Natural Art', detail: 'Pure, cloudless milky matrix of high white purity.' },
      { id: '4', xPercent: 80, yPercent: 74, side: 'right', title: 'Masterpiece Slab', detail: 'High thermal conductivity for radiant floor heating systems.' }
    ]
  },
  'pink-pentagon': {
    slug: 'pink-pentagon',
    name: 'Pink Pentagon',
    category: 'Coloured Marble',
    description: [
      'Pink Pentagon Marble brings warmth, romance, and subtle geometric flair to interior design. Its soft rosy pink hues are accented by natural quartz clusters and pentagonal mineral bands.',
      'Ideal for creating inviting, artistic spaces with a gentle touch of color.'
    ],
    features: [
      'Soft pastel pink base with crystalline quartz formations.',
      'Brings warmth and unique artistic character to living spaces.',
      'Durable and suitable for wall paneling and ornamental items.',
      'Polishes to a rich, warm glow.'
    ],
    specs: {
      'Material Type': 'Coloured Marble',
      'Applications': 'Wall Cladding, Vanity Tops, Decorative Surfaces',
      'Finish Options': 'Polished'
    },
    textureImage: '/assets/images/products/pink pentagon/texturebg.jpg',
    images: [
      '/assets/images/products/pink pentagon/01.png',
      '/assets/images/products/pink pentagon/02.png',
      '/assets/images/products/pink pentagon/03.jpg'
    ],
    hotspots: [
      { id: '1', xPercent: 22, yPercent: 28, side: 'left', title: 'Pastel Rose Tone', detail: 'Soft pink hue infused with natural quartz crystals.' },
      { id: '2', xPercent: 25, yPercent: 70, side: 'left', title: 'A Grade Quality', detail: 'Vibrant color stability that will not fade under indoor lighting.' },
      { id: '3', xPercent: 75, yPercent: 32, side: 'right', title: 'Natural Art', detail: 'Unique pentagonal crystalline mineral clusters.' },
      { id: '4', xPercent: 81, yPercent: 72, side: 'right', title: 'Masterpiece Slab', detail: 'Exquisite surface texture designed for boutique vanity focal points.' }
    ]
  },
  'blue-pentagon': {
    slug: 'blue-pentagon',
    name: 'Blue Pentagon',
    category: 'Exotic Marble',
    description: [
      'Blue Pentagon Marble combines deep sapphire hues with crystalline geometric veins, reflecting the serene beauty of natural mineral deposits.',
      'A masterpiece of stone that effortlessly enhances luxury interior concepts, corporate boardrooms, and boutique hotels.'
    ],
    features: [
      'Deep navy and sapphire tones with white quartz veining.',
      'Exclusive color profile for bespoke architectural projects.',
      'High structural density and stain resistance.',
      'Visually captivating under warm spotlighting.'
    ],
    specs: {
      'Material Type': 'Exotic Blue Marble',
      'Applications': 'Executive Desks, Accent Walls, Luxury Washrooms',
      'Finish Options': 'Polished'
    },
    textureImage: '/assets/images/products/blue pentagon/texturebg.png',
    images: [
      '/assets/images/products/blue pentagon/01.png',
      '/assets/images/products/blue pentagon/02.png',
      '/assets/images/products/blue pentagon/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 20, yPercent: 25, side: 'left', title: 'Sapphire Matrix', detail: 'Deep navy background with brilliant white quartz lightning veins.' },
      { id: '2', xPercent: 24, yPercent: 73, side: 'left', title: 'A Grade Quality', detail: 'Extremely high hardness index offering scratch resistance.' },
      { id: '3', xPercent: 77, yPercent: 30, side: 'right', title: 'Natural Art', detail: 'Geometric pentagonal mineral structures within the stone.' },
      { id: '4', xPercent: 82, yPercent: 72, side: 'right', title: 'Masterpiece Slab', detail: 'Stunning accent choice for executive desks and feature walls.' }
    ]
  },
  'pink-alaska': {
    slug: 'pink-alaska',
    name: 'Pink Alaska Marble',
    category: 'Coloured Marble',
    description: [
      'Pink Alaska Marble features frosty rose and ice-white veining blended seamlessly into a breathtaking glacier-like pattern. It combines strength with gentle aesthetic grace.',
      'Widely used in high-end residence foyers and elegant fireplace surrounds.'
    ],
    features: [
      'Frosty pink and snow-white swirling patterns.',
      'Resistant to high foot traffic when installed as flooring.',
      'Unique glacial appearance that enhances light ambiance.',
      'Low porosity and easy maintenance.'
    ],
    specs: {
      'Material Type': 'Coloured Calcite Marble',
      'Applications': 'Foyer Flooring, Fireplace Surrounds, Countertops',
      'Finish Options': 'Polished, Honed'
    },
    textureImage: '/assets/images/products/pink alaska/texturebg.png',
    images: [
      '/assets/images/products/pink alaska/01.png',
      '/assets/images/products/pink alaska/02.png',
      '/assets/images/products/pink alaska/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 20, yPercent: 26, side: 'left', title: 'Glacial Swirls', detail: 'Ice-white and frosty rose swirls resembling glacial formations.' },
      { id: '2', xPercent: 26, yPercent: 72, side: 'left', title: 'A Grade Quality', detail: 'Tough calcite matrix suited for high foot traffic foyer floors.' },
      { id: '3', xPercent: 76, yPercent: 28, side: 'right', title: 'Natural Art', detail: 'Luminous translucent quartz crystals that catch ambient light.' },
      { id: '4', xPercent: 80, yPercent: 74, side: 'right', title: 'Masterpiece Cut', detail: 'Perfect for grand fireplace surrounds and entrance halls.' }
    ]
  },
  'saturnova': {
    slug: 'saturnova',
    name: 'Saturnova Marble',
    category: 'Exotic Marble',
    description: [
      'Saturnova Marble gets its name from its cosmic ring-like veining and rich metallic bronze and grey swirls. It represents the pinnacle of luxury natural stone.',
      'Perfect for creating unforgettable hotel receptions, executive suites, and luxury living rooms.'
    ],
    features: [
      'Cosmic ring veining with rich metallic grey and bronze accents.',
      'Unmatched visual depth and prestige.',
      'Exceptional hardness and long-lasting surface polish.',
      'Perfect for bold, dramatic interior design themes.'
    ],
    specs: {
      'Material Type': 'Exotic Metamorphic Marble',
      'Applications': 'Reception Walls, VIP Lounges, Executive Boardrooms',
      'Finish Options': 'Polished'
    },
    textureImage: '/assets/images/products/saturnova/texturebg.png',
    images: [
      '/assets/images/products/saturnova/01.png',
      '/assets/images/products/saturnova/02.png',
      '/assets/images/products/saturnova/03.png'
    ],
    hotspots: [
      { id: '1', xPercent: 21, yPercent: 24, side: 'left', title: 'Cosmic Ring Vein', detail: 'Concentric metallic ring veining reminiscent of planetary rings.' },
      { id: '2', xPercent: 25, yPercent: 74, side: 'left', title: 'A Grade Quality', detail: 'Ultra-dense metamorphic structure with maximum stain resistance.' },
      { id: '3', xPercent: 78, yPercent: 30, side: 'right', title: 'Natural Art', detail: 'Rich metallic bronze and graphite swirls.' },
      { id: '4', xPercent: 82, yPercent: 72, side: 'right', title: 'Masterpiece Slab', detail: 'Dramatic statement stone designed for high-impact VIP spaces.' }
    ]
  }
};
