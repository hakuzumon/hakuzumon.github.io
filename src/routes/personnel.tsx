import {For, JSXElement} from "solid-js";

interface Dude {
    name: string;
    picture: string;
    title: string;
    description: JSXElement;
    imgCss?: string;
}

const personnel: Dude[] = [
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
        picture: "img/faces/komu_small.jpg",
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
        picture: "img/faces/aki-loponen-1.jpg",
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

    return (
        <div class="space-y-16 m-16 font-light max-w-screen-md mx-auto">
            <For each={personnel}>{(person) =>
                <div class="m-4 flex space-x-8">
                    <div class="shrink-0">
                        <div class="space-y-1 pt-1.5">
                            <img src={person.picture} alt={person.name} width="200" class={"rounded saturate-50 " + person.imgCss}/>
                            <div class="text-end text-xl pt-4">{person.name}</div>
                            <div class="text-end">{person.title}</div>
                        </div>
                    </div>
                    <div>{person.description}</div>
                </div>
            }</For>
        </div>
    )
}
