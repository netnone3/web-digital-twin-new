import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Parking() {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Main */}
            <div className="grid grid-cols-3 m-3">
                <div className="p-3 col-span-2 mr-3">Image</div>
                <div className="bg-white rounded-md p-3">
                    <p className="text-center mb-3">พื้นที่จอดรถ</p>
                    <p>หน้าอาคาร 30 ปี</p>
                    <p>ลานอาคารไฟฟ้า</p>
                    <p>ลานหลังตึกแหล่งน้ำ</p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}