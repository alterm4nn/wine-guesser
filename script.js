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
            "Top examples can age for decades"
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
            "Plantings expanded dramatically in Argentina after decline in France",
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
            "Usually ripens earlier than Cabernet Sauvignon",
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
            "Often high alcohol in warm climates",
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

const internationalWhites = [
    grape("Chardonnay", "White", "Burgundy, France", "Medium to Full-bodied", "Very Low", "Medium to High", ["One of the world's most planted white grapes", "Can range from unoaked and crisp to rich and oaked", "Adapts strongly to climate and winemaking style", "Core grape for still and sparkling wines"], ["Green apple", "Lemon", "Pineapple", "Butter", "Vanilla"], "A globally important white grape whose style runs from lean and mineral to broad and creamy"),
    grape("Sauvignon Blanc", "White", "Loire Valley & Bordeaux, France", "Light to Medium-bodied", "Very Low", "High", ["Typically high in acidity", "Often made in fresh stainless-steel styles", "Can show herbal and citrus intensity", "Widely planted in France, New Zealand, and beyond"], ["Gooseberry", "Grapefruit", "Lime", "Cut grass", "Passion fruit"], "A vibrant aromatic white known for piercing freshness and herbal-citrus character"),
    grape("Riesling", "White", "Germany", "Light to Medium-bodied", "Very Low", "High", ["Naturally high acidity", "Produced in dry through sweet styles", "Transparent to site and climate", "Noted for long aging potential"], ["Lime", "Green apple", "Peach", "Jasmine", "Wet stone"], "A precise and age-worthy white grape famous for aromatic lift and electric acidity"),
    grape("Albariño", "White", "Rías Baixas, Spain", "Light to Medium-bodied", "Very Low", "High", ["Atlantic coastal variety with saline freshness", "Usually vinified in crisp unoaked styles", "Known for aromatic intensity and bright fruit", "Strong pairing with seafood"], ["Lime", "Peach", "Apricot", "Orange blossom", "Sea spray"], "A zesty Iberian white grape combining citrusy lift with maritime salinity"),
    grape("Pinot Grigio / Pinot Gris", "White", "France (Alsace) and Northern Italy", "Light to Medium-bodied", "Very Low", "Medium to High", ["Same grape, often styled differently by region", "Some expressions are lighter and crisper", "Others can be richer and gently spiced", "Pinkish skins despite white-wine use"], ["Pear", "Lemon", "White peach", "Melon", "Almond"], "A versatile white variety that ranges from brisk and simple to textured and aromatic"),
    grape("Sémillon", "White", "Bordeaux, France", "Medium-bodied", "Very Low", "Medium", ["Important in Bordeaux dry and sweet blends", "Thin skins can be susceptible to noble rot", "Often blended with Sauvignon Blanc", "Can gain waxy complexity with bottle age"], ["Lemon", "Pear", "Beeswax", "Honey", "Lanolin"], "A structured white grape used for both fresh blends and world-class botrytized sweet wines"),
    grape("Chenin Blanc", "White", "Loire Valley, France", "Light to Full-bodied", "Very Low", "High", ["Made in sparkling, dry, off-dry, and sweet styles", "Retains acidity in warm climates", "Can age very well in top examples", "Increasingly important in South Africa"], ["Quince", "Green apple", "Pear", "Honey", "Chamomile"], "A highly adaptable white grape that combines vibrant acidity with broad stylistic range"),
    grape("Viognier", "White", "Northern Rhône, France", "Full-bodied", "Very Low", "Low to Medium", ["Usually aromatic and full in texture", "Naturally lower acidity than many classic whites", "Best examples balance richness with freshness", "Can be used for co-fermentation in Côte-Rôtie"], ["Apricot", "Peach", "Honeysuckle", "Orange blossom", "Spice"], "A perfumed white grape known for lush stone-fruit flavors and floral richness"),
    grape("Gewürztraminer", "White", "Alsace, France", "Full-bodied", "Very Low", "Low to Medium", ["Very aromatic variety with distinctive perfume", "Often medium to full-bodied", "Typically lower acidity than Riesling", "Can appear in dry and off-dry styles"], ["Lychee", "Rose", "Ginger", "Orange peel", "Turkish delight"], "An intensely aromatic white grape recognized for exotic floral perfume and spice"),
    grape("Muscat", "White", "Mediterranean basin (ancient family of varieties)", "Light to Medium-bodied", "Very Low", "Medium", ["Ancient family with many clones and regional names", "One of the most aromatic grape families", "Used for still, sparkling, and fortified wines", "Often vinified in dry to sweet styles"], ["Grapes", "Orange blossom", "Peach", "Citrus", "Honey"], "A highly fragrant grape family that delivers unmistakable floral and grapey aromas across many wine styles")
];

const spainGrapes = [
    grape("Tempranillo", "Red", "North-central Spain, probably the upper Ebro (Rioja/Navarra). A natural cross of Albillo Mayor × Benedicto. Known as Tinta del País, Tinto Fino, Cencibel, Ull de Llebre, Tinta de Toro — and Tinta Roriz/Aragonez in Portugal.", "Medium to full", "medium, fine-grained", "medium to low", ["Early ripening (the name means \"little early one\"), thick-skinned, low natural acidity that makes altitude and cool nights essential", "Takes oak exceptionally well — American oak in traditional Rioja, French in modern Ribera", "Ages for decades in its best forms"], ["Strawberry", "red plum", "dried fig", "tomato leaf", "With oak: vanilla", "coconut", "dill", "leather", "tobacco", "Mature examples turn to dried cherry", "cigar box", "balsamic"], "Spain's national red and one of the world's great vinous chameleons. Rioja gives perfume and finesse, Ribera del Duero gives density and structure, Toro gives brute power, La Mancha gives volume. The modern debate is between the traditional *Gran Reserva* model — long American-oak ageing, tertiary complexity, released mature — and the fruit-forward, French-oak, single-vineyard style. Both are legitimate. If you want to understand Spain in one grape, this is it."),
    grape("Garnacha Tinta", "Red", "Aragón, north-east Spain, almost certainly Cariñena/Campo de Borja. Spread to Sardinia (Cannonau) and southern France (Grenache Noir) with the Crown of Aragón.", "Medium to full", "low to medium, soft", "low", ["Late ripening, drought- and wind-resistant, high sugar accumulation — 15% alcohol arrives easily", "Pale to medium colour that oxidises and fades quickly", "Old bush vines on poor schist or slate give concentration the grape cannot manage on fertile flats", "A serial mutator: Garnacha Blanca, Garnacha Peluda, Garnacha Tintorera (properly Alicante Bouschet, a different grape)"], ["Ripe strawberry", "raspberry", "red plum", "orange peel", "Warmer sites: kirsch", "dried fig", "liquorice", "Age brings tar", "tobacco leaf", "dried herbs"], "For fifty years Garnacha was Spain's workhorse — bulk red, rosé, blending material to fatten Tempranillo. The revival has been one of the most striking stories in European wine: Priorat proved it could produce world-class wine on *llicorella* slate; Gredos then proved it could be pale, high-toned and almost Burgundian at 900m; Campo de Borja and Calatayud supply the value. Old-vine Garnacha is now among the best-value serious wine anywhere."),
    grape("Monastrell", "Red", "Valencia/Murcia region of eastern Spain. Known as Mourvèdre in France, Mataró in Australia and California.", "Full", "high, firm and rustic", "medium", ["Very late ripening — needs real heat and a long season, which is why it dominates Jumilla, Yecla, Alicante and Bullas", "Small thick-skinned berries, deep colour, high alcohol", "Notoriously reductive in the cellar; needs oxygen management or it turns feral", "Improves markedly with a few years in bottle"], ["Blackberry", "black plum", "black pepper", "thyme and rosemary garrigue", "Its signature markers are a meaty", "gamey", "almost bloody note and warm earth", "Oak adds mocha and smoke"], "Spain's muscular southern red, long dismissed as coarse but transformed by lower yields, earlier picking and better cellar hygiene. Jumilla's ungrafted old bush vines — phylloxera never fully took hold in the sandy soils — are a genuine treasure. Also makes serious dry rosé in Alicante and, blended, forms the M of the GSM triumvirate."),
    grape("Bobal", "Red", "Utiel-Requena, inland Valencia. The name likely derives from Latin *bovale*, for the bull's-head shape of the bunch.", "Medium to full", "medium-high", "high — unusually so for its climate", ["Spain's second most planted red by area yet almost unknown abroad", "Drought-resistant, high-yielding if allowed, deeply coloured, and — critically — retains acidity in heat where Tempranillo and Garnacha collapse", "Old head-trained vines at 700-900m are the source of everything good"], ["Blackberry", "blueberry", "damson", "violet", "A distinct wild-herb and iron/graphite streak", "Rosés show redcurrant and pomegranate"], "The classic case of a bulk grape with an unrealised fine-wine identity. For decades it went into anonymous blending wine and rosé for the north; a small group of Utiel-Requena growers has since shown that old-vine Bobal at altitude produces fresh, structured, faintly wild reds with real ageing capacity. Its natural acidity makes it increasingly interesting as the Spanish interior warms."),
    grape("Mencía", "Red", "North-west Spain — Bierzo, Ribeira Sacra, Valdeorras. DNA has confirmed it is identical to Portugal's Jaen (of the Dão) and unrelated to Cabernet Franc, despite a century of assumption otherwise.", "Light to medium", "medium, fine", "medium-high", ["Early ripening, thin-skinned, vigorous on fertile ground and disappointing there", "On the steep slate and granite terraces of the Sil and Cúa valleys — often ungrafted, often 60-100 years old — it makes something entirely different: pale, aromatic, mineral, structured"], ["Sour cherry", "redcurrant", "pomegranate", "violet", "bay leaf", "crushed slate", "Whole-bunch versions add black pepper and a floral lift", "Age brings graphite", "dried flowers", "undergrowth"], "The engine of Spain's \"Atlantic red\" movement. Growers such as Raúl Pérez and the Palacios family showed from the late 1990s that Bierzo and Ribeira Sacra could produce reds closer in weight and perfume to the northern Rhône or Burgundy than to anything in Castile. Genuinely site-transparent — slate and granite plots taste audibly different. One of Spain's most exciting varieties."),
    grape("Graciano", "Red", "Rioja/Navarra. Identical to Portugal's Tinta Miúda and Languedoc's Morrastel.", "Medium to full", "high, firm", "very high", ["Low-yielding, late-ripening and awkward — which nearly killed it off in the twentieth century, when plantings fell to a few hundred hectares", "Deeply coloured, powerfully aromatic, and blessed with acidity that survives Rioja's warmest vintages", "Long-lived"], ["Blackberry", "black cherry", "violet and — its calling card — an intense floral-spice perfume with liquorice", "black pepper and a balsamic edge"], "Rioja's secret weapon. Traditionally a small percentage in the blend, where it supplies the acidity, colour and aromatic top note that Tempranillo lacks; a *Gran Reserva* without it can taste flat. Varietal bottlings are now appearing and can be superb, if demanding — high acid and firm tannin need time. Its climate resilience has made it a serious subject of research as Rioja warms."),
    grape("Cariñena", "Red", "Aragón, named for the town of Cariñena. Known as Mazuelo in Rioja, Samsó in Catalonia, Carignan in France, Carignano in Sardinia.", "Full", "high, sometimes coarse", "very high", ["Late ripening, hugely productive if unchecked, prone to powdery mildew", "High in everything — colour, tannin, acid, alcohol — which made it the bulk grape of southern France and a byword for harshness", "Old, low-yielding bush vines are an entirely different proposition", "Frequently carbonic-macerated to soften it"], ["Blackberry", "cranberry", "dried cherry", "black olive", "iron", "dried herbs", "cured meat", "A stony", "slightly bitter finish is characteristic"], "The most maligned and most rehabilitated grape in the Mediterranean. Priorat's *velles vinyes* Cariñena, some over a century old on slate, now commands serious money; Montsant, Empordà and Terra Alta follow. In Rioja it plays Graciano's supporting role under the name Mazuelo, adding grip and acid. The lesson is unambiguous: yield determines everything."),
    grape("Prieto Picudo", "Red", "Tierra de León, Castilla y León. The name describes the dark, pointed berries.", "Medium to full", "medium-high", "high", ["Small, tightly packed conical bunches, thick skins, deep colour", "Traditionally vinified with a partial *madreo* — adding whole bunches to fermenting must — which lifts aromatics and gives the wines a faint natural spritz", "Naturally high acidity for a continental climate"], ["Blackcurrant", "blackberry", "violet", "liquorice", "wild herbs", "a faintly saline-mineral finish", "Rosés show raspberry and pink grapefruit"], "León's own grape and an increasingly credible one. The regional speciality is a deep-coloured, high-acid, gently spritzy rosé that has few parallels anywhere, but the serious ambition now is in structured reds from old bush vines on gravel. Very much a variety on the way up, and still cheap."),
    grape("Listán Negro", "Red", "The Canary Islands, principally Tenerife and Lanzarote. Related to Palomino (Listán Blanco).", "Light to medium", "low to medium, silky", "medium-high", ["Grown on volcanic ash and lava, very often ungrafted — the Canaries never had phylloxera — with vines that can be 100-200 years old, trained in the extraordinary *cordón trenzado* braids of Tenerife or in the *hoyos* craters of Lanzarote", "Early ripening, moderate alcohol"], ["Red cherry", "cranberry", "pomegranate", "dried herbs", "and a signature smoky/volcanic-ash and black-pepper note", "Whole-bunch versions add violet and green peppercorn"], "A cult variety of the last decade. Pale, perfumed, savoury reds with genuine minerality and low-to-moderate alcohol — the antithesis of the Spanish red stereotype, and much better suited to modern tastes than anyone expected. Envínate, Suertes del Marqués and Los Bermejos brought it international attention. The ungrafted, pre-phylloxera genetic material is of real scientific value."),
    grape("Callet", "Red", "Mallorca, Balearic Islands.", "Light to medium", "low to medium, soft", "medium", ["Large berries, pale juice, low colour extraction and moderate alcohol", "Ripens late, tolerates drought and the island's limestone soils", "Often blended with the more structured Mantonegro and Fogoneu"], ["Red cherry", "wild strawberry", "dried fig", "Mediterranean scrub — rosemary", "thyme", "fennel — with an earthy", "faintly saline finish"], "One of a handful of Balearic survivors that phylloxera and tourism nearly finished off. Light-coloured and easy to underestimate, but in careful hands (Ànima Negra above all) it makes wines of surprising perfume and length that taste convincingly of a hot, herb-covered island. Included here as a representative of Spain's island and micro-regional diversity, which extends much further than the mainland classics."),
    grape("Albariño", "White", "Rías Baixas, Galicia, and the Minho on the Portuguese side, where it is Alvarinho. The long-held claim of Alsatian Riesling ancestry has been disproved; it is native to the Atlantic north-west.", "Medium, with real texture", "Very Low", "high", ["Thick-skinned, small-berried — an adaptation to a very wet, humid maritime climate — and traditionally trained on high pergolas to keep air moving through the canopy", "High extract and high acid together", "Increasingly made with lees ageing, oak or amphora, and shows genuine capacity to age five to ten years"], ["Grapefruit", "lime", "white peach", "nectarine", "honeysuckle", "almond", "A salty", "faintly bitter mineral finish", "With age: beeswax", "quince", "lanolin"], "Spain's most successful white export and the flagship of Atlantic Spain. The commercial style is bright, aromatic and immediate; the more interesting current work is in longer lees contact and single-parcel bottlings that reveal a much more serious, textural, Chablis-adjacent wine. Superb with the shellfish it grew up beside."),
    grape("Verdejo", "White", "Rueda, Castilla y León, where it has been documented since the eleventh century.", "Medium", "Very Low", "medium-high", ["Highly susceptible to oxidation, which historically pushed Rueda toward a sherry-like *dorado* style; modern reductive winemaking, night harvesting and cool fermentation transformed it in the 1970s", "High in phenolics, giving a characteristic bitter-almond grip on the finish", "Vineyards sit at 700-800m on stony soils"], ["Lime", "green apple", "white peach", "fennel", "bay", "freshly cut grass", "A distinctive bitter-almond and crushed-nettle note", "Lees or oak versions add hazelnut and cream"], "Spain's answer to Sauvignon Blanc in commercial positioning, but a more textured and herbal wine than that suggests. The bulk of Rueda is straightforward; the ambitious end — old bush vines, barrel fermentation, extended lees — makes wines of real weight and bite. Frequently blended with Sauvignon Blanc, usually to its detriment."),
    grape("Godello", "White", "Valdeorras, Galicia, extending into Bierzo and Monterrei. Identical to Portugal's Gouveio.", "Medium to full", "Very Low", "high", ["Nearly extinct by the 1970s — reduced to a few dozen hectares — and rescued by a state-backed recuperation project in Valdeorras", "Thick-skinned, moderate yields, thrives on slate and granite", "Structurally powerful enough to handle oak and long lees ageing without losing definition"], ["Green apple", "pear", "quince", "white peach", "fennel", "wet stone", "Lees and oak bring toasted hazelnut", "beeswax", "a Burgundian creaminess", "Ages to honey and dried apricot"], "Widely reckoned Spain's finest white grape by those who take Spanish whites seriously. Fuller and more structured than Albariño, with the same Atlantic acidity — the natural comparison is white Burgundy, though the mineral, stony spine is its own. The recovery from near-extinction to international acclaim in fifty years is one of the great varietal rescue stories."),
    grape("Xarel·lo", "White", "Penedès, Catalonia. Also called Pansa Blanca in Alella.", "Medium to full", "Very Low", "high", ["The structural backbone of the Cava trio alongside Macabeo (fruit, delicacy) and Parellada (florality, finesse)", "Late ripening, thick-skinned, notably high in antioxidant phenolics — which is precisely why Cava can age", "Prone to oxidation if handled carelessly, superb if not"], ["Green apple", "pear", "citrus peel", "fennel", "aniseed", "A characteristic waxy", "faintly bitter", "herbal-earthy note", "Age and lees bring toast", "almond", "quince", "wild honey"], "For decades an anonymous component of industrial Cava, now the subject of a serious still-wine movement in Penedès — barrel-fermented, amphora-aged and skin-contact Xarel·lo have all found followings. It has the acid, the extract and the phenolic grip that ageing requires. Arguably the most underrated white grape in Spain."),
    grape("Pedro Ximénez", "White", "Montilla-Moriles, Andalucía, where it is dominant; also planted in Jerez, Málaga and the Canaries.", "Extremely full when raisined", "Very Low", "low", ["Thin-skinned and prone to rot, but ideally suited to *asoleo* — sun-drying the harvested bunches on esparto mats for several days, which concentrates the sugar to extraordinary levels (400-500 g/l is normal)", "Fortified and aged oxidatively in solera", "Also made dry in Montilla, where the natural alcohol is high enough that fortification is unnecessary"], ["Raisin", "date", "dried fig", "molasses", "treacle", "liquorice", "walnut", "coffee", "burnt caramel", "Very old examples add balsamic", "iodine and tar"], "The source of the darkest, sweetest and most concentrated wine in Europe — nearly black, viscous enough to coat the glass, and capable of ageing for decades in solera. Included here as the emblem of Andalucía's biologically and oxidatively aged wine culture, which is a Spanish contribution to world wine as significant as Rioja. Pour it over vanilla ice cream and the argument ends."),
];


