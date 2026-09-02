const internationalReds = [
    {
        name: "Cabernet Sauvignon",
        origin: "Bordeaux, France",
        body: "Full-bodied",
        tannins: "High",
        acidity: "Medium to High",
        characteristics: [
            "Full-bodied with firm tannins",
            "High acidity",
            "Dark purple color",
            "Age-worthy wines",
            "Often aged in oak barrels",
            "Natural cross of Cabernet Franc and Sauvignon Blanc",
            "Can age 10-50 years for top examples"
        ],
        aromas: [
            "Blackcurrant",
            "Black cherry",
            "Cedar",
            "Tobacco",
            "Green bell pepper",
            "Mint"
        ],
        description: "Known as the \"king of red wine grapes,\" produces age-worthy wines with firm tannins and complex flavors"
    },
    {
        name: "Merlot",
        origin: "Bordeaux, France",
        body: "Medium to Full-bodied",
        tannins: "Medium",
        acidity: "Medium",
        characteristics: [
            "Medium to full-bodied",
            "Soft, velvety tannins",
            "Medium acidity",
            "Fruit-forward profile",
            "Approachable when young",
            "One of Bordeaux's key blending grapes",
            "Ripens earlier than Cabernet Sauvignon"
        ],
        aromas: [
            "Plum",
            "Black cherry",
            "Chocolate",
            "Vanilla",
            "Clove",
            "Bay leaf"
        ],
        description: "Softer and more approachable than Cabernet Sauvignon, with velvety texture and fruit-forward profile"
    },
    {
        name: "Pinot Noir",
        origin: "Burgundy, France",
        body: "Light to Medium-bodied",
        tannins: "Low to Medium",
        acidity: "High",
        characteristics: [
            "Light to medium-bodied",
            "Low to medium tannins",
            "High acidity",
            "Translucent ruby color",
            "Delicate and elegant",
            "Thin-skinned grape sensitive to terroir",
            "Silky, velvety mouthfeel"
        ],
        aromas: [
            "Strawberry",
            "Raspberry",
            "Cherry",
            "Mushroom",
            "Truffle",
            "Rose",
            "Wet leaves"
        ],
        description: "Elegant and delicate, often described as the most romantic and frustrating grape to grow"
    },
    {
        name: "Syrah",
        origin: "Rhône Valley, France",
        body: "Full-bodied",
        tannins: "Medium to High",
        acidity: "Medium to High",
        characteristics: [
            "Full-bodied and bold",
            "Medium to high tannins",
            "Medium to high acidity",
            "Deep purple color",
            "Varies by climate",
            "Known as Shiraz in Australia",
            "Cooler climates produce elegant, peppery wines"
        ],
        aromas: [
            "Blackberry",
            "Blueberry",
            "Black pepper",
            "Smoke",
            "Grilled meat",
            "Olive",
            "Lavender"
        ],
        description: "Bold and spicy, expressing different characters in cool vs warm climates"
    },
    {
        name: "Malbec",
        origin: "Cahors, France (now famous in Argentina)",
        body: "Full-bodied",
        tannins: "Medium to High",
        acidity: "Medium",
        characteristics: [
            "Full-bodied and rich",
            "Medium to high tannins",
            "Medium acidity",
            "Inky dark color",
            "Jammy fruit character",
            "Argentina rescued it from near-extinction",
            "Known as 'Black Wine' in Cahors"
        ],
        aromas: [
            "Blackberry",
            "Plum",
            "Black cherry",
            "Cocoa",
            "Leather",
            "Tobacco",
            "Violet"
        ],
        description: "Rich and jammy with inky dark color, Argentina's signature grape"
    },
    {
        name: "Zinfandel",
        origin: "Croatia (famous in California, USA)",
        body: "Medium to Full-bodied",
        tannins: "Medium",
        acidity: "Medium",
        characteristics: [
            "Medium to full-bodied",
            "Medium tannins",
            "Medium acidity",
            "Often high alcohol",
            "Bold and fruity",
            "Genetically identical to Italian Primitivo",
            "Can produce both jammy reds and rosé"
        ],
        aromas: [
            "Blackberry",
            "Raspberry",
            "Cherry",
            "Licorice",
            "Black pepper",
            "Tobacco"
        ],
        description: "Bold and fruity, often with higher alcohol content and spicy notes"
    },
    {
        name: "Sangiovese",
        origin: "Tuscany, Italy",
        body: "Medium to Full-bodied",
        tannins: "High",
        acidity: "High",
        characteristics: [
            "Medium to full-bodied",
            "High tannins",
            "High acidity",
            "Bright red color",
            "Savory notes",
            "The primary grape in Chianti wines",
            "Produces both everyday and age-worthy wines"
        ],
        aromas: [
            "Cherry",
            "Strawberry",
            "Tomato leaf",
            "Herbs",
            "Balsamic",
            "Leather",
            "Tea"
        ],
        description: "The heart of Chianti, known for bright acidity and savory notes"
    },
    {
        name: "Tempranillo",
        origin: "Rioja, Spain",
        body: "Medium to Full-bodied",
        tannins: "Medium to High",
        acidity: "Medium to High",
        characteristics: [
            "Medium to full-bodied",
            "Medium to high tannins",
            "Medium to high acidity",
            "Responds well to oak",
            "Spain's noble grape",
            "Name means 'early' in Spanish (early-ripening)",
            "Backbone of Rioja and Ribera del Duero wines"
        ],
        aromas: [
            "Cherry",
            "Plum",
            "Tomato",
            "Leather",
            "Vanilla",
            "Dill",
            "Tobacco"
        ],
        description: "Spain's noble grape, responds well to oak aging"
    },
    {
        name: "Grenache",
        origin: "Spain (famous in Southern Rhône, France)",
        body: "Medium to Full-bodied",
        tannins: "Low to Medium",
        acidity: "Medium",
        characteristics: [
            "Medium to full-bodied",
            "Low to medium tannins",
            "Medium acidity",
            "Fruity and spicy",
            "Excellent for blending",
            "Known as Garnacha in Spain",
            "Key component of Châteauneuf-du-Pape"
        ],
        aromas: [
            "Strawberry",
            "Raspberry",
            "Cherry",
            "White pepper",
            "Herbs",
            "Orange peel"
        ],
        description: "Fruity and spicy, often blended but excellent on its own"
    },
    {
        name: "Nebbiolo",
        origin: "Piedmont, Italy",
        body: "Full-bodied",
        tannins: "Very High",
        acidity: "Very High",
        characteristics: [
            "Full-bodied and powerful",
            "Very high tannins",
            "Very high acidity",
            "Pale garnet color",
            "Exceptional aging potential",
            "Creates legendary Barolo and Barbaresco",
            "Name derives from 'nebbia' (fog) in Italian"
        ],
        aromas: [
            "Rose",
            "Tar",
            "Cherry",
            "Truffle",
            "Leather",
            "Anise",
            "Tobacco",
            "Dried herbs"
        ],
        description: "Creates Barolo and Barbaresco, powerful wines with incredible aging potential"
    },
    {
        name: "Cabernet Franc",
        origin: "Loire Valley & Bordeaux, France",
        body: "Medium-bodied",
        tannins: "Medium to Medium-High",
        acidity: "High",
        characteristics: [
            "Medium-bodied with zesty acidity",
            "Smoother tannins than Cabernet Sauvignon",
            "High, refreshing acidity",
            "Bright ruby to garnet color",
            "Parent grape of Cabernet Sauvignon",
            "Ripens a week earlier than Cabernet Sauvignon",
            "Excellent food-pairing wine"
        ],
        aromas: [
            "Strawberry",
            "Raspberry",
            "Red cherry",
            "Green bell pepper",
            "Violet",
            "Graphite",
            "Tobacco",
            "Herbs"
        ],
        description: "Parent grape of Cabernet Sauvignon, known for savory aromatics and herbal notes"
    },
    {
        name: "Pinotage",
        origin: "South Africa",
        body: "Full-bodied",
        tannins: "Medium-High to High",
        acidity: "Medium to Medium-High",
        characteristics: [
            "Full-bodied and bold",
            "Medium-high to high tannins",
            "Medium to medium-high acidity",
            "Deep, dark color",
            "Uniquely South African creation",
            "Cross of Pinot Noir and Cinsault (Hermitage)",
            "Created in 1925, South Africa's signature grape"
        ],
        aromas: [
            "Blackberry",
            "Black cherry",
            "Plum",
            "Smoke",
            "Tobacco",
            "Coffee",
            "Chocolate",
            "Earth"
        ],
        description: "South Africa's signature grape, bold and smoky with unique character"
    },
    {
        name: "Mourvèdre",
        origin: "Spain (famous in Bandol, France)",
        body: "Full-bodied",
        tannins: "High",
        acidity: "Medium to Medium-Plus",
        characteristics: [
            "Full-bodied and powerful",
            "High, grippy tannins",
            "Medium to medium-plus acidity",
            "Deep, dark color",
            "Requires hot climate to ripen",
            "Known as Monastrell in Spain, Mataro in Australia",
            "Key component of GSM blends with Grenache and Syrah"
        ],
        aromas: [
            "Blackberry",
            "Black plum",
            "Blueberry",
            "Herbs",
            "Black pepper",
            "Violet",
            "Game",
            "Leather",
            "Earth"
        ],
        description: "Bold Mediterranean grape, adds structure and savory depth to blends"
    },
    {
        name: "Primitivo",
        origin: "Puglia, Italy",
        body: "Full-bodied",
        tannins: "Medium to High",
        acidity: "Medium",
        characteristics: [
            "Full-bodied and rich",
            "Medium to high tannins",
            "Medium, balancing acidity",
            "Deeply colored",
            "High alcohol content (14-16%)",
            "Same grape as Zinfandel, Italian expression",
            "Sun-ripened southern Italian style"
        ],
        aromas: [
            "Blackberry",
            "Black cherry",
            "Plum",
            "Blueberry",
            "Dark chocolate",
            "Licorice",
            "Black pepper",
            "Sweet tobacco"
        ],
        description: "Italian cousin of Zinfandel, bold and fruit-forward from Puglia's sunshine"
    }
].map((grape) => ({ color: "Red", ...grape }));

