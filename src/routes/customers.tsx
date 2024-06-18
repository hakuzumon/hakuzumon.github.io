import {createSignal, For, JSXElement, Show} from "solid-js";

interface FeaturedCustomer {
    name: string;
    logo: JSXElement;
    brief: JSXElement;
    extended: JSXElement;
    platforms: string[];
    techs: string[];
}

const customers: FeaturedCustomer[] = [
    {
        name: "Varo",
        logo: <a href="http://tukes.fi" target="_blank"><img width="112" height="40" src="img/logo_tukes.png"/></a>,
        brief: <p>Tukesin VARO-rekisteriin kerätään tietoa vaarallisiin kemikaaleihin, painelaitteisiin, kaivoksiin, sähkölaitteistoihin ja -laitteisiin sekä hisseihin liittyvistä onnettomuuksista ja vaaratilanteista. Tukesin edeltäjä Teknillinen tarkastuskeskus kehitti VARO-rekisterin viranomaiskäyttöön. VAROsta löytyy mm. tietoja kaivosonnettomuuksista vuodesta 1972 lähtien ja kuolemaan johtaneista sähkötapaturmista vuodesta 1980 alkaen.</p>,
        extended: <>
            Saimme projektin aluksi käyttöömme alustavan määrittelyn, johon oli koottu tapauksiin liittyviä tietoja sekä korkealla tasolla hahmoteltuna muutamia näyttöjä. Asiakkaan saatesanat - "älkää nyt ainakaan tällaista siitä tehkö" - mielessämme lähdimme aktiivisesti selvittämään, minkälainen tietomalli VARO-tapausten taustalle kannattaisi rakentaa ja kuinka niiden kirjaamisesta sekä selaamisesta tehtäisiin nopeaa ja käyttäjälle selkeää. Lyhyet sprintit yhdessä säännöllisten määrittelytyöpajojen tuottivat pian käyttöliittymästä minimaalisen, toiminnallisen version. Sen avulla yksityiskohtia, tietosisällön sisällä piileviä oletuksia ja käyttäjien luontaisia työtapoja oli helppo selvittää. Kehittyvän järjestelmän kautta pystyimme myös haastamaan asiakasta sellaisten toimintojen osalta, joihin uskoimme olevan totuttuihin työskentelymalleihin verrattuna tehokkaampia vaihtoehtoja. Loppuvaiheessa viimeiset yksityiskohdat selvitettiin järjestelmätestauksen yhteydessä on site customer -periaatteella. Tämä osoittautui tehokkaaksi tavaksi, jota suosittelemme käytettäväksi toistekin.
            <p>
                Vanhan aineiston muuntaminen uuden tietomallin mukaiseen muotoon oli merkittävä osa työstä. Rekisterin pitkä historia ja lukuisat aiemmin tehdyt muutokset lisäsivät tähän oman mausteensa. Tapauksia yksityiskohtineen oli niin paljon, ettei muunnoksen osittainenkaan tekeminen käsityönä ollut mielekäs vaihtoehto. Siksi loimme erillisen työkalun, joka luki vanhan tietokannan sisällön ja sovittujen sääntöjen mukaisesti kirjoitti sen uuteen kantaan.
            </p>
            <p>
                Projekti sisälsi myös yksinkertaisia perusraportteja tapauksista sekä rajattua tietosisältöä näyttävän julkisen palvelun.
            </p>
        </>,
        platforms: ["Web"],
        techs: ["Asp.NET MVC3", "SQL Server", "Javascript"],
    },
    {
        name: "Innolink",
        logo: <a href="http://innolinkresearch.fi" target="_blank"><img width="180" height="44" src="img/innolink_logo.jpg"/></a>,
        brief: <p>Evident toteutti Innolinkille tuotannon automatisoinnin, jonka tarkoituksena on nopeuttaa
            läpimenoaikoja, vähentää prosessin virhemahdollisuuksia ja alentaa tuotannon kustannuksia. Automatisointi
            sisältää sekä vaativia asiantuntijatyön tukitoimintoja että alihankkijoiden ja myyntikanavien saumatonta
            kytkemistä tuotantoprosessiin.
        </p>,
        extended: <>
            <p>Innolink Research Oy:n kehitysjohtaja Markus Vattulainen:</p>
            <blockquote>Evident luo meille täysin räätälöidyn ratkaisun, joka on edellyttänyt syvällistä perehtymistä
                liiketoimintatavoitteisiimme ja tuotantoprosessiimme yksityiskohtia myöten. Olemme olleet erittäin
                tyytyväisiä Evidentin toimintaan yhteistyön eri vaiheissa: asiakastarpeen määrittelyyn,
                järjestelmäkytkentöjen selvittämiseen, muutostarpeiden huomioimiseen, ratkaisujen ehdottamiseen ja
                ohjelmointityön laatuun. Evident on osallistanut meiltä loppukäyttäjiä mukaan kehitystyöhön parhaan
                lopputuotoksen varmistamiseksi. Voin lämpimästi suositella Evidenttiä pk-yrityksen ohjelmistokumppaniksi
                vaativiinkin toteutuksiin.
            </blockquote>

            <p>Innolink Research Oy on Suomen 3. suurin ja ylivoimaisesti nopeimmin kasvava tutkimusyritys, jonka
                600:sta asiakkaista 40 kuuluu Suomen 100 suurimman yrityksen joukkoon.
            </p>
        </>,
        platforms: ["Web"],
        techs: ["Java", "Seam 3", "JBoss 7", "MySQL"]
    },
    {
        name: "Kansalliskirjasto",
        logo: <a href="http://www.kansalliskirjasto.fi/" target="_blank"><img width="115" height="100" src="img/kansalliskirjastologo_fi.gif"/></a>,
        brief: <p>
            Päivitimme Kansalliskirjaston digitoitujen aineistojen palvelun yhteistyössä Gofore Oy:n kanssa.
            Digitoitujen aineistojen kirjastossa (digi.kansalliskirjasto.fi) on julkisesti saatavilla sanomalehtiä,
            aikakausilehtiä ja pienpainatteita vuosien takaa. Hankkeessa haluttiin parantaa palvelun jo hieman vanhaa
            teknistä alustaa ja luoda mekanismi yksittäisten artikkeleiden merkkaamiseen aineistoon.
        </p>,
        extended: <>
            <p>
                Hankkeen edetessä olemme toetuttaneet artikkeleiden merkkauksen (kirjoitushetkellä vielä
                alpha-testauksessa), linkkaukset yleisimpiin sosiaalisen median palveluihin, päivittäneet järjestelmän
                komponentteja niin, että suorituskyky on merkittävästi parantunut ja lisäksi olemme päässeet eroon
                joistakin hankaliksi osoittautuneista riippuvuuksista. Järjestelmän rankan refaktoroinnin tuloksena
                koodin ylläpidettävyys on parantunut ja uusien ominaisuuksien lisääminen järjestelmään onnistuu nyt
                uusimpia työkaluja ja tekniikoita käyttäen.
            </p>
            <p>
                Evident on hankkeen aikana ollut vastuussa kaikesta kooodaustyöstä, ja Gofore on osallistunut
                käytettävyystutkimuksiin ja projektin hallintaan.
            </p>
        </>,
        platforms: ["Web"],
        techs: ["Java", "Spring", "Hibernate"]
    },
    {
        name: "Virmed",
        logo: <a href="http://www.virmed.fi/" target="_blank"><img style="width: 200px" src="img/virmed.jpg"/></a>,
        brief: <><p>
            Virmed kehittää terveydenhuoltoa varten mm. kuvantamispalveluja. Eräs heidän tuotteensa on
            Medistreamer-työpöytäsovellus. Medistreamerin avulla lääkäri voi ottaa ja tallentaa potilaasta
            lääketieteellisiä kuvia ja videoita sekä lähettää ne Dicom-standardin mukaisesti ulkoiseen järjestelmään.
        </p>
            <span>Virmed Oy:n toimitusjohtaja Ville Wuotila:</span>
            <blockquote>
                Yhteistyö Evidentin kanssa on toiminut paremmin kuin osasimme edes toivoa. Olemme tehneet yhteistyötä
                aiemminkin softatalojen kanssa ja missään ei ole ollut niin nopeita vasteaikoja muutospyynnöille ja
                toisaalta joustavuutta kehityksessä kuin Evidentillä. Olemme siis erittäin tyytyväisiä ja syvä
                aikomuksemme on edelleen lisätä tätä yhteistyötä uusien projektien myötä.
            </blockquote>
        </>,
        extended: <>
            <p>
                Medistreamer oli jo toimiva sovellus ennen mukaantuloamme. Tarkoituksemme oli tehdä useita erityyppisiä
                muutoksia. Ehdotimme, että lisäominaisuuksia ei kannata toteuttaa vanhentuneen teknologian päälle, vaan
                kirjoittaa sovellus kokonaan uudelleen toisella teknologialla (WPF). Päätös uudelleenkirjoituksesta oli
                perusteltu. WPF:n ansiosta sovellus on suoraan käyttökelpoinen Windows 8 -tableteissa sekä näyttää
                tyylikkäältä ilman pitkäkestoista pikselinviilausta. Lisäksi näyttöjen toiminnallisuudet ovat nyt
                toteutettu joustavammin kuin aiemmin. Niinpä muutoksien tekeminen sovellukseen on ollut vaivatonta.
            </p>
            <p>
                Uudelleenkirjoitus vaati huolellista perehtymistä olemassa olevaan koodiin ja tuntemattomien käsitteiden
                analysointia. Toiminnallisuudet täytyi toteuttaa uusilla komponenteilla, vaikka tietosisältö pysyi
                pääosin muuttumattomana. Suuritöisimmät osuudet olivat: Potilastyölistojen haku ja kuvien eteenpäin
                välittäminen Dicom-kirjastolla. ActiveX-pohjaisen valmisvideokuvakomponentin upottaminen sovellukseemme.
                Paikalliseen tiedon säilöminen ja lataaminen XML- ja SQL-pohjaisesti. Eniten opimme kuitenkin
                skaalautuvien näkymien rakentamista: ilahduttavasti WPF tarjoaa ilmaisuvoimaisia rakennuspalikoita,
                joita yhdistämällä saa kasattua näppäriä ja ylläpidettäviä sovelluskohtaisia abstraktioita.
            </p>
        </>,
        platforms: ["Desktop"],
        techs: ["C#", "WPF", "SQLite", "XML"]
    },
    {
        name: "Runteq",
        logo: <a href="http://www.runteq.com" target="_blank"><img style="width: 200px" src="img/runteq_logo.png"/></a>,
        brief: <p>
            Runteq halusi rakentaa palvelun juoksuharrastajien tekniikan kehittämiseksi: Juoksijan kehoon
            kiinnitettävien anturien avulla kerätään
            tarkkaa tietoa juoksusta, jotka välitetään älypuhelimen kautta RunLab-nettipalveluun automaattista
            analysointia varten.
            RunLabissa juoksija ja hänen valmentajansa voivat tarkastella juoksun onnistumista monipuolisesti,
            muunmuassa vammojen
            vähentämiseksi ja juoksun taloudellisuuden parantamiseksi.
        </p>,
        extended: <>
            <p>
                Ryhdyimme kehittämään palvelua yhdessä Runteqin kanssa.
                Idean jalostaminen houkuttelevaksi tuotteeksi vaati monimuotoista yhteistyötä. Kokeilimme mitkä
                komponentit ja alustat soveltuisivat
                juoksuaskelten havainnointiin ja analysointiin; teimme muunmuassa sulautettua koodia anturiin.
                Komponenttien välinen yhteistoiminta,
                etenkin langaton viestintä, oli saatava sujuvaksi. Ohjaamisen ja päätöksenteon lisäksi Runteq osallistui
                osin
                toteutukseen &mdash; erityisesti analyysialgoritmit ovat heidän kädenjälkeään. Yhteistyössämme
                hyödynsimme kummankin yrityksen vahvuuksia
                ja lopputuloksena saimme aikaiseksi toimivan, helppokäyttöisen palvelun.</p>

            <p>Lue lisää tuotteesta: <a href="http://runteq.com/">Runteq.com</a></p>
        </>,
        platforms: ["Web", "Mobile"],
        techs: ["Android", "Java", "Octave", "GWT", "PostgreSQL", "HTML5"]
    },
    {
        name: "Keeploop 3D",
        logo: <a href="http://www.keeploop.com/" target="_blank"><img style="width: 200px" src="img/keeploop.jpg"/></a>,
        brief: <p>Keeploop Oy kehitti tablettiin kiinnitettävän mikroskoopin, jonka avulla kohdetta eri suunnista
            valaisemalla
            pystytään laskemaan kohteen pinnan normaalit ja näiden perusteella arvioimaan pinnan mikrotopografia. Tähän
            maailman ensimmäiseen 3D mikroskooppiin pääsimme kehittämään ohjelmiston. Ohjelmisto kehitettiin Androidin
            versioon 4.0 tablettikäyttöliittymään. Pääsimme suunnittelemaan ja ideoimaan Keeploopin kanssa järjestelmää
            ja
            käyttöliittymää alusta alkaen. Pinnan normaalien laskenta-algortimin toteutuksen toimitti meille Keeploop,
            jonka
            päälle toteutimme äänipohjaisen mikroskooppilaitteiston ohjauksen, kuvien ottamisen, topografiakuvien
            kuvienkäsittelyn ja visualisoinnin sekä perustoiminnallisuuden kuvien tallentamiseen ja selaamiseen.
        </p>,
        extended: <>
            <p>Yksi ikimuistoisia insinööriuran hetkiä oli, kun ohjelmiston ollessa jo loppuvaiheessa ensimmäiset
                mikroskooppilaitteiston prototyypit saapuivat. Se toimii! 3D visualisointi 10 sentin kolikosta piirtyi
                ruudulle
                ja pienetkin mikroskooppiset piirteet kolikon leijonasta olivat näkyvillä. Mielenkiintoiset projektit
                -listalla
                tämä on todella korkealla.
            </p>
        </>,
        platforms: ["Mobile"],
        techs: ["Android 4", "OpenCV"]
    },
];