const italyGrapes = [
    grape("Sangiovese", "Red", "Tuscany. DNA analysis identifies the parents as Ciliegiolo and the obscure southern Calabrese di Montenuovo, implying a more southerly ancestry than the Tuscan identity suggests. Clones and biotypes include Brunello, Prugnolo Gentile, Morellino, Sangiovese Grosso.", "Medium to full", "high, firm and drying", "high", ["Late ripening, thin-skinned, highly mutable — clonal selection has been the defining quality question in Tuscany for forty years", "Pale to medium colour that belies the structure", "Needs a warm site to ripen tannins fully; needs altitude and limestone to keep the acid in balance", "Long-lived"], ["Sour cherry above all", "then red plum", "dried herb", "tomato leaf", "orange peel", "Age brings leather", "tobacco", "forest floor", "balsamic", "dried rose"], "Italy's most planted variety and the grape of Chianti Classico, Brunello di Montalcino and Vino Nobile di Montepulciano. Its signature is the combination of high acid and high tannin around a red-fruited, savoury core — a structure that makes it one of the great food wines and a poor cocktail wine. Traditional Montalcino (Biondi-Santi and its heirs) argues for restraint, long ageing and transparency; the modernists argued for extraction and French oak. The traditionalists have largely won."),
    grape("Nebbiolo", "Red", "Piedmont, with a documented history back to the thirteenth century. Also Valtellina (Chiavennasca) and Alto Piemonte (Spanna, Picotendro).", "Medium body but full impact", "very high, fine-grained", "very high", ["The earliest to bud and the latest to ripen, which restricts it to a handful of favoured south-facing sites — hence the obsession with *cru* in Barolo and Barbaresco", "Pale garnet colour from the start, fading to brick within a few years, with no relationship whatsoever to the tannic weight behind it", "Highly sensitive to soil: the Tortonian marls of La Morra give perfume, the Serravallian of Serralunga gives structure", "Ages for decades"], ["The classic formula is tar and roses", "Beneath: sour cherry", "red plum", "raspberry", "With age", "dried rose petal", "dried cherry", "truffle", "forest floor", "leather", "liquorice", "mint", "camphor"], "Italy's greatest red grape and one of the world's three or four most site-expressive varieties. The paradox — pale colour, ferocious tannin, ethereal perfume — never stops being surprising. A mature Barbaresco or Barolo at thirty or forty years resolves the tannin entirely and leaves something extraordinarily fragrant and delicate. Notoriously unwilling to travel; almost nothing outside Piedmont and Valtellina has convinced."),
    grape("Barbera", "Red", "Piedmont, principally Asti and Alba, documented since the seventeenth century.", "Medium to full", "low to medium, soft", "very high", ["The unusual combination of deep colour, low tannin and searingly high acidity", "Reliable and productive where Nebbiolo is not, which is why it historically occupied the good-but-not-best sites and became Piedmont's everyday red", "Takes to oak readily; barrique ageing from the 1980s (Giacomo Bologna's Bricco dell'Uccellone) redefined its ceiling"], ["Sour cherry", "blackberry", "black plum", "dried herbs", "liquorice", "Oak brings vanilla", "mocha", "smoke"], "The most food-friendly red in Italy — the acidity cuts fat and the low tannin means it never fights the plate. Ranges from cheerful, juicy, slightly fizzy everyday bottles to concentrated, oak-aged, seriously ageworthy Barbera d'Asti Superiore. It is also, quietly, adapting well to a warming climate precisely because its acidity is so high."),
    grape("Aglianico", "Red", "Campania and Basilicata. Probably brought by Greek settlers, though the once-standard etymology from *Hellenico* is now doubted. Principal homes: Taurasi (Campania) and Monte Vulture (Basilicata).", "Full", "very high, firm", "high", ["Very late ripening — harvest often runs into November — and thick-skinned", "Volcanic soils in both its heartlands", "Fierce tannin and acid in youth that require either long ageing or very careful extraction; Taurasi's DOCG minimum is three years, and it needs more"], ["Black cherry", "plum", "blackcurrant", "dried herbs", "black pepper", "chocolate", "smoke and volcanic ash", "Age brings leather", "tobacco", "coffee", "tar", "dried fig"], "Routinely called the Barolo of the south, and the comparison holds for structure and longevity if not for aroma. The best Taurasi and Aglianico del Vulture are among Italy's most underpriced serious reds — brooding, savoury and built to last twenty years. The variety demands patience from both producer and drinker, which has limited its commercial reach and kept the prices honest."),
    grape("Nerello Mascalese", "Red", "Mount Etna, Sicily — specifically the Mascali plain on the eastern slope, from which it takes its name.", "Light to medium", "high, fine and chalky", "high", ["Late ripening, pale-skinned, grown on black volcanic soils in terraced *contrade* between roughly 400m and 1,000m, frequently on ungrafted bush vines (*alberello*) over a century old", "Usually blended with a little Nerello Cappuccio for colour and flesh", "Extraordinarily transparent to site — Etna's contrada system functions much as Burgundy's climats do"], ["Red cherry", "wild strawberry", "cranberry", "dried orange peel", "rose", "thyme", "and a defining smoky-volcanic mineral note", "Age brings dried flowers", "tea leaf", "tar", "iron"], "The grape behind Etna Rosso and one of the discoveries of the last twenty-five years. Its pale colour, high acid, fine tannin and haunting perfume invite Burgundy and Nebbiolo comparisons that are lazier than they are wrong. Etna's combination of altitude, volcanic soil, old ungrafted vines and huge diurnal shift produces reds of a lightness and precision found nowhere else in the south."),
    grape("Nero d'Avola", "Red", "South-eastern Sicily, named for the town of Avola near Syracuse. Also called Calabrese, confusingly, since it is Sicilian.", "Full", "medium to high", "medium to high", ["Drought-tolerant, thick-skinned, deeply coloured, capable of very high sugar", "Historically shipped north in bulk to fortify pale French and Piedmontese reds", "Under lower yields and earlier picking it retains genuine acidity — the difference between the old jammy style and the current one is largely a picking-date decision"], ["Black cherry", "black plum", "blackberry", "liquorice", "tobacco", "black pepper", "dried herbs", "Oak adds chocolate and vanilla"], "Sicily's most planted red and its commercial ambassador. The mass-market version is soft, ripe and forgettable; the serious version — from old bush vines around Noto, Vittoria and Pachino — has structure, tension and a savoury, almost saline finish. Also the senior partner to Frappato in Cerasuolo di Vittoria, Sicily's only DOCG."),
    grape("Montepulciano", "Red", "The Abruzzo and central-eastern Italy. Not to be confused with the Tuscan town of Montepulciano, whose wine (Vino Nobile) is made from Sangiovese — one of the most persistent naming traps in Italian wine.", "Full", "medium to high, soft-grained", "medium", ["Late ripening, high-yielding, deeply coloured with abundant anthocyanin", "Ripens tannins gently, giving a plush rather than aggressive structure", "The best sites are the hillsides of Teramo (Colline Teramane DOCG)"], ["Black cherry", "plum", "blackberry", "dried oregano", "liquorice", "black pepper", "a faint earthy-leathery note", "Oak adds chocolate and smoke"], "Italy's great value red — dark, generous, soft-textured and reliably drinkable at prices that embarrass most competitors. At the top end (Valentini, Emidio Pepe, Tiberio) it becomes something considerably more serious and long-lived. Also responsible for Cerasuolo d'Abruzzo, a deep-coloured, structured rosé that is among Italy's best."),
    grape("Corvina Veronese", "Red", "The Valpolicella hills of the Veneto. Blended with Corvinone (a distinct variety, not a clone), Rondinella and sometimes Molinara.", "Light to medium fresh, full when dried", "medium", "high", ["Thick-skinned with loose bunches — the single most important attribute, because it makes Corvina ideally suited to *appassimento*, the winter-long drying on racks that produces Amarone and Recioto", "Low in colour and tannin for its weight; high in acid", "Fresh Valpolicella is light and cherry-scented; the same grape after 100-120 days of drying is a different wine entirely"], ["Fresh: sour cherry", "red plum", "almond", "dried herbs", "Dried/Amarone: raisin", "dried fig", "prune", "chocolate", "cinnamon", "leather", "bitter almond on the finish"], "Remarkable for the range of styles one grape can generate — light Valpolicella Classico, the *ripasso* middle ground, the sweet Recioto, and the dry, powerful, 15-16% Amarone della Valpolicella. The bittersweet almond finish is the family signature across all of them. Amarone's rise from local curiosity to international icon since the 1980s is one of Italy's great commercial stories."),
    grape("Sagrantino", "Red", "Montefalco, Umbria. Its history is obscure; it may have arrived with Franciscan friars, hence the name from *sacramento*.", "Full", "extremely high — among the highest-tannin varieties measured anywhere", "high", ["Very high in polyphenols; laboratory measures put it above Cabernet Sauvignon, Nebbiolo and Tannat", "Thick-skinned, small-berried, late-ripening", "Requires long maceration or, paradoxically, very gentle handling, plus a minimum 33 months' ageing under DOCG rules", "Historically made sweet (*passito*) — the tannin is far easier to manage with residual sugar"], ["Blackberry", "black plum", "blueberry", "violet", "cinnamon", "clove", "tar", "earth", "Age brings leather", "tobacco", "dried fig"], "Nearly extinct in the 1970s — down to a few hectares — and revived almost single-handedly by Marco Caprai from the late 1980s. The dry version is one of Italy's most formidable reds and needs a decade before it becomes hospitable. The sweet *passito* version, the older tradition, is a genuinely great and much-overlooked dessert wine."),
    grape("Lagrein", "Red", "Alto Adige/Südtirol, around Bolzano. DNA shows it as an offspring of Teroldego and a relative of Syrah and Pinot.", "Full", "medium to high, slightly rustic", "high", ["Deeply coloured — almost opaque purple-black — with high acidity from the Alpine diurnal range and a distinctive bitter edge on the finish that producers work to soften with oak and malolactic", "Needs the warmest sites on the Bolzano valley floor to ripen", "Also makes a serious dark rosé, *Lagrein Kretzer*"], ["Blackberry", "black cherry", "dark plum", "violet", "chocolate", "black pepper", "a woodsy-earthy note", "Oak adds mocha and vanilla"], "The dark counterweight to the Alto Adige's pale Schiava, and proof that Italy's most Germanic region makes more than crisp whites. Dense colour and Alpine acidity is an unusual combination — the wines are powerful without heat. Deserves a much wider audience than it gets."),
    grape("Garganega", "White", "The Veneto, principally the volcanic hills of Soave east of Verona. One of Italy's oldest varieties and, by DNA, a parent or relative of a remarkable number of others including Albana, Catarratto and Trebbiano Toscano.", "Medium", "Very Low", "medium to high", ["Late ripening, vigorous, high-yielding — over-cropping on the Veneto plain is what destroyed Soave's reputation in the 1970s", "On the volcanic basalt and limestone of the Classico zone, at low yields, it is an entirely different wine", "Resists botrytis well enough to make the sweet Recioto di Soave"], ["Yellow apple", "ripe pear", "white peach", "lemon zest", "orange blossom", "marzipan and a defining bitter-almond note", "Age brings honey", "camomile", "hazelnut", "saline minerality"], "The most underrated white grape in Italy, and the victim of the most damaging reputational collapse. Good Soave Classico from volcanic soil — Pieropan, Inama, Suavia — is subtle, textural, mineral and ages beautifully for ten years. It rewards attention rather than demanding it, which is precisely why it was overlooked."),
    grape("Verdicchio", "White", "The Marche — Castelli di Jesi and Matelica. Genetically identical to Trebbiano di Soave and Trebbiano di Lugana.", "Medium to full", "Very Low", "high", ["Late ripening, thick-skinned, structurally substantial — high extract and high acid, which give it unusual ageing capacity for an Italian white", "Matelica, an inland valley at altitude, gives leaner and more mineral wines; Jesi, closer to the Adriatic, gives fuller and more aromatic ones", "Also used for traditional-method sparkling"], ["Lemon", "green apple", "white peach", "fennel", "almond blossom", "and the characteristic bitter-almond finish shared with several central Italian whites", "Age brings honey", "quince", "beeswax", "kerosene-like petrol notes not unlike aged Riesling"], "Widely regarded as Italy's most ageworthy white grape. The 1970s amphora-bottle kitsch did it no favours, but the *Riserva* category and a generation of serious producers (Bucci, Garofoli, La Monacesca) have restored its standing. A ten-year-old Verdicchio Riserva surprises almost everyone who tries one."),
    grape("Fiano", "White", "Campania, principally Avellino. An ancient variety, plausibly the Roman *vitis apiana* — \"the vine of the bees\", for the sweetness that attracted them.", "Medium to full", "Very Low", "medium to high", ["Low-yielding, thick-skinned, grown on volcanic and clay-limestone soils at 400-600m", "Notably resistant to oxidation, which gives it real ageing potential", "Fiano di Avellino DOCG is the benchmark; plantings in Sicily and Puglia give a rounder, more tropical version"], ["Pear", "quince", "white peach", "hazelnut", "honey", "orange blossom", "and a distinctive smoky-mineral", "almost flinty note", "Age brings toasted nuts", "beeswax", "honeycomb", "dried herbs"], "The most complete white grape of southern Italy — texture, aroma, acidity and the ability to improve for a decade. It has the weight of a Rhône white with the acid line of somewhere much cooler. Along with Greco and Falanghina it forms the trio that re-established Campania as a serious white-wine region after decades of obscurity."),
    grape("Vermentino", "White", "Contested — probably Iberian or Ligurian in ultimate origin, but long naturalised in Liguria, Sardinia and Tuscany. Identical to Corsica's Rolle/Malvoisie de Corse and Provence's Rolle.", "Medium", "Very Low", "medium to high", ["Vigorous, drought-tolerant, coastal, salt-tolerant", "Thick-skinned with moderate phenolics that give a light grip and a bitter finish", "Sardinia's Vermentino di Gallura is Italy's only white DOCG", "Increasingly made with skin contact, which suits it"], ["Lime", "green apple", "white peach", "crushed herbs", "fennel", "almond", "and a signature sea-salt and iodine minerality"], "The Mediterranean coastal white par excellence — bright, saline, herbal and made for grilled fish and olive oil. Its salinity is not marketing; it genuinely reads as maritime. Also increasingly planted in the Languedoc, California and Australia as growers look for whites that hold up in heat."),
    grape("Carricante", "White", "Mount Etna, Sicily, grown on the eastern and northern slopes up to 1,000m and beyond — some of the highest vineyards in Europe.", "Medium", "Very Low", "very high", ["Very high in malic acid — so much so that malolactic fermentation is often encouraged simply to make the wine approachable", "Late ripening at altitude, on black volcanic sand and lava", "Etna Bianco Superiore, from Milo on the eastern slope, must be at least 80% Carricante", "Old ungrafted bush vines are common"], ["Lemon", "green apple", "white flowers", "aniseed", "and an emphatic wet-stone/flint minerality", "With age", "an extraordinary development into petrol", "camomile", "honey and saline notes that draws frequent Riesling and Chablis comparisons"], "The white counterpart to Nerello Mascalese and, at its best, one of Italy's great whites. Bone-dry, piercingly acidic, mineral to the point of austerity in youth, and capable of ten to fifteen years' development. The Etna white revival is younger than the red one and probably has further to run."),
];