function grape(name, color, origin, body, tannins, acidity, characteristics, aromas, description) {
    return { name, color, origin, body, tannins, acidity, characteristics, aromas, description };
}

const spainGrapes = [
    grape("Mencía", "Red", "Bierzo & Ribeira Sacra, Spain", "Medium-bodied", "Medium", "High", ["Perfumed and fresh", "Often grown on steep Atlantic-influenced sites", "Red-fruited with herbal lift", "Can show stony minerality"], ["Sour cherry", "Pomegranate", "Violet", "Black tea", "Herbs"], "A fragrant Spanish red that balances juicy fruit with floral and mineral notes"),
    grape("Bobal", "Red", "Utiel-Requena, Spain", "Full-bodied", "Medium to High", "High", ["Deeply colored skins", "Naturally high acidity", "Handles heat well", "Can make structured but vibrant reds"], ["Blackberry", "Plum", "Violet", "Cocoa", "Mediterranean herbs"], "A powerful local red grape that keeps freshness even in hot inland vineyards"),
    grape("Monastrell", "Red", "Jumilla & Alicante, Spain", "Full-bodied", "High", "Medium", ["Late-ripening Mediterranean variety", "Thick skins and firm structure", "Often grown in dry, sunny sites", "Produces dense, savory reds"], ["Black plum", "Blackberry", "Licorice", "Game", "Black pepper"], "Spain's muscular southeast red, known for dark fruit and earthy depth"),
    grape("Garnacha Tintorera", "Red", "Almansa, Spain", "Full-bodied", "Medium", "Medium", ["Rare red-fleshed teinturier grape", "Very deeply colored juice", "Used for intense blends and varietal reds", "Thrives in warm continental climates"], ["Black cherry", "Blueberry", "Violet", "Smoke", "Pepper"], "A dramatic Spanish red-fleshed grape that brings color, fruit, and spice"),
    grape("Albariño", "White", "Rías Baixas, Spain", "Light to Medium-bodied", "Very Low", "High", ["Atlantic climate specialist", "Zesty and saline", "Usually unoaked", "Known for bright freshness"], ["Lime", "Peach", "Apricot", "Orange blossom", "Sea spray"], "Spain's flagship coastal white, lively and aromatic with a salty edge"),
    grape("Godello", "White", "Valdeorras & Bierzo, Spain", "Medium to Full-bodied", "Very Low", "Medium to High", ["More textured than many Spanish whites", "Can handle lees or oak aging", "Combines richness with mineral drive", "Often grown in Galicia"], ["Pear", "Lemon curd", "Fennel", "Chamomile", "Wet stone"], "A textured Galician white with orchard fruit and mineral depth"),
    grape("Verdejo", "White", "Rueda, Spain", "Light to Medium-bodied", "Very Low", "Medium to High", ["Aromatic and crisp", "Often harvested at night to retain freshness", "Frequently made in stainless steel", "Shows a faint bitter almond finish"], ["Grapefruit", "Lime", "Fennel", "Passion fruit", "Almond"], "A vibrant Spanish white known for herbal citrus character and a clean finish"),
    grape("Xarel·lo", "White", "Penedès, Spain", "Medium-bodied", "Very Low", "Medium to High", ["One of Cava's core grapes", "Structured and age-worthy for a white", "Can show waxy texture", "Works well as both sparkling and still wine"], ["Green apple", "Pear", "Fennel", "Lemon peel", "Saline"], "A serious Catalan white grape with texture, freshness, and subtle savory notes")
];

