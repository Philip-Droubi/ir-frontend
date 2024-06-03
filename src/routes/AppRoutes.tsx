import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import NotFound from "../pages/errors/NotFound";
import { SearchPage } from "@/pages/SearchPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<SearchPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Route>
    )
);