interface DetailsProps {
    markup: JSXElement;
}

interface TechsProps {
    platforms: string[];
    techs: string[];
}

function TechsPanel(props: TechsProps) {
    return (
        <div class="text-sm">
            <div class="space-x-2 text-end">
                
                <For each={props.platforms}>{tech =>
                    <span class="text-sm rounded-2xl bg-red-700 px-2 py-1 text-white">{tech}</span>
                }</For></div>

            <div class="space-x-2 mt-3 text-end">
                
                <For each={props.techs}>{tech =>
                    <span class="text-sm rounded-2xl bg-lime-200 px-2 py-1 text-black">{tech}</span>
                }</For></div>
        </div>
    )
}

function DetailsPanel(props: DetailsProps) {
    const [show, setShow] = createSignal(false);

    return (
        <div>
            <Show when={show()}>
                <p class="mt-2">{props.markup}</p>
                <button class="underline pt-2" onClick={() => setShow(false)}>Näytä vähemmän</button>
            </Show>
            <Show when={!show()}>
                <button class="underline pt-1" onClick={() => setShow(true)}>Näytä lisää</button>
            </Show>
        </div>
    )
}

export default function Customers() {
    return (
        <div>
            <div class="space-y-16 m-16 font-light max-w-screen-md mx-auto">
                <For each={customers}>{(customer) =>
                    <div class="m-4 flex gap-8">
                        <div class="shrink-0 w-[200px] flex justify-center">
                            {customer.logo}
                        </div>
                        <div class="flex flex-col gap-4">
                            <div class="text-lg">{customer.name}</div>
                            <div>
                                <div>{customer.brief}</div>
                                <DetailsPanel markup={customer.extended}></DetailsPanel>
                            </div>
                            <TechsPanel platforms={customer.platforms} techs={customer.techs}></TechsPanel>
                        </div>
                    </div>
                }</For>
            </div>
            
            <OtherCustomers></OtherCustomers>
        </div>
    )
}