const italyGrapes = [
    grape("Aglianico", "Red", "Campania & Basilicata, Italy", "Full-bodied", "High", "High", ["Late-ripening southern red", "Firm tannins and long aging potential", "Volcanic sites often suit it well", "Combines power with freshness"], ["Black cherry", "Plum", "Smoke", "Leather", "Dried herbs"], "A structured southern Italian red often compared to Nebbiolo for its longevity"),
    grape("Nero d'Avola", "Red", "Sicily, Italy", "Medium to Full-bodied", "Medium", "Medium", ["Heat-loving Sicilian staple", "Ripe fruit profile", "Can range from juicy to serious", "Often blends richness with spice"], ["Black plum", "Cherry", "Licorice", "Cocoa", "Mediterranean herbs"], "Sicily's best-known red, generous in fruit with a warm-climate Mediterranean stamp"),
    grape("Corvina", "Red", "Veneto, Italy", "Medium-bodied", "Low to Medium", "High", ["Core grape of Valpolicella", "Naturally bright acidity", "Can be dried for Amarone styles", "Usually elegant rather than heavy"], ["Sour cherry", "Red currant", "Dried herbs", "Cinnamon", "Almond"], "A cherry-scented Veneto red grape that shines in both fresh and appassimento styles"),
    grape("Montepulciano", "Red", "Abruzzo & Central Italy", "Medium to Full-bodied", "Medium", "Medium", ["Thick-skinned and deeply colored", "Popular across central Italy", "Can make easy or cellar-worthy reds", "Often plush and fruit-driven"], ["Blackberry", "Black cherry", "Plum", "Cocoa", "Tobacco"], "A generous Italian red with dark fruit, soft texture, and broad appeal"),
    grape("Fiano", "White", "Campania, Italy", "Medium to Full-bodied", "Very Low", "Medium to High", ["Aromatic but structured", "Can age into nutty complexity", "Often grown near volcanic soils", "Textured palate for a white"], ["Pear", "Hazelnut", "Honey", "Lemon", "White flowers"], "A noble southern white prized for texture, perfume, and age-worthy depth"),
    grape("Verdicchio", "White", "Marche, Italy", "Medium-bodied", "Very Low", "High", ["Known for brisk acidity", "Often bottled in a broad range of styles", "Can show notable mineral tension", "Performs well with seafood"], ["Green apple", "Lemon", "Almond", "Fennel", "Wet stone"], "A bright central Italian white with citrusy lift and a classic almond note"),
    grape("Garganega", "White", "Soave, Veneto, Italy", "Medium-bodied", "Very Low", "Medium", ["Main grape of Soave", "Subtle rather than overtly aromatic", "Can develop texture on lees", "Often grown on volcanic hills"], ["Pear", "White peach", "Chamomile", "Lemon zest", "Almond"], "The elegant heart of Soave, offering gentle orchard fruit and savory finesse"),
    grape("Arneis", "White", "Roero, Piedmont, Italy", "Medium-bodied", "Very Low", "Medium", ["Historically tricky to grow", "Typically dry and softly textured", "Best enjoyed young for fragrance", "A hallmark of Roero"], ["Pear", "Apricot", "White flowers", "Herbs", "Almond"], "A perfumed Piedmont white that combines ripe orchard fruit with delicate herbal notes")
];

const portugalGrapes = [
    grape("Touriga Nacional", "Red", "Dão & Douro, Portugal", "Full-bodied", "High", "Medium to High", ["Portugal's iconic fine-wine grape", "Small berries and concentrated flavor", "Often used for both table wine and Port", "Intensely floral for a dark red"], ["Blueberry", "Blackcurrant", "Violet", "Bergamot", "Rockrose"], "Portugal's flagship red, compact and powerful with dark fruit and violets"),
    grape("Baga", "Red", "Bairrada, Portugal", "Medium to Full-bodied", "High", "High", ["Very high tannin and acidity", "Late-ripening Atlantic red", "Can age for decades", "Needs careful handling for balance"], ["Sour cherry", "Cranberry", "Violet", "Tobacco", "Earth"], "A stern but long-lived Portuguese red grape with vibrant acidity and savory complexity"),
    grape("Castelão", "Red", "Península de Setúbal, Portugal", "Medium-bodied", "Medium", "Medium to High", ["Adapted to warm sandy sites", "Often juicy and herbal", "Can range from fresh to rustic", "Widely planted across Portugal"], ["Red plum", "Blackberry", "Dried herbs", "Pepper", "Leather"], "A versatile Portuguese red that often shows ripe fruit and earthy spice"),
    grape("Trincadeira", "Red", "Alentejo & Douro, Portugal", "Medium-bodied", "Medium", "Medium", ["Prone to rot in humid vintages", "Performs best in warm, dry areas", "Adds fragrance to blends", "Usually supple rather than massive"], ["Blackberry", "Cherry", "Clove", "Lavender", "Dried herbs"], "An aromatic Portuguese red grape valued for spice, lift, and Mediterranean personality"),
    grape("Arinto", "White", "Bucelas & across Portugal", "Light to Medium-bodied", "Very Low", "High", ["Known for piercing acidity", "Keeps freshness in warm climates", "Works well as a blender or solo wine", "Can age surprisingly well"], ["Lemon", "Green apple", "Saline", "Lime zest", "White flowers"], "A crisp Portuguese white that brings electric freshness and citrus drive"),
    grape("Encruzado", "White", "Dão, Portugal", "Medium to Full-bodied", "Very Low", "Medium to High", ["Dão's benchmark white grape", "Structured and age-worthy", "Often gains complexity with oak or lees", "Balances richness with precision"], ["Peach", "Lemon curd", "Hazelnut", "White flowers", "Mineral"], "A refined Portuguese white combining creamy texture with mineral lift"),
    grape("Bical", "White", "Bairrada & Dão, Portugal", "Medium-bodied", "Very Low", "Medium to High", ["Can be aromatic yet taut", "Performs well in limestone-rich regions", "Sensitive to low yields", "Often blended but strong alone"], ["Apricot", "Pear", "Honey", "Citrus peel", "Wet stone"], "A characterful Portuguese white with ripe fruit, floral notes, and bright structure"),
    grape("Fernão Pires", "White", "Tejo & across Portugal", "Light to Medium-bodied", "Very Low", "Medium", ["One of Portugal's most planted whites", "Very aromatic", "Usually best while youthful", "Comfortable in warm inland zones"], ["Orange blossom", "Tangerine", "Lime", "Rose", "Spice"], "A fragrant Portuguese white that emphasizes perfume, citrus, and easy charm")
];