const portugalGrapes = [
    grape("Touriga Nacional", "Red", "The Dão, with the Douro as its second home. By 2021 it occupied over 13,000 ha nationally, the Douro leading at roughly 4,975 ha and the Dão at about 3,985 ha.", "Full", "high, firm", "medium to high", ["Small berries, thick skins, very deep colour, low natural yields — which nearly caused its abandonment before clonal selection in the 1980s made it commercially viable", "Concentrated to the point that it is often used as a minority component even in dry blends", "Excellent ageing capacity; takes new oak comfortably"], ["The signature is violet and bergamot over blackcurrant", "blackberry", "black plum and blueberry", "Then mint", "liquorice", "black pepper", "resinous herbs", "Age brings tobacco", "cedar", "dried flowers"], "Portugal's finest red grape and one of the small handful of varieties worldwide that can carry a serious claim to nobility. It is a foundation of Port and, since the dry-wine revolution in the Douro from the 1990s, the backbone of Portugal's best table reds too. The floral top note is unmistakable and unlike anything else — once you have it, you will find it in a blend at ten paces."),
    grape("Touriga Franca", "Red", "The Douro, where it is the most widely planted variety, accounting for around a fifth of the region's vineyard area. DNA confirms it as a natural cross of Touriga Nacional × Mourisco Tinto.", "Medium to full", "medium, supple", "medium", ["Later ripening and considerably more productive than Touriga Nacional, with thicker skins and good disease resistance — the reliable partner", "Contributes perfume and elegance rather than power; rarely bottled alone"], ["Red and black berries", "rose petal", "violet", "orange peel", "cinnamon and a distinct resinous", "pine-and-eucalyptus lift"], "The workhorse aristocrat of the Douro. Where Touriga Nacional supplies structure and concentration, Touriga Franca supplies aromatic lift, sweetness of fruit and drinkability — the pairing is close to a rule in both Port and Douro DOC reds. Its reliability under Douro heat has made it increasingly important as summers lengthen."),
    grape("Tinta Roriz / Aragonez", "Red", "Spain, as Tempranillo — but so long and deeply naturalised in Portugal that it functions as a native. Tinta Roriz in the Douro and north, Aragonez in the Alentejo and south.", "Medium to full", "medium, fine", "medium to low", ["Early ripening, adaptable, reliable in yield and quality", "In the Douro's schist it gives more structure and less overt fruit than in Spain; in the Alentejo's heat it gives ripe, generous, softer wine", "Prone to losing acidity if picked late"], ["Red plum", "strawberry", "dried fig", "tomato leaf", "Oak brings vanilla", "tobacco", "leather"], "Included as a category-two \"local\" — Iberian rather than strictly Portuguese, but structurally essential to both Port blends and to the dry reds of the Douro, Dão and Alentejo. It fills the middle of the palate that Touriga Nacional leaves narrow and Touriga Franca leaves perfumed."),
    grape("Tinta Barroca", "Red", "The Douro, where it is one of the five varieties recommended for Port.", "Medium to full", "low to medium, soft", "low to medium", ["Early ripening and high-yielding, with thin skins and high sugar accumulation", "Suffers badly in extreme heat — it is generally planted on cooler, higher, north-facing sites", "Contributes sweetness, colour and body but little acid or grip, so it is always a blending component"], ["Ripe red and black fruit", "plum", "cherry compote", "a slightly herbal and earthy background"], "One of the quiet engine-room varieties of the Douro. Rarely bottled alone and unlikely ever to be a star, but it supplies the fleshy mid-palate sweetness that makes Vintage Port cohere. Its heat sensitivity has made it a subject of concern in Douro climate-adaptation studies."),
    grape("Tinto Cão", "Red", "The Douro. One of the oldest documented Portuguese varieties, recorded since the sixteenth century. The name means \"red dog\".", "Medium", "high, fine", "high", ["Very low yielding and small-berried — the reason it nearly disappeared — with excellent acid retention and marked ageing capacity", "Slow to develop; contributes little in youth and a great deal after a decade"], ["Red cherry", "redcurrant", "violet", "dried herbs", "cedar", "a fine spicy-mineral edge", "Develops elegantly toward dried flowers and tobacco"], "The connoisseur's Port grape. Its contribution is subtlety, freshness and longevity rather than colour or power, and it was rescued from near-extinction largely because the great Port houses knew what old blends containing it tasted like at fifty years. A useful corrective to the assumption that Portugal's classics are all about density."),
    grape("Baga", "Red", "Bairrada, on the Atlantic coast between Porto and Coimbra, on chalky-clay soils.", "Medium to full", "very high, firm and sometimes severe", "very high", ["Late ripening in a cool, damp, maritime climate — a difficult combination that makes vintage variation extreme and rot a constant threat", "Small thick-skinned berries, high phenolics, high acid", "Traditionally vinified with stems, producing wines that were often brutal young; modern handling (destemming, gentler extraction) has civilised it without softening its identity", "Also makes excellent sparkling rosé"], ["Sour cherry", "cranberry", "redcurrant", "dried herbs", "black pepper", "tomato leaf", "damp earth", "Age brings leather", "tobacco", "forest floor", "dried orange peel"], "Portugal's most divisive and most rewarding red. Frequently compared to Nebbiolo and Baga's own champions do not resist the comparison — high acid, high tannin, pale-to-medium colour, decades of ageing potential. Luis Pato, Filipa Pato and Dirk Niepoort are the names that made it internationally legible. Not a beginner's wine, but a genuinely great one."),
    grape("Castelão", "Red", "Southern Portugal — Setúbal, Lisboa, the Alentejo. Also called Periquita, after a vineyard rather than the other way round.", "Medium", "medium to high", "medium", ["Drought-resistant and best on the poor sandy soils of the Setúbal peninsula, where many vines are ungrafted", "Deep colour when yields are low; thin and rustic when they are not", "Ages into a distinctly savoury, dried-fruit register"], ["Red plum", "raspberry", "dried fig", "tobacco", "cedar", "wild herbs", "a slightly rustic earthy note", "Age brings leather", "prune", "coffee"], "One of Portugal's most widely planted reds and the traditional red of Lisbon's table. Sandy-soil old-vine Castelão is a genuinely distinctive wine — dry, savoury, tobacco-scented and unlike anything from the Douro. Sales have declined as Touriga Nacional advances, which is a loss."),
    grape("Trincadeira", "Red", "The Alentejo, where it is a principal red; called Tinta Amarela in the Douro.", "Medium to full", "medium to high", "medium to high", ["Thin-skinned, tight-bunched and highly susceptible to rot, which restricts it to dry regions — hence its dominance in the Alentejo and its retreat in the damper north", "Retains acidity well in heat", "Aromatically expressive, with a pronounced herbal-spicy character"], ["Blackberry", "black plum", "blackcurrant leaf", "rosemary", "thyme", "black pepper", "resin", "A distinct wild-scrub note that reads as unmistakably Alentejano"], "The variety that supplies aromatic complexity and freshness to Alentejo blends otherwise dominated by ripe, soft Aragonez and Alicante Bouschet. Difficult in the vineyard and correspondingly rewarding in the glass — spicy, herbal and structured where its blending partners are simply generous."),
    grape("Alfrocheiro", "Red", "The Dão, spreading to the Alentejo (as Tinta Bastardinha) and Bairrada.", "Medium", "medium, fine", "medium to high", ["Deeply coloured for its weight, early to mid ripening, susceptible to rot and mildew", "DNA identifies it as a parent of Argentina's Torrontés varieties via crossings with Muscat of Alexandria", "Contributes colour and aromatic complexity in blends"], ["Wild strawberry", "blackberry", "black cherry", "violet", "eucalyptus", "a faintly smoky-earthy note"], "The Dão's aromatic specialist and a variety with more potential than its plantings suggest. Blended with Touriga Nacional and Jaen it produces the classic elegant, medium-bodied, perfumed Dão red — a style closer to Burgundy in weight than anything else in Portugal. Varietal bottlings are rare and worth finding."),
    grape("Vinhão", "Red", "The Minho, north-west Portugal. Called Sousão in the Douro.", "Medium", "medium to high", "very high", ["A *teinturier* — red-fleshed as well as red-skinned, one of very few in Europe — giving an almost opaque purple-black wine that stains the glass", "Extremely high acidity", "In the Douro, under the name Sousão, it is increasingly planted specifically for its acid and colour as the climate warms"], ["Blackberry", "damson", "sour cherry", "blackcurrant leaf", "iron", "a wild", "faintly gamey earthiness"], "The source of red Vinho Verde — a wine that surprises almost everyone: dark, sharply acidic, lightly fizzy, low in alcohol and served cold from a ceramic bowl with grilled sardines. It is not a wine for contemplation, but it makes complete sense in place. Its Douro role as an acidity supplier is quietly becoming more important than its Minho one."),
    grape("Alvarinho", "White", "Monção e Melgaço, in the far north of the Vinho Verde region on the Minho river. Spain and Portugal dispute its origin across that border, where it is Albariño.", "Medium to full", "Very Low", "high", ["Thick-skinned and small-berried, suited to a wet Atlantic climate", "Higher potential alcohol than most Vinho Verde varieties — 12.5-13.5% is normal in Monção — with high extract that supports lees ageing and oak", "Genuinely ageworthy"], ["Lemon", "grapefruit", "orange peel", "white peach", "apricot", "jasmine", "honeysuckle", "A saline", "faintly bitter mineral finish", "Age brings honey", "quince", "beeswax"], "The most prestigious Portuguese white and the one variety here with real international recognition. Monção e Melgaço is the only Vinho Verde subregion permitted to bottle it varietally, and the results are fuller, more textured and considerably more serious than the light, spritzy Vinho Verde stereotype. Increasingly made with skin contact, lees or oak."),
    grape("Loureiro", "White", "The Lima valley in the Minho. The name derives from *louro*, bay laurel, for its aroma.", "Light to medium", "Very Low", "high", ["High-yielding, vigorous, early ripening, best on granite", "Naturally low in alcohol (10.5-12%), which is exactly what the Vinho Verde style requires", "Highly aromatic without being obviously \"muscat-like\""], ["Bay laurel and acacia are the signatures", "over lime", "green apple", "white peach", "orange blossom and a faint aniseed note"], "The most aromatic of the Vinho Verde whites and, for many, the truest expression of the region's floral, low-alcohol, high-acid style. Where Alvarinho is the prestige grape, Loureiro is the characterful everyday one — and single-varietal Lima valley Loureiro can be beautifully precise. Excellent, and generally very inexpensive."),
    grape("Arinto", "White", "Probably Bucelas, near Lisbon — hence Arinto de Bucelas — though grown nationwide. Called Pedernã in Vinho Verde.", "Medium", "Very Low", "very high", ["Its defining property is acid retention: it holds high natural acidity even in the heat of the Alentejo, and tolerates water stress well", "Late ripening, moderately productive", "Neutral enough to blend invisibly and structured enough to age; one of Portugal's few genuinely long-lived whites"], ["Lemon", "lime", "green apple", "quince", "a faint mineral-flinty note", "Age brings honey", "toasted nuts", "beeswax", "a petrol-like development sometimes compared to Riesling"], "The acidity supplier of Portuguese white winemaking, and the reason so many Alentejo whites taste fresher than their latitude suggests. Varietal Bucelas is a distinctive, austere, mineral wine that ages for a decade or more; blends across Bairrada, Vinho Verde, Lisboa and the Alentejo all use it for backbone. Increasingly valuable as the country warms."),
    grape("Encruzado", "White", "The Dão, and essentially nowhere else in quantity.", "Medium to full", "Very Low", "medium to high", ["Balanced in a way few Portuguese whites are: good sugar, good acid, good phenolic structure, all at once", "Handles barrel fermentation and lees stirring without losing definition — behaviour unusually close to Chardonnay's", "Moderate yields on granite soils at 400-700m"], ["Lemon", "white peach", "pear", "quince", "violet", "a fine smoky-mineral note", "Barrel-aged versions add hazelnut", "butter", "toast", "Age brings honey", "camomile", "wax"], "Widely reckoned Portugal's best white grape for serious, structured, ageworthy wine. It is the closest thing Portugal has to a white Burgundy analogue, but with a stony, floral, faintly resinous character all its own. Small plantings and a single region keep it rare — worth the search."),
    grape("Fernão Pires / Maria Gomes", "White", "Central Portugal — the Tejo, Lisboa, Bairrada (as Maria Gomes) and Setúbal. Portugal's most widely planted white variety.", "Light to medium", "Very Low", "medium, falling quickly if picked late", ["Early ripening, very high-yielding, and intensely aromatic — a terpene-driven grape closer in aromatic type to Muscat or Torrontés than to Portugal's other whites", "Acidity drops fast at the end of ripening, so picking date is everything", "Also used for sparkling and for late-harvest sweet wines"], ["Orange blossom", "rose", "lime", "lemongrass", "white peach", "muscat-like grapey florality with a peppery-spicy edge"], "The volume white of Portugal, and a genuinely aromatic one — which makes it a rarity among high-yielding workhorses. Picked early it makes fresh, floral, immediately appealing wine at very low prices; picked late it goes flabby and blowsy. In Bairrada, as Maria Gomes, it also makes a significant contribution to traditional-method sparkling."),
];


const franceLocalGrapes = [
    grape("Savagnin", "White", "The Jura. Genetically identical to Traminer, and thus the ancestral form behind Gewürztraminer — a fact that surprises most people given how differently the two taste.", "Medium to full", "Very Low", "very high", ["Late ripening, small-berried, low-yielding", "Its fame rests on *vin jaune*: aged for six years and three months in barrels that are deliberately not topped up, under a film of *voile* yeast analogous to sherry's flor", "The wine loses volume to evaporation — hence the 62cl *clavelin* bottle — and gains an oxidative, nutty complexity", "Also made in a topped-up (*ouillé*) style that is fresh, taut and mineral"], ["*Ouillé*: green apple", "lemon", "white flowers", "hay", "crushed stone", "*Sous voile* / vin jaune: walnut", "almond", "curry spice (the marker compound sotolon)", "dried apple", "ginger", "saffron", "bruised orange"], "One of the world's genuinely unique wines. Vin Jaune is nearly immortal — bottles from the nineteenth century remain alive — and pairs with Comté cheese in a way that is close to definitive. The topped-up style, which now outsells the oxidative one, has made the Jura one of the most fashionable regions in France over the past fifteen years."),
    grape("Poulsard (Ploussard)", "Red", "The Jura, where it was once the most widely planted variety and remains the second. The name Ploussard is used around the village of Pupillin.", "Very light", "very low", "high", ["Thin-skinned to the point of translucency, prone to coulure, rot and every other viticultural misfortune — which explains the decline in plantings", "Produces wine so pale it is often mistaken for rosé", "Grown mostly on Jura's grey-blue marls", "Also used for *blanc de noirs* and Crémant du Jura"], ["Wild strawberry", "redcurrant", "cranberry", "rose petal", "dried herbs", "a faintly smoky", "earthy", "sometimes gamey note"], "A wine that looks like nothing and tastes like considerably more. Its extreme paleness and delicacy make it one of the emblematic wines of the natural-wine movement, and Jura producers such as Overnoy and Ganevat turned it into a cult object. Serve it cool. Do not expect a red wine in the conventional sense."),
    grape("Trousseau", "Red", "The Jura. Identical to Portugal's Bastardo and Spain's Merenzao — a genuinely surprising piece of DNA detective work.", "Light to medium", "medium", "medium to high", ["The most structured of the three Jura reds and the most demanding of site — it needs the warmest, stoniest, best-drained gravel slopes, notably around Montigny-lès-Arsures", "Deeper in colour than Poulsard, though still pale by general standards", "Ripens late"], ["Red cherry", "cranberry", "blood orange", "black pepper", "dried herbs", "smoke", "a savoury cured-meat note", "Age brings tobacco", "undergrowth", "dried flowers"], "The Jura's most serious red and the one most likely to convert a sceptic — spicy, savoury, textured, with real if moderate grip. Often described as a rustic Pinot Noir, which undersells the pepper and orange-peel character that is entirely its own. Rare: total French plantings are small and demand now exceeds them comfortably."),
    grape("Mondeuse Noire", "Red", "Savoie, in the French Alps. A relative of Syrah — both descend from Dureza — which explains a good deal about how it tastes.", "Medium to full", "medium to high", "high", ["Deep colour, late ripening, and much reduced by phylloxera: French plantings had fallen to just over 200 hectares by 2000, recovering somewhat since", "Best on the steep scree and limestone slopes of Arbin and Chignin", "Frequently confused with Italy's Refosco dal Peduncolo Rosso, though DNA has shown the two are unrelated"], ["Blackberry", "damson", "violet", "black pepper", "bitter chocolate", "and a distinctly Alpine cool-herb and pine note", "Age brings leather", "tar", "cured meat"], "The most substantial red of the Alps and a genuine northern-Rhône analogue at higher altitude and lower alcohol. Long dismissed as rustic; now recognised as capable of real depth and ten to fifteen years' ageing. As Savoie's tourist-ski-resort wine identity gives way to a more serious one, Mondeuse is the variety carrying it."),
    grape("Jacquère", "White", "Savoie, where it is the most widely planted white.", "Light", "Very Low", "high", ["High-yielding, early ripening, low in alcohol (10.5-11.5%)", "Grown on the glacial scree and limestone of Apremont, Abymes and Chignin, often below the Mont Granier landslide debris field", "Almost always made in stainless steel, unoaked, and drunk within a year or two"], ["Green apple", "lemon", "white flowers", "wet stone", "a faint almond-and-hay note", "Occasionally a light spritz"], "The definition of a mountain wine — light, brisk, low-alcohol, mineral, and wholly at home with raclette, fondue and freshwater fish. It makes no claim to profundity and is better for the honesty. Almost none leaves France, which is why so few people outside the Alps have ever tried it."),
    grape("Altesse (Roussette)", "White", "Savoie. Legend attributes it to a Cypriot princess's dowry in the fifteenth century; DNA suggests a domestic origin and a relationship to Chasselas.", "Medium to full", "Very Low", "high", ["Low-yielding, late-ripening and considerably more structured than Jacquère", "The basis of Roussette de Savoie and its four *cru* appellations, of which Marestel is the most celebrated", "Ages genuinely well — five to ten years — developing honeyed, nutty complexity"], ["Pear", "quince", "white peach", "honey", "hazelnut", "bergamot", "violet", "and a stony-mineral finish"], "Savoie's noble white, and by a distance the region's most serious. Where Jacquère is refreshment, Altesse is a wine of texture, weight and development — the sort that surprises people who assume Alpine whites are all thin. Small production, mostly consumed locally, and increasingly sought after."),
    grape("Gringet", "White", "Ayze, in the Haute-Savoie. Related to Savagnin, but distinct from it.", "Light to medium", "Very Low", "very high", ["One of the rarest commercially grown varieties in France — a couple of dozen hectares, concentrated around a single village", "Grown on limestone scree at altitude", "Made both still and, traditionally, as a delicate lightly sparkling wine (Vin d'Ayze)"], ["White flowers", "lime blossom", "green apple", "pear", "verbena", "honey", "chalk dust"], "Kept alive largely through the work of the late Dominique Belluard, whose Ayze wines made an obscure Alpine grape into a collectors' item, and continued now by growers who took cuttings from his vineyard. Precise, floral, high-acid and unmistakably mountainous. Included here as an example of how narrow the survival margin can be for a regional variety — one committed producer was very nearly the difference."),
    grape("Mauzac", "White", "Gaillac and Limoux, South West France and the western Languedoc.", "Medium", "Very Low", "high", ["Late ripening with thick skins and high acidity", "The historic base of Blanquette de Limoux — arguably the oldest sparkling wine in the world, documented at the Abbey of Saint-Hilaire in 1531, predating Champagne — and of Gaillac's *méthode ancestrale*, in which a single fermentation is bottled before completion"], ["Its signature is baked apple and apple skin", "Then pear", "melon", "quince", "white flowers", "honey", "a light peppery note", "Aged sparkling versions develop almond and brioche"], "A variety that carries genuine historical weight. The ancestral-method Gaillac and Limoux wines — lightly sparkling, faintly cloudy, gently sweet, low in alcohol — are a living link to how sparkling wine was made before Champagne systematised it. Chardonnay and Chenin have displaced Mauzac in much of Limoux, which makes the remaining traditionalists worth supporting."),
    grape("Len de l'El (Loin de l'Œil)", "White", "Gaillac, and essentially nowhere else. The Occitan name means \"far from the eye\", describing the unusually long stalk that holds the bunch away from the bud.", "Medium to full", "Very Low", "low to medium", ["Early ripening with high sugar accumulation and correspondingly modest acidity — which is why it is usually blended with the high-acid Mauzac rather than bottled alone", "Susceptible to botrytis, and consequently excellent for Gaillac's sweet *vendanges tardives*"], ["Ripe pear", "quince", "apricot", "acacia honey", "white flowers", "a faint waxy-nutty note", "Botrytised versions add candied citrus and dried apricot"], "A grape saved largely by one family — the Plageoles of Gaillac, whose ampelographic conservatory has preserved a whole suite of abandoned local varieties. Len de l'El makes rich, honeyed, textured whites both dry and sweet, and stands as a reminder that South West France has an indigenous white tradition entirely independent of Bordeaux's."),
    grape("Fer Servadou", "Red", "South West France. Known as Braucol in Gaillac, Mansois in Marcillac and Pinenc in Béarn and Madiran.", "Medium", "medium to high, firm", "high", ["The name comes from *ferus*, wild — a reference to the hardness of the wood rather than the wine", "Late ripening, deeply coloured, best on the iron-rich red soils (*rougier*) of Marcillac, where it must legally comprise at least 90% of the blend"], ["Blackcurrant", "raspberry", "blackcurrant leaf", "green peppercorn", "iron and blood", "wild herbs", "A vegetal-peppery note that recalls Cabernet Franc"], "The signature red of the Aveyron and Tarn, and one of the more distinctive minor varieties in France. Marcillac in particular is a wine of striking individuality — iron-scented, peppery, high-acid, made in a tiny appellation on old railway-era terraces. It has real potential beyond its home, and modest but growing interest."),
    grape("Négrette", "Red", "The region between Albi and Toulouse. The principal appellation, Fronton, requires 50-70% Négrette in its reds and rosés.", "Light to medium", "low to medium, soft", "low to medium", ["Thin-skinned, rot-prone, low in acid and tannin — a grape that makes soft, immediately drinkable wine and only occasionally something more", "Often blended with Syrah, Cabernet or Malbec for structure", "Deep colour despite the light frame"], ["Violet — emphatically — over red cherry", "raspberry", "liquorice", "black pepper and a faint smoky note"], "Toulouse's house wine, sometimes called the Beaujolais of the south-west for its juicy, chillable, undemanding charm. It has a second identity too: oak-aged, longer-macerated versions from the best Fronton estates can be genuinely rich and ageworthy. The violet perfume is its unmistakable signature."),
    grape("Tannat", "Red", "The Basque country and Béarn — Madiran, Irouléguy, Tursan. Now most widely planted in Uruguay, where it is the national grape; included here because its French identity remains firmly regional rather than international.", "Full", "very high — the name says so", "medium to high", ["Among the most tannic varieties in the world, with exceptionally high procyanidin levels (the subject of some well-publicised cardiovascular research)", "Thick-skinned, deeply coloured, late-ripening", "Micro-oxygenation was developed in Madiran in the 1990s specifically to tame it, and has since been adopted worldwide"], ["Blackberry", "black plum", "cassis", "liquorice", "smoke", "tobacco", "dark chocolate", "Age brings leather", "cedar", "tar", "dried fig"], "France's most uncompromising red. Traditional Madiran needs a decade before it stops fighting; modern examples, softened by blending with Cabernet Franc and by oxygenation, are approachable much sooner. Irouléguy's Basque version, at altitude on schist, is fresher and more mineral. A wine for cassoulet, duck confit and cold weather."),
    grape("Petit Manseng", "White", "The Pyrenean foothills — Jurançon, Pacherenc du Vic-Bilh. Grown alongside the larger-berried, less concentrated Gros Manseng.", "Medium to full", "Very Low", "very high, even when sweet", ["Tiny thick-skinned berries that raisin on the vine rather than rotting — *passerillage* rather than botrytis", "Harvest can run into December", "The resulting sweet wines carry high sugar and, unusually, high acidity simultaneously, so they taste vivid rather than cloying", "Also made dry"], ["Pineapple", "mango", "passion fruit", "apricot", "candied citrus", "honey", "ginger", "cinnamon", "a distinct exotic-spice character", "Dry versions show grapefruit", "quince and a smoky", "saline edge"], "One of the most interesting sweet-wine grapes in the world and largely unknown outside France. Jurançon *moelleux* has a tension between sugar and acid that few dessert wines match — Sauternes is richer, Jurançon is racier. The dry version (Jurançon Sec) is also excellent and considerably easier to sell."),
    grape("Pineau d'Aunis", "Red", "The Loire — Anjou, Touraine, the Coteaux du Loir and Coteaux du Vendômois. Documented since the ninth century and once a favourite of the Plantagenet kings.", "Light", "low to medium", "high", ["Pale, thin-skinned and early ripening", "Historically used chiefly for rosé, including the *vin gris* of the Loir", "Plantings collapsed through the twentieth century and remain small", "Grown on flint, clay and tuffeau"], ["Its defining note is white and black pepper — unusually pronounced", "and present even in the rosés", "Then red cherry", "redcurrant", "raspberry", "dried herbs", "a faint smoky-earthy edge"], "A cult wine of the past decade, driven by the appetite for light, savoury, chillable reds. The peppery character is genuinely distinctive and reads as almost Syrah-like at a fraction of the weight. Also excellent as a bone-dry, structured rosé, which is arguably its historic best use."),
    grape("Piquepoul Blanc (Picpoul)", "White", "The Languedoc, around the Étang de Thau lagoon — the appellation Picpoul de Pinet. The name means \"lip-stinger\", for the acidity.", "Light to medium", "Very Low", "very high", ["Late ripening and, unusually for a Mediterranean white, an excellent retainer of acidity in heat — the reason it survived where other Languedoc whites became flabby", "Grown on limestone and clay within sight of the sea", "There are also Piquepoul Noir and Gris forms; the Blanc dominates"], ["Lemon", "lime", "green apple", "white flowers", "fennel", "and a pronounced saline", "sea-spray minerality"], "The classic oyster wine of the French Mediterranean, and grown directly beside the Bouzigues oyster beds it is drunk with. Simple, bracing, saline and inexpensive. Its heat-tolerant acidity has made it a subject of serious interest for growers planning for a warmer Languedoc."),
];


