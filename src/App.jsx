import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Other } from "./components/Other";
import { NotFound } from "./components/NotFound";

export default function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/other" element={<Other />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