const franceLocalGrapes = [
    grape("Tannat", "Red", "Madiran, France", "Full-bodied", "Very High", "High", ["Exceptionally tannic structure", "Thrives in southwest France", "Often tamed with aging or blending", "Dark and age-worthy"], ["Blackberry", "Black plum", "Cocoa", "Smoke", "Licorice"], "A formidable southwest French red grape known for power, color, and longevity"),
    grape("Mondeuse", "Red", "Savoie, France", "Medium-bodied", "Medium", "High", ["Alpine red with vivid freshness", "Often peppery and floral", "Generally medium in body", "Best examples are energetic and savory"], ["Black cherry", "Violet", "Black pepper", "Cranberry", "Mountain herbs"], "A lively Savoyard red with spicy lift and cool-climate brightness"),
    grape("Négrette", "Red", "Fronton, France", "Medium-bodied", "Medium", "Medium", ["Signature grape of Fronton", "Usually soft and perfumed", "Often blended for structure", "Shows distinct floral character"], ["Blackberry", "Violet", "Licorice", "Pepper", "Smoke"], "A fragrant southwestern French red with violet perfume and supple dark fruit"),
    grape("Sciaccarellu", "Red", "Corsica, France", "Light to Medium-bodied", "Low", "Medium to High", ["Corsican red suited to warmth and wind", "Usually pale and fragrant", "Often elegant rather than dense", "Shows Mediterranean herbs"], ["Strawberry", "Cherry", "White pepper", "Myrtle", "Dried herbs"], "A graceful Corsican red with red berries, spice, and sunny island herbs"),
    grape("Savagnin", "White", "Jura, France", "Medium to Full-bodied", "Very Low", "High", ["Jura specialist with strong personality", "Can be made in oxidative or fresh styles", "Naturally high in acidity", "Develops savory nutty complexity"], ["Lemon", "Walnut", "Green apple", "Chamomile", "Curry spice"], "Jura's singular white grape, famous for intense acidity and nutty complexity"),
    grape("Picpoul", "White", "Languedoc, France", "Light-bodied", "Very Low", "High", ["Name hints at lip-stinging freshness", "Excellent near the Mediterranean coast", "Usually bottled young", "Seafood-friendly profile"], ["Lemon", "Green apple", "Saline", "White peach", "Herbs"], "A sharp, coastal French white valued for crisp citrus and salty refreshment"),
    grape("Gros Manseng", "White", "Jurançon, France", "Medium-bodied", "Very Low", "High", ["Used for both dry and sweet wines", "Thick skins preserve acidity", "Often harvested late", "Aromatic and structured"], ["Pineapple", "Quince", "Grapefruit", "Spice", "Honey"], "A vibrant southwest French white that keeps energy even in ripe, aromatic styles"),
    grape("Melon de Bourgogne", "White", "Muscadet, Loire, France", "Light-bodied", "Very Low", "High", ["Best known from Muscadet near the Atlantic", "Commonly aged on lees", "Subtle and mineral rather than flashy", "Especially good with shellfish"], ["Green apple", "Lemon", "Brioche", "Saline", "Wet stone"], "The understated Loire white behind Muscadet, prized for briny freshness and leesy detail")
];

const greeceGrapes = [
    grape("Xinomavro", "Red", "Naoussa & Amyndeon, Greece", "Medium to Full-bodied", "High", "High", ["Often compared to Nebbiolo for structure", "Can show pale color despite firm tannin", "Thrives in cooler northern Greek zones", "Develops savory complexity with age"], ["Sour cherry", "Tomato leaf", "Olive", "Rose", "Dried herbs"], "A serious Greek red with high acidity, firm tannins, and savory complexity"),
    grape("Agiorgitiko", "Red", "Nemea, Greece", "Medium-bodied", "Medium", "Medium", ["One of Greece's best-known reds", "Usually plush and approachable", "Works in dry, sweet, and rosé styles", "Generally softer than Xinomavro"], ["Plum", "Black cherry", "Baking spice", "Violet", "Cocoa"], "A generous Greek red offering ripe fruit, smooth texture, and warming spice"),
    grape("Limniona", "Red", "Thessaly, Greece", "Medium-bodied", "Low to Medium", "Medium to High", ["Revived native Greek variety", "Silky texture and fresh profile", "Usually elegant rather than dense", "Often praised for perfume"], ["Red cherry", "Raspberry", "Rose", "White pepper", "Herbs"], "An increasingly celebrated Greek red with lifted perfume and graceful freshness"),
    grape("Mandilaria", "Red", "Aegean Islands, Greece", "Full-bodied", "High", "Medium", ["Deep color and sturdy tannin", "Often blended for structure", "Suited to sun-soaked island climates", "Can be rustic if overextracted"], ["Blackberry", "Black plum", "Spice", "Earth", "Dried herbs"], "A robust island red grape that brings depth, color, and Mediterranean savoriness"),
    grape("Assyrtiko", "White", "Santorini, Greece", "Medium to Full-bodied", "Very Low", "High", ["Retains acidity in extreme heat", "Famous for volcanic island origins", "Can be bone-dry and intensely mineral", "Age-worthy for a white"], ["Lemon", "Lime", "Smoke", "Saline", "Green apple"], "Greece's star white, combining citrus, salinity, and striking volcanic tension"),
    grape("Moschofilero", "White", "Mantinia, Greece", "Light-bodied", "Very Low", "High", ["Pink-skinned aromatic grape", "Often highly floral", "Usually made as a fresh white", "Can also appear in sparkling styles"], ["Rose", "Lime", "Orange blossom", "Pear", "Spice"], "A fragrant Greek white bursting with flowers, citrus, and crisp lift"),
    grape("Malagousia", "White", "Mainland Greece", "Medium-bodied", "Very Low", "Medium", ["Rescued from near obscurity", "Aromatic but with more body than Muscat", "Often expressive in warm climates", "Usually charming when young"], ["Peach", "Apricot", "Jasmine", "Basil", "Lemon zest"], "A revived Greek white grape known for ripe stone fruit and herbal perfume"),
    grape("Savatiano", "White", "Attica, Greece", "Medium-bodied", "Very Low", "Medium", ["Historically important around Athens", "Heat- and drought-resistant", "Can be simple or surprisingly textured", "Often understated aromatically"], ["Apple", "Pear", "Lemon", "Herbs", "Almond"], "A hardy Greek white that can deliver subtle orchard fruit and savory restraint")
];