const greeceGrapes = [
    grape("Assyrtiko", "Red", "Santorini, and now planted across Greece — Macedonia, Attica, the Peloponnese — as well as in Australia and California.", "Medium to full", "— (light phenolic grip in skin-contact styles)", "very high", ["Its remarkable property is retaining piercing acidity even at high sugar and alcohol, in one of the hottest, driest, most sun-exposed environments in Europe", "On Santorini the vines are trained into ground-level *koulara* baskets to shelter fruit from wind and to harvest moisture from sea fog, and grow ungrafted in volcanic ash on 200-year-old root systems"], ["Lemon", "lime", "grapefruit", "green apple", "quince", "white flowers", "and an emphatic flinty-smoky", "saline volcanic minerality", "Oak-aged *Nykteri* adds beeswax", "pineapple", "toast and pie crust", "With ten years: honey", "petrol", "dried herbs", "iodine"], "One of the world's great white grapes, and the wine that made international critics take Greece seriously. Bone dry, high in alcohol, ferociously acidic and salty — closer in effect to Chablis Grand Cru or a great Riesling than to anything Mediterranean. Santorini also produces *Vinsanto*, a sun-dried sweet wine of extraordinary concentration and longevity. The one problem is price: Santorini's land values have made it expensive."),
    grape("Malagousia", "White", "Central and western Greece — probably Aetolia-Acarnania. Effectively extinct by the 1970s.", "Medium to full", "Very Low", "medium", ["Rescued from a handful of surviving vines by the agronomist Vassilis Logothetis and then developed commercially by Vangelis Gerovassiliou in northern Greece from the 1980s", "Aromatically intense without being overtly muscat-like", "Moderate acidity means site selection and picking date matter; cooler northern sites give the best balance"], ["Peach", "apricot", "melon", "mango", "jasmine", "rose", "basil", "lemon verbena", "a green-herbal and faintly minty lift"], "Perhaps the most successful varietal rescue in modern wine — from near-extinction to one of Greece's most planted quality whites in forty years. Richer and more overtly perfumed than Assyrtiko, with a texture that suits both stainless steel and light oak. Its story is the best single argument for why genetic conservation matters commercially and not just sentimentally."),
    grape("Moschofilero", "White", "The Mantinia plateau in Arcadia, central Peloponnese, at 600-700m.", "Light to medium", "Very Low", "high", ["A pink-skinned (*gris*) variety, so the wines can carry a faint copper tint and, with skin contact, light phenolic texture", "Late ripening at altitude, low in alcohol (11.5-12.5%), highly aromatic in the terpene family", "Also made as rosé and sparkling"], ["Rose petal above all", "then orange blossom", "lemon", "peach", "potpourri", "white pepper and a faint musky spice", "Aged versions move toward nectarine and toasted almond"], "Greece's great aromatic white — floral and perfumed like a dry Muscat but with brisk mountain acidity and low alcohol keeping it fresh rather than sweet-seeming. The natural crossover wine for people who like Gewürztraminer or Torrontés but want something drier. Mantinia's altitude is doing increasingly useful work as Greece warms."),
    grape("Roditis", "White", "Widespread across Greece — the Peloponnese, Thessaly, Macedonia, Attica. Particularly associated with high-altitude Aigialeia in Achaia.", "Light to medium", "Very Low", "medium to high at altitude, low on the plains", ["Pink-skinned and high-yielding, which made it a bulk grape and a Retsina component for most of the twentieth century", "At altitude, on poor soils and with restricted yields, it becomes an entirely different and much more interesting wine — this is one of the clearer examples in Europe of a variety whose reputation was set by how it was farmed rather than what it is"], ["Lemon", "green apple", "pear", "melon", "white flowers", "a faint honeyed and nutty note with age"], "Greece's second most planted variety and the one most in the middle of its own rehabilitation. Old-vine Aigialeia Roditis at 800m is fresh, mineral, textured and genuinely fine. Elsewhere it remains the base of a great deal of everyday white and of Retsina — which, made properly with light Aleppo pine resin and good fruit, is also undergoing a serious reappraisal."),
    grape("Savatiano", "White", "Attica, around Athens. Greece's most widely planted variety.", "Medium", "Very Low", "low to medium", ["Exceptionally drought-tolerant — it thrives on the arid, stony Mesogeia plain where little else survives, and old bush vines of 40-80 years are commonplace", "High-yielding, low in acid, prone to oxidation, which is precisely why it was traditionally protected with pine resin", "Modern reductive handling and old-vine selections have transformed it"], ["Ripe pear", "yellow apple", "melon", "lemon peel", "fennel", "camomile", "almond", "a waxy-honeyed note with lees ageing"], "For decades the definition of anonymous bulk white and the backbone of poor Retsina. A small movement — led by Attica producers working with ungrafted old vines and extended lees ageing — has shown it can make textured, saline, faintly herbal whites of real interest. Its drought resistance makes it one of the more climate-relevant varieties in the Mediterranean."),
    grape("Robola", "White", "The Ionian island of Cephalonia, on steep limestone slopes. Genetically distinct from Friuli's Ribolla Gialla despite the name similarity, though the two are related.", "Medium", "Very Low", "high", ["Grown at 400-800m on almost pure karst limestone — the vines root into fissures in the rock", "Frequently ungrafted, as Cephalonia's sandy limestone deterred phylloxera", "Low yields, early ripening, moderate alcohol"], ["Lemon", "grapefruit", "green apple", "white flowers", "and a very pronounced flinty", "chalky", "wet-stone minerality often described as the most emphatic in Greece"], "Sometimes called the \"wine of stone\", which is unusually accurate marketing. Bright, precise, mineral and firmly structured, with a citrus-and-limestone character that will appeal to anyone who likes Chablis or Muscadet. Cephalonia's production is small and much of it is drunk on the island."),
    grape("Vidiano", "White", "Crete, principally the Rethymno area. Reduced to a handful of hectares by the 1990s.", "Medium to full", "Very Low", "medium to high", ["Notable for retaining acidity even at high ripeness and alcohol — a valuable property on Crete", "Textural rather than overtly aromatic, with enough weight to handle lees ageing and light oak", "Early to mid ripening"], ["Peach", "apricot", "melon", "honey", "camomile", "herbs and a faint nutty-almond note", "Age and lees bring beeswax and a creamy", "saline depth"], "Crete's rising white star and, on current evidence, a serious one — several critics now name it as Greece's next great white grape after Assyrtiko. Where Assyrtiko is all acid and mineral, Vidiano is stone fruit and texture, which makes them complementary rather than competing. Plantings are rising quickly from a very small base."),
    grape("Aidani", "White", "Santorini and the Cyclades.", "Light to medium", "Very Low", "medium", ["Traditionally a minor partner to Assyrtiko in Santorini's white blends and, importantly, in Vinsanto, where its aromatics survive the sun-drying process", "Lower in acid than Assyrtiko and considerably more perfumed — the two are a classic complementary pairing"], ["White peach", "apricot", "melon", "orange blossom", "jasmine", "honeysuckle", "a light spicy-mineral finish"], "The aromatic counterweight to Assyrtiko's austerity, and increasingly bottled alone as growers explore Santorini's full palette. Delicate, floral and low in alcohol relative to its island neighbours. Its role in Vinsanto is where it matters most: the honeyed floral lift in a great Santorini Vinsanto is largely Aidani's doing."),
    grape("Agiorgitiko", "Red", "Nemea, in the north-eastern Peloponnese. The name means \"St George's grape\"; Nemea's wine is traditionally called the Blood of Hercules.", "Medium to full", "medium, soft and velvety", "medium to low", ["Deeply coloured, early to mid ripening, and unusually versatile — Nemea's altitude range from 250m to over 800m gives everything from soft, juicy, early-drinking reds to structured, oak-aged, ageworthy ones", "Low acidity is its weakness in warm sites, addressed by planting higher", "Also makes excellent rosé"], ["Red and black cherry", "plum", "blackcurrant", "violet", "nutmeg", "cinnamon", "sweet spice", "Oak brings vanilla", "chocolate", "cedar", "Age brings dried fruit", "leather", "tobacco"], "Greece's most planted quality red and the friendliest — plush, spiced and immediately likeable where Xinomavro is austere. The standard comparison is that Nemea is to Naoussa what Bordeaux is to Burgundy, or Bolgheri to Barolo. High-altitude Nemea is where the most interesting current work is happening."),
    grape("Xinomavro", "Red", "Macedonia, northern Greece — Naoussa, Amyndeo, Goumenissa, Rapsani. The name translates as \"acid-black\".", "Medium body, full impact", "very high, firm", "very high", ["Late ripening, pale-skinned with unstable colour that browns within a few years, and blessed with formidable tannin and acidity — the combination that produces the constant Nebbiolo comparison", "Highly site-sensitive: Naoussa gives power, Amyndeo at altitude gives perfume and lightness, Rapsani on Mount Olympus gives a blended, softer style", "Ages for decades"], ["The classic markers are sun-dried tomato and black olive", "alongside red cherry", "plum", "dried herbs", "liquorice", "Age brings dried fruit", "leather", "tobacco", "spice", "forest floor"], "Greece's greatest red grape, and the one most likely to be mistaken for an aged Barolo in a blind tasting — pale, tannic, high-acid, savoury, tomato-scented. It is not an easy wine and rarely an immediately charming one, but its best examples are unquestionably world class and remain absurdly underpriced against their peers. Also makes fine rosé and traditional-method sparkling in Amyndeo."),
    grape("Limnio", "Red", "The Aegean island of Lemnos. Referenced by Aristotle and Hesiod, and used in wine production for more than 2,000 years — plausibly the oldest continuously cultivated named variety in Europe.", "Medium", "medium to high, punchy", "high", ["Pale to medium colour, high acidity, distinctly herbal", "Grown on Lemnos and in Macedonia, notably in the Slopes of Meliton PDO where it is blended with Cabernet", "Unusual among ancient Greek varieties in having always been used for dry wine rather than sweet"], ["Red berries", "cherry", "and — its signature — a pronounced bay leaf", "oregano and Mediterranean-herb character", "Also tomato leaf", "dried herbs", "a light peppery note"], "A living antiquity. The herbal character is genuinely unusual and makes it one of the most food-friendly Greek reds, particularly with lamb and anything cooked with oregano. Small plantings, and mostly encountered in blends, but historically it is the most significant grape on this list."),
    grape("Mavrotragano", "Red", "Santorini. Reduced to fewer than a dozen surviving vines by the 1990s.", "Full", "high, firm", "high", ["The name means \"black crunchy\", for the thick, tough skins", "Very low yielding, tiny berries, deep colour and high extract — the opposite of what Santorini's white-dominated reputation suggests", "Recovered from near-total loss by Paris Sigalas and Haridimos Hatzidakis from the late 1990s"], ["Black cherry", "blackberry", "damson", "black pepper", "dried herbs", "smoke", "volcanic ash", "dark chocolate", "Age brings leather", "tobacco", "tar"], "Santorini's red secret and one of the most dramatic rescue stories in modern wine — a dozen vines to an internationally traded cult wine within twenty-five years. Dense, structured, mineral and smoky, with an ash-and-iron volcanic signature. Production remains tiny and prices reflect it."),
    grape("Mandilaria", "Red", "The Aegean islands and Crete — Paros, Rhodes, Santorini, Crete. Also called Amorgiano.", "Medium to full", "very high", "medium", ["Enormous colour and tannin with relatively modest alcohol and aroma — which makes it a classic blending grape rather than a soloist", "On Paros it is famously blended with the *white* Monemvasia, one of the more unusual co-fermentations in European wine", "On Crete it partners the softer, more aromatic Kotsifali"], ["Blackberry", "damson", "dried fig", "dried herbs", "black pepper", "a rustic earthy-leathery undertone"], "The structural workhorse of the Aegean. Alone it can be austere and drying; in the traditional island blends it supplies exactly what its partners lack. Its extraordinary anthocyanin content also makes it valuable for rosé, where it produces deep, structured, food-capable wines rather than pale aperitifs."),
    grape("Liatiko", "Red", "Crete, principally Heraklion and Lasithi. One of the island's oldest varieties; the name may derive from *Iouliatiko*, \"of July\", for its very early ripening.", "Light to medium", "low to medium, fine", "medium", ["Ripens extremely early — sometimes in July — with pale colour that fades quickly to orange-brick, low tannin and high potential alcohol", "Made dry, and also sun-dried into the sweet traditional wines of Dafnes and Sitia", "Grown at altitude on Crete's mountainsides"], ["Dried red cherry", "strawberry", "orange peel", "rose petal", "cinnamon", "clove", "dried herbs", "a faint resinous-medicinal note", "Sweet versions add raisin", "fig and caramel"], "Crete's historic red, pale and perfumed in a way that repeatedly draws Pinot Noir and Nerello Mascalese comparisons. It has been thoroughly overshadowed by the island's whites, but high-altitude old-vine Liatiko is one of the more distinctive light reds in the Mediterranean. The sweet sun-dried versions are a genuine rarity."),
    grape("Mavrodaphne", "Red", "Patras, in the northern Peloponnese, and the Ionian islands. The name means \"black laurel\".", "Full", "high", "medium to high", ["Deeply coloured, high in tannin and sugar", "Its classic use is the fortified sweet Mavrodaphne of Patras — fermentation arrested with grape spirit, then aged oxidatively in cask, sometimes in a solera-like system, for years or decades", "Dry varietal versions, once rare, are now a growing category"], ["Sweet style: dried fig", "date", "prune", "raisin", "chocolate", "coffee", "caramel", "walnut", "dried orange peel", "Dry style: black cherry", "plum", "bay leaf", "black pepper", "tobacco"], "Greece's answer to Port and Recioto, and long the country's best-known wine abroad before Assyrtiko displaced it. The very old cask-aged bottlings are extraordinary and criminally cheap for what they are. The dry version is a different proposition — structured, savoury and only beginning to find its identity, but promising."),
];


