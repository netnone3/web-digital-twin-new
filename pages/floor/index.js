import Image from "next/image"

// Components
import Footer from "../../components/footer";
import BarChart from "../../components/chart/bar";
import DoughnutChart from "../../components/chart/doughnut";

// Image
import FloorImg from "../../public/images/floor.png"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Floor() {
    return (
        <>
            <div className="grid grid-cols-3">
                <div className="col-span-2 m-3 rounded-md">
                    <div className="h-full">
                        <div className="p-3 bg-white rounded-md">Head</div>
                        <Image src={FloorImg} className="rounded-md m-auto p-3" />
                        <div className="grid grid-cols-2 gap-3">
                            <div className="text-center bg-white rounded-md p-3">PM</div>
                            <div className="text-center rounded-md bg-white mx-3 p-3">Temperature</div>
                        </div>
                    </div>
                </div>
                <div className="h-full m-3">
                    <div className="bg-white p-3 rounded-md">
                        <Swiper loop={true} modules={[Pagination]} pagination={{ clickable: true }} className="h-full">
                            <SwiperSlide>
                                <div>
                                    <p className="text-center">การใช้พลังงานไฟฟ้า 1 วัน</p>
                                    <BarChart label="1,2,3,4" dataenergy="1,2,3,4" datasolar="1,2,3,4" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <p className="text-center">การใช้พลังงานไฟฟ้า 7 วัน</p>
                                    <BarChart label="1,2,3,4" dataenergy="1,2,3,4" datasolar="1,2,3,4" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <p className="text-center">การใช้พลังงานไฟฟ้า 30 วัน</p>
                                    <BarChart label="1,2,3,4" dataenergy="1,2,3,4" datasolar="1,2,3,4" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="bg-white p-3 my-3 rounded-md">
                        <p className="text-center">ลักษณะการใช้งานพื้นที่รวม</p>
                        <DoughnutChart label='Outlet,Light,Aircon' data='6,5,4' />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}