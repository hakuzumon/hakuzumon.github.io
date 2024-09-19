import {createResource, For, JSXElement} from "solid-js";
import HoverableImage from "~/components/HoverableImage";
import {shuffle} from "~/utils";
import PageMetadata from "~/components/PageMetadata";

interface Dude {
    name: string;
    picture: string;
    hoverPicture?: string;
    title: string;
    description: JSXElement;
    imgCss?: string;
}

const dudes: Dude[] = [
    {
        name: "Henrik Huttunen",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/2024/henrik3.webp",
        description: "Innostun uuden luomisesta ja ongelmien ratkaisemisesta. Pyrin tekemään vankasti toimivia ratkaisuja, joita on sekä miellyttävä käyttää että jatkokehittää.",
    },
    {
        name: "Jussi Koiranen",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/2024/jussi1.webp",
        description: "Minulla on yli kahdenkymmenen vuoden työkokemus vaihtelevista ohjelmistohankkeista. Nautin aidosti työstäni ja pyrin jatkuvasti oppimaan uutta, mikä ei kuitenkaan tarkoita jatkuvasti uuden teknologian perässä juoksemista. Viihdyn erityisesti projekteissa, jotka haastavat pohtimaan ratkaisuja yhteistyössä eri alojen asiantuntijoiden kanssa. Toinen mielenkiinnon kohteeni on vanhojen sovellusten inkrementaalinen modernisointi ja kehittäminen."
    },
    {
        name: "Juha Komulainen",
        title: "Arkkitehti",
        picture: "img/faces/2024/komu1.webp",
        description: <>
            <p>Olen kokenut ohjelmistoarkkitehti Tampereelta. Koodaaminen on ollut osa elämääni jo lapsuudesta asti.
                Vuodesta 2001 asti olen toiminut ammattilaisena, suunnitellen ja toteuttaen monipuolisia
                ohjelmistoprojekteja. Kokemukseni kattaa kaiken sulautetuista järjestelmistä web-sivuihin,
                verkonhallinnasta ERP-järjestelmiin ja kääntäjiin. Nykyisessä työssäni toimin pääsuunnittelijana ja
                vastaan niin pienistä teknisistä yksityiskohdista kuin arkkitehtuurin kokonaiskuvasta. Olen myös pitänyt
                alan koulutuksia ja tehnyt auditointeja, jakaen osaamistani eteenpäin.</p>
            <p>Julkisia projektejani löydät sivuiltani <a href="https://komu.dev">komu.dev</a> ja <a
                href="https://github.com/komu">GitHubista</a>.</p>
        </>
    },
    {
        name: "Aki Loponen",
        title: "Ohjelmistokaiffari",
        picture: "img/faces/2024/aki3.webp",
        description: "Minulle mieluisin ohjelmistokehityksen pelipaikka ja rooli on keskikentällä kolmen neljänneksen taiteilijana ja toki noin kahdenkymmenen vuoden rypistys alalla on totuttanut pelaamaan paikkaa kuin paikkaa. Peliälyä ja -silmää riittää. Vähän tikitakaa, luovaa hulluutta ja sen jälkeen veräjän säppi kiinni ja nostaan maljaa."
    },
    {
        name: "Janne Mäki",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/2024/janne2.webp",
        description: "Pidän tärkeänä pysyä kehityksessä ajan hermolla ja opiskella uusia asioita ja teknologioita. Oman osaamiseni kehittäminen onkin minulle myös tärkeä harrastus polkupyöräilyn ohella. Teknologiat eivät kuitenkaan ole hopealuoti ohjelmistokehityksen ongelmiin, koska kaikki alkaa tarpeiden syvällisestä ymmärtämisestä ja selkeän ylläpidettävän koodin tuottamisesta."
    },
    {
        name: "Tero Poikonen",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/2024/tero1.webp",
        description: "Olen tehnyt arkkitehtuurikonsultointia ja määrittelytyötä. Olen työskennellyt ohjelmistosuunnittelijana, projektipäällikkönä ja loppukäyttäjien koulutuksessa. Olen kirjoittanut käyttöohjeita ja teknistä dokumentaatiota."
    },
    {
        name: "Martti Soininen",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/2024/martti1.webp",
        description: "Olen koodannut web-sovelluksia ammatikseni vuodesta 2008 (full-stack). Yritän aina selvittää ongelman perimmäisen syyn ja ratkaista sen. Saatan uppoutua mielenkiintoisiin algoritmisiin ongelmiin pitkäksikin aikaa, mutta pidän myös tiimityöskentelystä ja olen toiminut tutorinakin. Toisten ihmisten auttaminen motivoi minua."
    },
    {
        name: "Olli Tuomi",
        title: "Arkkitehti",
        picture: "img/faces/2024/olli1.webp",
        description: "Olen harrastanut ohjelmointia yhdeksänvuotiaasta, ja ammatikseni olen tehnyt sitä yli kymmenen vuotta. Omaksun uusia asioita erittäin nopeasti, ja olen varsinainen hai keksimään erilaisia tapoja ratkaista ongelmia tietokoneiden avulla. Tunnen perinpohjin prosessit, joilla ohjelmistoja suunnitellaan ja valmistetaan hyvin (ja muutaman joilla sitä tehdään huonosti)."
    },
    {
        name: "Panu Åkerman",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/2024/panu2.webp",
        description: "Olen tutkija ja propellihattu ja olen kiinnostunut jokapaikan tietotekniikasta, käytettävyydestä ja leikkisyydestä. Lisäksi olen myös ohjelmistokehittäjä: Minulla on pitkä ja monipuolinen tausta ohjelmistokehityksesä ja haluan intohimoisesti tehdä hyviä ja elegantteja ohjelmia joita on helppo ja hauska käyttää."
    },
];

