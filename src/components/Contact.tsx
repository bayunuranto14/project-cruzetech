import Navigation from "./Navigation"
import Footer from "./Footer"
function Contact() {
    return (
        <div>
            <header>
                <Navigation />
            </header>
            <div className="font-bold p-4">
                <h1 className="text-2xl text-center">Contact Us</h1>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default Contact