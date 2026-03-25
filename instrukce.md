(zadání pro AI agenta k tvorbě webu)

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití. Stránka bude v češtině a dostupná ve třech dalších jazykových mutacích (angličtina, němčina a polština /en/ de/ pl/). Web musí vyvolat pocit stability, tradice, kvality, technické preciznosti, evropský export a důvěra. Nesmí působit jako hobby farma, e-shop, regionální firma či low-cost komodita. Má působit jako „Evropský producent kvalitní zemědělské suroviny.“

**Úkol**
Vytvoř funkční web, který bude obsahovat:
•	Strukturovaný komentovaný HTML5 kód s validní sémantikou
•	Responzivní design (mobile-first přístup)
•	CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
•	Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
•	CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
•	Základní JavaScript pro interaktivitu (na jemné oživení stránek)
•	Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
•	Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
•	Zajisti rychlé načítání a optimalizovaný výkon
•	Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
•	Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
•	Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
•	Strukturuj nadpisy H1-H6
•	Přidej meta title a description na každé stránce
•	Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
•	Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
•	Urči kanonickou url
•	Obrázkům dej alt popisky
•	Propoj stránky vnitřními odkazy
•	Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
•	Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
•	Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
•	Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
•	Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
•	Čitelné fonty s českou diakritikou, minimální velikost 16px
•	Správné řádkování (line-height 1.5-1.8 pro odstavce)
•	Nikdy nezarovnávej text do bloku
•	Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
•	Šířku celého webu dej na 85% obrazovky
•	Jasné oddělení sekcí a obsahových celků
•	Pokud mám v sekci 4 karty/boxy – nedávej je 3+1, ale dej je po dvou na řádek
•	Vyvážené použití bílého prostoru (white space)
•	Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
•	Dej si záležet na patičce webu
•	U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
•	Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
•	Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
•	Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
•	Stručné a srozumitelné texty
•	Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
•	Vizuální prvky podporující obsah (ikony, obrázky, grafika)
•	Logické uspořádání informací (nejdůležitější nahoře)
•	Chybová stránka (místo „404“ dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
•	Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

 
**Konzistence**
•	Jednotný styl tlačítek, karet a komponent
•	Stejný padding/margin napříč podobnými elementy
•	Stejné zaoblení prvků
•	Konzistentní ikonografie (používej font awesome, ne emotikony)
•	Stíny karet pouze velmi jemné
•	Jednotný projev značky (brand voice)
•	Konzistentní použití barev napříč celým webem
•	Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
níže je barevná paleta:
--color-bg: #fefae0;
    --color-primary: #1a2310;
    --color-secondary: #bc6c25;
    --color-text: #333333;




**Fonty**
Serif font pro nadpisy: Playfair Display
pro texty. Lora.

**Struktura**
vícestránkový web
Položky menu:
•	Domů
•	Český modrý mák
•	Kvalita & technologie
•	Rodinná tradice
•	Pro zpracovatele
•	Export
•	Kontakt

**Další prvky na webu**
•	Vytvoř kontaktní formulář včetně antispamu (honeypot), doporuč mi službu https://formspree.io/ 

**Design**
Design  (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu png 
Použít můžeš trendy jako souměrný bento grid layout se zaoblenými rohy, micro-animace na hover a scroll efekty.
**Moderní design**
•	Layout: používej souměrný Bento grid 
•	Prvky: Zaoblené rohy (border-radius 24-32px)
•	Animace: Mikro interakce na hover, jemné scroll animace 
baloon bubliny co se vznášejí
**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce 
Obrazky
Obrazky/Ikony – vlastní ikony pro web
Prilohy/Menu – polední menu v pdf

**texty**
Na webu použij tyto texty pro jednotlivé sekce / stránky. Drž se jich doslova a nic neměň ani nepřidávej. 
**Texty na Hlavní stranu**
H1:
Rodinný producent českého modrého máku
Subheadline:
Dodáváme vyčištěný potravinářský mák pro pekárny a zpracovatele v celé Evropě.
Trust body:
Tradice zemědělství od roku 1904
Moderní technologie čištění
Garance českého původu
CTA tlačítka:
Poptat dodávku
Objednat vzorek
SEKCE 2 — PROČ SPOLUPRACOVAT S NÁMI

Texty:
Český původ máku
Dodáváme mák s garantovaným původem v České republice a splňující potravinářské normy.
Moderní technologie čištění
Vlastní třídicí a čisticí linka zajišťuje vysokou čistotu a stabilní kvalitu.
Velké dodavatelské kapacity
Roční produkce až 2000 tun umožňuje spolehlivé dodávky i pro průmyslové odběratele.
Flexibilní přístup
Rychlá komunikace, individuální řešení a dlouhodobé obchodní partnerství.
________________________________________
SEKCE 3 — NÁŠ PRODUKT

Text:
Nadpis:
Český modrý mák pro potravinářské zpracování
Dodáváme kvalitní vyčištěný modrý mák určený pro pekárny, cukrárny a výrobce potravin.
•	vysoká čistota a stabilní parametry
•	testování v akreditovaných laboratořích
•	balení v big-bag 500–1200 kg
•	logistika kamionových dodávek
CTA:Zobrazit technické informace
________________________________________
SEKCE 4 — RODINNÁ TRADICE

historická fotka
Text:
Více než stoletá zemědělská tradice
Naše rodina se věnuje zemědělství po několik generací. Dochované kroniky sahají až do roku 1651.
Na pěstování a zpracování máku se specializujeme od roku 2004.
Spojujeme zkušenosti předků s moderní technologií a orientací na potřeby dnešních zpracovatelů potravin.
Více o historii rodiny
________________________________________
SEKCE 5 — PRO KOHO DODÁVÁME
Pekárny
Stabilní dodávky kvalitního máku pro průmyslovou i řemeslnou výrobu.
Výrobci potravin
Surovina s garantovanými parametry pro další zpracování.
Distributoři
Možnost dlouhodobé spolupráce a exportních dodávek.
________________________________________
SEKCE 6 — EXPORT

Dodáváme do celé Evropy
Máme zkušenosti s exportem do Polska a Rakouska a jsme připraveni rozšiřovat dodávky i na další evropské trhy.
Zajišťujeme logistiku prostřednictvím spedičních partnerů a nabízíme flexibilní obchodní podmínky.
Kontaktovat exportní oddělení
________________________________________
SEKCE 7 — SILNÉ CTA (konverzní blok)
Hledáte spolehlivého dodavatele maku?
Kontaktujte nás pro cenovou nabídku nebo objednávku vzorku.
👉 Poptávkový formulář
👉 Telefon

**Texty na stranu Český modrý mák**
Text:
H1:
Český modrý mák pro potravinářské zpracování
Lead:
Dodáváme vyčištěný modrý mák s garantovaným původem v České republice.
Určeno pro pekárny, cukrárny a průmyslové výrobce potravin.
Mini USP:
•	vysoká čistota
•	stabilní kvalita
•	velké dodavatelské objemy
CTA:
👉 Poptat dodávku
👉 Objednat vzorek
________________________________________
SEKCE 2 — HLAVNÍ VÝHODY
Garantovaný český původ
Mák splňuje požadavky potravinářské normy a je dodáván s důrazem na dohledatelnost původu.
Moderní technologie čištění
Vlastní čisticí a třídicí linka zajišťuje stabilní parametry a vysokou kvalitu.
Laboratorní testování
Kontrola kvality probíhá v akreditovaných laboratořích.
Spolehlivé dodávky
Roční kapacita až 2000 tun umožňuje dlouhodobou spolupráci.
________________________________________
SEKCE 3 — TECHNICKÉ PARAMETRY
Layout:
tabulka (velmi důležité pro B2B)
Technické specifikace:
•	Druh: modrý mák
•	Původ: Česká republika
•	Určení: potravinářské zpracování
•	Čistota: dle potravinářské normy
•	Kontrola kvality: akreditované laboratoře
•	Traceability: ano
👉 Možnost doplnit přesné hodnoty později.
________________________________________
SEKCE 4 — BALENÍ A LOGISTIKA
Balení:
•	Big-bag 500 kg
•	Big-bag 600 kg
•	Big-bag 1000 kg
•	Big-bag 1100 kg
•	Big-bag 1200 kg
Dodávky:
•	kamionové zásilky cca 24 t
•	logistika zajištěna přes spediční partnery
•	dodávky po celé Evropě
________________________________________
SEKCE 5 — PRO KOHO JE PRODUKT URČEN
Pekárny
Stabilní surovina pro průmyslové i řemeslné pečení.
Výrobci potravin
Standardizované parametry pro další zpracování.
Distributoři komodit
Možnost dlouhodobé spolupráce a exportních kontraktů.
________________________________________
SEKCE 6 — EXPORTNÍ SPOLUPRÁCE
Dodáváme modrý mák odběratelům v České republice i zahraničí.
Máme zkušenosti s exportem do Polska a Rakouska a jsme připraveni rozšiřovat obchodní spolupráci v celé Evropě.
________________________________________
SEKCE 7 — KONVERZNÍ BLOK
Máte zájem o cenovou nabídku nebo vzorek?
Kontaktujte nás.
Rádi připravíme individuální nabídku podle požadovaného objemu a termínu dodání.
👉 Odeslat poptávku
👉 Zavolat obchodnímu oddělení

**Texty na stranu Kvalita & technologie **
Text:
H1:
Kontrolovaná kvalita českého modrého máku
Lead:
Kvalita suroviny je pro potravinářské zpracování zásadní.
Proto využíváme moderní technologie čištění a laboratorní kontrolu každé dodávky.
________________________________________
SEKCE 2 — MODERNÍ TECHNOLOGIE ZPRACOVÁNÍ

Nadpis:
Vlastní čisticí a třídicí linka
Používáme moderní technologii pro čištění a třídění máku, která umožňuje dosahovat stabilních parametrů kvality a vysoké čistoty.
Díky technologickému zpracování jsme schopni zajistit dodávky vhodné pro průmyslové zpracovatele potravin.
________________________________________
SEKCE 3 — LABORATORNÍ TESTOVÁNÍ
Nadpis:
Kontrola v akreditovaných laboratořích
Kvalita máku je pravidelně ověřována v nezávislých akreditovaných laboratořích.
Testování zahrnuje:
•	potravinářské parametry
•	obsah nežádoucích látek
•	kontrolu vhodnosti pro další zpracování
Cílem je zajistit bezpečnou a stabilní surovinu pro naše obchodní partnery.
________________________________________
SEKCE 4 — GARANCE PŮVODU
Nadpis:
Český původ a dohledatelnost
Dodáváme mák s garantovaným původem v České republice.
Každá dodávka je dohledatelná a splňuje požadavky potravinářských standardů.
Zaměřujeme se na dlouhodobou kvalitu a transparentnost dodavatelského řetězce.
________________________________________
SEKCE 5 — KAPACITA A STABILITA DODÁVEK
Roční kapacita produkce až 2000 tun umožňuje zajištění stabilních dodávek pro průmyslové odběratele.
Jsme připraveni budovat dlouhodobá obchodní partnerství založená na spolehlivosti a flexibilním přístupu.
________________________________________
SEKCE 6 — KONVERZNÍ BLOK
Potřebujete technické informace nebo cenovou nabídku?
Kontaktujte nás.
Rádi Vám poskytneme detailní specifikace a připravíme nabídku podle Vašich požadavků.
👉 Odeslat poptávku
👉 Kontakt na obchodní oddělení


**Texty na stranu Rodinná tradice **
H1
Zemědělská tradice rodu Černých
Lead
Kořeny našeho hospodaření sahají hluboko do historie českého venkova.
Dochované kroniky dokládají působení našich předků v zemědělství již v roce 1651. 
Po staletí se generace naší rodiny věnovaly práci na půdě, rozvoji hospodářství a budování zemědělských usedlostí.
________________________________________
Historie a vývoj
Rod Černých procházel obdobím válek, hospodářských krizí i zásadních společenských změn. Přesto si dokázal uchovat vztah k půdě, pracovitost a schopnost přizpůsobit se nové době.
Postupně se hospodaření rozvíjelo od menších gruntů až po rozsáhlejší zemědělské podniky a obchodní aktivity.
________________________________________
Tradice inovací
Naši předkové patřili mezi hospodáře, kteří se nebáli zavádět nové technologie a moderní postupy v zemědělství. Mechanizace práce, zlepšování půdy a rozšiřování produkce byly přirozenou součástí vývoje rodinného hospodářství.
Na tuto tradici dnes navazujeme moderním zpracováním a důrazem na kvalitu surovin.
________________________________________
Specializace na mák
Na produkci modrého máku se naše rodina systematicky zaměřuje od roku 2004.
Spojujeme dlouhodobé zkušenosti s moderní technologií čištění a kontrolou kvality.
________________________________________
Současnost
Dnes působíme jako stabilní dodavatel pro potravinářské zpracovatele v České republice i zahraničí.
Naším cílem je rozvíjet rodinnou tradici a budovat dlouhodobá obchodní partnerství.

**Texty na stranu Pro zpracovatele**
H1:
Spolehlivý dodavatel modrého máku pro potravinářský průmysl
Lead:
Dodáváme vyčištěný modrý mák pro pekárny, výrobce potravin a distributory.
Zajišťujeme stabilní kvalitu, velké objemy a flexibilní logistiku.
CTA:
👉 Poptat cenovou nabídku
👉 Objednat vzorek
________________________________________
SEKCE 2 — PROČ NAKUPOVAT OD NÁS
4 silné argumenty
Stabilní kvalita suroviny
Moderní technologie čištění a laboratorní kontrola zajišťují konstantní parametry dodávek.
Velké dodavatelské objemy
Roční produkce až 2000 tun umožňuje dlouhodobou spolupráci i pro průmyslové zpracovatele.
Garantovaný český původ
Dodáváme mák splňující potravinářské normy s důrazem na dohledatelnost původu.
Flexibilní obchodní podmínky
Individuální přístup k požadovanému množství, balení i termínům dodání.
________________________________________
SEKCE 3 — LOGISTIKA A DODÁVKY
Dodávky po celé Evropě
•	kamionové dodávky cca 24 tun
•	balení v big-bag 500–1200 kg
•	spolupráce se spedičními partnery
•	exportní zkušenosti
Jsme připraveni zajišťovat pravidelné dodávky podle výrobních potřeb odběratele.
________________________________________
SEKCE 4 — PRO KOHO JE SPOLUPRÁCE VHODNÁ
Layout: karty
Průmyslové pekárny
Dodávky stabilní suroviny pro velkoobjemovou výrobu.
Výrobci potravin
Kvalitní modrý mák pro další zpracování.
Distributoři a obchodníci
Možnost dlouhodobých kontraktů a exportní spolupráce.
________________________________________
SEKCE 5 — DLOUHODOBÉ PARTNERSTVÍ
Naším cílem není jednorázový obchod, ale dlouhodobá spolupráce založená na důvěře, kvalitě a stabilitě dodávek.
Rodinná tradice hospodaření a moderní technologické zázemí nám umožňují být spolehlivým partnerem pro zpracovatele v celé Evropě.
________________________________________
SEKCE 6 — KONVERZNÍ BLOK
Máte zájem o cenovou nabídku nebo technické informace?
Kontaktujte nás.
Rádi připravíme nabídku podle požadovaného objemu a termínu dodání.
👉 Odeslat poptávku
👉 Kontakt na obchodní oddělení

**Texty na stranu Export **
H1:
Dodávky českého modrého máku pro evropské trhy
Lead:
Zajišťujeme export vyčištěného modrého máku pro pekárny, výrobce potravin a distributory v Evropě.
Máme zkušenosti s dodávkami do zahraničí a jsme připraveni budovat dlouhodobou obchodní spolupráci.
CTA:
👉 Kontaktovat exportní oddělení
👉 Poptat dodávku
________________________________________
SEKCE 2 — ZKUŠENOSTI S EXPORTEM
Dodáváme modrý mák odběratelům v České republice i zahraničí.
Máme zkušenosti s exportem zejména do:
•	Polska
•	Rakouska
Jsme připraveni rozšiřovat dodávky na další evropské trhy podle potřeb obchodních partnerů.
________________________________________
SEKCE 3 — LOGISTICKÉ ŘEŠENÍ
Kompletní logistika dodávek
•	kamionové zásilky cca 24 tun
•	balení v big-bag 500–1200 kg
•	spolupráce se spedičními partnery
•	flexibilní termíny dodání
Dodávky přizpůsobujeme výrobním plánům zákazníka.
________________________________________
SEKCE 4 — OBCHODNÍ SPOLUPRÁCE
Nabízíme:
•	pravidelné kontraktní dodávky
•	individuální cenové nabídky
•	dlouhodobou spolupráci
•	technické informace o produktu
Naším cílem je být stabilním dodavatelem pro potravinářské zpracovatele.
________________________________________
SEKCE 5 — PROČ ČESKÝ MÁK
Český modrý mák je dlouhodobě považován za kvalitní surovinu pro potravinářské využití.
Důraz klademe na:
•	dohledatelnost původu
•	stabilní parametry
•	kontrolu kvality
•	spolehlivost dodávek
________________________________________
SEKCE 6 — KONTAKT PRO EXPORT
Máte zájem o spolupráci?
Kontaktujte naše exportní oddělení.
👉 Poptávkový formulář
👉 Přímý kontakt

**Texty na stranu Kontakt **
SEKCE 1 — HERO
H1:
Poptávka dodávek modrého máku
Lead:
Máte zájem o cenovou nabídku, technické informace nebo objednávku vzorku?
Kontaktujte nás prostřednictvím formuláře nebo přímo obchodní oddělení.
👉 Odeslat poptávku
________________________________________
SEKCE 2 — POPTÁVKOVÝ FORMULÁŘ (hlavní prvek stránky)
Pole formuláře (doporučení):
•	Název firmy
•	Jméno a příjmení
•	Email
•	Telefon
•	Země
•	Požadovaný objem
•	Typ balení (dropdown)
•	Termín dodání
•	Zpráva
👉 Checkbox: Souhlas se zpracováním osobních údajů
👉 CTA tlačítko: Odeslat poptávku
📌 UX tip:
Formulář rozdělit na 2 sloupce → rychlejší vyplnění.
________________________________________
SEKCE 3 — OBJEDNÁVKA VZORKU
Chcete otestovat kvalitu našeho máku?
Rádi Vám zašleme vzorek pro technologické testování.
👉 Zaškrtnutí ve formuláři: „Mám zájem o vzorek“
________________________________________
SEKCE 4 — OBCHODNÍ KONTAKT
Obchodní oddělení
Ing. Miluše Černá
📞 Telefon
📧 Email
👉 přímé CTA: Zavolat / Napsat email
________________________________________
SEKCE 5 — SÍDLO FIRMY
•	adresa
•	mapa (Google Maps embed)
•	možnost navigace
________________________________________
SEKCE 6 — DŮVĚRYHODNOSTNÍ BLOK
Rodinná tradice hospodaření od roku 1651
Spolehlivý partner pro dodávky modrého máku v České republice i Evropě.

HOMEPAGE – ENGLISH VERSION (SEO LOCALIZED)
HERO
H1:
Czech Blue Poppy Seeds Supplier
Subheadline:
Reliable deliveries of cleaned blue poppy seeds for bakeries and food manufacturers across Europe.
Trust points:
•	Farming tradition since 1651
•	Modern cleaning technology
•	Guaranteed Czech origin
CTA:
Request a quote
Order a sample
________________________________________
WHY WORK WITH US
Guaranteed Czech Origin
We supply poppy seeds with verified origin in the Czech Republic and in compliance with food industry standards.
Modern Processing Technology
Our own cleaning and sorting line ensures high purity and consistent quality.
Large Supply Capacity
Annual production up to 2,000 tonnes enables reliable deliveries for industrial processors.
Flexible Partnership Approach
Fast communication, individual solutions and long-term cooperation.
________________________________________
OUR PRODUCT
Czech Blue Poppy Seeds for Food Processing
We supply high-quality cleaned blue poppy seeds for bakeries, confectionery producers and food manufacturers.
•	high purity level
•	laboratory testing
•	big-bag packaging
•	truck deliveries across Europe
View product details
________________________________________
FAMILY HERITAGE
Centuries of Farming Tradition
Our family has been engaged in agriculture for generations. Historical records trace our farming roots back to 1651.
Since 2004 we have specialised in blue poppy seed production and processing.
Learn more about our history
________________________________________
WHO WE SUPPLY
Industrial bakeries
Food manufacturers
Commodity distributors
________________________________________
EXPORT
We deliver to customers in the Czech Republic and abroad, with experience in Poland and Austria.
We are ready to expand partnerships across European markets.
Contact export department
________________________________________
FINAL CTA
Looking for a reliable poppy seed supplier?
Request a quotation or order a product sample today.

