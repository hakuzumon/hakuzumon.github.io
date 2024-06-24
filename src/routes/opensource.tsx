import {For, JSXElement} from "solid-js";

interface Project {
    name: string;
    logo: JSXElement;
    description: JSXElement;
    github?: string;
}
const imgClass = "rounded-full";

const projects: Project[] = [
    {
        name: "Dalesbred",
        logo: <div><img width="128" height="128" src="img/products/lowpoly_dalesbred.jpg" alt="Dalesbred" class={imgClass}/></div>,
        description: <>
            <p>Dalesbred yksinkertaistaa tietokantojen käyttöä Java-ohjelmissa. Dalesbredin takana on ajatus siitä,
                että SQL itsessään on hyvä tapa käyttää tietokantoja, mutta JDBC-rajapinta tuottaa tarpeetonta tuskaa.
                Dalesbred tarjoaa korkeamman tason rajapinnan tietokantakerroksen toteutukseen.</p>
            <p>Tutustu <a href="https://dalesbred.org">Dalesbrediin</a> tarkemmin.</p>
        </>,
        github: "https://github.com/EvidentSolutions/dalesbred",
    },
    {
        name: "Apina",
        logo: <div><img width="128" height="128" src="img/products/lowpoly_apina2.jpg" alt="Apina" class={imgClass}/></div>,
        description: <>
            <p>Apina on työkalu helpottamaan tyyppiturvallisten API-kutsujen tekemistä selainpäästä serverille. Apina luo TypeScript-luokkia automaattisesti Springin MVC-kontrollereista ja Jackson-luokista, jotta sinun ei tarvitse.</p>
            <p>Tutustu <a href="https://apina.evident.fi/">Apinaan</a> tarkemmin.</p>
        </>,
        github: "https://github.com/EvidentSolutions/apina",
    },
    {
        name: "Raudikko",
        logo: <div><img width="128" height="128" src="img/products/lowpoly_raudikko.jpg" class={imgClass}
                        alt="Raudikko"/></div>,
        description: <>
            <p><a href="http://voikko.puimula.org/">Voikkoon</a> perustuva suomen kielen analyysi. Suomen kielen taivutusmuodot ovat tunnetusti hankalia ihmiselle, saati tietokoneelle. Raudikolla löydät sanojen perusmuodot, esim.</p>

            <ul class="m-4 ml-7 list-disc">
                <li>kissojen &#8594; kissa</li>
                <li>koiruutta &#8594; koiruus</li>
                <li>jonoksi &#8594; jono</li>
            </ul>

            <p>Raudikolle löytyvät myös <a href="https://github.com/EvidentSolutions/elasticsearch-analysis-raudikko">Elasticsearch</a> ja <a href="https://github.com/EvidentSolutions/opensearch-analysis-raudikko">Opensearch</a> -pluginit.</p>
        </>,
        github: "https://github.com/EvidentSolutions/raudikko",
    }
];

export default function OpenSource() {
    return (
        <div class="flex flex-col pb-16 md:p-16 gap-16 font-light max-w-screen-md mx-auto">
            <For each={projects}>{(project) =>
                <div class="m-4 flex max-sm:flex-col gap-8">
                    <div class="shrink-0 flex md:w-[160px] md:justify-center pt-1.5">
                        {project.logo}
                    </div>
                    <div class="w-full">
                        <div class="text-xl mb-4">
                            <div class="flex justify-between">
                                <span>{project.name}</span>
                                <a href={project.github} target="_blank">
                                    <img src="/img/github-mark.svg" alt="github" width="24" class="inline"/>
                                </a>
                            </div>
                        </div>
                        <div>{project.description}</div>
                    </div>
                </div>
            }</For>
        </div>
    )
}
