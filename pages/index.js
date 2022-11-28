import Image from "next/image"

// Components
import Header from "../components/header";
import Footer from "../components/footer";
import Energy from "../components/energy";
import Temperature from "../components/temperature"
import Pm from "../components/pm"

// Image
import HomeImg from "../public/images/home.png"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Row one */}
      <div className="grid grid-cols-3 m-3">
        <div className="col-span-2 mr-3 rounded-md">
          <Image src={HomeImg} className="rounded-md m-auto" />
        </div>
        <div className="bg-white p-3 rounded-md">
          <Swiper loop={true} modules={[Pagination]} pagination={{ clickable:true }} className="h-full">
            <SwiperSlide>
              <div>
                <p className="text-center">การใช้พลังงานไฟฟ้า</p>
                <div className="py-3"><Energy title="อาคาร" value="0" /></div>
                <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
                <div className="pb-3"><Energy title="อาคาร " value="0" /></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="text-center">อุณหภูมิ</p>
                <div className="py-3"><Temperature title="อาคาร" value="0" /></div>
                <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
                <div className="pb-3"><Temperature title="อาคาร" value="0" /></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="text-center">PM</p>
                <div className="py-3"><Pm title="อาคาร" value="0" /></div>
                <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
                <div className="pb-3"><Pm title="อาคาร" value="0" /></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}