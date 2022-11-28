import Footer from "../../components/footer"

export default function Room() {
    return (
        <>
            <div className="grid grid-cols-4">
                <div className="m-3">
                    <div className="p-3 bg-white rounded-md">1.1</div>
                    <div className="p-3 bg-white rounded-md mt-3">1.2</div>
                </div>
                <div className="col-span-2 m-3">
                    <div className="p-3 bg-white rounded-md">2.1</div>
                </div>
                <div className="m-3">
                    <div className="p-3 bg-white rounded-md">3.1</div>
                    <div className="p-3 bg-white rounded-md mt-3">3.2</div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}