const plants = [
 {
 "id": 1,
 "name": "Jackfruit",
 "bengali": "কাঁঠাল",
 "sci": "Artocarpus heterophyllus",
 "family": "Moraceae",
 "type": "fruit",
 "emoji": "",
 "bg": "#fff8e1",
 "habitat": "Lowland, gardens",
 "season": "April–July",
 "height": "8–25 m",
 "dist": "Nationwide",
 "desc": "Jackfruit is the national fruit of Bangladesh, widely cultivated throughout the country. It produces the world's largest tree-borne fruit, with rough green exterior and sweet yellow or white pods inside. Deeply woven into Bangladeshi culture and cuisine.",
 "uses": "Eaten fresh, cooked as vegetable when unripe. Seeds roasted or boiled. Leaves used as cattle fodder. Wood used for furniture and musical instruments. Latex has medicinal uses.",
 "conservation": "Least Concern. Widely cultivated; not threatened."
 },
 {
 "id": 2,
 "name": "Mango",
 "bengali": "আম",
 "sci": "Mangifera indica",
 "family": "Anacardiaceae",
 "type": "fruit",
 "emoji": "",
 "bg": "#fff3cd",
 "habitat": "Gardens, plains",
 "season": "May–July",
 "height": "10–40 m",
 "dist": "Rajshahi, Chapai, Nationwide",
 "desc": "Known as the 'King of Fruits', mango is one of the most beloved fruits in Bangladesh. Rajshahi and Chapai Nawabganj districts are famous for premium varieties like Himsagar, Langra, and Fazli.",
 "uses": "Eaten fresh, as pickles (achar), juice, dried mango leather (amsatta). Leaves used in rituals. Bark and seed kernels have medicinal uses. Wood used in carpentry.",
 "conservation": "Least Concern. Extensively cultivated."
 },
 {
 "id": 3,
 "name": "Banana",
 "bengali": "কলা",
 "sci": "Musa acuminata",
 "family": "Musaceae",
 "type": "fruit",
 "emoji": "",
 "bg": "#fffde7",
 "habitat": "Riverbanks, gardens",
 "season": "Year-round",
 "height": "2–8 m",
 "dist": "Nationwide",
 "desc": "One of Bangladesh's most important staple fruits. Multiple varieties are grown including Sabri, Champa, and Amritsagar. The entire plant is utilized — fruit, flower, stem, and leaves.",
 "uses": "Fruit eaten fresh or cooked. Flowers cooked as vegetable. Leaves used as plates. Stem used in Ayurvedic medicine. Fiber from stem used in handicrafts.",
 "conservation": "Least Concern. Major commercial crop."
 },
 {
 "id": 4,
 "name": "Coconut",
 "bengali": "নারিকেল",
 "sci": "Cocos nucifera",
 "family": "Arecaceae",
 "type": "tree",
 "emoji": "",
 "bg": "#e8f5e9",
 "habitat": "Coastal, riverbanks",
 "season": "Year-round",
 "height": "25–30 m",
 "dist": "Coastal districts, Barisal",
 "desc": "The coconut palm is a vital tree in Bangladesh's coastal regions, especially in Barisal, Khulna, and Cox's Bazar. Called the 'tree of life', virtually every part is useful to coastal communities.",
 "uses": "Coconut water and flesh consumed fresh. Copra oil for cooking and cosmetics. Coir fiber from husk for rope and mats. Shell for fuel and handicrafts. Leaves for thatching.",
 "conservation": "Least Concern. Widely cultivated."
 },
 {
 "id": 5,
 "name": "Neem",
 "bengali": "নিম",
 "sci": "Azadirachta indica",
 "family": "Meliaceae",
 "type": "medicinal",
 "emoji": "",
 "bg": "#e8f5e9",
 "habitat": "Roadsides, villages",
 "season": "March–May (flowers)",
 "height": "15–20 m",
 "dist": "Nationwide",
 "desc": "Known as the 'village pharmacy' of Bangladesh, neem is revered for its extensive medicinal properties. Nearly every Bangladeshi village has neem trees. The tree has deep cultural significance in traditional medicine.",
 "uses": "Leaves used for skin diseases, fever, and diabetes. Neem oil as natural pesticide. Twigs as toothbrush (datun). Seeds yield biopesticide. Bark treats malaria. Widely used in Ayurveda and Unani medicine.",
 "conservation": "Least Concern. Protected in many areas."
 },
 {
 "id": 6,
 "name": "Turmeric",
 "bengali": "হলুদ",
 "sci": "Curcuma longa",
 "family": "Zingiberaceae",
 "type": "herb",
 "emoji": "",
 "bg": "#fff9c4",
 "habitat": "Farmlands, gardens",
 "season": "August–December",
 "height": "0.6–1 m",
 "dist": "Nationwide",
 "desc": "Turmeric is one of the most widely used spices and medicinal herbs in Bangladesh. The bright yellow rhizome is a cornerstone of Bangladeshi cooking and traditional medicine, used daily in virtually every household.",
 "uses": "Essential spice in cooking. Anti-inflammatory and antioxidant medicine. Used in religious ceremonies and beauty treatments. Fabric dye. Treats skin conditions, digestive issues, and wounds.",
 "conservation": "Least Concern. Extensively cultivated."
 },
 {
 "id": 7,
 "name": "Water Lily (Shapla)",
 "bengali": "শাপলা",
 "sci": "Nymphaea nouchali",
 "family": "Nymphaeaceae",
 "type": "flower",
 "emoji": "",
 "bg": "#fce4ec",
 "habitat": "Ponds, rivers, wetlands",
 "season": "June–November",
 "height": "Aquatic",
 "dist": "Nationwide",
 "desc": "Shapla, the white water lily, is the national flower of Bangladesh. It blooms across countless ponds, rivers, and wetlands during the monsoon season. This flower is a powerful cultural and national symbol.",
 "uses": "Flowers and young stems eaten as vegetables. Rhizomes consumed. Used in traditional medicine for dysentery and fever. Important for aquatic ecosystems. Featured on the national emblem.",
 "conservation": "Least Concern. Found abundantly in wetlands."
 },
 {
 "id": 8,
 "name": "Rice",
 "bengali": "ধান",
 "sci": "Oryza sativa",
 "family": "Poaceae",
 "type": "crop",
 "emoji": "",
 "bg": "rgb(249, 251, 231)",
 "habitat": "Paddy fields, floodplains",
 "season": "Varies by variety",
 "height": "0.6–1.8 m",
 "dist": "Nationwide",
 "desc": "Rice is the staple food of Bangladesh and the country's most important crop. Bangladesh has developed flood-tolerant, drought-resistant, and salinity-resistant varieties. The culture of rice cultivation is central to Bangladeshi identity.",
 "uses": "Primary food source for 170 million people. Rice bran oil. Rice straw for cattle fodder, thatching, and paper. Puffed rice (muri) is a popular snack. Used in religious ceremonies and festivals.",
 "conservation": "Least Concern. Over 7,000 varieties cultivated."
 },
 {
 "id": 9,
 "name": "Jute",
 "bengali": "পাট",
 "sci": "Corchorus olitorius",
 "family": "Tiliaceae",
 "type": "crop",
 "emoji": "",
 "bg": "#e8f5e9",
 "habitat": "Floodplains, moist soils",
 "season": "April–August",
 "height": "2–4 m",
 "dist": "Faridpur, Mymensingh, Rangpur",
 "desc": "Known as the 'Golden Fiber of Bangladesh', jute is the country's second most important crop after rice. Bangladesh was once the world's largest jute exporter and remains a top producer of natural jute fiber.",
 "uses": "Primary source of natural fiber for sacks, ropes, mats, textiles. Biodegradable packaging. Young leaves eaten as vegetable (pat shak). Jute sticks used as fuel. Increasingly used in eco-friendly products.",
 "conservation": "Least Concern. Major commercial crop."
 },
 {
 "id": 10,
 "name": "Papaya",
 "bengali": "পেঁপে",
 "sci": "Carica papaya",
 "family": "Caricaceae",
 "type": "fruit",
 "emoji": "",
 "bg": "#fff8e1",
 "habitat": "Gardens, backyards",
 "season": "Year-round",
 "height": "2–10 m",
 "dist": "Nationwide",
 "desc": "Papaya is one of the most commonly grown fruits in Bangladesh, cultivated in backyards and farms nationwide. Both unripe and ripe fruits are used extensively in Bangladeshi cuisine.",
 "uses": "Unripe papaya cooked as vegetable. Ripe fruit eaten fresh and in juice. Leaves used to tenderize meat. Papain enzyme from latex used medicinally and industrially. Seeds have anti-parasitic properties.",
 "conservation": "Least Concern. Widely cultivated."
 },
 {
 "id": 11,
 "name": "Guava",
 "bengali": "পেয়ারা",
 "sci": "Psidium guajava",
 "family": "Myrtaceae",
 "type": "fruit",
 "emoji": "",
 "bg": "#f1f8e9",
 "habitat": "Gardens, farmlands",
 "season": "August–October",
 "height": "3–8 m",
 "dist": "Pirojpur, Nationwide",
 "desc": "Guava is a beloved tropical fruit in Bangladesh, particularly famous in Pirojpur district. The crunchy white or pink-fleshed fruits are enjoyed fresh and are popular street food.",
 "uses": "Fruit eaten fresh, in juices, jams, and jellies. Rich in Vitamin C. Leaves used to treat diarrhea and diabetes. Bark used for dyeing and tanning. Wood used as fuel.",
 "conservation": "Least Concern. Widely cultivated."
 },
 {
 "id": 12,
 "name": "Betel Leaf",
 "bengali": "পান",
 "sci": "Piper betle",
 "family": "Piperaceae",
 "type": "vine",
 "emoji": "",
 "bg": "#e8f5e9",
 "habitat": "Shaded gardens",
 "season": "Year-round",
 "height": "Vine (1–3 m)",
 "dist": "Nationwide",
 "desc": "Betel leaf (paan) holds deep cultural significance in Bangladesh, used in traditional hospitality, religious ceremonies, and as a mild stimulant. Betel cultivation (barisal and Madaripur famous) is a major livelihood.",
 "uses": "Chewed with areca nut, lime, and spices as a mild stimulant. Used in religious offerings. Antiseptic and anti-inflammatory properties. Treats oral infections and halitosis. Fundamental to Bengali culture.",
 "conservation": "Least Concern. Extensively cultivated."
 },
 {
 "id": 13,
 "name": "Hibiscus",
 "bengali": "জবা",
 "sci": "Hibiscus rosa-sinensis",
 "family": "Malvaceae",
 "type": "flower",
 "emoji": "",
 "bg": "#fce4ec",
 "habitat": "Gardens",
 "season": "Year-round",
 "height": "1–5 m",
 "dist": "Nationwide",
 "desc": "Hibiscus (Joba) is one of the most commonly grown ornamental flowers in Bangladesh. The large, vibrant red flowers are used in religious worship, especially by Hindus, and in traditional medicine.",
 "uses": "Flowers used in Hindu religious worship. Petals used to make herbal tea, shampoo, and hair oil. Treats hair loss and scalp conditions. Flowers eaten in salads. Dye and cosmetic ingredient.",
 "conservation": "Least Concern. Widely cultivated."
 },
 {
 "id": 14,
 "name": "Bael Fruit",
 "bengali": "বেল",
 "sci": "Aegle marmelos",
 "family": "Rutaceae",
 "type": "fruit",
 "emoji": "",
 "bg": "#fff8e1",
 "habitat": "Dry forests, temples",
 "season": "April–June",
 "height": "8–15 m",
 "dist": "Nationwide",
 "desc": "Bael is a sacred fruit tree in Bangladesh, associated with Hindu worship of Lord Shiva. The hard-shelled fruit contains aromatic pulp with exceptional medicinal properties.",
 "uses": "Pulp eaten fresh or as juice (bel sherbet — popular summer drink). Treats diarrhea, dysentery, and digestive disorders. Used in worship. Root, bark, and leaves all used medicinally.",
 "conservation": "Least Concern. Widely cultivated, especially near temples."
 },
 {
 "id": 15,
 "name": "Tulsi",
 "bengali": "তুলসী",
 "sci": "Ocimum tenuiflorum",
 "family": "Lamiaceae",
 "type": "medicinal",
 "emoji": "",
 "bg": "#e8f5e9",
 "habitat": "Gardens, temples",
 "season": "Year-round",
 "height": "0.3–1 m",
 "dist": "Nationwide",
 "desc": "Holy Basil (Tulsi) is sacred in Hindu culture and widely used in traditional Bangladeshi medicine. Almost every Hindu household maintains a Tulsi plant in the courtyard as a sacred symbol.",
 "uses": "Leaves and juice treat colds, fevers, and respiratory disorders. Adaptogen — reduces stress. Antibacterial and antiviral. Used in worship and religious ceremonies. Tulsi tea for immunity.",
 "conservation": "Least Concern. Widely cultivated."
 },
 {
 "id": 16,
 "name": "Aloe Vera",
 "bengali": "ঘৃতকুমারী",
 "sci": "Aloe barbadensis",
 "family": "Asphodelaceae",
 "type": "medicinal",
 "emoji": "",
 "bg": "#e8f5e9",
 "habitat": "Gardens, dry areas",
 "season": "Year-round",
 "height": "0.3–0.9 m",
 "dist": "Nationwide",
 "desc": "Aloe vera is widely grown in Bangladesh for its medicinal and cosmetic properties. The thick succulent leaves contain a clear gel used extensively in skin care and traditional medicine.",
 "uses": "Gel treats burns, skin conditions, and wounds. Used in hair care and cosmetics. Treats digestive disorders. Juice consumed for immunity and detox. Used in beauty industry.",
 "conservation": "Least Concern. Widely cultivated."
 },
 {
 "id": 17,
 "name": "Chili",
 "bengali": "মরিচ",
 "sci": "Capsicum annuum",
 "family": "Solanaceae",
 "type": "crop",
 "emoji": "",
 "bg": "#fce4ec",
 "habitat": "Farmlands, gardens",
 "season": "October–March",
 "height": "0.5–1.5 m",
 "dist": "Bogra, Nationwide",
 "desc": "Chili is indispensable in Bangladeshi cuisine, used in virtually every cooked dish. Bangladesh grows both fresh green chilies and dried red chilies. Bogra is a major chili-growing district.",
 "uses": "Essential spice in all Bangladeshi cooking. Rich in Vitamin C and capsaicin. Treats pain (topical). Antimicrobial properties. Chili paste (bhorta) — popular dish. Both fresh and dried used.",
 "conservation": "Least Concern. Major commercial crop."
 },
 {
 "id": 18,
 "name": "Eggplant",
 "bengali": "বেগুন",
 "sci": "Solanum melongena",
 "family": "Solanaceae",
 "type": "crop",
 "emoji": "",
 "bg": "#e8eaf6",
 "habitat": "Gardens, farmlands",
 "season": "Year-round",
 "height": "0.5–1.5 m",
 "dist": "Nationwide",
 "desc": "Eggplant (Begun) is one of the most versatile and widely consumed vegetables in Bangladesh, available year-round. It is used in countless ways in Bangladeshi cuisine.",
 "uses": "Cooked in curries, fried (begun bhaaji), made into begun bhorta (mashed roasted eggplant — very popular). Rich in antioxidants. Treats diabetes and high cholesterol.",
 "conservation": "Least Concern. Major vegetable crop."
 },
 {
 "id": 19,
 "name": "Kadam",
 "bengali": "কদম",
 "sci": "Neolamarckia cadamba",
 "family": "Rubiaceae",
 "type": "tree",
 "emoji": "",
 "bg": "#fff9c4",
 "habitat": "Riverbanks, forests",
 "season": "June–August (flowers)",
 "height": "20–45 m",
 "dist": "Nationwide",
 "desc": "The Kadam tree is deeply embedded in Bangladeshi culture, associated with monsoon, romance, and the birth of Lord Krishna. Its golden ball-shaped flowers bloom at the onset of the rainy season.",
 "uses": "Flowers used in garlands and religious ceremonies. Timber used in construction and plywood. Bark treats fever and malaria. Leaves used as cattle fodder. Cultural and poetic symbol of monsoon.",
 "conservation": "Least Concern."
 },
 {
 "id": 20,
 "name": "Banyan Tree",
 "bengali": "বট গাছ",
 "sci": "Ficus benghalensis",
 "family": "Moraceae",
 "type": "tree",
 "emoji": "",
 "bg": "#e8f5e9",
 "habitat": "Roadsides, villages",
 "season": "Year-round",
 "height": "20–30 m (spreads widely)",
 "dist": "Nationwide",
 "desc": "The Banyan tree (Bot gach) is a magnificent tree that spreads through aerial roots, sometimes covering vast areas. It is a sacred tree in Bangladesh, often the center of village life and community gatherings.",
 "uses": "Sacred tree — site of religious worship. Provides extensive shade. Aerial roots used medicinally for arthritis. Latex used as glue. Leaves used as cattle fodder. Important for biodiversity.",
 "conservation": "Least Concern. Protected in many areas."
 }
];