const croatiaGrapes = [
    grape("Plavac Mali", "Red", "Central and southern Dalmatia. DNA analysis has confirmed it as a natural cross of Tribidrag (Zinfandel) × Dobričić — so it is Zinfandel's offspring, not its twin, which resolved a long-running confusion.", "Full", "high, firm", "medium", ["The name means \"little blue\", for the small dark berries", "Late ripening, high in sugar — 15-16% alcohol is routine — with uneven ripening within the bunch that makes picking decisions difficult", "Grown on the steep sun- and sea-reflected slopes of the Pelješac peninsula (Dingač and Postup) and the islands of Hvar, Brač, Korčula and Vis", "Dingač was registered in 1961 as Croatia's first protected appellation"], ["Blackberry", "dark cherry", "dried fig", "plum", "carob", "black pepper", "Mediterranean herbs", "tobacco", "a warm dried-fruit sweetness", "Age brings leather", "tar", "dried herbs"], "Croatia's flagship red and the most planted red in the country. Powerful, warm, high-alcohol and Mediterranean in the fullest sense — the natural reference points are Primitivo and old-school Zinfandel, which its parentage explains. Dingač from the steepest south-facing terraces is the benchmark. The current stylistic debate is between the traditional 16% blockbuster and fresher, higher-altitude, earlier-picked versions."),
    grape("Tribidrag (Crljenak Kaštelanski)", "Red", "Dalmatia, around Kaštela near Split. Genetically identical to Italy's Primitivo and California's Zinfandel — established by DNA analysis at UC Davis and Zagreb between 2001 and 2011, after a search that began with a handful of surviving vines.", "Full", "medium to high", "medium", ["Early ripening with famously uneven ripening across the bunch — raisined and green berries side by side — which drives alcohol high and demands careful sorting", "Thin-skinned and rot-prone in humidity", "Being replanted steadily across Dalmatia after its rediscovery"], ["Blackberry", "black cherry", "raspberry jam", "dried fig", "black pepper", "liquorice", "cinnamon", "tobacco"], "One of the great detective stories in wine science. Croatian growers had all but lost it — the search found fewer than two dozen vines — and its identification as Zinfandel's ancestral home rewrote a century of speculation about California's mystery grape. Croatian versions tend to be more savoury and less overtly jammy than Californian Zinfandel, and the replanting programme means quality is still rising."),
    grape("Babić", "Red", "Northern Dalmatia, around Šibenik and above all Primošten, where the vineyards are dry-stone-walled plots hacked out of bare karst — a landscape so striking that a photograph of it hangs at the UN.", "Medium to full", "high, firm", "medium to high", ["Grown on almost pure limestone with minimal soil, in tiny walled pockets, at very low yields", "Deep colour, firm structure and better acid retention than Plavac Mali", "Late ripening", "Ages well — ten years is not unusual for the best"], ["Dark cherry", "blackberry", "dried fig", "Mediterranean scrub herbs", "black pepper", "carob", "a distinct stony-saline minerality"], "Dalmatia's most structured and savoury red, and to many tasters its most serious. Where Plavac Mali is warm and generous, Babić is dry, mineral and tightly wound — the karst comes through in the glass. Excellent with grilled meat and *pašticada*. Small production, and the labour cost of farming those stone plots makes it unlikely ever to be cheap."),
    grape("Plavina", "Red", "Northern and central Dalmatia. A natural cross of Tribidrag × Verdeca.", "Light to medium", "low", "medium to high", ["High-yielding and reliable — historically its virtue and its problem, since it was planted for volume rather than quality", "Pale-coloured, low in tannin, moderate in alcohol", "Ripens early", "Widely used for blending and for rosé"], ["Red cherry", "cranberry", "raspberry", "dried herbs", "dark chocolate", "a light earthy note"], "The soft underdog of Dalmatia, growing alongside the more aggressive Babić and Plavac. Low-yield single-varietal bottlings can be surprisingly good — light, juicy, chillable reds with a Pinot-like drinkability that is rare in a region built on power. Also the source of some of Dalmatia's better rosés."),
    grape("Dobričić", "Red", "The island of Šolta, near Split, and effectively nowhere else. One parent of Plavac Mali.", "Full", "very high", "medium to high", ["Extremely dark-skinned — nearly black — with enormous colour and tannin", "Historically grown as a blending grape precisely for that colour, shipped to lighten-averse buyers", "Very small plantings; a handful of hectares on one island"], ["Blackberry", "black plum", "dried fig", "tar", "dark chocolate", "black pepper", "dried herbs", "an iron-and-blood note"], "Inky, tannic and uncompromising — a wine that stains the glass and the teeth. A few Šolta growers now bottle it varietally, which had not been done in living memory. Its importance is partly genetic: as Plavac Mali's parent it sits at the root of Dalmatian red viticulture, and its survival on a single small island shows how narrow that root system is."),
    grape("Lasina", "Red", "Northern and central Dalmatia, around Skradin and the Šibenik hinterland.", "Light", "low to medium, fine", "high", ["Pale, thin-skinned and naturally low in alcohol relative to its Dalmatian neighbours", "Early ripening", "Long treated as a blending component to freshen heavier wines; varietal bottlings are recent and rare"], ["Sour cherry", "redcurrant", "cranberry", "rose", "dried herbs", "a light peppery-earthy finish"], "Nicknamed Dalmatia's Pinot Noir, with the usual caveats that attach to that phrase — but the pale colour, high acid, fine tannin and red-fruited elegance make it more apt than most. Very small production. A useful indicator of where Dalmatian red wine may go as the climate pushes growers toward lighter, fresher styles."),
    grape("Teran", "Red", "Istria, on the iron-rich red *terra rossa* soils, and across the border into Slovenia's Kras. A member of the Refosco family and closely related to Refosco dal Peduncolo Rosso; the name has been the subject of a long EU labelling dispute between Croatia and Slovenia.", "Medium to full", "high, grippy", "very high", ["Very high acidity and marked iron content — the soil connection is real enough that the wine was historically prescribed for anaemia", "Deep purple colour, late ripening, structured and rustic in youth", "Softened by oak and time"], ["Sour cherry", "blackberry", "cranberry", "violet", "iron and blood", "black pepper", "dried herbs", "a bitter-plum edge"], "Istria's characterful red and a genuine acquired taste — bracingly acidic, iron-scented and food-demanding. It is best understood at the table with Istrian *boškarin* beef or prosciutto. Modern producers have moderated its rusticity without removing what makes it distinctive, which is the right call."),
    grape("Graševina", "White", "Not Croatian in origin — this is Welschriesling / Olaszrizling, of Central European provenance and unrelated to Riesling. Included as a category-two \"local\": it is by a distance Croatia's most planted variety and anchors white production in continental Slavonia.", "Light to medium", "Very Low", "high", ["High-yielding and adaptable, which produced a great deal of forgettable wine under Yugoslav-era volume incentives", "On the loess and clay hills of Kutjevo, at restricted yields, it becomes a wine of genuine precision", "Also made in late-harvest and ice-wine styles, which are among Croatia's best sweet wines"], ["Green apple", "pear", "lemon", "white flowers", "acacia", "a faint almond and herbal note", "Sweet versions add honey", "quince", "dried apricot"], "The everyday white of continental Croatia, and considerably better than its reputation when made seriously. Kutjevo's top bottlings are fresh, mineral and precise; the region's botrytised and ice-wine Graševina are a genuine speciality. Included with a caveat about origin, because \"Croatia's most planted variety\" is a fact worth recording accurately."),
    grape("Malvazija Istarska", "Red", "Istria. One of the large and genetically diverse Malvasia family, but a distinct variety — not the same as Malvasia Bianca or Malvasia di Candia.", "Medium to full", "light phenolic grip in skin-contact styles", "medium to high", ["Thick-skinned with substantial phenolic content, which is why Istria became one of Europe's centres of skin-contact \"orange\" wine — the *macerated* style, some fermented in *amphorae* or acacia barrels, sits alongside a fresh stainless-steel style and an oaked one", "Grown on both white marl and red terra rossa, which produce audibly different wines"], ["Fresh style: green apple", "pear", "acacia flower", "lemon", "a saline mineral finish", "Macerated: dried apricot", "orange peel", "honey", "hazelnut", "tea leaf", "beeswax", "ginger"], "Istria's defining white and one of the most versatile varieties in the Adriatic. The three-style approach — fresh, oaked, macerated — is unusual and gives the region an identity beyond a single house style. Istrian producers have been central to the international skin-contact movement, and Malvazija is why."),
    grape("Pošip", "White", "The island of Korčula, around Čara and Smokvica, where it was identified as a chance seedling in the nineteenth century. Now planted throughout Dalmatia.", "Medium to full", "Very Low", "medium", ["Thick-skinned, high in extract and sugar, moderate in acidity — which means picking date and site matter", "Handles lees ageing and oak comfortably", "One of the first Croatian white varieties to receive protected status, in 1967"], ["Ripe apricot", "peach", "melon", "dried fig", "citrus peel", "almond", "white flowers", "and a saline-mineral finish", "Oak brings hazelnut and honey"], "Dalmatia's most successful white and the one most likely to be found on an international list. Fuller and rounder than the region's other whites, with enough weight for grilled fish, olive oil and hard sheep's cheese. Korčula's original Čara-Smokvica plateau remains the benchmark, but mainland plantings have expanded rapidly."),
    grape("Grk", "White", "The sandy soils around the village of Lumbarda on Korčula, and nowhere else. DNA has established a parent-offspring relationship with Tribidrag, confirming Dalmatian origin despite a name that means \"Greek\".", "Medium to full", "Very Low", "medium to high", ["Its defining oddity is that it has only functionally female flowers, so it cannot self-pollinate and must be interplanted with a pollinator — traditionally Plavac Mali", "Grown on sand, which also meant phylloxera never took hold, so many vines are ungrafted", "A handful of producers, tiny total plantings"], ["Lemon", "grapefruit", "apricot", "almond", "dried herbs", "white flowers", "with a distinct salinity and a pleasant bitter finish"], "Croatia's needle in a haystack and a genuine collector's white — full-bodied and structured with balanced acidity, a bitter-almond edge and an unmistakably maritime salinity. The pollination requirement makes it agronomically awkward and is largely why it never spread. Difficult to find outside Korčula and worth the effort."),
    grape("Vugava", "White", "The island of Vis, the furthest-out of the major Dalmatian islands. Believed to have been introduced by Greek settlers, who founded a colony there in the fourth century BC.", "Medium", "Very Low", "medium", ["Low-yielding, thick-skinned, high in sugar and aromatically expressive", "Grown on limestone and volcanic soils under intense sun and constant sea wind", "Sometimes claimed as a relative of Viognier, though DNA has not established this"], ["Apricot", "peach", "melon", "dried fig", "honey", "orange blossom", "wild herbs", "a saline finish"], "One of Croatia's rarest and most aromatic whites, and grown on a single island. Elegantly aromatic with medium body, stone-fruit richness and a honeyed edge — the Viognier comparison is stylistically apt even if genetically unfounded. Vis's isolation, which kept the variety alive, also keeps production tiny."),
    grape("Bogdanuša", "White", "The island of Hvar, particularly the Stari Grad Plain — a UNESCO World Heritage Site farmed continuously since 400 BC, and the oldest continuously cultivated vineyard land in the world.", "Light", "Very Low", "high", ["The name means \"given by God\", reportedly for its association with church feast days", "Unusual in Dalmatia for being naturally low in alcohol — typically 11-12% — and high in acidity, where most island varieties run hot", "Early ripening"], ["Lemon", "green apple", "white flowers", "camomile", "fresh herbs", "a light grassy note and a crisp citrus finish"], "The refreshment wine of a region that mostly makes heavy ones. Light, floral, delicate and low in alcohol — the natural comparison is a good Pinot Grigio or a light Italian white, and it does the same job with grilled fish, salads and a hot afternoon. Its home on the Stari Grad Plain gives it more historical weight than its modest character suggests."),
    grape("Žlahtina", "White", "The island of Krk in the northern Adriatic, principally the Vrbnik field — and essentially nowhere else.", "Light to medium", "Very Low", "medium", ["High-yielding on the fertile Vrbnik plain, early ripening, moderate in alcohol and acidity", "Also used as the base for a local traditional-method sparkling wine, Valomet, some of which is famously aged underwater in the Adriatic"], ["Green apple", "pear", "lemon", "white flowers", "a faint herbal and mineral note", "Clean and understated rather than aromatic"], "Krk's own white and the everyday wine of the Kvarner gulf — light, fresh, unassuming and excellent with the island's scampi and shellfish. It makes no claim to greatness and is included as the northern Adriatic's representative: another variety confined to one island, another survivor of a fragmented viticultural map."),
    grape("Škrlet", "White", "Moslavina, in continental Croatia south-east of Zagreb — a small inland region, unusually for this list.", "Light", "Very Low", "medium to high", ["The name refers to the scarlet freckling that appears on the berries when fully ripe", "Early ripening, moderate yields, naturally low alcohol (11-12%)", "Almost entirely confined to Moslavina, where it is the regional speciality"], ["Green apple", "pear", "lemon", "acacia and elderflower", "a light herbal-floral note", "occasionally a faint honeyed edge"], "Continental Croatia's own aromatic white, easy to enjoy and comparable in weight and register to a light northern Italian white. It was nearly lost in the twentieth century and has been rebuilt by a small group of Moslavina producers. A reminder that Croatia's indigenous diversity is not solely coastal."),
];