interface OtherCustomer {
    name: string;
    url: string;
}

const otherCustomers = [
    {name: "Emtele", url: "https://www.emtele.com/"},
    {name: "Oikeusministeriö", url: "https://oikeusministerio.fi/fi/"},
    {name: "Solutive Oy", url: "https://www.solutive.fi"},
    {name: "Atostek", url: "https://www.atostek.fi"},
    {name: "Citrus", url: "https://www.citrus.fi"},
    {name: "Mattersoft", url: "http://www.mattersoft.fi"},
    {name: "Finitec", url: "http://www.finitec.fi"},
    {name: "Gofore", url: "https://www.gofore.fi"},
    {name: "Cinia", url: "https://www.cinia.fi"},
    {name: "SilverBucket", url: "https://www.silverbucket.fi"},
    {name: "Thth Ry", url: "http://www.ththry.org"},
];

function OtherCustomers() {
    return (
        <div class="text-white pt-8 pb-8 bg-gradient-to-tr from-stone-900 to-slate-800">
            <div class="space-y-16 m-16 font-light max-w-screen-md mx-auto">
                <h2 class="text-2xl">Asiakkaat ja yhteistyökumppanit</h2>
                
                <div class="grid grid-cols-2 gap-8">
                    <For each={otherCustomers}>{(other) =>
                        <div class="w-full">
                            <a href={other.url}>{other.name}</a>
                        </div>
                    }</For>
                </div>
            </div>
        </div>
    )
}
