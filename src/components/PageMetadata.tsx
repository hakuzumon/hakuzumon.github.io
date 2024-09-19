import {useLocation} from "@solidjs/router";
import {Meta} from "@solidjs/meta";

export default function PageMetadata() {
    const location = useLocation();

    return (
        <Meta name="og:url" content={"https://evident.fi" + location.pathname} />
    )
} 