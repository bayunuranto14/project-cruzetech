import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    )
}
export default Routing