import {createResource, For, JSXElement} from "solid-js";
import HoverableImage from "~/components/HoverableImage";
import {shuffle} from "~/utils";

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
        picture: "img/faces/hhuttunen2_small.jpg",
        description: "Innostun uuden luomisesta ja ongelmien ratkaisemisesta. Pyrin tekemään vankasti toimivia ratkaisuja, joita on sekä miellyttävä käyttää että jatkokehittää.",
    },
    {
        name: "Jussi Koiranen",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/jkoiranen_small.jpg",
        description: "Minulla on yli kahdenkymmenen vuoden työkokemus vaihtelevista ohjelmistohankkeista. Nautin aidosti työstäni ja pyrin jatkuvasti oppimaan uutta, mikä ei kuitenkaan tarkoita jatkuvasti uuden teknologian perässä juoksemista. Viihdyn erityisesti projekteissa, jotka haastavat pohtimaan ratkaisuja yhteistyössä eri alojen asiantuntijoiden kanssa. Toinen mielenkiinnon kohteeni on vanhojen sovellusten inkrementaalinen modernisointi ja kehittäminen."
    },
    {
        name: "Juha Komulainen",
        title: "Arkkitehti",
        picture: "img/faces/komu2_small.jpg",
        hoverPicture: "img/faces/komu_small.jpg",
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
        picture: "img/faces/aloponen_small.jpg",
        imgCss: "brightness-200",
        description: "Minulle mieluisin ohjelmistokehityksen pelipaikka ja rooli on keskikentällä kolmen neljänneksen taiteilijana ja toki noin kahdenkymmenen vuoden rypistys alalla on totuttanut pelaamaan paikkaa kuin paikkaa. Peliälyä ja -silmää riittää. Vähän tikitakaa, luovaa hulluutta ja sen jälkeen veräjän säppi kiinni ja nostaan maljaa."
    },
    {
        name: "Janne Mäki",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/jmaki_small.jpg",
        description: "Pidän tärkeänä pysyä kehityksessä ajan hermolla ja opiskella uusia asioita ja teknologioita. Oman osaamiseni kehittäminen onkin minulle myös tärkeä harrastus polkupyöräilyn ohella. Teknologiat eivät kuitenkaan ole hopealuoti ohjelmistokehityksen ongelmiin, koska kaikki alkaa tarpeiden syvällisestä ymmärtämisestä ja selkeän ylläpidettävän koodin tuottamisesta."
    },
    {
        name: "Tero Poikonen",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/tpoikonen2_small.jpg",
        description: "Olen tehnyt arkkitehtuurikonsultointia ja määrittelytyötä. Olen työskennellyt ohjelmistosuunnittelijana, projektipäällikkönä ja loppukäyttäjien koulutuksessa. Olen kirjoittanut käyttöohjeita ja teknistä dokumentaatiota."
    },
    {
        name: "Martti Soininen",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/msoininen_small.jpg",
        description: "Olen koodannut web-sovelluksia ammatikseni vuodesta 2008 (full-stack). Yritän aina selvittää ongelman perimmäisen syyn ja ratkaista sen. Saatan uppoutua mielenkiintoisiin algoritmisiin ongelmiin pitkäksikin aikaa, mutta pidän myös tiimityöskentelystä ja olen toiminut tutorinakin. Toisten ihmisten auttaminen motivoi minua."
    },
    {
        name: "Olli Tuomi",
        title: "Arkkitehti",
        picture: "img/faces/otuomi_small.jpg",
        description: "Olen harrastanut ohjelmointia yhdeksänvuotiaasta, ja ammatikseni olen tehnyt sitä yli kymmenen vuotta. Omaksun uusia asioita erittäin nopeasti, ja olen varsinainen hai keksimään erilaisia tapoja ratkaista ongelmia tietokoneiden avulla. Tunnen perinpohjin prosessit, joilla ohjelmistoja suunnitellaan ja valmistetaan hyvin (ja muutaman joilla sitä tehdään huonosti)."
    },
    {
        name: "Panu Åkerman",
        title: "Ohjelmistokehittäjä",
        picture: "img/faces/pakerman_small.jpg",
        description: "Olen tutkija ja propellihattu ja olen kiinnostunut jokapaikan tietotekniikasta, käytettävyydestä ja leikkisyydestä. Lisäksi olen myös ohjelmistokehittäjä: Minulla on pitkä ja monipuolinen tausta ohjelmistokehityksesä ja haluan intohimoisesti tehdä hyviä ja elegantteja ohjelmia joita on helppo ja hauska käyttää."
    },
];

export default function Personnel() {
    const [personnel] = createResource(async () => {
        // shuffles in place, but so what
        shuffle(dudes);
        return dudes;
    });
    
    return (
        <div class="flex flex-col gap-16 pb-16 md:p-16 font-light max-w-screen-md mx-auto">
            <For each={personnel()}>{(person) =>
                <div class="flex max-sm:flex-col m-4 gap-4 md:gap-8">
                    <div class="shrink-0">
                        <div class="space-y-1 pt-1.5">
                            <HoverableImage
                                main={person.picture}
                                hover={person.hoverPicture}
                                alt={person.name}
                                width={200}
                                cssClass={"rounded saturate-50 " + person.imgCss}
                            ></HoverableImage>
                            <div class="md:text-end text-xl pt-4">{person.name}</div>
                            <div class="md:text-end">{person.title}</div>
                        </div>
                    </div>
                    <div>{person.description}</div>
                </div>
            }</For>
        </div>
    )
}