// PLANT EXTRA DATA 
const plantExtra = {
 "1": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "Fruits ripen April–July. Unripe fruit available year-round. Trees begin fruiting 3–8 years after planting."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Nationwide; highest concentration in Dhaka, Gazipur, Mymensingh, Sylhet, and Chittagong Hill Tracts."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "March–April (summer) or September–October (monsoon). Seeds or grafted saplings used."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "Bangladesh produces ~1.5 million metric tons/year — one of top 3 globally."
 }
 ],
 "varieties": [
 {
 "name": "Khaja (খাজা)",
 "best": true,
 "why": "Crispy texture, very sweet, long shelf life — most popular for fresh eating and export."
 },
 {
 "name": "Gala (গালা)",
 "best": false,
 "why": "Soft, syrupy flesh, intensely sweet. Best eaten fresh but spoils quickly."
 },
 {
 "name": "Rudrakhhi (রুদ্রাক্ষী)",
 "best": false,
 "why": "Medium size, uniform pods — preferred for unripe vegetable cooking (echorer tarkari)."
 },
 {
 "name": "Dhanshiri",
 "best": false,
 "why": "Large fruit, excellent flavor, widely grown in Sylhet."
 },
 {
 "name": "Baromasi (বারোমাসী)",
 "best": false,
 "why": "Fruits throughout the year — valued for continuous supply."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Watering",
 "text": "Water young trees twice weekly. Mature trees need irrigation only in dry season (Nov–Feb). Avoid waterlogging."
 },
 {
 "icon": "",
 "label": "Soil",
 "text": "Deep loamy or alluvial soil, pH 6.0–7.5. Excellent drainage essential. Avoid clay-heavy soils."
 },
 {
 "icon": "",
 "label": "Pruning",
 "text": "Remove dead or crossing branches after harvest. Thin crowded canopy every 2–3 years to improve air circulation."
 },
 {
 "icon": "",
 "label": "Fertilizing",
 "text": "Apply compost and NPK (10:10:10) twice yearly — at planting and pre-fruit season. Add zinc and boron micronutrients."
 },
 {
 "icon": "",
 "label": "Sunlight",
 "text": "Full sun required (6+ hours daily). Shade reduces fruiting significantly."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Mealybugs",
 "text": "Spray neem oil (5ml/L water) or insecticidal soap. Ants farming mealybugs can be deterred with sticky bands on trunk."
 },
 {
 "icon": "",
 "label": "Fruit Rot (Rhizopus)",
 "text": "Remove infected fruits immediately. Spray copper oxychloride (0.3%) before and during fruit development."
 },
 {
 "icon": "",
 "label": "Fruit Borer",
 "text": "Use pheromone traps. Bag individual fruits with newspaper after fruit set. Apply Malathion if severe."
 },
 {
 "icon": "",
 "label": "Leaf Webber",
 "text": "Prune and burn infested branches. Spray chlorpyrifos (2ml/L) during early infestation."
 }
 ]
 },
 "2": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "May–July (main season). Some varieties like Baramasi produce twice yearly. Trees fruit 4–6 years after planting."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Rajshahi (60% of production), Chapai Nawabganj, Natore, Dinajpur, Satkhira. Famous 'Mango Belt' of Bangladesh."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "June–August (monsoon) best. Grafted saplings preferred for earlier fruiting and true-to-type production."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "Bangladesh produces ~1.2 million metric tons/year. Major export destination: Middle East and Europe."
 }
 ],
 "varieties": [
 {
 "name": "Himsagar (হিমসাগর)",
 "best": true,
 "why": " BEST — Exceptionally sweet, saffron-colored flesh, no fiber, intoxicating aroma. The gold standard of Bangladeshi mangoes."
 },
 {
 "name": "Langra (লাংড়া)",
 "best": false,
 "why": "Rich, turpentine-free flavor. Greenish even when ripe. Very popular for eating fresh."
 },
 {
 "name": "Fazli (ফজলি)",
 "best": false,
 "why": "Largest mango variety. Late season (July). Mild sweet flavor, long shelf life."
 },
 {
 "name": "Khirsapat (ক্ষীরসাপাতি)",
 "best": false,
 "why": "Extremely sweet, juicy. Rivals Himsagar in sweetness. Slightly earlier season."
 },
 {
 "name": "Ashwina (আশ্বিনা)",
 "best": false,
 "why": "Late variety (August). Round shape. Good for longer availability after main season ends."
 },
 {
 "name": "Gopalbhog",
 "best": false,
 "why": "Small, very sweet, aromatic. Limited growing area but high demand."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Watering",
 "text": "Critical irrigation March–May (flowering/fruiting). Avoid overwatering in monsoon. Young trees need 2x weekly."
 },
 {
 "icon": "",
 "label": "Pruning",
 "text": "Prune immediately after harvest (July–August). Remove water shoots, crossing branches, diseased wood."
 },
 {
 "icon": "",
 "label": "Fertilizing",
 "text": "February: NPK 200g/tree. June: urea 100g/tree. September: potash 150g/tree. Mature tree needs 50kg compost/year."
 },
 {
 "icon": "",
 "label": "Malformation Control",
 "text": "Apply NAA (200ppm) spray in October–November to reduce vegetative malformation. Prune malformed panicles immediately."
 },
 {
 "icon": "",
 "label": "Thinning",
 "text": "Thin fruit clusters when marble-sized — leave 1 fruit per 4–6 inch cluster for larger final fruits."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Anthracnose (Black Spot)",
 "text": "Most serious mango disease. Spray Mancozeb (0.2%) at weekly intervals from bud-break to fruit set. Collect fallen leaves."
 },
 {
 "icon": "",
 "label": "Mango Hopper",
 "text": "Major pest. Spray Imidacloprid (0.5ml/L) at flowering. Smoke the orchard at dusk when hoppers are active."
 },
 {
 "icon": "",
 "label": "Fruit Fly",
 "text": "Use methyl eugenol traps. Bag fruits at marble stage. Spray protein bait (Malathion + molasses) on tree trunks."
 },
 {
 "icon": "",
 "label": "Powdery Mildew",
 "text": "Spray sulfur (0.3%) or Carbendazim (1g/L) at flower bud stage. Ensure good canopy airflow."
 }
 ]
 },
 "3": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "Year-round production. Different varieties mature in different months. Tissue-culture plants produce in 9–12 months."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Everywhere in Bangladesh. Madaripur, Jhenaidah, Sylhet, and Chittagong are major commercial zones."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "Can be planted any time. Best during June–August monsoon. Suckers and tissue-culture plantlets used."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "3.5+ million metric tons/year. Bangladesh is among top 10 global banana producers."
 }
 ],
 "varieties": [
 {
 "name": "Sabri (সবরি)",
 "best": true,
 "why": " BEST — Rich sweet flavor, firm texture, pleasant aroma. Best fresh eating variety. Most widely sold in markets."
 },
 {
 "name": "Champa (চম্পা)",
 "best": false,
 "why": "Small, golden, very sweet. Popular as premium variety. Higher price in markets."
 },
 {
 "name": "Amritsagar (অমৃতসাগর)",
 "best": false,
 "why": "Excellent flavor, medium size. Good for both fresh eating and processing."
 },
 {
 "name": "Anajee (আনাজি)",
 "best": false,
 "why": "Large cooking banana (kacha kola). Essential for unripe banana dishes."
 },
 {
 "name": "BARI Kola-1",
 "best": false,
 "why": "High-yielding disease-resistant variety. Developed by Bangladesh Agricultural Research Institute."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Watering",
 "text": "Banana needs high water — irrigate every 3–4 days in dry season. Mulch heavily to retain soil moisture."
 },
 {
 "icon": "",
 "label": "Fertilizing",
 "text": "Apply urea (200g), TSP (150g), MOP (200g) per plant in 3 split doses over the growing season."
 },
 {
 "icon": "",
 "label": "Desuckering",
 "text": "Keep only 1–2 healthy ratoon suckers per plant. Remove all other suckers to direct energy to main bunch."
 },
 {
 "icon": "",
 "label": "Bunch Care",
 "text": "Cover developing bunch with dry banana leaves or perforated polythene to protect from sunburn and pests."
 },
 {
 "icon": "",
 "label": "Propping",
 "text": "Support heavy fruit-bearing plants with bamboo poles to prevent lodging."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Panama Wilt (Fusarium)",
 "text": "No chemical cure. Remove infected plants immediately. Plant resistant varieties (BARI Kola-1). Don't replant in same spot."
 },
 {
 "icon": "",
 "label": "Banana Weevil",
 "text": "Wrap corm with Chlorpyrifos-soaked cloth during planting. Use pheromone traps. Destroy infected corms."
 },
 {
 "icon": "",
 "label": "Sigatoka Leaf Spot",
 "text": "Spray Mancozeb or Propiconazole at 10-day intervals. Remove and burn severely infected leaves."
 },
 {
 "icon": "",
 "label": "Bunchy Top Virus",
 "text": "Transmitted by aphids — control aphids immediately with Imidacloprid spray. Remove infected plants. Use virus-free planting material."
 }
 ]
 },
 "4": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "Nuts available year-round. Peak harvest October–December. Trees begin bearing 6–10 years after planting."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Cox's Bazar, Barisal, Khulna, Noakhali coastal belt. Best growth in sandy coastal soils with salt spray."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "June–August. Germinated seed nuts planted directly. Dwarf varieties preferred for early production."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "Bangladesh produces ~280,000 metric tons/year. Primarily consumed domestically."
 }
 ],
 "varieties": [
 {
 "name": "West Coast Tall",
 "best": false,
 "why": "Traditional tall variety. Long life (80+ years). Resistant to drought but late bearing (6–10 yrs)."
 },
 {
 "name": "Malayan Dwarf",
 "best": true,
 "why": " BEST — Bears fruit in 3–4 years. High yield. More manageable height for harvesting. Disease resistant."
 },
 {
 "name": "Gangabondam",
 "best": false,
 "why": "Early bearing. Medium sized nuts with high water content. Popular for fresh coconut water."
 },
 {
 "name": "Kalpa Rakshe",
 "best": false,
 "why": "Tolerant to root wilt disease. Preferred in disease-affected areas."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Watering",
 "text": "Young palms need regular watering. Mature palms need irrigation only in extreme dry spells. Salt-tolerant."
 },
 {
 "icon": "",
 "label": "Fertilizing",
 "text": "Apply NPK (13:13:13) + magnesium sulfate 3 times/year. Coconut is a heavy potassium feeder."
 },
 {
 "icon": "",
 "label": "Frond Pruning",
 "text": "Remove only dead/dying fronds. Keep 30–35 green fronds at all times. Never over-prune."
 },
 {
 "icon": "",
 "label": "Intercropping",
 "text": "Grow cocoa, black pepper, or vegetables between palms for additional income."
 },
 {
 "icon": "",
 "label": "Rat Guard",
 "text": "Place metal guards around trunk at 2m height to prevent rats eating developing nuts."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Rhinoceros Beetle",
 "text": "Most serious pest. Fill crown with sand+Sevidol mixture. Use pheromone traps. Apply Chlorpyrifos in leaf axils."
 },
 {
 "icon": "",
 "label": "Root Wilt",
 "text": "No cure. Use tolerant varieties. Apply bio-fertilizers (Trichoderma). Maintain proper drainage."
 },
 {
 "icon": "",
 "label": "Leaf Blight",
 "text": "Spray copper fungicide (0.3%) on fronds. Remove severely infected fronds. Improve drainage."
 },
 {
 "icon": "",
 "label": "Black-headed Caterpillar",
 "text": "Spray Quinalphos (0.05%) on fronds. Introduce natural predators like Goniozus nephantidis."
 }
 ]
 },
 "5": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "Flowers: February–April. Seeds (for neem oil): June–August. Bark and leaves harvestable year-round."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Grows naturally nationwide. Commercial cultivation emerging in Rajshahi, Comilla, and Jessore for neem oil industry."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "June–August (monsoon). Seeds, seedlings, or stem cuttings used. Very hardy — grows in poor soils."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "Bangladesh has an estimated 10 million+ neem trees. Growing commercial neem oil production sector."
 }
 ],
 "varieties": [
 {
 "name": "Village Neem (Deshi)",
 "best": true,
 "why": " BEST for medicine — Highest azadirachtin content in leaves and seeds. Proven medicinal potency."
 },
 {
 "name": "Hybrid Neem",
 "best": false,
 "why": "Faster growth, more seeds. Preferred for commercial oil production but lower medicinal concentration."
 },
 {
 "name": "Melia azedarach (Persian Lilac)",
 "best": false,
 "why": "Related species — ornamental but toxic fruits. Not to be confused with true neem (Azadirachta)."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Watering",
 "text": "Drought-tolerant once established. Water young seedlings twice weekly for first year only."
 },
 {
 "icon": "",
 "label": "Soil",
 "text": "Grows in almost any well-drained soil. Tolerates poor, sandy, and slightly alkaline soils. Avoid waterlogging."
 },
 {
 "icon": "",
 "label": "Pruning",
 "text": "Minimal pruning needed. Shape young trees for strong central leader. Remove dead wood annually."
 },
 {
 "icon": "",
 "label": "Sunlight",
 "text": "Full sun mandatory. Shade significantly reduces growth and medicinal compound production."
 },
 {
 "icon": "",
 "label": "Fertilizing",
 "text": "Minimal input needed. Annual compost application near root zone is sufficient."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Scale Insects",
 "text": "Neem itself is a pesticide. Rarely attacked. If scale appears, spray neem oil solution on affected branches."
 },
 {
 "icon": "",
 "label": "Leaf Spot",
 "text": "Remove infected leaves. Improve air circulation by pruning. Usually self-resolves as season changes."
 },
 {
 "icon": "",
 "label": "Bark Borers",
 "text": "Apply Chlorpyrifos paste on borer holes. Insert metal wire to kill larvae. Seal wounds with lime paste."
 },
 {
 "icon": "",
 "label": "Root Rot",
 "text": "Ensure proper drainage. Treat with Trichoderma-based fungicide at root zone. Remove waterlogged soil."
 }
 ]
 },
 "6": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "Plant April–May. Rhizomes harvested August–December (7–9 months after planting). Leaves available year-round."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Comilla, Sylhet, Chittagong Hill Tracts are major producers. Comilla turmeric is famed for highest curcumin content."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "April–May at onset of pre-monsoon. Rhizome pieces (30–50g each) planted 30cm×30cm spacing."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "Bangladesh produces ~80,000 metric tons/year. Domestic consumption primarily; some export to Middle East."
 }
 ],
 "varieties": [
 {
 "name": "Comilla Turmeric (কুমিল্লার হলুদ)",
 "best": true,
 "why": " BEST — Highest curcumin (5–7%). Deep orange color, strong aroma. Most prized variety for medicine and cooking."
 },
 {
 "name": "Synthi",
 "best": false,
 "why": "High yield. Good color. Widely grown for commercial purposes."
 },
 {
 "name": "BARI Turmeric-1",
 "best": false,
 "why": "Disease resistant, high yield. Developed for farmers vulnerable to rhizome rot."
 },
 {
 "name": "Nadia",
 "best": false,
 "why": "Long rhizomes, easy harvest. Mild flavor preferred for food coloring industry."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Soil Prep",
 "text": "Deep plowing to 30cm. Incorporate 10 tons compost/hectare before planting. Raised beds for drainage."
 },
 {
 "icon": "",
 "label": "Watering",
 "text": "Requires consistent moisture. Irrigate every 7–10 days in dry periods. Avoid waterlogging — causes rhizome rot."
 },
 {
 "icon": "",
 "label": "Fertilizing",
 "text": "Apply NPK (60:30:60 kg/ha) at planting. Top-dress with urea 30kg/ha at 30 and 60 days after planting."
 },
 {
 "icon": "",
 "label": "Mulching",
 "text": "Apply green leaf mulch (12.5 tons/ha) after planting to suppress weeds and conserve moisture."
 },
 {
 "icon": "",
 "label": "Earthing Up",
 "text": "Hill up soil around plants at 45 and 90 days to support rhizome development and prevent greening."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Rhizome Rot (Pythium)",
 "text": "Most serious disease. Use disease-free seed rhizomes. Treat with Metalaxyl before planting. Improve drainage immediately."
 },
 {
 "icon": "",
 "label": "Shoot Borer",
 "text": "Spray Chlorpyrifos (2ml/L) when new shoots emerge. Collect and destroy fallen shoots. Use pheromone traps."
 },
 {
 "icon": "",
 "label": "Leaf Blotch",
 "text": "Spray Mancozeb (0.2%) fortnightly during monsoon. Remove and burn heavily infected leaves."
 },
 {
 "icon": "",
 "label": "Thrips & Mites",
 "text": "Spray Dimethoate (1.5ml/L) when infestation starts. Maintain good field hygiene."
 }
 ]
 },
 "7": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "Blooms June–November during monsoon. Rhizomes edible year-round. Stems harvested as vegetable when young."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Found naturally in all ponds, rivers, beels, and haors nationwide. Concentrated in wetland-rich Sunamganj, Sylhet, Netrakona."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "April–May. Rhizomes or seeds planted in pond/shallow water. Spreads rapidly on its own."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "Wild harvest from wetlands. Approximately 15,000 metric tons of stems and rhizomes harvested annually."
 }
 ],
 "varieties": [
 {
 "name": "Nymphaea nouchali (White)",
 "best": true,
 "why": " National flower — White petals, most culturally significant. Most widely found across Bangladesh."
 },
 {
 "name": "Nymphaea stellata (Blue/Pink)",
 "best": false,
 "why": "Blue-pink variety. Slightly smaller. Found in shallower ponds. Also edible."
 },
 {
 "name": "Victoria amazonica",
 "best": false,
 "why": "Giant cultivated variety in botanical gardens. Leaves up to 3m. Not edible but spectacular ornamental."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Water Depth",
 "text": "Grows best in 30–60cm water. Rhizomes anchor in muddy bottom. Needs still or slowly moving water."
 },
 {
 "icon": "",
 "label": "Sunlight",
 "text": "Needs 6+ hours direct sunlight. Shaded ponds produce few or no flowers."
 },
 {
 "icon": "",
 "label": "Substrate",
 "text": "Rich clay-loam pond bottom. Add compost to pond bottom when establishing in clean water."
 },
 {
 "icon": "",
 "label": "Maintenance",
 "text": "Remove dead leaves regularly. Divide clumps every 3 years to maintain vigor and flowering."
 },
 {
 "icon": "",
 "label": "Companion",
 "text": "Grows beautifully with fish — fish waste fertilizes plants, plants provide shade for fish."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Leaf-feeding Beetles",
 "text": "Hand-pick beetles from leaves. Introduce natural predators. Spray Neem oil (5ml/L) on leaf surfaces."
 },
 {
 "icon": "",
 "label": "Crown Rot",
 "text": "Caused by poor water quality. Improve water circulation. Remove decaying organic matter from pond bottom."
 },
 {
 "icon": "",
 "label": "Snail Damage",
 "text": "Snails eat holes in leaves. Introduce duck-weed eating ducks periodically. Use copper tape barriers in container ponds."
 },
 {
 "icon": "",
 "label": "Algae Overgrowth",
 "text": "Excess fertilizer causes algae. Add Barley straw bundles to pond — naturally inhibits algae growth."
 }
 ]
 },
 "8": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "Aus: March–August. Aman: June–December (main crop). Boro: November–May (irrigated). Three seasons total."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Everywhere in Bangladesh. Highest production: Mymensingh, Dhaka, Rajshahi, Comilla, Sylhet divisions."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "Boro: seedbed Nov, transplant Dec–Jan. Aman: seedbed June, transplant July–Aug. Aus: April–May direct seeding."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "34–38 million metric tons/year. Bangladesh is the 3rd largest rice producer globally. Self-sufficient since 2000s."
 }
 ],
 "varieties": [
 {
 "name": "BRRI Dhan 29 (Boro)",
 "best": true,
 "why": " BEST Boro — Highest yield (7–8 t/ha), good milling quality. Most widely grown rice in Bangladesh."
 },
 {
 "name": "BRRI Dhan 49 (Aman)",
 "best": false,
 "why": "Best modern Aman variety. Flood tolerant, excellent grain quality. Preferred by farmers."
 },
 {
 "name": "BR 11 (Aman)",
 "best": false,
 "why": "Classic variety. Excellent eating quality — soft, aromatic. Widely preferred for home consumption."
 },
 {
 "name": "BRRI Dhan 74 (Aus)",
 "best": false,
 "why": "Drought-tolerant. Developed for water-stressed areas. Growing in popularity."
 },
 {
 "name": "Binadhan-7 (Aman)",
 "best": false,
 "why": "Submergence-tolerant for 15+ days. Crucial for flood-prone haor areas of Sylhet/Sunamganj."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Seedbed Prep",
 "text": "Prepare raised seedbed. Sow pre-germinated seeds at 40g/m². Keep moist but not flooded."
 },
 {
 "icon": "",
 "label": "Water Management",
 "text": "Maintain 2–5cm standing water in main field. Use Alternate Wetting and Drying (AWD) to save 30% water."
 },
 {
 "icon": "",
 "label": "Fertilizing",
 "text": "Urea 130kg/ha (3 splits), TSP 70kg/ha (basal), MOP 60kg/ha (basal + tillering). Zinc sulfate 10kg/ha."
 },
 {
 "icon": "",
 "label": "Weeding",
 "text": "Remove weeds at 15 and 30 days after transplanting. Chemical: Butachlor (preemergence) or Pyrazosulfuron."
 },
 {
 "icon": "",
 "label": "Harvesting",
 "text": "Harvest when 80% of grains are golden. Delay causes shattering losses. Use reaper machines for efficiency."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Blast Disease (Pyricularia)",
 "text": "Most serious rice disease. Spray Tricyclazole (0.6g/L) at booting and heading. Use resistant varieties like BRRI 29."
 },
 {
 "icon": "",
 "label": "Brown Planthopper (BPH)",
 "text": "Most damaging rice pest. Spray Imidacloprid (0.5ml/L) at base of plant. Avoid over-application of nitrogen."
 },
 {
 "icon": "",
 "label": "Bacterial Blight (Xanthomonas)",
 "text": "Spray copper oxychloride (0.3%) + Streptomycin. Drain fields when disease appears. Use resistant varieties."
 },
 {
 "icon": "",
 "label": "Rat Damage",
 "text": "Use snap traps during land preparation and pre-harvest. Community rat-hunting programs. Zinc phosphide bait."
 }
 ]
 },
 "9": {
 "production": [
 {
 "icon": "",
 "label": "When to Produce",
 "val": "Sow: March–April. Harvest: August–September (fiber extraction). Retting in water takes 20–30 days after harvest."
 },
 {
 "icon": "",
 "label": "Where Produced",
 "val": "Faridpur (highest quality), Dhaka, Mymensingh, Rangpur, Comilla, Jessore — the Jute Belt of Bangladesh."
 },
 {
 "icon": "",
 "label": "Planting Season",
 "val": "March–May broadcast seeding or line seeding. 7–10kg seed/hectare. Requires warm, humid conditions."
 },
 {
 "icon": "",
 "label": "Annual Production",
 "val": "~0.8 million metric tons raw fiber/year. Bangladesh = world's #2 jute producer. Major foreign exchange earner."
 }
 ],
 "varieties": [
 {
 "name": "O-9897 (Tossa Jute)",
 "best": true,
 "why": " BEST — Highest fiber yield, silky luster, longest fiber length. Used for premium hessian and sacking."
 },
 {
 "name": "CVL-1 (Deshi Jute)",
 "best": false,
 "why": "Hardy, adaptable to varied soils. Reliable in areas prone to mild flooding."
 },
 {
 "name": "BJC-7370",
 "best": false,
 "why": "High yielding Tossa variety. Disease resistant. Preferred by commercial farmers."
 },
 {
 "name": "OM-1 (Kenaf/Mesta)",
 "best": false,
 "why": "Jute substitute. Grown in areas not suitable for true jute. Lower quality but drought tolerant."
 }
 ],
 "care": [
 {
 "icon": "",
 "label": "Land Prep",
 "text": "Deep plow and harrow 3–4 times. Well-drained medium-high land preferred. Slightly acidic soil (pH 6.0–7.0)."
 },
 {
 "icon": "",
 "label": "Fertilizing",
 "text": "Apply urea (80kg/ha), TSP (40kg/ha), MOP (40kg/ha) in 2 splits at 15 and 35 days after emergence."
 },
 {
 "icon": "",
 "label": "Thinning & Weeding",
 "text": "Thin plants to 5–7cm spacing at 15–20 days. Remove weeds twice at 15 and 30 days — critical for quality fiber."
 },
 {
 "icon": "",
 "label": "Retting",
 "text": "Bundle cut plants and submerge in pond/canal water for 20–30 days until bark separates easily."
 },
 {
 "icon": "",
 "label": "Harvesting",
 "text": "Harvest at early pod stage for best quality fiber. Delay reduces luster and strength."
 }
 ],
 "cure": [
 {
 "icon": "",
 "label": "Stem Rot (Macrophomina)",
 "text": "Soil-borne disease. Use treated seed. Crop rotation with rice. Spray Carbendazim (1g/L) at first sign."
 },
 {
 "icon": "",
 "label": "Jute Hairy Caterpillar",
 "text": "Most serious pest. Spray Malathion (2ml/L) at caterpillar stage. Hand-collect egg masses in small fields."
 },
 {
 "icon": "",
 "label": "Jute Mosaic Virus",
 "text": "Transmitted by whiteflies. Control whiteflies with Imidacloprid. Remove infected plants immediately."
 },
 {
 "icon": "",
 "label": "Semilooper",
 "text": "Spray Chlorpyrifos (2ml/L) when young caterpillars appear. Pheromone traps for adult moths."
 }
 ]
 }
};