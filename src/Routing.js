import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Templates from "./pages/Templates";
import Dashboard from "./pages/Dashboard";
import ScrollToTop from "./ScrollToTop";
import ResumeEditor from "./pages/ResumeEditor";
const Routing = ()=>{

    return(
        <BRouter>
            <ScrollToTop />
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/templates" element={<Templates />} />
                <Route path="/dashboard/:currentTab" element={<Dashboard />} />
                <Route path="/resume/edit/:templateNo" element={<ResumeEditor />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BRouter>
    );
}

export default Routing;