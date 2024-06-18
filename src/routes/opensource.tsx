import {For, JSXElement} from "solid-js";

interface Project {
    name: string;
    logo: JSXElement;
    description: JSXElement;
    github?: string;
}

const projects: Project[] = [
    {
        name: "Dalesbred",
        logo: <div><img width="128" height="128" src="img/dalesbred-logo.jpg" alt="Dalesbred"/></div>,
        description: <>
            <p>Dalesbred yksinkertaistaa tietokantojen käyttöä Java-ohjelmissa. Dalesbredin takana on ajatus siitä,
                että SQL itsessään on hyvä tapa käyttää tietokantoja, mutta JDBC-rajapinta tuottaa tarpeetonta tuskaa.
                Dalesbred tarjoaakin korkeamman tason rajapinnan tietokantakerroksen toteutukseen.</p>
            <p>Tutustu <a href="https://dalesbred.org">Dalesbrediin</a> tarkemmin.</p>
        </>,
        github: "https://github.com/EvidentSolutions/dalesbred",
    },
    {
        name: "Lokki",
        logo: <div><img width="128" height="128" src="img/lokki-logo.jpg" alt="Lokki"/></div>,
        description: <>
            <p>Lokki tekee lokalisoinnista yksinkertaista ja staattisesti tyypitettyä. Lokin inspiraationa
                on GWT:n lokalisaatiomekanismi, mutta Lokilla ei ole ulkoisia riippuvuuksia joten sitä voi
                hyödyntää missä tahansa Java-ohjelmassa.</p>
            <p><a href="https://github.com/evidentsolutions/lokki">Lokki</a> GitHubissa.</p>
        </>,
        github: "https://github.com/EvidentSolutions/lokki",
    },
    {
        name: "Voikko Analysis for Elasticsearch",
        logo: <div><img width="128" height="128" src="img/elasticsearch-analysis-voikko-logo.jpg"
                        alt="Voikko Analysis for Elasticsearch"/></div>,
        description: <>
            <p><a href="http://voikko.puimula.org/">Voikkoon</a> perustuva suomen kielen analyysi <a href="https://www.elastic.co/">Elasticsearch</a>-hakupalvelimelle.</p>
            <p><a href="https://github.com/EvidentSolutions/elasticsearch-analysis-voikko">Voikko Analysis for
                Elasticsearch</a> GitHubissa.</p>
        </>,
        github: "https://github.com/EvidentSolutions/elasticsearch-analysis-voikko",
    }
];

export default function OpenSource() {
    return (
        <div class="space-y-16 m-16 font-light max-w-screen-md mx-auto">
            <For each={projects}>{(project) =>
                <div class="m-4 flex space-x-8">
                    <div class="shrink-0 w-[160px] flex justify-center pt-1.5">
                        {project.logo}
                    </div>
                    <div class="w-full">
                        <div class="text-xl">{project.name}</div>
                        <div>{project.description}</div>
                        <p class="text-end"><a href={project.github}>Github</a></p>
                    </div>
                </div>
            }</For>
        </div>
    )
}
