import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./App";

export const render = ({ path }) => {
    console.log(path);
    return ReactDOMServer.renderToString(
        <StaticRouter location={path}>
            <App />
        </StaticRouter>
    );
};
