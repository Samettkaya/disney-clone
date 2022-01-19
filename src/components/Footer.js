import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex items-center justify-center  flex-col flex-1 mt-2 px-2 h-56 ">
        <div className="  flex items-center justify-center pb-7">
        <div className="flex -ml-3 text-[20px]">
          <div className="flex items-center justify-center text-[#333333] mr-6 ">
          Disney'i takip edin :
          </div>
          <div className="flex items-center justify-center mr-6 hover:text-slate-900 cursor-pointer ">
            <BsFacebook />
            </div>
            <div className="flex items-center justify-center  hover:text-slate-900 cursor-pointer ">
            <BsYoutube/>
            </div>
        </div>
      </div>
      <div className="  flex items-center justify-center  ">
        <div className="flex -ml-3 text-[12px]">
          <div className="flex items-center justify-center   ">
            <img className="h-8 text-slate-500" src="https://static-mh.content.disney.io/matterhorn/assets/goc/nav-logo-dark@2x-2b3eb08c507c.png" />
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-center py-6 text-[#333333]">
        <div className="flex  text-[12px]">
          <div className="flex items-center justify-center hover:text-[#0077DA] cursor-pointer px-3  ">
            Yardım
          </div>
          <div className="flex items-center justify-center hover:text-[#0077DA] cursor-pointer px-3 ">
            Site Haritası
          </div>
          <div className="flex items-center justify-center hover:text-[#0077DA] cursor-pointer px-3 ">
            Kullanma Şartları
          </div>
          <div className="flex items-center justify-center hover:text-[#0077DA] cursor-pointer px-3 ">
            Gizlilik Politikası
          </div>
          <div className="flex items-center justify-center hover:text-[#0077DA] cursor-pointer px-3 ">
            Kişiye Özel Reklam
          </div>
          <div className="flex items-center justify-center  hover:text-[#0077DA] cursor-pointer px-3">
            Hakkımızda
          </div>
          <div className="flex items-center justify-center hover:text-[#0077DA] cursor-pointer px-3 ">
            Bilgi Toplumu Hizmetleri
          </div>
          <div className="flex items-center justify-center hover:text-[#0077DA] cursor-pointer px-3 ">
            The Walt Disney Company
          </div>
        </div>
      </div>
      <div className="  flex items-center justify-center text-[#333333] ">
        <div className="flex -ml-3 text-[12px]">
          <div className="flex items-center justify-center   ">
            © Disney © Disney•Pixar © & ™ Lucasfilm LTD © Marvel. Tüm hakları
            saklıdır
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
