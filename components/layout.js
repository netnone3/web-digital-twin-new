import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }){
    return (
        <>
            <Header />
            <main className="m-3">{children}</main>
            <Footer />
        </>
    )
}