const hungaryGrapes = [
    grape("Furmint", "White", "Tokaj, in north-eastern Hungary, where it is documented from 1611 in the village of Erdőbénye. Its parents are Gouais Blanc (Heunisch Weiss) and the rare Alba Imputotato.", "Medium to full", "Very Low", "very high", ["Late ripening with thin skins that make it exceptionally susceptible to *Botrytis cinerea* — the property on which the entire Tokaji Aszú tradition rests", "High acidity and high extract together", "Also has a marked capacity to transmit soil character: Tokaj's volcanic, loess and clay sites give recognisably different dry wines"], ["Green apple", "pear", "quince", "lime", "white pepper", "camomile", "a smoky-flinty volcanic minerality", "Botrytised: apricot", "orange marmalade", "honey", "saffron", "dried fig", "With age: beeswax", "ginger", "dried herbs"], "Hungary's flagship and one of the world's great white grapes. Its dual identity is the point: the sweet Aszú wines — made by adding hand-picked botrytised berries to a base wine, measured in *puttonyos* — are among the most complex and longest-lived sweet wines anywhere; and since the 1990s dry Furmint has emerged as a serious, mineral, ageworthy white in its own right. Also grown in Somló, Balaton, Eger and Mátra."),
    grape("Hárslevelű", "White", "Tokaj and Somló. The name means \"linden leaf\", after the shape of the foliage.", "Medium to full", "Very Low", "medium to high", ["Later ripening than Furmint and also botrytis-prone, making it the second pillar of Aszú", "Softer in acidity and rounder in texture than Furmint, which is exactly why the two are blended — Hárslevelű's roundness balances Furmint's severity", "In Somló it picks up marked volcanic minerality"], ["Linden blossom above all", "then honey", "quince", "pear", "apricot", "orange peel", "a light spicy-peppery note", "Age brings beeswax and dried pineapple"], "Tokaj's essential second grape and increasingly a varietal wine in its own right. Where Furmint is structure and acid, Hárslevelű is perfume and texture. Somló's volcanic examples add a smoky mineral dimension that arguably makes them the more interesting. Both dry and sweet versions are worth seeking."),
    grape("Sárgamuskotály (Yellow Muscat)", "White", "Muscat Blanc à Petits Grains, of ancient Mediterranean origin, long naturalised in Tokaj as the third permitted Aszú variety.", "Light to medium", "Very Low", "medium", ["Small yellow berries, highly aromatic, early ripening and botrytis-susceptible", "Used in small proportions in Aszú blends, where it lifts the aromatics, and increasingly bottled dry as a fresh, floral, low-alcohol wine"], ["Elderflower", "orange blossom", "rose", "grape", "lychee", "peach", "and the classic musky Muscat spice"], "The aromatic top note of Tokaji. A few per cent transforms the perfume of an Aszú blend without altering its structure. The dry varietal version is one of Hungary's better summer whites — floral and grapey but genuinely dry, which is a harder trick than it sounds. A category-two \"local\": Mediterranean by origin, thoroughly Tokaji by function."),
    grape("Juhfark", "White", "Somló, the smallest of Hungary's wine regions — a single extinct volcanic butte rising abruptly from the plain in the west of the country. Grown almost nowhere else.", "Medium to full", "Very Low", "very high", ["The name means \"sheep's tail\", for the long, thin, cylindrical bunches", "Low-yielding, late-ripening, and comparatively neutral aromatically — which is precisely what makes it such a transparent conductor of Somló's basalt soils", "Needs several years in bottle to open; can age for decades"], ["Lemon", "green apple", "wheat", "hay", "white pepper", "and above all a smoky", "flinty", "salty volcanic minerality that dominates the profile", "Age brings honey", "nuts", "dried herbs"], "Hungary's great terroir wine — often described as the most volcanic-tasting wine in the country, and one of the most mineral-driven whites in Europe. Austere and unyielding young, remarkable at ten years. Local legend holds that a bottle of Somlói Juhfark on the wedding night guarantees a male heir, which has done its marketing no harm at all."),
    grape("Kéknyelű", "White", "Badacsony, on the volcanic north shore of Lake Balaton. Grown essentially nowhere else, and in very small quantity.", "Medium to full", "Very Low", "high", ["The name means \"blue stalk\", for the colour of the shoots", "Like Croatia's Grk, it produces only functionally female flowers and cannot self-pollinate — it must be interplanted with a pollinator, traditionally Budai Zöld", "This makes it agronomically difficult and yields unreliable, which nearly finished it off"], ["Green apple", "pear", "quince", "white flowers", "a subtle spicy note", "and a pronounced smoky-mineral volcanic character"], "One of Hungary's rarest and most prized whites — elegant, mineral-driven and structured, with real ageing capacity. Its pollination problem is the entire reason for its scarcity. A handful of Badacsony producers have kept it alive, and it is now something of a badge of seriousness for the region."),
    grape("Ezerjó", "White", "Mór, in north-western Hungary, though once widespread across the Carpathian Basin. The name means \"thousand good\".", "Light to medium", "Very Low", "very high", ["High-yielding and very high in acidity — historically its selling point and, in the volume era, its downfall, since large crops produced thin, aggressive wine", "At low yields on the loess and limestone of Mór it makes a lean, mineral dry white; it is also botrytis-susceptible and produces excellent sweet wines (Móri Ezerjó *aszú*)"], ["Green apple", "lemon", "grapefruit", "white flowers", "hay", "a faint honeyed note when sweet or aged"], "Once one of the most planted varieties in Hungary and now much reduced. The dry version is bracing and food-friendly; the botrytised version is the genuine speciality and a rarity worth pursuing. Its extreme acidity makes it interesting again in the context of a warming Central Europe."),
    grape("Olaszrizling (Welschriesling)", "White", "Central Europe, not Hungary specifically, and unrelated to Riesling. Included as a category-two \"local\": it is Hungary's most planted white and found in essentially every region. The same grape is Croatia's Graševina and Austria's Welschriesling.", "Medium", "Very Low", "high", ["Adaptable and high-yielding, capable of enormous crops of neutral wine or, at restricted yields on the volcanic soils of Badacsony and Balatonfüred-Csopak, something considerably richer and more oily in texture", "Also used for botrytised sweet wines"], ["Green apple", "pear", "lemon", "white flowers", "a distinctive bitter-almond note on the finish", "Serious versions develop wax", "honey and a nutty depth"], "The everyday white of Hungary — the base of *fröccs*, the ubiquitous wine spritzer — and simultaneously the subject of a quality revival on Balaton's volcanic north shore, where a handful of producers make rich, textured, ageworthy versions. Frequently mentioned alongside Furmint as a candidate for Hungary's next serious white."),
    grape("Királyleányka", "White", "Transylvania (now Romania), historically part of the Kingdom of Hungary. The name means \"little princess\"; a natural cross of Leányka × Kövérszőlő.", "Light to medium", "Very Low", "medium to high", ["Early to mid ripening, moderately aromatic, reliable in yield", "Widely planted in Eger, Mátra and around Balaton", "Best drunk young"], ["Elderflower", "acacia", "green apple", "pear", "white peach", "lemon", "a light muscat-like floral lift"], "One of Hungary's most popular everyday aromatic whites — floral, fresh and easy, with just enough acidity to stay lively. Not a wine of ambition, but a well-made and characterful one, and a good demonstration of the Carpathian Basin's aromatic-white tradition, which is quite distinct from Germany's or Austria's."),
    grape("Leányka", "White", "Transylvania; the parent of Királyleányka. The name means \"young girl\". Known in Romania as Fetească Albă.", "Light to medium", "Very Low", "medium to low", ["Early ripening with modest acidity, which means it needs cooler sites or early picking", "Traditionally made both dry and semi-sweet, the latter now much less fashionable", "Widely planted in Eger"], ["White flowers", "apple", "pear", "honey", "a light spicy and faintly grassy note"], "A soft, gentle, slightly old-fashioned white that dominated Hungarian production in the mid-twentieth century and has since been overtaken by its own offspring, Királyleányka. Retained here because it is one of the historic varieties of the Carpathian Basin and remains widely grown across Hungary, Romania and Ukraine's Zakarpattia."),
    grape("Irsai Olivér", "White", "Hungary, bred in 1930 by Pál Kocsis as a table grape — a cross of Pozsonyi Fehér × Csaba Gyöngye. It found its vocation as a wine grape instead.", "Light", "Very Low", "medium", ["Very early ripening and intensely aromatic in the terpene family", "Low in acidity and prone to oxidation, so it must be made reductively and drunk young — within a year is ideal", "Widely planted in Mátra and Kunság"], ["Rose", "elderflower", "lychee", "grape", "lime blossom", "a musky Muscat spice"], "Hungary's most exuberantly aromatic white and its most reliable summer wine — floral, grapey and immediate. It is also the parent of Cserszegi Fűszeres. Not built to age or to impress critics, but very good at what it does, and a useful illustration that Hungary's twentieth-century breeding programme produced things worth keeping."),
    grape("Cserszegi Fűszeres", "White", "Hungary, bred in 1960 by Károly Bakonyi at Cserszegtomaj — a cross of Irsai Olivér × Roter Traminer. Also grown in Ukraine's Zakarpattia as \"Chersegi\".", "Light to medium", "Very Low", "medium to high", ["Early ripening, cold-hardy and disease-resistant, combining Irsai Olivér's floral intensity with Traminer's spice", "Holds acidity better than its aromatic parent", "Very widely planted, particularly in Kunság on the Great Plain"], ["Rose", "lychee", "elderflower", "grapefruit", "white pepper", "ginger", "a distinct spicy-Traminer character over floral Muscat notes"], "Hungary's most successful modern crossing and a genuine export success — sold widely in UK supermarkets, often under the label \"Hungarian spice grape\" because the name defeats most anglophones. Aromatic, spicy and dry, it occupies a useful gap between Gewürztraminer and Pinot Gris at a fraction of the price."),
    grape("Zéta", "White", "Tokaj, bred in 1951 by Ferenc Király — a cross of Furmint × Bouvier. Formerly called Oremus.", "Medium", "Very Low", "medium", ["Bred specifically for Aszú production: it ripens early and is exceptionally susceptible to noble rot, botrytising reliably in vintages when Furmint does not", "Lower in acidity than Furmint, so it is used in modest proportion", "One of the six permitted Tokaji varieties"], ["Apricot", "peach", "honey", "orange peel", "acacia", "Botrytised: marmalade", "dried apricot", "honeycomb"], "A purpose-built variety and a good illustration of how a classic wine region uses modern breeding without abandoning tradition — Zéta exists to make Aszú more reliable in marginal years, not to replace anything. Rarely bottled alone. Included as an example of Hungary's institutional breeding tradition, which is considerable."),
    grape("Kékfrankos (Blaufränkisch)", "Red", "Almost certainly the historic Kingdom of Hungary — DNA identifies the parents as Gouais Blanc (Heunisch Weiss) and the rare Zimmettraube Blau, and places the origin in what is now Slovenia, formerly Hungarian territory. Hungary grows far more of it than anyone else, at over 7,700 ha, but it is internationally known by its Austrian name.", "Medium to full", "medium to high, firm", "high", ["Late ripening, vigorous, deeply coloured, with acidity that stays fresh even in warm sites — one of the more climate-resilient quality reds in Central Europe", "Highly site-expressive: volcanic Eger, limestone Sopron and warm Villány give markedly different wines", "Ages well"], ["Sour cherry", "blackberry", "blackcurrant", "violet", "black pepper", "dried herbs", "a faint smoky-earthy note", "Oak brings cedar and mocha", "Age brings leather and tobacco"], "Hungary's most planted red and, as Decanter has pointed out, a variety Hungary lost the naming battle over — the world calls it Blaufränkisch. Peppery, high-acid and firmly structured, it is the backbone of Egri Bikavér (\"Bull's Blood\") and increasingly a serious single-varietal wine from Sopron, Eger and Szekszárd."),
    grape("Kadarka", "Red", "The Balkans — probably Albania or Serbia — brought north with Serbian migrants, and long the defining red of the Carpathian Basin.", "Light", "low to medium, fine", "high", ["Thin-skinned, late-ripening and highly prone to rot, which caused a collapse from nearly 30,000 ha in 1974 to around 282 ha today as the volume era rewarded reliability", "Pale in colour with fine tannin and a distinctive spicy character", "Demands careful vineyard work"], ["Red cherry", "raspberry", "redcurrant", "white and black pepper", "paprika", "dried herbs", "a light earthy-floral note"], "The great historic red of Hungary, and the one whose revival tells you most about the country's direction. Delicate, peppery and pale — often compared to Pinot Noir — it is obligatory in Szekszárdi Bikavér and is being rebuilt by producers in Szekszárd and Eger. Difficult to grow, easy to drink, and increasingly fashionable as light reds return."),
    grape("Turán", "Red", "Hungary, bred in the 1970s at Pécs — a complex crossing involving Kadarka-derived material and Teinturier du Cher.", "Full", "high", "medium to high", ["A *teinturier* with red flesh as well as red skin, producing wine of near-opaque density", "Disease-resistant, reliable and productive", "Used chiefly for colour and structure in blends, including Bikavér, but bottled varietally by a growing number of producers"], ["Blackberry", "blackcurrant", "black cherry", "forest fruit", "black pepper", "liquorice", "a faintly medicinal-herbal note"], "A modern Hungarian breeding product doing a specific job — supplying the depth of colour that Kadarka and, at high yields, Kékfrankos cannot. Also notably high in resveratrol, which has attracted health-adjacent marketing. Included as a representative of the substantial Hungarian crossings programme (alongside Zenit, Bíborkadarka, Zweigelt's local role and others)."),
];


const ukraineGrapes = [
    grape("Telti-Kuruk", "White", "Southern Ukraine, the northern Black Sea coast. Known since the sixteenth century, when the region was under Ottoman rule; the Turkic name means \"fox tail\", after the shape of the bunches. A true autochthon — one of very few varieties that can call this coast home.", "Medium to full", "Very Low", "high, with a notably linear structure", ["Grown on the sandy soils of the south, where phylloxera could not establish — some ungrafted vines are around fifty years old", "Subtle rather than exuberant aromatically, with a mineral profile and genuine ageing capacity", "Now used for still, sparkling and late-harvest wines", "Listed by Slow Food in its catalogue of endangered foods"], ["Flowers", "peach", "lemongrass", "feijoa and citrus; riper styles turn distinctly tropical", "Late-harvest and aged versions develop honey and quince"], "Ukraine's most important surviving indigenous white and the emblem of its varietal revival. Pronounced acidity, excellent ageing potential and a mineral, saline quality that reflects the steppe and sea. Producers such as Beykush have built its international reputation over the past decade, and it now appears regularly at ProWein and the London Wine Fair."),
    grape("Odesa Black (Alibernet)", "Red", "Bred at the Tairov Institute in Odesa in 1948 — a cross of Cabernet Sauvignon × Alicante Bouschet. Named in 1967 and added to Ukraine's Register of Plant Varieties five years later. Predominantly planted in Odesa and Mykolaiv.", "Full", "high, powerful", "medium to high", ["A red-fleshed *teinturier* inherited from Alicante Bouschet, giving very high anthocyanin content — which is exactly why it was used for the whole of the twentieth century as a colour-and-body corrective in blends", "Difficult to grow and can struggle to reach full ripeness", "Made both dry and in a sweet, Port-like fortified style"], ["Plum", "morello cherry", "blackberry", "dark chocolate", "liquorice", "with hints of mint and black pepper", "Sometimes likened to ripe New World Shiraz"], "Ukraine's flagship red and its calling card abroad. The Buyer's characterisation of it as a \"wild horse\" that Ukrainian producers have now tamed captures the shift: from anonymous blending component to structured, velvety, intense varietal wine over roughly the past decade. It is the variety most likely to be encountered outside Ukraine."),
    grape("Sukholymanskyi Bilyi", "White", "Bred at the Tairov Institute — a cross of Chardonnay × Plavai. Grown principally in Odesa, Mykolaiv and Bessarabia.", "Medium", "Very Low", "medium to high", ["Reliable and adaptable, with enough phenolic material to take skin contact well — it is frequently used for orange wines, which has become a signature Ukrainian style", "Also made fresh and in stainless steel"], ["White flowers", "pear", "herbal notes; fresh", "fruity and floral in the unoaked style", "Skin-contact versions add dried apricot", "tea leaf and orange peel"], "The most versatile of Ukraine's institute-bred whites and, alongside Telti-Kuruk, the backbone of the country's white production. Its Chardonnay parentage gives it structure; the Plavai side gives it the freshness and productivity to work in the Black Sea steppe. Widely used for the amphora, qvevri and concrete-egg experiments now common in Ukrainian cellars."),
    grape("Citron Magaracha (Tsytronnyi Magaracha)", "White", "Developed at the Magarach Institute, Crimea. Largely grown in Ukraine's northern vine-growing regions because of its frost-hardiness.", "Medium", "Very Low", "low", ["Bred for cold tolerance, which is what allows viticulture to extend north toward Kyiv", "Aromatically expressive with a citrus and tropical profile, but naturally low in acidity — so it is generally picked early or blended, and works best in fresh, young styles"], ["Lemon", "lemongrass", "citrus zest", "tropical fruit", "a light muscat-like floral note"], "The variety that makes northern Ukrainian viticulture possible. Crisp and citrusy in style despite its low measured acidity, it is a mainstay of Bessarabia and the Kyiv region. A clear example of the category-three \"local\": a laboratory product that exists for one climate and makes sense nowhere else."),
    grape("Kokur Bilyi", "White", "Crimea — an old variety of the southern coast, associated above all with the Sudak valley. Currently in occupied territory.", "Medium to full", "Very Low", "medium to high", ["Late ripening, high-yielding, thick-skinned", "Historically the base of Crimea's celebrated dessert wines, including the Massandra-style fortifieds, as well as dry table whites", "Excellent ageing capacity in the fortified styles"], ["Quince", "pear", "dried apricot", "honey", "wild herbs", "almond", "a light nutty-oxidative note when aged"], "One of the genuine Crimean autochthons and a variety with real historical standing — the Massandra cellars' Kokur-based dessert wines were prized across the Russian Empire and beyond. Its position in occupied territory since 2014 means it is documented here rather than recommended; commercial availability from Ukrainian producers is minimal."),
    grape("Kefesia", "Red", "Crimea, probably of Greek or Genoese introduction — the name likely derives from Kefe, the Ottoman name for Feodosia. Currently in occupied territory.", "Medium to full", "medium to high", "high", ["Late ripening, deeply coloured, with good acid retention on Crimea's limestone and shale coastal slopes", "Used both dry and for the fortified dessert wines of the southern coast"], ["Black cherry", "blackberry", "plum", "dried herbs", "black pepper", "a faint smoky-mineral edge"], "One of the small handful of true Crimean red autochthons, alongside Ekim Kara and Dzhevat Kara. Historically a component of the Massandra reds. Like Kokur, it is recorded here as part of Ukraine's varietal patrimony rather than as a wine to look for; its future depends on political circumstances outside viticulture's control."),
    grape("Ekim Kara", "Red", "Crimea. The Crimean Tatar name means \"black doctor\" — the source of the famous Soviet-era dessert wine *Chorny Doktor*. Currently in occupied territory.", "Full", "high", "medium", ["Extremely deeply coloured with very high extract and sugar potential", "Grown in tiny quantity on the southern Crimean coast, principally around Sudak", "Almost always used for fortified and dessert styles rather than dry wine"], ["Dried fig", "prune", "black cherry", "chocolate", "coffee", "walnut", "medicinal herbs", "a distinctive balsamic note"], "Among the rarest varieties recorded in this document. *Chorny Doktor* was one of the most celebrated wines of the Soviet Union and remains semi-legendary. Included for completeness of the Ukrainian record; effectively unobtainable from Ukrainian producers at present."),
    grape("Bastardo Magarachskyi", "Red", "Bred at the Magarach Institute — a cross of Bastardo (Portugal's Trousseau) × Saperavi Severnyi.", "Full", "medium to high", "medium", ["Combines Trousseau's aromatics with the cold-hardiness and colour of the Saperavi-derived parent", "Accumulates sugar readily, which suits it to both dry reds and fortified dessert styles", "Reasonably disease-resistant"], ["Black cherry", "prune", "dried fig", "chocolate", "black pepper", "a warm spicy-earthy character"], "One of the more successful Magarach crossings and widely planted through southern Ukraine. Dark, warm and generous in style, and historically important to the Soviet dessert-wine industry. Contemporary Ukrainian producers are making increasingly credible dry versions."),
    grape("Golubok (Holubok)", "Red", "Odesa, Ukraine, 1958 — an interspecific hybrid derived from Severnyi. Protected from 1981. VIVC #4888. Also grown in Moldova, Czechia and the United States.", "Full", "high", "medium to high", ["Very deeply coloured and tannic", "Cold-hardy, which is its principal virtue, though susceptible to bunch rot", "Used both varietally and as a blending component, including with Cabernet Sauvignon"], ["Blackcurrant", "blackberry", "dark plum", "black pepper", "a herbaceous-earthy note characteristic of its hybrid parentage"], "A workhorse of northern and central Ukrainian viticulture, valued for surviving winters that would kill *vinifera*. Dark and tannic in style. Its hybrid ancestry means it carries some of the foxy-herbaceous character typical of that group, which limits its fine-wine ceiling but not its usefulness."),
    grape("Pervenets Magaracha", "White", "Magarach Institute — a cross of Rkatsiteli × Magarach 2-57-72.", "Medium", "Very Low", "medium to high", ["Bred for disease resistance and frost tolerance while retaining reasonable wine quality — a common Magarach brief", "Productive and reliable, with good acid retention inherited from its Rkatsiteli parent"], ["Green apple", "citrus", "pear", "white flowers", "a light herbal-mineral finish"], "A dependable, unshowy white used widely in southern Ukraine for dry and sparkling base wines. Included as a representative of the substantial Magarach portfolio, which shaped Ukrainian and wider Soviet viticulture more than any other single institution."),
    grape("Krasen", "Red", "Ukraine — a PIWI (fungus-resistant) variety, used notably at the Demidi winery in the Kyiv region.", "Full", "medium to high", "medium", ["Bred for disease resistance, allowing low-spray viticulture in Ukraine's damper northern regions", "At Demidi it is partially dried in a specialised chamber at 28-30°C — an *appassimento* technique — to build concentration and aromatic intensity before fermentation"], ["Dried black fruit", "fig", "plum", "chocolate", "spice — intensified by the drying process"], "Interesting less for the grape itself than for what is being done with it: an Amarone-style drying method applied to a modern disease-resistant variety in a cool northern climate. It is a good example of the experimentation that has characterised Ukrainian winemaking even through the war years."),
    grape("Zagrei (Zahrei)", "Red", "Ukraine, an institute-bred red variety.", "Medium to full", "medium", "medium to high", ["Frost-tolerant and reasonably disease-resistant, producing deeply coloured wines", "Small plantings; identified by Decanter as one of the rare local varieties worth seeking out"], ["Black cherry", "blackberry", "plum", "spice", "a light herbal edge"], "One of a group of scarce Ukrainian varieties — alongside Yarylo and Bakator — now attracting attention from producers deliberately building a distinctive national portfolio rather than competing on international grapes. Documentation is thin and plantings are small; treat this profile as indicative."),
    grape("Yarylo", "Red", "Ukraine, named for the Slavic deity of spring and fertility.", "Medium", "medium", "medium to high", ["A rare local variety in small commercial production, listed by Decanter among the Ukrainian rarities worth seeking", "Cold-tolerant"], ["Red and black berry fruit", "herbs", "a light spicy note"], "Included for completeness of the Ukrainian record. Like Zagrei, it belongs to the group of very small-production varieties that Ukrainian producers are deliberately reviving as part of a national identity project. Published tasting data is limited — this is a variety to encounter rather than to plan around."),
    grape("Leanka", "White", "Zakarpattia (Transcarpathia), in Ukraine's far west, bordering Hungary and Slovakia. The same variety as Hungary's Leányka and Romania's Fetească Albă.", "Light to medium", "Very Low", "medium", ["Early ripening with modest acidity, grown in the Carpathian foothills where the microclimate is quite unlike the Black Sea steppe", "Made dry and semi-dry"], ["White flowers", "apple", "pear", "honey", "a light spicy note"], "The bridge between Ukrainian and Central European viticulture. Zakarpattia's varietal palette — Leanka, Traminer, Furmint, Chersegi (Cserszegi Fűszeres), Blaufränkisch — is essentially a Hungarian one, a legacy of the region's history, and produces wines that taste far more like Tokaj's neighbours than like Odesa's."),
    grape("Bakator", "White", "Zakarpattia and the historic Kingdom of Hungary, where it is Bakator (a family of related varieties including Bakator Rózsa).", "Light to medium", "Very Low", "medium to high", ["An old Carpathian variety, much reduced in plantings, cited by Decanter among Ukraine's rare local grapes worth seeking", "Grown on the volcanic and clay soils of the Transcarpathian foothills"], ["Green apple", "pear", "citrus", "white flowers", "a faint honeyed note"], "A survivor of the pre-Soviet Carpathian varietal landscape and a genuine rarity. Its presence in Zakarpattia alongside Leanka underlines a point worth making about Ukraine: it is not one wine country but several, with the Black Sea coast, Bessarabia, the Kyiv region and the Carpathians each drawing on different genetic and cultural traditions."),
];