const croatiaGrapes = [
    grape("Plavac Mali", "Red", "Dalmatia, Croatia", "Full-bodied", "High", "Medium", ["Croatia's signature coastal red", "Child of Crljenak Kaštelanski and Dobričić", "Likes hot, rocky Adriatic sites", "Often concentrated and sun-drenched"], ["Black cherry", "Dried fig", "Mediterranean herbs", "Smoke", "Black pepper"], "A powerful Dalmatian red that combines ripe fruit, herbs, and maritime warmth"),
    grape("Babić", "Red", "Šibenik, Croatia", "Full-bodied", "Medium to High", "Medium", ["Grown near the Adriatic on rocky soils", "Often deeply colored and savory", "Can be intense but fresh", "Traditionally linked to steep vineyards"], ["Blackberry", "Sour cherry", "Smoke", "Rosemary", "Mineral"], "A structured Croatian red with dark fruit, herbal lift, and stony tension"),
    grape("Teran", "Red", "Istria, Croatia", "Medium-bodied", "Medium", "High", ["Naturally high in acidity", "Known for vivid freshness", "Usually lighter than Plavac Mali", "Thrives in Istrian terra rossa soils"], ["Sour cherry", "Raspberry", "Black pepper", "Violet", "Earth"], "A bright, tangy Istrian red that leans toward sour fruit and peppery spice"),
    grape("Crljenak Kaštelanski", "Red", "Dalmatia, Croatia", "Medium to Full-bodied", "Medium", "Medium", ["The original Croatian parent of Zinfandel", "Warm-climate Mediterranean red", "Often juicy and spicy", "Historically revived from near disappearance"], ["Blackberry", "Cherry", "Licorice", "Pepper", "Dried herbs"], "Croatia's famous ancestral red behind Zinfandel, full of sunny fruit and spice"),
    grape("Pošip", "White", "Korčula, Croatia", "Medium to Full-bodied", "Very Low", "Medium to High", ["One of Croatia's leading whites", "Can be richer than many Adriatic whites", "Balances fruit with freshness", "Often grown near the coast"], ["Apricot", "Lemon", "Mediterranean herbs", "White flowers", "Saline"], "A broad yet lively Dalmatian white with stone fruit and sea-breeze freshness"),
    grape("Graševina", "White", "Slavonia, Croatia", "Light to Medium-bodied", "Very Low", "Medium to High", ["Croatia's most planted white", "Usually fresh and versatile", "Can range from simple to late-harvest styles", "Often emphasizes purity over power"], ["Green apple", "Citrus", "White pepper", "Pear", "Herbs"], "A crisp Croatian white that pairs bright fruit with peppery lift"),
    grape("Malvazija Istarska", "White", "Istria, Croatia", "Medium-bodied", "Very Low", "Medium", ["Flagship white of Istria", "Can be both aromatic and textured", "Often grown close to the sea", "Sometimes takes well to skin contact"], ["Peach", "Apricot", "Acacia", "Lemon peel", "Salt"], "Istria's hallmark white, generous in stone fruit with gentle Adriatic salinity"),
    grape("Grk", "White", "Lumbarda, Croatia", "Medium-bodied", "Very Low", "High", ["Rare island white variety", "Traditionally needs nearby pollinator vines", "Known for salty firmness", "Usually grown in sandy coastal sites"], ["Lemon", "Pear", "Herbs", "Saline", "White peach"], "A rare Croatian island white with citrus tension and a strong maritime signature")
];

const hungaryGrapes = [
    grape("Furmint", "White", "Tokaj, Hungary", "Medium to Full-bodied", "Very Low", "High", ["Core grape of Tokaj", "High acidity suits both dry and sweet wines", "Sensitive to noble rot", "Often mineral and age-worthy"], ["Green apple", "Quince", "Lemon", "Smoke", "Honey"], "Hungary's signature grape, equally compelling in bone-dry and sweet Tokaji styles"),
    grape("Hárslevelű", "White", "Tokaj & Somló, Hungary", "Medium-bodied", "Very Low", "Medium to High", ["Important Tokaj blending partner", "Softer and more aromatic than Furmint", "Can make floral dry wines", "Name refers to linden leaves"], ["Linden blossom", "Pear", "Honey", "Apricot", "Spice"], "A fragrant Hungarian white with floral richness and rounded texture"),
    grape("Juhfark", "White", "Somló, Hungary", "Full-bodied", "Very Low", "High", ["Closely associated with volcanic Somló", "Long-lived and structured", "Known for smoky mineral notes", "Usually dry and serious"], ["Lemon", "Green apple", "Smoke", "Salt", "Herbs"], "A distinctive volcanic Hungarian white marked by acidity, smoke, and saline energy"),
    grape("Olaszrizling", "White", "Balaton & across Hungary", "Medium-bodied", "Very Low", "Medium", ["Widely planted central European white", "Typically dry and subtle", "Can show almond bitterness", "Versatile across many sites"], ["Apple", "Pear", "Almond", "Lemon peel", "Herbs"], "A dependable Hungarian white offering orchard fruit and a quietly savory finish"),
    grape("Kékfrankos", "Red", "Sopron & Eger, Hungary", "Medium-bodied", "Medium", "High", ["Bright acidity and moderate tannin", "Important in Bikavér blends", "Can show real elegance in cooler zones", "Usually fresher than heavier international reds"], ["Sour cherry", "Black pepper", "Blackberry", "Violet", "Spice"], "Hungary's leading red grape, blending juicy fruit with peppery freshness"),
    grape("Kadarka", "Red", "Szekszárd & Eger, Hungary", "Light to Medium-bodied", "Low", "Medium to High", ["Historically important in central Europe", "Thin-skinned and aromatic", "Often pale but spicy", "Can be tricky in the vineyard"], ["Red cherry", "Rose", "Paprika", "White pepper", "Tea"], "A delicate yet spicy Hungarian red with vivid perfume and bright red fruit"),
    grape("Csókaszőlő", "Red", "Eger & Pannonhalma, Hungary", "Medium-bodied", "Medium", "Medium to High", ["Revived native Hungarian red", "Naturally vivid color", "Often lively and tart", "Still relatively rare in modern plantings"], ["Black cherry", "Cranberry", "Violet", "Pepper", "Earth"], "A rediscovered Hungarian red variety with tangy fruit and peppery lift"),
    grape("Cserszegi Fűszeres", "White", "Hungary", "Light to Medium-bodied", "Very Low", "Medium", ["Aromatic crossing created in Hungary", "Popular for youthful, expressive wines", "Usually vinified to preserve perfume", "Often easy to recognize blind"], ["Grapes", "Citrus", "Elderflower", "Spice", "Peach"], "A distinctly aromatic Hungarian white noted for floral perfume and spicy fruit")
];

const ukraineGrapes = [
    grape("Odesa Black", "Red", "Odesa region, Ukraine", "Full-bodied", "Medium to High", "Medium", ["Ukrainian-bred crossing", "Deeply pigmented skins", "Often gives opaque color", "Can make dense but polished reds"], ["Blackberry", "Black cherry", "Cocoa", "Violet", "Dried herbs"], "A hallmark modern Ukrainian red with dark fruit, color, and broad structure"),
    grape("Rubin Holodryhy", "Red", "Southern Ukraine", "Full-bodied", "Medium", "Medium", ["Created in Ukrainian breeding programs", "Performs well in warm steppe climates", "Typically generous in color and fruit", "Can show plush texture"], ["Black plum", "Blackberry", "Spice", "Chocolate", "Smoke"], "A rich Ukrainian red variety offering dark fruit and warm-climate depth"),
    grape("Golubok", "Red", "Black Sea region, Ukraine", "Medium-bodied", "Medium", "Medium to High", ["Teinturier-style crossing with dark flesh", "Known for intense color", "Often used for deeply hued reds", "Can keep notable freshness"], ["Blueberry", "Blackcurrant", "Violet", "Pepper", "Earth"], "A deeply colored Ukrainian-associated red with blue fruit and vivid freshness"),
    grape("Telti-Kuruk", "White", "Budjak / Odesa region, Ukraine", "Light to Medium-bodied", "Very Low", "High", ["Ancient Black Sea coastal variety", "Revived in modern Ukrainian winemaking", "Often saline and citrus-driven", "Especially suited to maritime influence"], ["Lemon", "Green apple", "Sea spray", "White flowers", "Herbs"], "A revived Ukrainian coastal white known for tension, salinity, and restraint"),
    grape("Sukholymanskyi Bilyi", "White", "Odesa region, Ukraine", "Medium-bodied", "Very Low", "Medium to High", ["Ukrainian crossing bred near Odesa", "Combines aroma with firmness", "Often clean and precise in style", "Useful in warm southern sites"], ["Apple", "Pear", "Acacia", "Lemon", "Mineral"], "A Ukrainian-bred white with orchard fruit, floral notes, and crisp structure"),
    grape("Citron Magaracha", "White", "Crimea & southern Ukraine", "Medium-bodied", "Very Low", "Medium", ["Highly aromatic variety", "Frequently used for still and sweet wines", "Shows muscat-like perfume", "Created in regional research institutes"], ["Lemon", "Orange blossom", "Muscat", "Apricot", "Honey"], "A fragrant Ukrainian white that leans citrusy, floral, and expressive"),
    grape("Kokur Belyi", "White", "Crimea, Ukraine", "Medium-bodied", "Very Low", "Medium", ["Historic Crimean white variety", "Can produce dry or dessert wines", "Often subtle yet textured", "Favours sunny coastal vineyards"], ["Pear", "Apple", "Herbs", "Saline", "Honey"], "An old Crimean white grape with gentle fruit and a coastal savory edge"),
    grape("Zagrey", "White", "Ukraine", "Medium-bodied", "Very Low", "Medium", ["Modern Ukrainian-bred aromatic white", "Often used for fresh dry styles", "Balances ripeness with lift", "Gaining attention in contemporary Ukrainian wine"], ["Apricot", "Citrus", "White flowers", "Spice", "Peach"], "A modern Ukrainian white that blends ripe stone fruit with bright floral aromatics")
];

