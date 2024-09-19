import {createSignal, For, JSXElement, Show} from "solid-js";
import PageMetadata from "~/components/PageMetadata";

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
        name: "Suomi.fi",
        logo: <a href="https://www.suomi.fi/" target="_blank"><img width="115" height="100"
                                                                              src="img/references/suomifi.svg" alt="Suomi.fi" /></a>,
        brief: <p>
            Suomi.fi-palvelut ovat osa Suomen kansallista palveluarkkitehtuuria. Suomi.fi-palvelut tarjoavat ratkaisuja sähköiseen tunnistamiseen, toisen puolesta asiointiin sekä digitaaliseen viestintään niin julkiselle kuin yksityisellekin sektorille. Kansalaisille kokonaisuus näkyy Suomi.fi-verkkopalveluna, joka kokoaa yhteen osoitteeseen valtuuttamisen ja viranomaisviestimisen palvelut sekä kansalaiselle ja yritykselle suunnatut oppaat ja palvelutiedot.
        </p>,
        extended: <>
            <p>
                Suomi.fi-verkkopalvelulla on tarkat saavutettavuus- ja saatavuusvaatimukset, sillä sen on palveltava
                kaikkia suomalaisia ympäri vuorokauden. Tämä tarkoittaa mm. näkörajoitteisten huomioon ottamista
                toimivalla ruudunlukijatuella. Palvelun päivittämisen puolestaan on tapahduttava ilman käyttökatkoa.
            </p>
            <p>
                Evident on ollut vuodesta 2018 asti merkittävässä roolissa kehittämässä ja ylläpitämässä eri
                Suomi.fi-palveluja osana monitoimittajatiimiä. Olemme kehittäneet mm. Suomi.fi -verkkopalvelua ja
                -valtuuksia, ylläpidon työkaluja sekä integraatioita muihin järjestelmiin. Osana palvelujen pilveistystä
                olemme onnistuneet parantamaan palvelun ylläpidettävyyttä, vähentäneet bugiherkkyyttä sekä
                mahdollistaneet uusien toiminnallisuuksien entistä nopeamman kehityksen. Lisäksi olemme tuoneet uusia
                toiminnallisuuksia käyttäjille ja parantaneet suorityskykyä sekä hakukonelöydettävyyttä.
            </p>
            <p>Tutustu palveluun: <a href="https://suomi.fi" target="_blank">suomi.fi</a></p>
        </>,
        platforms: ["Web"],
        techs: ["Kotlin", "Java", "React", "ElasticSearch", "Kubernetes", "Terraform"]
    },
    {
        name: "Finnpilot",
        logo: <a href="https://finnpilot.fi/"><img style="width: 200px" src="img/references/finnpilot.png" alt="Finnpilot"/></a>,
        brief: <p>Finnpilot Pilotage Oy on Suomen valtion kokonaan omistama erityistehtäväyhtiö. Sillä on lakisääteinen yksinoikeus luotsaustoiminnan harjoittamiseen.</p>,
        extended: <>
            <p>Olemme tehneet Finnpilotin kanssa ohjelmistokehitystä jo vuodesta 2016. Kehityksen kohteena on luotsinvälityksen toiminnanohjausjärjestelmä, johon kuuluu mm. mobiili työaikakirjausten teko, iOS-laitteilla toimiva luotsien sovellus, julkisesti tarjottava liikenneluettelo sekä luotsintilausten tekeminen verkossa tarjottavan palvelun kautta.</p>
            <p>Pitkän projektin aikana järjestelmä on muuttanut muotoaan Windows Server -pohjaisesta ratkaisusta aidoksi pilvipalveluksi Azuressa. Toteutusteknologia on käyttöliittymää myöten uudistettu, kehittyvän liiketoiminnan tuottamia muutoksia tuotu uusina toiminnallisuuksina käyttöön ja vanhaa koodia poistettu tai yksinkertaistettu tarpeen mukaan. Järjestelmä on ollut koko kehityksen ajan tuotantokäytössä, mikä on asettanut kovat vaatimukset tekemisen tasolle ja tavoille.</p>
        </>,
        platforms: ["Web + Mobile"],
        techs: ["Kotlin", "Azure", "Angular"],
    },
    {
        name: "Kansalliskirjasto",
        logo: <a href="http://www.kansalliskirjasto.fi/" target="_blank"><img width="115" height="100"
                                                                              src="img/references/kansalliskirjasto.svg" alt="Kansalliskirjasto" /></a>,
        brief: <p>
            Olemme kehittäneet Kansalliskirjaston digitoitujen aineiston palvelua yhteistyössä Goforen kanssa vuosina
            2014-2023 useissa hankkeissa. Kansalliskirjaston palvelussa on julkisesti saatavilla tekijänoikeudesta vapautuneita sanomalehtiä,
            aikakauslehtiä, pienpainatteita ja kirjoja. Myös tekijänoikeuden alaista aineistoa on saatavilla palvelussa esim. yliopistoista käsin.
        </p>,
        extended: <>
            <p>
                Toteutimme tuen kirjoille ja käyttäjien tekemille virtuaalisille lehtileikkeille.
                Alkuperäinen JSP-pohjainen toteutus muunnettiin Angular-pohjaiseksi ja koodipohja kirjoitettiin 
                pitkälti uusiksi. Hakutoimintoja parannettiin siirtämällä ne Elasticsearchin päälle. Suomen kielen 
                taivutusmuodoille tehtiin kunnollinen tuki <a href="https://voikko.puimula.org" target="_blank">Voikon</a> avulla.
                Suunnittelimme uuden käyttöoikeus- ja sopimusmallin, joka mahdollisti uusien osapuolien pääsyn
                aineistoon tarkasti hallittavalla tavalla. Näiden lisäksi teimme kaikenlaista muuta, kuten integraatioita, paransimme monitorointi- ja auditointimahdollisuuksia, jne.
            </p>
            <p>
                Evident on ollut hankkeiden aikana vastuussa kaikesta suunnittelu- ja kooodaustyöstä, ja Gofore on osallistunut
                käytettävyystutkimuksiin ja projektin hallintaan.
            </p>
            <p>Tutustu palveluun: <a href="https://digi.kansalliskirjasto.fi" target="_blank">digi.kansalliskirjasto.fi</a></p>
        </>,
        platforms: ["Web"],
        techs: ["Java", "Spring", "Hibernate", "Angular", "Elasticsearch", "Oracle"]
    },
    {
        name: "Virmed",
        logo: <a href="http://www.virmed.fi/" target="_blank">
            <img style="width: 200px" class="translate-x-1 -translate-y-1" src="img/references/virmed.jpg" alt="Virmed" />
        </a>,
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
        logo: <a href="http://www.keeploop.com/" target="_blank"><img style="width: 200px" src="img/references/keeploop.jpg" alt="Keeploop"/></a>,
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
            <PageMetadata />
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