const germanyGrapes = [
    grape("Riesling", "White", "The Rhine valley, documented from 1435. Its parents are Gouais Blanc (Heunisch Weiss) and a Traminer-derived seedling. Roughly a fifth of Germany's vineyard area.", "Light to medium", "Very Low", "very high", ["Late ripening and remarkably cold-hardy, which is what allows it to work on the Mosel's steep slate at 50°N", "Extremely site-transparent — slate, quartzite, loess and limestone all read distinctly", "Made across the full sweetness spectrum from *trocken* to *Trockenbeerenauslese*, with acidity high enough that even sweet versions taste fresh", "Among the longest-lived white wines in the world"], ["Lime", "green apple", "white peach", "apricot", "honeysuckle", "wet slate", "With age", "the famous petrol/kerosene note (TDN)", "plus honey", "camomile", "dried apricot and beeswax"], "By most accounts the greatest white grape in the world for the combination of longevity, site-expression and stylistic range. Germany's Prädikat system exists essentially to describe it. The dominant modern movement is toward dry (*trocken*) styles and the VDP's Grosses Gewächs single-vineyard classification, though the finest sweet Auslesen and above remain unmatched."),
    grape("Silvaner", "White", "Austria/Transylvania in ultimate origin — a natural cross of Traminer × Österreichische Weiss — but naturalised in Germany since 1659 and the defining grape of Franken. The official German name is Grüner Silvaner.", "Medium to full", "Very Low", "medium", ["Earlier ripening than Riesling and lower in acidity, with more body and less aroma — which makes it a superb conductor of soil", "Franken's *Muschelkalk* (shell limestone) and *Keuper* soils produce markedly different wines", "Rarely oaked, precisely to avoid burying its subtlety", "Historically Germany's most planted variety before Müller-Thurgau overtook it"], ["Green apple", "pear", "quince", "fresh herbs", "hay", "white pepper", "a faint earthy-mineral and nettle note", "Age brings honey and a smoky depth"], "The connoisseur's German white and the antidote to the assumption that German wine means aromatic and sweet. Dry Franken Silvaner in its distinctive flagon-shaped *Bocksbeutel* is savoury, textured, restrained and outstanding with food — asparagus above all. It rewards attention rather than seeking it, which explains both its low profile and its devoted following."),
    grape("Müller-Thurgau (Rivaner)", "White", "Bred in 1882 by Hermann Müller of Thurgau, Switzerland, at Geisenheim — a cross of Riesling × Madeleine Royale (long misidentified as Silvaner).", "Light", "Very Low", "low to medium", ["Early ripening, high-yielding and undemanding of site — the exact combination that made it the most planted German variety by the 1970s and the engine of Liebfraumilch", "Low acidity and modest structure mean it must be drunk young", "Also grown extensively in Alto Adige, Czechia, Slovakia and Luxembourg"], ["Green apple", "pear", "peach", "elderflower", "a light Muscat-like floral note and a faint grassy edge"], "The most consequential grape crossing ever made, and not entirely for good reasons — its productivity underwrote the German bulk-wine collapse in reputation from which the country took thirty years to recover. Plantings have fallen sharply. The best versions, from Franken, Baden and Alto Adige at low yields, are pleasant, floral and honest, and there is a small movement to rehabilitate it under the name Rivaner."),
    grape("Elbling", "White", "Ancient, of unknown origin — possibly Roman, and among the oldest cultivated white varieties in Europe. Almost exclusively grown on the Upper Mosel's steep slopes and in neighbouring Luxembourg.", "Light", "Very Low", "very high", ["Early ripening and very prolific, historically planted across much of Germany before Riesling and Silvaner displaced it in the early twentieth century", "Grown on shell limestone rather than the Middle Mosel's slate", "Very low alcohol — 9-11% is common — and searing acidity, which makes it ideal for *Sekt*"], ["Green apple", "lemon", "lime", "white flowers", "chalk", "a faint yeasty-bready note in sparkling versions"], "A living antiquity undergoing a modest renaissance among Mosel producers. Simple, bracing, very dry and extremely low in alcohol — not complex, but arguably the most refreshing wine in Germany. Its historical continuity, plausibly back to Roman viticulture on the Mosel, gives it a significance its modest character does not suggest."),
    grape("Scheurebe", "White", "Bred in 1916 in Rheinhessen by Georg Scheu — a cross of Riesling × Bukettrebe (identified only in 2012; it was thought to be Silvaner for nearly a century). Most plantings remain in Rheinhessen, with more in the Pfalz, Nahe and Franken.", "Medium", "Very Low", "high", ["Bred specifically as an aromatic variety and highly successful at it", "Ripens later than Riesling, needs a good site, and turns aggressively herbaceous if picked underripe", "Excellent for botrytised sweet wines; dry versions are increasingly common"], ["Pink grapefruit above all — its unmistakable signature — plus blackcurrant leaf", "passion fruit", "peach", "elderflower and a faint honeyed note", "Sweet versions add mango and marmalade"], "The most successful of Germany's aromatic crossings and a genuinely distinctive wine. The grapefruit-and-cassis-leaf profile has no real equivalent anywhere; the closest analogue is a very ripe Sauvignon Blanc, which undersells it. Superb as a sweet Auslese and increasingly convincing dry with food — a rare white that stands up to Asian spice."),
    grape("Kerner", "White", "Bred in 1929 by August Herold at Lauffen in Württemberg — a cross of Trollinger (a red variety) × Riesling. Named after the poet and physician Justinus Kerner. VIVC #6123.", "Medium", "Very Low", "high", ["Ripens earlier and buds later than Riesling, and is hardier — which made it popular on marginal sites during the 1970s and 1980s expansion", "Retains high acidity and produces genuinely Riesling-like wine, though a little broader and more overtly floral", "Also successful in Alto Adige at altitude and, remarkably, in Japan's Hokkaido"], ["Green apple", "pear", "peach", "lemon", "elderflower", "a light Muscat-like floral character and a faint nutmeg spice"], "The most successful of the \"improved Riesling\" crossings — genuinely good wine rather than merely reliable. Plantings peaked in the 1990s and have since declined as Germany shifted back toward classic varieties, but Kerner's cold-hardiness has given it a second life in Alto Adige's high vineyards and other marginal climates."),
    grape("Bacchus", "White", "Bred in the Pfalz — a crossing of (Silvaner × Riesling) × Müller-Thurgau, named for the god of wine. Around 1.6% of German plantings, mostly in Franken and Rheinhessen.", "Light to medium", "Very Low", "low to medium", ["Very early ripening with high sugar accumulation and low acidity — a combination designed for marginal climates and short seasons", "Must be picked early and handled reductively or it goes flabby and blowsy", "Also now important in England, where its early ripening suits the climate exactly"], ["Elderflower", "nettle", "gooseberry", "grapefruit", "blackcurrant leaf", "a light Muscat-like grapey note"], "A grape that has found its true home somewhere other than where it was bred. In Germany it is a minor and slightly unfashionable variety; in England it has become the flagship still white, producing wines frequently compared to Sauvignon Blanc. A useful illustration that varietal suitability is a moving target as climates shift."),
    grape("Rieslaner", "White", "Created in 1921 in Franken by August Ziegler — a cross of Riesling × Silvaner. (Ironically, this is the parentage that Scheurebe was wrongly believed to have for decades.)", "Medium to full", "Very Low", "very high", ["Late ripening and awkward in the vineyard, with poor fruit set and low yields — the reason plantings are tiny, around 40 hectares", "Exceptionally high acidity and very high must weights, plus strong botrytis affinity, which makes it outstanding for sweet Auslese and above", "Small plantings in Franken and the Pfalz"], ["Apricot", "peach", "grapefruit", "quince", "honey", "camomile", "a smoky-mineral edge", "Botrytised versions add marmalade and dried apricot"], "A cult variety among German wine specialists and almost unknown outside them. Its sweet wines — Müller-Catoir's above all — are among Germany's most electrifying, with an acid-sugar tension that rivals great Riesling. Racy, fruity and difficult to grow, which keeps it beautifully rare."),
    grape("Huxelrebe", "White", "Bred in 1927 in Rheinhessen by Georg Scheu — a cross of Gutedel (Chasselas) × Courtillier Musqué. Named after the nurseryman Fritz Huxel.", "Medium", "Very Low", "medium", ["Very high-yielding with extremely high sugar accumulation — it can reach Auslese must weights easily, which is both its virtue and its problem, since large crops of high-sugar, low-acid fruit make dull wine", "Strongly botrytis-prone", "Best at severely restricted yields"], ["Muscat-like grapiness", "elderflower", "honey", "peach", "apricot", "orange peel", "a light spicy note"], "Not a great variety, but a useful and revealing one — it shows what German breeding was actually optimising for in the mid-twentieth century, which was reliable ripeness in a cold climate rather than quality per se. Its botrytis affinity makes it capable of very good sweet wines. Also planted in England."),
    grape("Dornfelder", "Red", "Created in 1955 by August Herold at Weinsberg, Württemberg — a cross of Helfensteiner × Heroldrebe, the latter named after Herold himself. The variety is named for a nineteenth-century founder of the Weinsberg viticultural school. VIVC #3659.", "Medium to full", "medium", "medium to high", ["Its defining quality is colour — far deeper than any traditional German red, which is precisely what it was bred for", "Relatively early ripening, rot-resistant, with stronger stalks than Trollinger and higher must weights than most German reds", "Benefits from barrique ageing, unusually among German varieties"], ["Blackberry", "sour cherry", "elderberry", "plum", "violet", "a faint herbal and peppery note", "Oak brings vanilla and mocha"], "The grape that made internationally styled German red wine possible. Before Dornfelder, German reds were pale and light-bodied; it gave producers depth of colour, acidity and oak affinity in one package. Germany's second most planted red after Spätburgunder, and the reason the country now exports red wine at all."),
    grape("Trollinger", "Red", "Very old, probably originating in Tirol — from which the name derives. Known as Schiava Grossa or Vernatsch in Italy's Alto Adige. Almost entirely confined to Württemberg in Germany.", "Very light", "very low", "medium to high", ["Late ripening, very high-yielding, thin-skinned and extremely pale in colour — often barely darker than a rosé", "Low in tannin and alcohol", "Also one parent of Kerner", "Served cool, frequently in the traditional Württemberg quarter-litre glass"], ["Red cherry", "strawberry", "redcurrant", "a faint almond and herbal note"], "Württemberg's own wine and an almost entirely local phenomenon — the Swabians drink nearly all of it themselves, and outsiders often find it thin. Understood correctly, as a light, chilled, low-tannin everyday red, it makes complete sense, and the current appetite for exactly that style has given it unexpected relevance."),
    grape("Lemberger (Blaufränkisch)", "Red", "The historic Kingdom of Hungary; the same variety as Hungary's Kékfrankos and Austria's Blaufränkisch. In Germany it is concentrated almost entirely in Württemberg, where it has been grown since the eighteenth century.", "Medium to full", "medium to high", "high", ["Late ripening — later than Dornfelder — with good colour, firm tannin and high acidity", "Germany's cooler sites give a lighter, more peppery and higher-acid expression than Austria's Mittelburgenland", "Increasingly barrique-aged", "Genuinely ageworthy"], ["Sour cherry", "blackberry", "blackcurrant", "violet", "black pepper", "dried herbs", "Oak brings cedar and chocolate"], "Germany's most serious red after Spätburgunder, and the variety Württemberg producers point to when arguing for the region's quality credentials. Peppery, structured and food-friendly. Its resilience and acid retention make it one of the more promising German reds under a warming climate."),
    grape("Portugieser (Blauer Portugieser)", "Red", "Very old, and despite the name almost certainly from the Danube valley in Austria rather than Portugal. Historically Germany's third most planted red, at close to 6% of vineyard area.", "Light", "low", "low to medium", ["Very early ripening and prolific, with pale colour and low acidity that limit its ageing ability", "Susceptible to rot", "Widely used for *Weissherbst* rosé and for light, everyday reds, particularly in the Pfalz and Rheinhessen"], ["Red cherry", "raspberry", "redcurrant", "a light floral and faintly earthy note"], "Mild, light and easy to enjoy — the Deutsches Weininstitut's own description is fair. Plantings have declined steadily as Dornfelder and Spätburgunder advanced, and it is now something of a traditionalist's grape. Best chilled and drunk young, ideally somewhere in the Pfalz with a plate of *Saumagen*."),
    grape("Frühburgunder", "Red", "An early-ripening natural mutation of Pinot Noir, documented in Germany since at least the seventeenth century. Concentrated in the Ahr, Franken and Württemberg. Also known as Pinot Noir Précoce.", "Light to medium", "medium, fine", "medium to high", ["Ripens roughly two weeks earlier than Spätburgunder, with smaller berries, looser bunches and lower yields — giving more concentration and a slightly darker colour", "Nearly extinct by the 1970s; recovered through clonal selection at Geisenheim"], ["Red cherry", "wild strawberry", "cranberry", "rose", "dried herbs", "a light smoky-earthy note", "Age brings undergrowth and spice"], "A German speciality and a genuine rarity — around 250 hectares nationally. Denser and more structured than Spätburgunder while remaining unmistakably Pinot in character. The Ahr valley's slate-grown examples are the benchmark. Included over Spätburgunder itself, which is simply Pinot Noir and belongs to France."),
    grape("Regent", "Red", "Bred in 1967 at Geilweilerhof (Siebeldingen) — a complex interspecific hybrid of Diana × Chambourcin. Nearly 2,000 hectares in Germany.", "Medium to full", "medium to high", "medium", ["The most important European PIWI red — highly resistant to downy and powdery mildew, allowing dramatic reductions in fungicide spraying, which has made it central to organic viticulture across northern Europe", "Deeply coloured, early ripening, reliable", "Now grown for red wine in Scandinavia, Benelux, Britain, Poland and the Baltics as well as Germany"], ["Blackcurrant", "blackberry", "black cherry", "plum", "a herbal-vegetal note characteristic of its hybrid parentage", "and cocoa with oak"], "Less a fine-wine grape than an agricultural achievement, and a genuinely significant one. Regent and its stablemates are the reason viticulture now works commercially in climates where *vinifera* struggles — see the entire Polish section below. It also anchors a serious environmental argument: fewer sprays, less tractor traffic, lower inputs."),
];