const germanyGrapes = [
    grape("Spätburgunder", "Red", "Germany", "Light to Medium-bodied", "Low to Medium", "High", ["Germany's name for Pinot Noir", "Often elegant and cool-climate in tone", "Can range from delicate to oak-aged serious wines", "Thrives in regions like Ahr and Baden"], ["Cherry", "Raspberry", "Mushroom", "Smoke", "Rose"], "Germany's refined red benchmark, known for purity, freshness, and finesse"),
    grape("Dornfelder", "Red", "Germany", "Medium-bodied", "Medium", "Medium", ["Modern German crossing", "Noted for deep color", "Usually fruit-forward and approachable", "Often softer than Spätburgunder"], ["Black cherry", "Blackberry", "Violet", "Plum", "Spice"], "A dark-fruited German red that often shows juicy fruit and easy drinkability"),
    grape("Trollinger", "Red", "Württemberg, Germany", "Light-bodied", "Low", "Medium", ["Traditionally served lightly chilled", "Usually pale and easygoing", "Common in Württemberg", "Emphasizes freshness over tannin"], ["Strawberry", "Red cherry", "Herbs", "Pepper", "Almond"], "A light, cheerful German red with crunchy fruit and gentle spice"),
    grape("Lemberger", "Red", "Württemberg, Germany", "Medium-bodied", "Medium", "High", ["German name for Blaufränkisch", "Known for peppery acidity", "Can be both juicy and structured", "Works well in cooler sites"], ["Black cherry", "Blackberry", "Black pepper", "Violet", "Herbs"], "A lively German red with dark fruit, spice, and crisp backbone"),
    grape("Riesling", "White", "Germany", "Light to Medium-bodied", "Very Low", "High", ["Germany's classic white grape", "Can range from bone-dry to lusciously sweet", "Retains acidity even when ripe", "Transparent to site and climate"], ["Lime", "Green apple", "Peach", "Jasmine", "Slate"], "Germany's most famous grape, celebrated for precision, perfume, and electric acidity"),
    grape("Silvaner", "White", "Franconia, Germany", "Medium-bodied", "Very Low", "Medium", ["Less aromatic than Riesling", "Often subtle and savory", "Expresses soils clearly", "Frequently linked with Franconian bottle shapes"], ["Apple", "Pear", "Herbs", "Hay", "Wet stone"], "A quietly distinctive German white that favors texture and minerality over overt perfume"),
    grape("Müller-Thurgau", "White", "Germany", "Light-bodied", "Very Low", "Medium", ["Early-ripening crossing", "Usually soft and approachable", "Historically widespread in Germany", "Best examples emphasize freshness"], ["Green apple", "Pear", "Nutmeg", "White flowers", "Citrus"], "An easygoing German white with gentle fruit and floral charm"),
    grape("Scheurebe", "White", "Germany", "Light to Medium-bodied", "Very Low", "High", ["Aromatic crossing sometimes compared with Sauvignon Blanc", "Can make dry or sweet wines", "Usually highly expressive", "Maintains bright acidity"], ["Grapefruit", "Blackcurrant leaf", "Passion fruit", "Peach", "Blossom"], "A vivid German aromatic white packed with citrus, tropical fruit, and freshness")
];

const polandGrapes = [
    grape("Regent", "Red", "Poland", "Medium-bodied", "Medium", "Medium", ["Widely planted fungus-resistant red", "Well suited to cool-climate Polish viticulture", "Often gives ripe color and soft tannin", "Reliable in challenging growing seasons"], ["Black cherry", "Blackberry", "Plum", "Spice", "Herbs"], "One of Poland's core red grapes, combining dark fruit with practical cold-climate resilience"),
    grape("Rondo", "Red", "Poland", "Medium-bodied", "Medium", "Medium to High", ["Early-ripening hybrid often used in cool climates", "Produces deep color", "Can keep bright acidity", "Common in emerging Polish wineries"], ["Sour cherry", "Blackcurrant", "Pepper", "Violet", "Earth"], "A Polish mainstay for vivid, deeply colored reds with crisp structure"),
    grape("Marechal Foch", "Red", "Poland", "Medium-bodied", "Low to Medium", "Medium", ["Cold-hardy hybrid variety", "Often one of the earliest grapes to ripen", "Can make soft, juicy reds", "Useful in short growing seasons"], ["Red plum", "Blackberry", "Smoke", "Pepper", "Earth"], "A reliable cool-climate red often used where Poland's seasons demand early ripening"),
    grape("Leon Millot", "Red", "Poland", "Medium-bodied", "Low to Medium", "Medium", ["Another cold-climate hybrid with early ripening", "Often softer than Rondo", "Can show earthy depth", "Common in central and southern Polish vineyards"], ["Cherry", "Blackcurrant", "Cocoa", "Smoke", "Herbs"], "A practical Polish red grape that can deliver juicy fruit with smoky undertones"),
    grape("Solaris", "White", "Poland", "Light to Medium-bodied", "Very Low", "Medium", ["Extremely successful in northern climates", "Ripens early even in cooler seasons", "Often aromatic and ripe", "Popular across modern Polish wineries"], ["Peach", "Apricot", "Citrus", "Elderflower", "Honey"], "Poland's breakout white grape, prized for reliable ripening and expressive fruit"),
    grape("Johanniter", "White", "Poland", "Light to Medium-bodied", "Very Low", "Medium to High", ["Disease-resistant and cool-climate friendly", "Typically crisp and clean", "Sometimes compared loosely to Riesling styles", "Frequently used for sparkling bases too"], ["Green apple", "Lemon", "Pear", "White flowers", "Herbs"], "A bright Polish white choice with fresh citrus, orchard fruit, and lively structure"),
    grape("Hibernal", "White", "Poland", "Light-bodied", "Very Low", "High", ["Cold-hardy aromatic hybrid", "Known for preserving acidity", "Useful in cooler vineyard sites", "Can show clear varietal lift"], ["Grapefruit", "Gooseberry", "Herbs", "Lime", "Elderflower"], "A sharply fresh white variety well suited to Poland's cooler growing areas"),
    grape("Seyval Blanc", "White", "Poland", "Light to Medium-bodied", "Very Low", "Medium to High", ["Long used in cool-climate viticulture", "Often made in crisp dry styles", "Can work well for sparkling wines", "Reliable in shorter seasons"], ["Apple", "Lemon", "Melon", "Herbs", "Mineral"], "A dependable cool-climate white grown in Poland for fresh, clean wines")
];

