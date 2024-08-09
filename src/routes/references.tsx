import {createSignal, For, JSXElement, Show} from "solid-js";

interface FeaturedCustomer {
    name: string;
    logo: JSXElement;
    brief: JSXElement;
    extended: JSXElement;
    platforms: string[];
    techs: string[];
}

const references: FeaturedCustomer[] = [
    {
        name: "Kansalliskirjasto",
        logo: <a href="http://www.kansalliskirjasto.fi/" target="_blank"><img width="115" height="100"
                                                                              src="img/references/kansalliskirjasto.svg"/></a>,
        brief: <p>
            Olemme kehittäneet Kansalliskirjaston digitoitujen aineiston palvelua yhteistyössä Goforen kanssa vuosina 
            2014-2023 useissa hankkeissa. Kansalliskirjaston palvelussa on julkisesti saatavilla sanomalehtiä, 
            aikakauslehtiä ja pienpainatteita ja palvelua haluttiin kehittää ja laajentaa.
        </p>,
        extended: <>
            <p>
                Toteutimme mm. käyttäjien luomat artikkelit, eli leikkeet, ja toimme kirjat mukaan valikoimaan. 
                Vanhentunutta JSP-pohjaista toteutusta vietiin moderniin AngularJS ja myöhemmin Angular-pohjaiseen 
                toteutukseen. Haku toteutettiin uudestaan Elasticsearchin päälle ja se opetettiin ymmärtämään suomen 
                kielen taivutusmuotoja <a href="https://voikko.puimula.org" target="_blank">Voikon</a> avulla.
                Suunnittelimme uuden käyttöoikeus- ja sopimusmallin, joka on mahdollistanut uusien osapuolien pääsyn 
                aineistoon tarkasti hallittavalla tavalla. Koodia refaktoroitiin rankalla kädellä luotettavuuden ja 
                ylläpidettävyyden parantamiseksi. Paransimme auditointimahdollisuuksia ja monitorointia, mm. Grafanalla.
            </p>
            <p>
                Evident on ollut hankkeiden aikana ollut vastuussa kaikesta kooodaustyöstä, ja Gofore on osallistunut
                käytettävyystutkimuksiin ja projektin hallintaan.
            </p>
            <p>Tutustu palveluun: <a href="https://digi.kansalliskirjasto.fi" target="_blank">digi.kansalliskirjasto.fi</a></p>
        </>,
        platforms: ["Web"],
        techs: ["Java", "Spring", "Hibernate", "Angular", "Elasticsearch"]
    },
    {
        name: "Finnpilot",
        logo: <a href="https://finnpilot.fi/"><img style="width: 200px" src="img/references/finnpilot.png"/></a>,
        brief: <p>Finnpilot Pilotage Oy on Suomen valtion kokonaan omistama erityistehtäväyhtiö. Sillä on lakisääteinen yksinoikeus luotsaustoiminnan harjoittamiseen.</p>,
        extended: <>
            <p>Olemme tehneet Finnpilotin kanssa ohjelmistokehitystä jo vuodesta 2016. Kehityksen kohteena on luotsinvälityksen toiminnanohjausjärjestelmä, johon kuuluu mm. mobiili työaikakirjausten teko, iOS-laitteilla toimiva luotsien sovellus, julkisesti tarjottava liikenneluettelo sekä luotsintilausten tekeminen verkossa tarjottavan palvelun kautta.</p>
            <p>Pitkän projektin aikana järjestelmä on muuttanut muotoaan Windows Server -pohjaisesta ratkaisusta aidoksi pilvipalveluksi Azuressa. Toteutusteknologia on käyttöliittymää myöten uudistettu, kehittyvän liiketoiminnan tuottamia muutoksia tuotu uusina toiminnallisuuksina käyttöön ja vanhaa koodia poistettu tai yksinkertaistettu tarpeen mukaan. Järjestelmä on ollut koko kehityksen ajan tuotantokäytössä, mikä on asettanut kovat vaatimukset tekemisen tasolle ja tavoille.</p>
        </>,
        platforms: ["Web + Mobile"],
        techs: ["Kotlin", "Azure", "Angular"],
    },
    {
        name: "Runteq",
        logo: <a href="http://www.runteq.com" target="_blank"><img style="width: 200px" src="img/references/runteq.png"/></a>,
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

            <p>Lue lisää tuotteesta: <a href="http://runteq.com/" target="_blank">Runteq.com</a></p>
        </>,
        platforms: ["Web + Mobile"],
        techs: ["Android", "Java", "Octave", "GWT", "PostgreSQL", "HTML5"]
    },
    {
        name: "Virmed",
        logo: <a href="http://www.virmed.fi/" target="_blank"><img style="width: 200px" src="img/references/virmed.jpg"/></a>,
        brief: <><p>
            Virmed kehittää terveydenhuoltoa varten mm. kuvantamispalveluja. Eräs heidän tuotteensa on
            Medistreamer-työpöytäsovellus. Medistreamerin avulla lääkäri voi ottaa ja tallentaa potilaasta
            lääketieteellisiä kuvia ja videoita sekä lähettää ne Dicom-standardin mukaisesti ulkoiseen järjestelmään.
        </p>
            <p>Virmed Oy:n toimitusjohtaja Ville Wuotila:</p>
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
        name: "Keeploop 3D",
        logo: <a href="http://www.keeploop.com/" target="_blank"><img style="width: 200px" src="img/references/keeploop.jpg"/></a>,
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
        <div class="text-xs">
            <div class="flex gap-2 flex-wrap justify-end">
                <For each={props.platforms}>{tech =>
                    <span class="rounded-2xl bg-amber-700 px-2 py-1 text-white">{tech}</span>
                }</For>
                <For each={props.techs}>{tech =>
                    <div class="rounded-2xl bg-slate-700 px-2 py-1 text-white">{tech}</div>
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

export default function References() {
    return (
        <div class="bg1">
            <div class="p-4 pb-16 md:p-16 font-light max-w-screen-lg mx-auto">
                <div class="flex flex-col gap-8">
                    <For each={references}>{(customer) =>
                        <div class="bg-stone-800/90 p-8 rounded flex flex-col md:flex-row md:gap-8">
                            <div class="shrink-0 pt-2 pb-4 md:w-[200px]">
                                <div class="bg-white p-4 rounded w-fit md:m-auto">{customer.logo}</div>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="text-lg text-amber-500">{customer.name}</div>
                                <div>
                                    <div>{customer.brief}</div>
                                    <div class="mt-4">{customer.extended}</div>
                                </div>
    
                                <TechsPanel platforms={customer.platforms} techs={customer.techs}></TechsPanel>
                            </div>
                        </div>
                    }</For>
                </div>
            </div>
        </div>
    )
}