const polandGrapes = [
    grape("Solaris", "White", "Bred in 1975 at the Staatliches Weinbauinstitut Freiburg, Germany — Merzling × (Zarya Severa × Muscat Ottonel). Poland's most important white variety.", "Medium to full", "Very Low", "medium, falling fast if picked late", ["Extremely early ripening — often harvested in August or early September in Poland — with very high sugar accumulation, sometimes reaching potential alcohol of 14% in a Polish September", "Strong fungal resistance", "Its problem is the mirror image of most cold-climate grapes: acidity drops away quickly, so picking date is the single most important decision"], ["Ripe pear", "yellow apple", "peach", "apricot", "pineapple", "elderflower", "acacia honey", "a light herbal note", "Late-picked versions turn overtly tropical"], "The backbone of Polish white winemaking and, in good hands, capable of genuinely good wine — rich, aromatic and rounder than the country's latitude would suggest. Winnica Turnau in Zachodniopomorskie is among the notable producers. Also increasingly used for sweet and late-harvest styles, which suit its sugar profile well."),
    grape("Johanniter", "White", "Bred in 1968 at Freiburg — Riesling × (Seyval Blanc × (Ruländer × Gutedel)). Widely planted in Poland's west and south.", "Medium", "Very Low", "medium to high", ["Mid-season ripening with good fungal resistance and better acid retention than Solaris — which makes it the more reliable of the two for dry, structured wine", "Riesling parentage shows in the acid line and the aromatic profile", "Handles lees ageing well"], ["Green apple", "pear", "lime", "white peach", "elderflower", "a light herbal-mineral note", "Aged versions develop a faintly petrolly", "Riesling-like character"], "Probably the best variety in Poland for serious dry white. It has the acidity that Solaris lacks and enough aromatic interest to stand alone. Winnica Turnau's Johanniter is frequently cited as a benchmark. If Polish wine develops a fine-wine identity, this is one of the two or three grapes likeliest to carry it."),
    grape("Hibernal", "White", "Bred at Geisenheim, Germany, in 1944 — Seibel 7053 × Riesling. Named for its winter-hardiness.", "Medium to full", "Very Low", "high", ["Exceptionally frost-resistant, tolerating winter temperatures around −25 to −29°C, which is precisely why it works in Poland", "Late ripening but reliable", "Aromatically expressive with high acidity — an unusual and valuable combination in a cold climate"], ["Gooseberry", "blackcurrant leaf", "grapefruit", "elderflower", "nettle", "green apple", "a distinct Sauvignon-Blanc-like herbaceous character"], "Poland's most aromatic serious white and the one that most surprises tasters expecting thin northern wine — the gooseberry-and-cassis-leaf profile reads convincingly as a cool-climate Sauvignon Blanc. Its extreme winter hardiness makes it strategically important. One of the more distinctive things Poland does."),
    grape("Seyval Blanc", "White", "Bred in France around 1921 by Bertille Seyve and Victor Villard — Seibel 5656 × Seibel 4986. A French-American interspecific hybrid.", "Light to medium", "Very Low", "high", ["Early ripening, productive, disease-resistant and very cold-tolerant", "Naturally high in acidity and fairly neutral aromatically, which makes it excellent for traditional-method sparkling — its principal role in England, and increasingly in Poland", "Handles oak and lees ageing"], ["Green apple", "lemon", "pear", "hay", "a faint mineral-citrus character", "Sparkling versions develop bread and almond with lees ageing"], "The reliable neutral white of northern European viticulture — not exciting alone, but structurally sound, versatile and consistent. Its high acid makes it Poland's most obvious sparkling base. Widely planted in Podkarpackie, Małopolskie, Lublin and Świętokrzyskie alongside Regent, Rondo, Bianca, Johanniter and Solaris."),
    grape("Bianca", "White", "Bred in Hungary in 1963 at Eger — Eger 2 × Bouvier. Widely planted across Central and Eastern Europe, including Poland's southern regions.", "Medium", "Very Low", "medium to high", ["Very early ripening with high sugar accumulation and strong fungal resistance", "Reliable yields", "Somewhat neutral aromatically, which makes it useful for blending and for distillation as well as for still wine"], ["Green apple", "pear", "citrus", "white flowers", "a light honeyed and faintly nutty note"], "A workhorse rather than a star, but an important one — its combination of early ripening, disease resistance and productivity makes it viable in places where little else is. Represents the Hungarian contribution to the Central European PIWI portfolio, which is substantial and often overlooked next to the German one."),
    grape("Muscaris", "White", "Bred in 1987 at Freiburg — Solaris × Muscat Blanc à Petits Grains. A recent arrival in Poland and spreading fast.", "Medium", "Very Low", "medium", ["Combines Solaris's early ripening and fungal resistance with intense Muscat aromatics", "Accumulates sugar readily; acidity is moderate, so it is often made off-dry or sweet, where the aromatics show best", "Also used for skin-contact and sparkling wine"], ["Rose", "elderflower", "lychee", "grape", "orange blossom", "peach", "and a pronounced musky Muscat spice"], "The most overtly aromatic grape in Polish viticulture and a commercially significant one — floral, immediately appealing and easy to sell to people new to Polish wine. Also grown in Poland's Muscat-adjacent company alongside Muscat of Odessa. A good demonstration that PIWI breeding has moved beyond mere survival toward genuine aromatic ambition."),
    grape("Souvignier Gris", "Red", "Bred in 1983 at Freiburg — Cabernet Sauvignon × Bronner. Increasingly planted in Poland, and used in Polish research on grape vinegars and antioxidant content.", "Medium to full", "light phenolic grip", "medium", ["A grey-pink-skinned variety with thick skins, excellent disease resistance and notable phenolic content — which makes it well suited to skin contact and orange-wine styles", "Mid-season ripening", "Moderate acidity; textured rather than sharp"], ["Pear", "quince", "white peach", "dried apricot", "honey", "hazelnut", "a light spicy note", "Skin-contact versions add orange peel and tea leaf"], "One of the most promising newer PIWIs and a favourite among Poland's more experimental producers. Its texture and phenolic weight allow styles — amphora, skin contact, extended lees — that thin northern whites cannot support. If Polish wine is going to make something genuinely distinctive rather than merely competent, this is a strong candidate."),
    grape("Jutrzenka", "White", "**Bred in Poland** by Roman Myśliwiec at Jasło, Podkarpackie — the country's most significant grape breeder and the founder of its modern viticulture. The name means \"dawn\".", "Medium", "Very Low", "medium", ["Early ripening and frost-resistant, developed specifically for Polish conditions", "Aromatic, with a Muscat-influenced profile", "Modest yields"], ["Muscat grapiness", "elderflower", "rose", "apple", "pear", "a light citrus lift"], "One of the few genuinely Polish-bred wine grapes, and included partly for that reason. Myśliwiec's Golesz vineyard and nursery at Jasło supplied much of the plant material for Poland's revival from the 1980s onward, and his breeding programme — Jutrzenka, Sibera and others — is the closest thing Poland has to an indigenous varietal tradition. That the tradition is forty years old rather than four hundred is simply the honest position."),
    grape("Sibera", "White", "Central European breeding, associated with Czech and Polish cold-climate programmes and widely planted in Poland. Bred explicitly for extreme frost tolerance, as the name suggests.", "Light to medium", "Very Low", "medium to high", ["Very early ripening and among the most winter-hardy varieties in commercial use, tolerating severe continental frost", "Fungal resistance is good", "Modest aromatic intensity"], ["Green apple", "pear", "citrus", "white flowers", "a light herbal note"], "A survival variety in the most literal sense — it exists so that vines can be grown where winters kill *vinifera* outright. Wine quality is decent rather than remarkable, but its role in extending Polish viticulture into colder and more northerly sites is significant. Frequently listed among Poland's standard whites alongside Solaris, Johanniter, Hibernal and Bianca."),
    grape("Aurora (Aurore)", "White", "Bred in France by Seibel (Seibel 5279) in the early twentieth century — a French-American hybrid. Historically important in eastern North America and adopted in Poland for its early ripening.", "Light", "Very Low", "medium", ["Extremely early ripening — among the earliest of all wine grapes — with good cold tolerance but only moderate disease resistance", "Productive", "Aromatically simple, with a slight hybrid character"], ["Apple", "pear", "light floral notes", "a faint grapey-foxy edge typical of *labrusca*-influenced hybrids"], "An older-generation hybrid, gradually being displaced by the more sophisticated Freiburg and Geisenheim PIWIs. Retained here because it appears consistently in surveys of Polish plantings and represents the first wave of the modern revival — the varieties available when Polish growers started planting again in the 1980s, before better options existed."),
    grape("Regent", "Red", "Bred in 1967 at Geilweilerhof, Germany — Diana × Chambourcin. Poland's most important red variety, dominant in Podkarpackie, Małopolskie, Lublin and Świętokrzyskie.", "Medium to full", "medium to high", "medium", ["Strong resistance to downy and powdery mildew — critical in Poland's humid summers — with deep colour and reliable early ripening", "The subject of substantial Polish agronomic research, including rootstock trials in the Sandomierz Upland"], ["Blackcurrant", "blackberry", "black cherry", "plum", "cocoa", "a herbal-vegetal note characteristic of hybrid parentage"], "The grape that makes Polish red wine possible. Deep-coloured and structured enough to take oak, and the most likely Polish red to satisfy someone expecting a conventional red wine. Polish producers report that visiting French winemakers are consistently more impressed by the reds than the whites — Regent is a large part of why."),
    grape("Rondo", "Red", "Bred in Czechoslovakia in 1964 and developed at Geisenheim — Zarya Severa × St. Laurent. Carries *Vitis amurensis* genes, the source of its extreme cold tolerance.", "Medium to full", "medium", "medium to high", ["Very deep colour — among the darkest of the northern hybrids — with good cold-hardiness and reasonable disease resistance", "Early ripening", "Can show marked herbaceousness if underripe, so canopy management and yield control matter"], ["Blackberry", "blackcurrant", "damson", "black cherry", "a green-herbal and slightly earthy note", "cocoa with oak"], "Poland's second red pillar alongside Regent, and the workhorse of northern European red winemaking generally — Scandinavia, the Baltics, Britain and Benelux all rely on it. Its *amurensis* ancestry, from a species that survives Mongolian winters, is what makes viticulture viable at these latitudes at all."),
    grape("Cabernet Cortis", "Red", "Bred in 1982 at Freiburg — Cabernet Sauvignon × Solaris.", "Medium to full", "medium to high", "medium to high", ["Inherits Cabernet's aromatic profile and structure with Solaris's early ripening and fungal resistance", "Deeply coloured", "Prone to pronounced green-pepper character if not fully ripe, which in Poland requires a good site and a warm year"], ["Blackcurrant", "blackberry", "green bell pepper", "cassis leaf", "mint", "cedar — recognisably Cabernet in character"], "The variety that gives Polish red wine a familiar reference point: a well-made Cabernet Cortis reads as a cool-climate Cabernet Sauvignon, which makes it commercially useful. Grown at Srebrna Góra and other leading estates. It also illustrates where PIWI breeding is heading — not just survival, but recognisable varietal identity."),
    grape("Maréchal Foch", "Red", "Bred in Alsace in the early twentieth century by Eugène Kuhlmann — a Riparia-Rupestris hybrid crossed with a *vinifera* parent. Named for the First World War marshal. Important in Canada and the northern United States as well as Poland.", "Medium", "medium", "medium to high", ["Very early ripening and extremely cold-hardy", "Deep colour, small berries", "Carries a noticeable hybrid character that some producers manage with carbonic maceration or short extraction", "Reliable in difficult seasons"], ["Black cherry", "blackberry", "plum", "beetroot", "coffee", "a distinctly earthy-foxy note characteristic of *labrusca*-influenced hybrids"], "An older-generation hybrid still widely planted in Poland, valued for reliability rather than finesse. Its earthy character divides opinion sharply. Included because it appears consistently in Polish planting surveys and because it represents, alongside Aurora, the pre-PIWI generation that the newer Freiburg crossings are steadily replacing."),
    grape("Tryumf Alzacji (Triumph d'Alsace)", "Red", "Alsace, an early-twentieth-century Kuhlmann hybrid — a sibling of Maréchal Foch. The Polish name translates the French directly.", "Light to medium", "low to medium", "medium to high", ["Very early ripening and highly frost-tolerant, with moderate colour", "Reliable in cold, short seasons", "Like its siblings, carries some hybrid aromatic character"], ["Red cherry", "redcurrant", "blackberry", "a light earthy and faintly grapey-foxy note"], "A minor but persistent variety in Polish red production, listed by IntechOpen and Wikipedia among the most popular Polish reds alongside Regent, Rondo, Cabernet Cortis, Maréchal Foch, Cascade, Dornfelder and Pinot Noir. Its presence is a reminder that Poland's varietal portfolio is still consolidating — the mix of 1920s Alsatian hybrids and 1980s Freiburg PIWIs in the same vineyard is characteristic of a wine industry rebuilding from scratch."),
];


const quizModes = [
    {
        id: "international-reds",
        label: "International Reds",
        description: "Classic globally recognized red grapes from the original quiz.",
        intro: "Learn the hallmark aromas and structure of 14 internationally famous red wine grapes.",
        sources: [
            { label: "Wine-Searcher – Cabernet Sauvignon grape profile", url: "https://www.wine-searcher.com/grape-cabernet-sauvignon" },
            { label: "Wine-Searcher – Merlot grape profile", url: "https://www.wine-searcher.com/grape-merlot" },
            { label: "Wine-Searcher – Pinot Noir grape profile", url: "https://www.wine-searcher.com/grape-pinot-noir" },
            { label: "Wine-Searcher – Syrah grape profile", url: "https://www.wine-searcher.com/grape-syrah" },
            { label: "Wine-Searcher – Malbec grape profile", url: "https://www.wine-searcher.com/grape-malbec" },
            { label: "Wine-Searcher – Zinfandel grape profile", url: "https://www.wine-searcher.com/grape-zinfandel" },
            { label: "Wine-Searcher – Sangiovese grape profile", url: "https://www.wine-searcher.com/grape-sangiovese" },
            { label: "Wine-Searcher – Tempranillo grape profile", url: "https://www.wine-searcher.com/grape-tempranillo" },
            { label: "Wine-Searcher – Grenache grape profile", url: "https://www.wine-searcher.com/grape-grenache" },
            { label: "Wine-Searcher – Nebbiolo grape profile", url: "https://www.wine-searcher.com/grape-nebbiolo" },
            { label: "Wine-Searcher – Cabernet Franc grape profile", url: "https://www.wine-searcher.com/grape-cabernet-franc" },
            { label: "Wine-Searcher – Pinotage grape profile", url: "https://www.wine-searcher.com/grape-pinotage" },
            { label: "Wine-Searcher – Mourvèdre grape profile", url: "https://www.wine-searcher.com/grape-mourvedre" },
            { label: "Wine-Searcher – Primitivo grape profile", url: "https://www.wine-searcher.com/grape-primitivo" }
        ],
        grapes: internationalReds
    },
    {
        id: "international-whites",
        label: "International Whites",
        description: "Classic globally recognized white grapes from major wine regions.",
        intro: "Compare ten iconic international white grape varieties by structure, aromas, and regional identity.",
        sources: [
            { label: "Wine Folly – 18 Most Common White Wine Varieties", url: "https://winefolly.com/deep-dive/18-most-common-white-wine-varieties/" },
            { label: "Wine Scholar Guild – International White Grape Varieties", url: "https://winescholarguild.com/articles/international-white-grape-varieties/" },
            { label: "Wikipedia – List of grape varieties", url: "https://en.wikipedia.org/wiki/List_of_grape_varieties" }
        ],
        grapes: internationalWhites
    },
    {
        id: "spain",
        label: "Spain",
        description: "Spanish local varieties with both red and white styles.",
        intro: "Explore Spain beyond Rioja with Atlantic whites, Mediterranean reds, and regional specialties.",
        sources: [
            { label: "Wine Folly — Spanish wine guide", url: "https://winefolly.com/deep-dive/guide-to-spanish-wine/" },
            { label: "VIVC database", url: "https://www.vivc.de/" },
            { label: "Wikipedia — Spanish wine", url: "https://en.wikipedia.org/wiki/Spanish_wine" },
        ],
        grapes: spainGrapes
    },
    {
        id: "italy",
        label: "Italy",
        description: "Italian regional grapes spanning powerful reds and textured whites.",
        intro: "Taste through Italy's deep bench of native grapes, from volcanic southern reds to alpine and coastal whites.",
        sources: [
            { label: "Wikipedia — Italian wine", url: "https://en.wikipedia.org/wiki/Italian_wine" },
            { label: "Wine Folly — Italian wine guide", url: "https://winefolly.com/deep-dive/italian-wine-regions/" },
            { label: "VIVC database", url: "https://www.vivc.de/" },
        ],
        grapes: italyGrapes
    },
    {
        id: "portugal",
        label: "Portugal",
        description: "Portuguese native grapes from Atlantic whites to structured reds.",
        intro: "Portugal's local vineyard heritage includes distinctive grapes for both refreshing whites and age-worthy reds.",
        sources: [
            { label: "Wines of Portugal — grape varieties", url: "https://winesofportugal.com/en/portuguese-wines/grape-varieties/" },
            { label: "WSET — The indigenous varieties of Portugal", url: "https://www.wsetglobal.com/knowledge-centre/blog/2023/july/16/the-indigenous-varieties-of-portugal" },
            { label: "Cellar Tours — Portuguese grape varieties", url: "https://www.cellartours.com/blog/portugal/guide-portuguese-grape-varieties" },
        ],
        grapes: portugalGrapes
    },
    {
        id: "france-local",
        label: "Non-international France",
        description: "French local varieties outside the usual global superstars.",
        intro: "Discover France's less-exported grapes from Corsica, Jura, Savoie, Muscadet, and the southwest.",
        sources: [
            { label: "Les Caves de Pyrene — obscure French varieties", url: "https://blog.lescaves.co.uk/2025/05/15/obscure-grape-varieties-france/" },
            { label: "Wine Enthusiast — South West France's rare native grapes", url: "https://www.wineenthusiast.com/culture/wine/southwest-france-rare-native-wine-grapes/" },
            { label: "VIVC database", url: "https://www.vivc.de/" },
        ],
        grapes: franceLocalGrapes
    },
    {
        id: "greece",
        label: "Greece",
        description: "Greek native reds and whites from volcanic islands and mountain vineyards.",
        intro: "Greek wine offers saline island whites, perfumed aromatics, and savory structured reds.",
        sources: [
            { label: "Wines of Greece — grape varieties A-Z", url: "https://winesofgreece.org/meet-the-grapes/grape-varieties/" },
            { label: "Decanter — Greece's native grape heroes", url: "https://www.decanter.com/premium/discover-greeces-native-grape-heroes-beyond-assyrtiko-and-xinomavro-562945/" },
            { label: "Wine Folly — beginner's guide to Greek wine", url: "https://winefolly.com/deep-dive/the-beginners-guide-to-greek-wines/" },
        ],
        grapes: greeceGrapes
    },
    {
        id: "croatia",
        label: "Croatia",
        description: "Croatian coastal and continental grapes across red and white styles.",
        intro: "Croatia's grapes range from Adriatic island whites to sun-baked Dalmatian reds and Istrian classics.",
        sources: [
            { label: "Total Croatia — the four wine regions", url: "https://total-croatia-news.com/wine/wine-regions/four-croatian-wine-regions-2/" },
            { label: "Expat in Croatia — Croatian wine cheat sheet", url: "https://www.expatincroatia.com/croatian-wine-cheat-sheet/" },
            { label: "Croatia Unpacked — grapes", url: "https://www.croatiaunpacked.com/grapes" },
        ],
        grapes: croatiaGrapes
    },
    {
        id: "hungary",
        label: "Hungary",
        description: "Hungarian grapes from Tokaj whites to peppery central European reds.",
        intro: "Hungary's local wine identity balances volcanic whites, aromatics, and bright, spicy reds.",
        sources: [
            { label: "Decanter — Hungary's key grape varieties beyond Furmint", url: "https://www.decanter.com/sponsored/beyond-furmint-hungarys-other-key-grape-varieties-456019/" },
            { label: "Hungarian Wines — grape varieties", url: "https://hungarianwines.eu/grapes/" },
            { label: "Kárpát Tales — Hungarian grapes", url: "https://karpattales.dk/hungarian-wine/grapes/" },
        ],
        grapes: hungaryGrapes
    },
    {
        id: "ukraine",
        label: "Ukraine",
        description: "Ukrainian local and regionally bred grapes from the Black Sea coast.",
        intro: "Ukraine's modern wine revival features revived local grapes and distinctive Black Sea varieties.",
        sources: [
            { label: "Decanter — Ukraine's varieties", url: "https://www.decanter.com/sponsored/ukraines-varieties-an-overview-of-the-key-local-and-international-grapes-planted-532456/" },
            { label: "WSET — Ukrainian wine: past, present and future", url: "https://www.wsetglobal.com/knowledge-centre/blog/2026/ukrainian-wine-past-present-and-future" },
            { label: "The Buyer — Odesa Black", url: "https://www.the-buyer.net/insight/how-ukraine-has-tamed-wild-horse-odesa-black-to-make-quality-wines" },
            { label: "Beykush — Telti-Kuruk", url: "https://beykush.com/en/telti-kuruk-autochthonous-grape/" },
        ],
        grapes: ukraineGrapes
    },
    {
        id: "germany",
        label: "Germany",
        description: "German classics including reds and whites beyond just Riesling.",
        intro: "Germany's vineyards cover fragrant whites, savory soil-driven styles, and elegant cool-climate reds.",
        sources: [
            { label: "Deutsches Weininstitut / Wines of Germany — grape varieties", url: "https://www.winesofgermany.com/our-wine/grape-varieties" },
            { label: "Wines of Germany UK — German grape varieties", url: "https://winesofgermany.co.uk/german-grape-varieties/" },
            { label: "Flatiron Wines — Germany beyond Riesling", url: "https://flatiron-wines.com/blogs/the-latest/germany-beyond-riesling-a-guide-to-germany-s-other-grape-varieties" },
        ],
        grapes: germanyGrapes
    },
    {
        id: "poland",
        label: "Poland",
        description: "Poland's cool-climate mix of red and white varieties used by local wineries.",
        intro: "Polish wine leans on cold-hardy varieties that can still deliver vivid fruit and freshness.",
        sources: [
            { label: "IntechOpen — The Trends and Prospects of Winemaking in Poland", url: "https://www.intechopen.com/chapters/52103" },
            { label: "Wikipedia — Polish wine", url: "https://en.wikipedia.org/wiki/Polish_wine" },
            { label: "Grape Collective — Wine in Poland", url: "https://grapecollective.com/articles/wine-in-poland" },
            { label: "Jancis Robinson — Beyond vinifera", url: "https://www.jancisrobinson.com/articles/beyond-vinifera" },
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
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
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

function updateProgress() {
    const totalQuestions = shuffledGrapes.length;
    const answeredQuestions = questionsAsked;
    const remainingQuestions = Math.max(0, totalQuestions - answeredQuestions);
    const progressPercentage = totalQuestions === 0
        ? 0
        : Math.round((answeredQuestions / totalQuestions) * 100);
    const progressMessage = `Progress: ${answeredQuestions}/${totalQuestions} answered • ${remainingQuestions} left`;

    if (progressText.textContent !== progressMessage) {
        progressText.textContent = progressMessage;
    }
    progressFill.style.width = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', String(progressPercentage));
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
    updateProgress();
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
    updateProgress();
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