const quizModes = [
    {
        id: "international-reds",
        label: "International Reds",
        description: "Classic globally recognized red grapes from the original quiz.",
        intro: "Learn the hallmark aromas and structure of 14 internationally famous red wine grapes.",
        sources: [],
        grapes: internationalReds
    },
    {
        id: "spain",
        label: "Spain",
        description: "Spanish local varieties with both red and white styles.",
        intro: "Explore Spain beyond Rioja with Atlantic whites, Mediterranean reds, and regional specialties.",
        sources: [
            { label: "Cellar Tours – Spanish grape varieties", url: "https://www.cellartours.com/blog/spain/spanish-grape-varieties" },
            { label: "Utiel-Requena DO – grape varieties", url: "https://utielrequena.org/en/our-do/varieties/" }
        ],
        grapes: spainGrapes
    },
    {
        id: "italy",
        label: "Italy",
        description: "Italian regional grapes spanning powerful reds and textured whites.",
        intro: "Taste through Italy's deep bench of native grapes, from volcanic southern reds to alpine and coastal whites.",
        sources: [
            { label: "The Wine Society – Italy: 57 varieties", url: "https://www.thewinesociety.com/discover/explore/expertise/italy-57-varieties/" },
            { label: "Wikipedia – list of Italian grape varieties", url: "https://en.wikipedia.org/wiki/List_of_Italian_grape_varieties" }
        ],
        grapes: italyGrapes
    },
    {
        id: "portugal",
        label: "Portugal",
        description: "Portuguese native grapes from Atlantic whites to structured reds.",
        intro: "Portugal's local vineyard heritage includes distinctive grapes for both refreshing whites and age-worthy reds.",
        sources: [
            { label: "Wines of Portugal – grape varieties", url: "https://www.winesofportugal.com/en/portuguese-wines/grape-varieties/" },
            { label: "Wikipedia – list of Portuguese wine grape varieties", url: "https://en.wikipedia.org/wiki/List_of_Portuguese_wine_grape_varieties" }
        ],
        grapes: portugalGrapes
    },
    {
        id: "france-local",
        label: "Non-international France",
        description: "French local varieties outside the usual global superstars.",
        intro: "Discover France's less-exported grapes from Corsica, Jura, Savoie, Muscadet, and the southwest.",
        sources: [
            { label: "GEVES – French catalogue of vine varieties", url: "https://www.geves.fr/catalogue-france/" },
            { label: "Plantgrape – French grape variety database", url: "https://plantgrape.plantnet-project.org/en/" }
        ],
        grapes: franceLocalGrapes
    },
    {
        id: "greece",
        label: "Greece",
        description: "Greek native reds and whites from volcanic islands and mountain vineyards.",
        intro: "Greek wine offers saline island whites, perfumed aromatics, and savory structured reds.",
        sources: [
            { label: "Greece and Grapes – Greek vineyard and grape varieties", url: "https://www.greeceandgrapes.com/en/greek-vineyard" },
            { label: "New Wines of Greece – grape varieties", url: "https://www.newwinesofgreece.com/varieties/" }
        ],
        grapes: greeceGrapes
    },
    {
        id: "croatia",
        label: "Croatia",
        description: "Croatian coastal and continental grapes across red and white styles.",
        intro: "Croatia's grapes range from Adriatic island whites to sun-baked Dalmatian reds and Istrian classics.",
        sources: [
            { label: "Vinacroatia – varieties", url: "https://vinacroatia.hr/en/croatian-vines/varieties/" },
            { label: "ECPGR – Indigenous grapevine varieties of Croatia", url: "https://www.ecpgr.org/fileadmin/templates/ecpgr.org/upload/WG_UPLOADS_PHASE_IX/VITIS/summary_Indigenous_grapevine_varieties_of_Croatia.pdf" }
        ],
        grapes: croatiaGrapes
    },
    {
        id: "hungary",
        label: "Hungary",
        description: "Hungarian grapes from Tokaj whites to peppery central European reds.",
        intro: "Hungary's local wine identity balances volcanic whites, aromatics, and bright, spicy reds.",
        sources: [
            { label: "Hungarian Wines – grape varieties", url: "https://hungarianwines.eu/grapes/" },
            { label: "VIVC – varieties registered in Europe", url: "https://www.vivc.de/index.php?r=www-europ-catalogue%2Findex" }
        ],
        grapes: hungaryGrapes
    },
    {
        id: "ukraine",
        label: "Ukraine",
        description: "Ukrainian local and regionally bred grapes from the Black Sea coast.",
        intro: "Ukraine's modern wine revival features revived local grapes and distinctive Black Sea varieties.",
        sources: [
            { label: "Wines of Ukraine – grape varieties", url: "https://ukr.wine/grapes/" },
            { label: "Wines from Ukraine – indigenous grapes overview", url: "https://winesfromukraine.com/2026/02/06/discover-ukraines-indigenous-grapes/" }
        ],
        grapes: ukraineGrapes
    },
    {
        id: "germany",
        label: "Germany",
        description: "German classics including reds and whites beyond just Riesling.",
        intro: "Germany's vineyards cover fragrant whites, savory soil-driven styles, and elegant cool-climate reds.",
        sources: [
            { label: "Wines of Germany – grape varieties", url: "https://www.winesofgermany.com/our-wine/grape-varieties" },
            { label: "German Wine Society – principal grape varietals", url: "https://germanwinesociety.org/principal-grape-varietals/" }
        ],
        grapes: germanyGrapes
    },
    {
        id: "poland",
        label: "Poland",
        description: "Poland's cool-climate mix of red and white varieties used by local wineries.",
        intro: "Polish wine leans on cold-hardy varieties that can still deliver vivid fruit and freshness.",
        sources: [
            { label: "VeloWino – Polish grapes from A to Z", url: "https://www.velowino.pl/en/blog/polish-grapes-from-a-to-z/" },
            { label: "Wikipedia – Polish wine", url: "https://en.wikipedia.org/wiki/Polish_wine" }
        ],
        grapes: polandGrapes
    }
];

