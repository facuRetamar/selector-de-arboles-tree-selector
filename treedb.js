const arboles = [
    {
        nombre: "limonero",
        tamaño: "pequeño",
        tipo: "frutal",
        clima: "tropical",
        descripcion: "Citrus × limon, el limonero, es un pequeño árbol frutal perenne. Su fruto es el limón,​ una fruta comestible de sabor ácido y extremadamente fragante que se usa principalmente en la alimentación. La mayoría de las variedades producen frutos durante todo el año. La madera de limonero se utiliza en ebanistería."
    },
    {
        nombre: "nispero",
        tamaño: "grande",
        tipo: "frutal",
        clima: "calido",
        descripcion: "El níspero es un árbol alto que puede alcanzar los 10 metros con facilidad. Sus hojas grandes, largas y onduladas salen desde ramas que nacen desde muy abajo y forman una copa redondeada. Se trata de un árbol de hoja perenne con flores agrupadas en panículas que llegan en otoño e invierno (de octubre a febrero) pero los frutos no maduran hasta el mes de abril, por norma general."
    },
    {
        nombre: "peral",
        tamaño: "grande",
        tipo: "frutal",
        clima: "frio",
        descripcion: "El peral es un árbol con un promedio de vida de 65 años aunque existen muchas especies que han llegado hasta los 400 años de vida. Es un árbol que puede llegar a medir 20 metros y sus hojas verde brillante pueden llegar a tener una longitud de 10 cm de largo."
    },
    {
        nombre: "almendro",
        tamaño: "grande",
        tipo: "frutal",
        clima: "calido",
        descripcion: "El almendro es un árbol caducifolio de la familia de las rosáceas que puede alcanzar hasta 10 metros de altura. Su tronco es liso y verdoso en su etapa joven pero pasa a ser agrietado y grisáceo en su etapa adulta. Florece entre los meses de enero a abril y da su fruto entre los meses de agosto a octubre."
    },
    {
        nombre: "albaricoquero ",
        tamaño: "pequeño",
        tipo: "frutal",
        clima: "templado",
        descripcion: "A pesar de ser un árbol frutal que necesita horas de frío para desarrollarse, resulta esencial que no se vea afectado por heladas tardías de invierno o las últimas heladas de la primavera. Es más típico de climas cálidos y soleados y el mejor terreno para su plantación y desarrollo es un suelo alcalino profundo con un buen drenaje"
    },
    {
        nombre: "castaño",
        tamaño: "grande",
        tipo: "frutal",
        clima: "templados ",
        descripcion: "El castaño es un árbol muy alto que puede llegar a alcanzar los 25 metros de altura. Posee una copa amplia y redondeada con multitud de ramas y su tronco es grueso cuando se trata de castaños cultivados. En el caso de los castaños silvestres, encontramos menos ramas y un tronco más ligero que el del castaño cultivado. En este punto radica su principal diferencia estética. El tronco es hueco en la vejez, puede pasar de los 2 metros de diámetro. La corteza es lisa y de un marrón claro hasta los 15-20 años, luego se oscurece y agrieta longitudinalmente."
    },
    {
        nombre: "nogal",
        tamaño: "grande",
        tipo: "frutal",
        clima: "frio",
        descripcion: "El nogal es un árbol caducifolio muy alto que puede llegar a los 27 metros de altura y dispone de un tronco con, nada más y nada menos que, 2 metros de diámetro, aunque se han encontrado algunos ejemplares de 5 metros de diámetro. Se trata de un tronco resistente de un color que se torna grisáceo y a partir del cual crecen las abundantes y vigorosas ramas que formarán una copa redondeada enorme y que tienen un color rojizo cuando todavía son jóvenes, para después pasar a convertirse en un color pardo."
    },
    {
        nombre: "higuera",
        tamaño: "mediano",
        tipo: "frutal",
        clima: "calido",
        descripcion: "La higuera es un árbol frutal más o menos mediano que no suele superar la altura de los 10 metros pero que posee una copa muy ancha y muy útil para dar sombra. Existen tres variedades de higueras cultivadas bastante diferentes:"
    },
    {
        nombre: "platanero",
        tamaño: "grande",
        tipo: "frutal",
        clima: "tropical",
        descripcion: "El plátano es un árbol caducifolio cuyo tronco puede llegar a sobrepasar los 40 metros de altura. Dicho tronco suele tener diferentes tonalidades verdes y amarillentas y la corteza se rompe en placas. La copa del árbol es redondeada y las ramas no son especialmente erectas sino más bien se van retorciendo. Las hojas son palmeadas y caedizas"
    },
    {
        nombre: "mango",
        tamaño: "grande",
        tipo: "frutal",
        clima: "tropical",
        descripcion: "El árbol del mango es alto y puede llegar a superar los 30 metros de altura en su hábitat natural pero no suele ser así en climas templados. De hecho, suelen podarse los árboles de mango cuando se trata de cultivar fruta para agilizar el proceso de cosecha y recolecta. El mango se comporta de forma agresiva cuando se trata de luchar por alcanzar la claridad del sol y es capaz de cubrir a otros árboles de su misma altura para alcanzar la radiación solar."
    },
    {
        nombre: "pomelo",
        tamaño: "mediano",
        tipo: "frutal",
        clima: "tropical",
        descripcion: "El pomelo (Citrus x paradisi) es un árbol subtropical que no tolera el frío y mucho menos las heladas. Además, es un árbol sensible al viento y requiere suelos arenosos y profundos para desarrollarse adecuadamente. Se recomiendan suelos sin caliza y sin alta salinidad. Respecto a su apariencia, el pomelero es el árbol más vigoroso de todas las especies de cítricos. Es perennifolio, mide de cinco a seis metros de altura. Tiene un tronco corto y no de excesivas dimensiones pero su copa es bien compacta."
    },
    {
        nombre: "naranjo",
        tamaño: "pequeño",
        tipo: "frutal",
        clima: "tropical",
        descripcion: "Se trata de un árbol de altura media que no suele superar los 5 metros, aunque en óptimas condiciones de cultivo llega hasta los 13 metros de altura. Tiene una copa con forma cónica bastante grande y densa. A esta copa se le suele dar forma esférica o piramidal, sobre todo cuando el naranjo es utilizado como árbol frutal ornamental. Necesita una sombra densa y que dure medio día. Se trata de un árbol sensible al frío. Requiere suelos de mediana capacidad, frescas, sin importar su naturaleza."
    },
    {
        nombre: "mmelocotonero",
        tamaño: "grande",
        tipo: "frutal",
        clima: "templado",
        descripcion: "El melocotonero es un árbol pequeño de hoja caduca que puede llegar a medir 6-8 metros de altura. En algunos lugares de Sudamérica se denomina a este árbol “duraznero” y su fruto es el “durazno”. Se recomienda su plantación a inicios del invierno."
    },
    {
        nombre: "avellano",
        tamaño: "pequeño",
        tipo: "frutal",
        clima: "templado",
        descripcion: "El avellano es un árbol que suele alcanzar alturas entre 3 y 10 metros pero si es cierto que muchos han llegado hasta los 15 metros de altura. Por norma general, ramifica desde la base y posee un tronco marrón o grisáceo de madera dura y resistente. Tiene hojas redondeadas simples y aserradas y de tacto áspero."
    },
    {
        nombre: "cerezo",
        tamaño: "grande",
        tipo: "frutal",
        clima: "frio",
        descripcion: "El cerezo es un árbol de hoja caduca que puede llegar a alcanzar los 25 metros de altura y 0,60 metros de diámetro. La corteza de su tronco es lisa y de un marrón oscuro con tonos rojizos muy característico. El tronco es derecho y la copa bastante estrecha, sobre todo en medio forestal. Las ramas están agrupadas en coronas anuales. En la juventud, la corteza es de color gris rojizo brillante, lisa con abundantes lenticelas blanquecinas. Más tarde se forman bandas horizontales, y después placas, que se agrietan. No obstante, puede que la corteza se mantenga lisa durante mucho tiempo."
    },
    {
        nombre: "nectarina",
        tamaño: "pequeño",
        tipo: "frutal",
        clima: "templado",
        descripcion: "La nectarina es un árbol que puede llegar a tener unas dimensiones de entre 4 y 6 metros si dejamos libertad al crecimiento. Se termina formando un árbol con forma de globo muy peculiar, un tronco de color grisáceo con tonos rojizos y unas ramas de color rojo oscuro. Las raíces de la nectarina son de color anaranjado y están muy ramificadas. Las hojas son grandes, con una longitud de unos 18 cm y una anchura de unos 4-5 cm."
    },
    {
        nombre: "ciruelo",
        tamaño: "mediano",
        tipo: "frutal",
        clima: "templado",
        descripcion: "El ciruelo es un árbol caducifolio no demasiado alto que puede alcanzar los 10 metros de altura pero normalmente se queda en 5 o 6 metros. Su tronco destaca por poseer una corteza de un color muy característico que podría definirse como verde azulado brillante y puede ser liso o agrietado. Hojas oblongas aserradas, finamente pilosas. Flores blancas y solitarias con muchos estambres y anteras bilobulado. Fruto en drupa de color amarillo, rojo o violáceo y recubierto de una cera blanquecina. La semilla queda dentro del hueso o endocarpio."
    },
    {
        nombre: "manzano",
        tamaño: "mediano",
        tipo: "frutal",
        clima: "frio",
        descripcion: "Se trata de un árbol caducifolio de la familia de las rosáceas que puede llegar a alcanzar los 12 metros de altura pero en cultivo es mucho más bajo, a menudo menos de dos metros para facilitar su cultivo y especialmente la recolección del fruto. En estado natural (sin podar) presenta la copa redondeada o abierta con numerosas ramas casi horizontales. Las hojas son de forma ovada, dentadas en los bordes y de color glauco con el reverso de la hoja pubescente."
    },
    {
        nombre: "arce japones",
        tamaño: "pequeño",
        tipo: "ornamental",
        clima: "frio",
        descripcion: "es un arbusto o árbol pequeño que alcanza alturas de 6-10 m, raramente 16 m; con frecuencia crece como planta accesoria en bosques sombreados. Puede tener múltiples troncos cerca del suelo. En hábito de crecimiento, adopta forma de pirámide (especialmente cuando es joven) o de domo (cuando es más maduro).4​ Sus hojas tienen 4–12 cm de largo y ancho; son palmatilobadas con 5-7-9 lóbulos agudos punteados, de colores purpúreos rojizos, tornándose rojo brillantes en otoño. Es muy decorativo por sus hojas rojo púrpura transparentes en primavera, más tenues en verano, volviéndose rojo violáceas en otoño. Las flores están en pequeñas cimas"
    },
    {
        nombre: "olmo comun",
        tamaño: "grande",
        tipo: "ornamental",
        clima: "templado",
        descripcion: "Es un árbol caducifolio de porte elevado y robusto, que puede alcanzar una altura de hasta 40 m. Su tronco es grueso, algo tortuoso y ahuecado en los ejemplares viejos, sobre todo los sometidos a podas; corteza pardo-grisácea o pardo oscura, muy áspera y resquebrajada. Copa amplia, de follaje denso, redondeada, que proyecta una sombra intensa. Ramillas delgadas, lampiñas, con corteza lisa, de color parduzco, en ocasiones con corcho"
    },
    {
        nombre: "sauce",
        tamaño: "mediano",
        tipo: "ornamental",
        clima: "frio",
        descripcion: "Todos los sauces tienen la corteza acuosa; la madera es dura, flexible y normalmente suave. Poseen esbeltas y fibrosas ramas y a menudo raíces estoloníferas, cuyas características más notables son su dureza, largura y resistencia. También desarrollan fácilmente raíces aéreas. Las hojas son típicamente elongadas, aunque también pueden ser redondas u ovales, con frecuencia de bordes serrados (en forma de sierra). La mayoría de las especies son caducifolias o semiperennes."
    },
    {
        nombre: "jacaranda mimosifolia",
        tamaño: "mediano",
        tipo: "floral",
        clima: "templado",
        descripcion: "La copa del jacarandá no tiene una forma uniforme: algunas veces en forma de una sombrilla, algunas veces de forma piramidal, pero nunca densa. En general, forma una copa ovoide e irregular. La estructura es de ramificación principal extendida. La copa, de forma natural, alcanza un diámetro de 10 a 12 m, proyectando una sombra de mediana intensidad."
    },
    {
        nombre: "palmera",
        tamaño: "mediano",
        tipo: "frutal",
        clima: "tropical",
        descripcion: "Árboles o arbustos con troncos sin ramificar o raramente,4​ ocasionalmente hierbas largamente rizomatosas, o palmeras trepadoras no lianas (p.ej. Calamus). El sexo de la planta es variable. El crecimiento secundario está ausente. Ápice del tallo con un meristema apical grande, las hojas se desarrollan helicoidalmente. Taninos y polifenoles muchas veces presentes. Pelos variados, y plantas a veces espinosas debido a segmentos de hojas modificados, fibras expuestas, raíces puntiagudas, o crecimientos del pecíolo."
    },
    {
        nombre: "delonix regia",
        tamaño: "mediano",
        tipo: "ornamental",
        clima: "templado",
        descripcion: "Framboyán de Madagascar (Delonix regia), es un árbol de la familia de las fabáceas. Es uno de los árboles más coloridos del mundo por sus flores rojas, anaranjadas, y por su follaje verde brillante puede llegar a medir hasta 12 m. En América Tropical se considera como especie exótica ornamental, por lo que tiene una distribución amplia. Su hábitat natural son las selvas secas caducifolias. Su aprovechamiento por el humano es amplio y depende de la cultura del país en el que se encuentre.."
    },
    {
        nombre: "alamo blanco",
        tamaño: "grande",
        tipo: "ornamental",
        clima: "calido",
        descripcion: "Es una especie originaria de Marruecos, habiéndose distribuido a través de la península ibérica por toda Europa central (norte de Alemania y Polonia) hasta Asia central. Crece en lugares húmedos, a menudo junto al agua, en regiones con veranos calurosos e inviernos frescos. Su distribución actual corresponde a los siguientes territorios: -Europa, Asia y el norte de África. -Crece en el centro y sur de Europa, Asia central y norte de África, y en toda la península ibérica.Crece en latitudes templadas de Sudamérica."
    },
    {
        nombre: "tejo negro",
        tamaño: "mediano",
        tipo: "ornamental",
        clima: "frio",
        descripcion: "Es una conífera que puede crecer hasta 10-20 m (excepcionalmente, 28 m). Tiene un tronco marrón grueso que puede llegar a los 4 m de diámetro. Su crecimiento es lento y con una longevidad de hasta 5000 años.2​ Las hojas, lanceoladas, delgadas y de tono verde oscuro, miden 1-4 cm de largo por 2-3 mm de ancho y se agrupan en espiral sobre la rama. Toda la planta es venenosa excepto el arilo que recubre el 'fruto' (al tratarse de una gimnosperma, la planta carece de frutos propiamente dichos). Las raíces pueden estar colonizadas por hongos microscópicos que forman la simbiosis, facilitando la nutrición de la planta, especialmente la captación de fosfato.."
    },
    {
        nombre: "palma fenix",
        tamaño: "mediano",
        tipo: "ornamental",
        clima: "templado",
        descripcion: "Es una palma solitaria, que alcanza un tamaño de 10 a 13 metros de alto y de 50 a 70 cm de diámetro, armadas; tallos gruesos con las vainas de las hojas persistentes; plantas dioicas. Sus hojas pinnadas, son numerosas, de 5 a 7 metros de largo, las superiores erectas y las inferiores péndulas o arqueadas. Las pinnas en número de 150 pares, están arregladas en distintos ángulos, las inferiores modificadas a manera de acantófilos."
    },
    {
        nombre: "acacia mimosa",
        tamaño: "mediano",
        tipo: "floral",
        clima: "templado",
        descripcion: "Se trata de un árbol de entre 10-12 m de altura, perenne, usado en jardinería como ornamental, de crecimiento rápido pero raramente exceden de los 30 años de edad. De corteza grisácea o blanca y lisa, muy ramificado. Ramas angulosas, pubescentes. Hojas bipinnadas de 8-20, cada una de ellas con 25-40 pares de folíolos, con el haz glabro y el envés tomentoso. Inflorescencia en glomérulo globoso con más de 25 flores, muy olorosas. Pedúnculos pubescentes."
    },
    {
        nombre: "alamo negro",
        tamaño: "grande",
        tipo: "ornamental",
        clima: "templado",
        descripcion: "Normalmente, sus troncos alcanzan hasta 1,5 m de diámetro, pero algunos árboles individuales inusuales en Francia han envejecido lo suficiente como para tener troncos mucho más grandes, más de 3 metros DBH. La especie es dioica, las flores masculinas y femeninas están en diferentes plantas, con flores en amentos y la polinización lograda por el viento. El álamo negro crece en áreas bajas de suelo húmedo. Como la mayoría de las otras especies pioneras, el árbol se caracteriza por un rápido crecimiento y es capaz de colonizar rápidamente áreas abiertas."
    },
    {
        nombre: "prunus avium",
        tamaño: "grande",
        tipo: "frutal",
        clima: "templado",
        descripcion: "Es un árbol de gran volumen que puede alcanzar los 30 m de altura. Tiene un fuste recto, con la corteza lisa y anillada, de tonalidad rojiza. La copa es amplia, piramidal, más o menos alargada, formada por ramas divergentes, erecto-patentes, inermes. Es caducifolio; las hojas son simples, aovadas a oblongas, con el margen crenado o aserrado, ligeramente acuminadas, y miden entre 6 y 15 cm de longitud y 3 a 8 cm de ancho. El haz es glabro, y el envés liso o pubescente. Se presentan fasciculadas, al extremo de ramillos cortos; el pecíolo tiene unos 5 cm de longitud, con dos glándulas rojizas en la base del limbo."
    },
    {
        nombre: "sorbus aucuparia",
        tamaño: "mediano",
        tipo: "ornamental",
        clima: "frio",
        descripcion: "Árbol caducifolio tamaño medio, que alcanza los 15 m, e incluso los 20 m, aunque raramente. Posee una amplia copa de forma trasovada u ovoidea. Las hojas se disponen en forma alterna a lo largo de los tallos, compuestas e imparipinnadas, oblongas y de bordes aserrados. Presenta de 9 a 15 folíolos, con unas dimensiones de 2.5 a 6 cm, hasta 9 cm. Las inflorescencias se producen en grandes corimbos terminales de 8 a 15 cm de diámetro con más de 250 flores."
    },
    {
        nombre: "Juniperus thurifera",
        tamaño: "mediano",
        tipo: "ornamental",
        clima: "calido",
        descripcion: "Árbol siempreverde, aromático. De tamaño mediano, no sobrepasa los 25 m de altura y a menudo su porte es más bajo y arbustivo. Las hojas son escuamiformes, aplicadas, es decir, adheridas al tallo al que recubren totalmente, de forma romboidal con una punta corta divergente. Sus ramillas son ásperas al tacto. La forma de su tronco es muy variable, puede ser cilíndrico y recto en ejemplares bien desarrollados, aunque por regla general es tortuoso, y puede estar ramificado a baja altura o incluso desde el suelo, en cuyo caso los troncos son muy irregulares. La corteza es de color ceniza claro, fibrosa y agrietada longitudinalmente, se desprende en forma de fibras o tiras. La copa es muy densa, de color verde oscuro, de forma tan variable como el tronco: cónica u ovalada en ejemplares jóvenes o bien desarrollados, puede ser asimétrica, irregular, y en ejemplares desmochados aplanada.."
    },
];