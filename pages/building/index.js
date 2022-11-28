import Image from "next/image"

// Components
import Footer from "../../components/footer"
import DoughnutChart from "../../components/chart/doughnut"
import BarChart from "../../components/chart/bar"
import Pm from "../../components/pm"
import Temperature from "../../components/temperature"
import Energy from "../../components/energy"

// Image
import BuildingImg from "../../public/images/building.png"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Building() {
    return (
        <>
            <div className="grid grid-cols-4">
                <div className="m-3 grid">
                    <div className="p-3 bg-white rounded-md">
                        <p className="text-center pb-3">การใช้ไฟฟ้ารายชั้น</p>
                        <div className="pb-3">
                            <Energy title="ชั้น 1" value="0" />
                        </div>
                        <div className="pb-3">
                            <Energy title="ชั้น 2" value="0" />
                        </div>
                        <div className="pb-3">
                            <Energy title="ชั้น 3" value="0" />
                        </div>
                        <div className="pb-3">
                            <Energy title="ชั้น 4" value="0" />
                        </div>
                        <div className="pb-3">
                            <Energy title="ชั้น 5" value="0" />
                        </div>
                        <div className="pb-3">
                            <Energy title="ชั้น 6" value="0" />
                        </div>
                        <div className="pb-3">
                            <Energy title="ชั้น 7" value="0" />
                        </div>
                        <div className="pb-3">
                            <Energy title="ชั้น 8" value="0" />
                        </div>
                        <div className="pb-3">
                            <Energy title="ลิฟต์" value="0" />
                        </div>
                    </div>
                    {/* <div className="bg-[#d3d3d3]"></div> */}
                    <div className="p-3 rounded-md mt-3 h-[90%] bg-white">
                        <div className="pb-3">
                            <Temperature title="อุณหภูมิ" value="25" />
                        </div>
                        <div className="">
                            <Pm title="PM" value="0" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 m-3 h-full">
                    <div className="p-3 bg-white rounded-md">2.1</div>
                    <Image src={BuildingImg} className="rouneded-auto rounded-md m-auto" />
                </div>
                <div className="m-3">
                    <div className="p-3 bg-white rounded-md">
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
                                    <p className="text-center">การใช้พลังงานไฟฟ้า 1 เดือน</p>
                                    <BarChart label="1,2,3,4" dataenergy="1,2,3,4" datasolar="1,2,3,4" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="p-3 bg-white h-fit rounded-md mt-3">
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