const quizModeMap = Object.fromEntries(quizModes.map((mode) => [mode.id, mode]));

let currentQuestionIndex = 0;
let score = 0;
let questionsAsked = 0;
let shuffledGrapes = [];
let currentGrape = null;
let activeQuizMode = quizModes[0];
let answered = false;

const questionCard = document.getElementById('question-card');
const resultsCard = document.getElementById('results-card');
const characteristicsList = document.getElementById('characteristics-list');
const aromasList = document.getElementById('aromas-list');
const optionButtons = document.querySelectorAll('.option-btn');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const totalDisplay = document.getElementById('total');
const finalScoreDisplay = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const restartBtn = document.getElementById('restart-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const quizModeSelect = document.getElementById('quiz-mode');
const quizDescription = document.getElementById('quiz-description');
const referenceTitle = document.getElementById('reference-title');
const referenceIntro = document.getElementById('reference-intro');
const referenceSources = document.getElementById('reference-sources');

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function getSelectedMode() {
    return quizModeMap[quizModeSelect.value] || quizModes[0];
}

function updateModeContent() {
    activeQuizMode = getSelectedMode();
    quizDescription.textContent = activeQuizMode.description;
    referenceTitle.textContent = `${activeQuizMode.label} Reference Guide`;
    referenceIntro.textContent = activeQuizMode.intro;
}

function initGame() {
    updateModeContent();
    score = 0;
    questionsAsked = 0;
    currentQuestionIndex = 0;
    shuffledGrapes = shuffleArray(activeQuizMode.grapes);

    questionCard.classList.remove('hidden');
    resultsCard.classList.add('hidden');

    updateScore();
    renderReferenceGuide();
    loadQuestion();
}

function updateScore() {
    scoreDisplay.textContent = score;
    totalDisplay.textContent = questionsAsked;
}

function loadQuestion() {
    if (currentQuestionIndex >= shuffledGrapes.length) {
        showResults();
        return;
    }

    answered = false;
    currentGrape = shuffledGrapes[currentQuestionIndex];

    characteristicsList.innerHTML = '';
    currentGrape.characteristics.forEach((characteristic) => {
        const li = document.createElement('li');
        li.textContent = characteristic;
        characteristicsList.appendChild(li);
    });

    aromasList.innerHTML = '';
    currentGrape.aromas.forEach((aroma) => {
        const li = document.createElement('li');
        li.textContent = aroma;
        aromasList.appendChild(li);
    });

    const options = createOptions(currentGrape);
    optionButtons.forEach((btn, index) => {
        const option = options[index];
        if (!option) {
            btn.classList.add('hidden');
            btn.onclick = null;
            return;
        }

        btn.classList.remove('hidden', 'correct', 'incorrect');
        btn.textContent = option;
        btn.disabled = false;
        btn.onclick = () => checkAnswer(option, btn);
    });

    feedbackDiv.classList.add('hidden');
    nextBtn.classList.add('hidden');
}

function createOptions(correctGrape) {
    const otherGrapes = activeQuizMode.grapes.filter((grapeOption) => grapeOption.name !== correctGrape.name);
    const distractors = shuffleArray(otherGrapes)
        .slice(0, Math.max(0, Math.min(optionButtons.length - 1, otherGrapes.length)))
        .map((grapeOption) => grapeOption.name);

    return shuffleArray([correctGrape.name, ...distractors]);
}

function checkAnswer(selectedAnswer, button) {
    if (answered) return;

    answered = true;
    questionsAsked++;

    const isCorrect = selectedAnswer === currentGrape.name;

    if (isCorrect) {
        score++;
        button.classList.add('correct');
        feedbackDiv.textContent = `✓ Correct! This is ${currentGrape.name}.`;
        feedbackDiv.classList.remove('incorrect');
        feedbackDiv.classList.add('feedback', 'correct');
    } else {
        button.classList.add('incorrect');
        feedbackDiv.textContent = `✗ Incorrect. The correct answer is ${currentGrape.name}.`;
        feedbackDiv.classList.remove('correct');
        feedbackDiv.classList.add('feedback', 'incorrect');

        optionButtons.forEach((btn) => {
            if (btn.textContent === currentGrape.name) {
                btn.classList.add('correct');
            }
        });
    }

    optionButtons.forEach((btn) => {
        btn.disabled = true;
    });

    feedbackDiv.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    updateScore();
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    questionCard.classList.add('hidden');
    resultsCard.classList.remove('hidden');

    const percentage = questionsAsked === 0 ? 0 : Math.round((score / questionsAsked) * 100);
    finalScoreDisplay.textContent = `${score}/${questionsAsked} (${percentage}%)`;

    let message = '';
    if (percentage === 100) {
        message = `Perfect score in ${activeQuizMode.label}! You're a true wine connoisseur! 🏆`;
    } else if (percentage >= 80) {
        message = `Excellent ${activeQuizMode.label} knowledge! 🌟`;
    } else if (percentage >= 60) {
        message = `Good job with ${activeQuizMode.label}! Keep learning and tasting! 👍`;
    } else if (percentage >= 40) {
        message = `Nice start in ${activeQuizMode.label}. There's room to explore more! 📚`;
    } else {
        message = `Keep learning ${activeQuizMode.label}! Check the reference guide below. 🍷`;
    }

    finalMessage.textContent = message;
}

function renderReferenceGuide() {
    const grapeGrid = document.querySelector('.grape-grid');
    if (!grapeGrid) return;

    grapeGrid.innerHTML = '';
    referenceSources.innerHTML = '';

    if (activeQuizMode.sources.length > 0) {
        const label = document.createElement('p');
        label.textContent = 'Source links for this quiz:';
        referenceSources.appendChild(label);

        const sourceList = document.createElement('ul');
        activeQuizMode.sources.forEach((source) => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = source.url;
            link.target = '_blank';
            link.rel = 'noreferrer noopener';
            link.textContent = source.label;
            item.appendChild(link);
            sourceList.appendChild(item);
        });
        referenceSources.appendChild(sourceList);
    }

    activeQuizMode.grapes.forEach((grapeItem) => {
        const card = document.createElement('div');
        card.className = 'grape-card';

        card.innerHTML = `
            <h3>${grapeItem.name}</h3>
            <div class="grape-details">
                <p><strong>Color:</strong> ${grapeItem.color}</p>
                <p><strong>Origin:</strong> ${grapeItem.origin}</p>
                <p><strong>Body:</strong> ${grapeItem.body}</p>
                <p><strong>Tannins:</strong> ${grapeItem.tannins}</p>
                <p><strong>Acidity:</strong> ${grapeItem.acidity}</p>
                <p><strong>Key Aromas:</strong> ${grapeItem.aromas.join(', ')}</p>
                <p><strong>Characteristics:</strong> ${grapeItem.description}</p>
            </div>
        `;

        grapeGrid.appendChild(card);
    });
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initGame);
playAgainBtn.addEventListener('click', initGame);
quizModeSelect.addEventListener('change', initGame);

initGame();