function Story() {
    return (
        <div class="text-xl p-12 bg-white/70 text-black/90 rounded">
            <p>Perustimme Evidentin vuonna 2010, koska halusimme tehdä hyvää softaa, huolella ja hartaudella. Olemme 
                toteuttaneet yhdessä asiakkaidemme kanssa lukuisia ohjelmistoja, toiminnanohjausjärjestelmiä ja 
                verkkopalveluja. Usein yhteistyö asiakkaan kanssa jatkuu useita vuosia.</p>
            <p>Kaikilla asiantuntijoillamme on 15&mdash;25 vuoden kokemus.</p>
        </div>
    )
}


export default function Personnel() {
    const [personnel] = createResource(async () => {
        // Due to Nitro's pre-rendering, the generated static html page always has the same order. So if the user
        // goes to /personnel and refreshes the page several times, she always gets the same result, determined at 
        // build-time. However, if the user navigates to the page manually by clicking navi links, the order is 
        // randomized.
        shuffle(dudes);
        
        return dudes;
    });
    
    return (
        <div class="bg1">
            <PageMetadata />
            <div class="p-4 pb-16 md:p-16 font-light max-w-screen-lg mx-auto">
                <div class="flex flex-col gap-8">
                    
                    <Story></Story>
                    
                    <For each={personnel()}>{(person) =>
                        <div class="bg-stone-800/90 p-8 rounded flex max-sm:flex-col gap-4 md:gap-8">
                            <div class="shrink-0">
                                <div class="space-y-1 pt-1.5">
                                    <HoverableImage
                                        main={person.picture}
                                        hover={person.hoverPicture}
                                        alt={person.name}
                                        width={200}
                                        cssClass={"rounded saturate-50 " + person.imgCss}
                                    ></HoverableImage>
                                </div>
                            </div>
                            <div>
                                <div class="text-xl text-amber-500">{person.name}</div>
                                <div class="mb-4">{person.title}</div>
                                <div>{person.description}</div>
                            </div>
                        </div>
                    }</For>
                </div>
            </div>
        </div>
    )
}
