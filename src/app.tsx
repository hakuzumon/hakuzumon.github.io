import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {Suspense} from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import {Base, MetaProvider} from "@solidjs/meta";

export default function App() {
    const baseUrl = import.meta.env.SERVER_BASE_URL || '/';
    return (
        <MetaProvider>
            <Base href={baseUrl}></Base>
            <Router
                base={baseUrl}
                root={props => (
                    <>
                        <Nav/>
                        <Suspense>{props.children}</Suspense>
                    </>
                )}
            >
                <FileRoutes/>
            </Router>
        </MetaProvider>
    );
}
