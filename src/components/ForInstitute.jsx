import React from 'react';
import './ForInstitute.css'

export default function ForInstitute() {
  return (
    <section className="bg-white py-8 px-4 md:py-12 md:px-14 max-w-[100%] mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 h-auto md:h-[725px]">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 h-[300px] md:h-[558px] relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/8507/9739/53755c46587add0914a3b533fa203bb3?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-72N6Vve8o4pc6DcPNlGP7Bk60j~1kDMXmfmGL9tzu7EpNSXvpEDtm9jAvgeC~M6V7Tc2IAh3UCFRapRr3BUm5sTdz3I~EVraN4cFhpioZ2T71vsFGY1cxxa-C6XuaLCVrU7aRfyM7XjDTA0xRvAq9orGd0nas-OOFoQZ5iCoEOfvlzhO9w-9TgblBQ2ycPyIwxqYfbgJbgocyhYNaCawHFCR8hqex77ZQWOORp0NhDmjCQvuUtp7e3x-V3CcfTCnwNA9UUukmV8Fsk5SGdbT2m4P0~vM-LcVEKJwqKlMHa~MwozUBhu9IcCN1TLPVbX5Xuk36e-l73w5sztNt9TA__"
            alt="Arvix for Institutes"
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="text-black rounded-3xl bg-white px-3 py-2 sm:px-5 sm:py-4 absolute bottom-[-3rem] left-5 sm:left-[20%] transform translate-x-2 sm:translate-x-[50%] sm:translate-y-[-50%] flex items-center text-[12px] sm:text-[16px] font-medium leading-[16px] sm:leading-[23px] shadow-md custom-638px-position">
            <span className="text-[#FF4343] inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 bg-gradient-to-b from-[#FF4343] to-[#FF511A]" />
            Advancing Skills 4.0
          </p>



        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
          <button className="bg-[#0ACF8317] text-[#0ACF83] px-2 py-2 sm:py-3 rounded-2xl text-[10px] sm:text-[12px] font-bold leading-[10.4px] w-[120px] sm:w-[164px]">
            Let’s Collaborate
          </button>

          <h2 className="font-bold text-start text-gray-900 text-[28px] sm:text-[35px] leading-[36px] sm:leading-[48px] font-roboto">
            ARVIX FOR INSTITUTES
          </h2>

          <p className="text-gray-700 text-[12px] sm:text-[14px] font-medium text-start leading-[18px] sm:leading-[22.4px] font-inter m-0">
            Empowering Future-Ready Students Through Practical Skill Development and
            <br />
            Here are <span className="font-bold">three key benefits</span> Arvix offers to schools and colleges:
          </p>

          <ul className="list-none space-y-4">
            <li className="border-l-[3px] text-start border-[#0ACF83] bg-[#C3F1FF4A] pl-3 sm:pl-4 text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[22.4px] font-inter py-2 sm:py-3">
              Skill-Based Workshops
              <p className="text-gray-700 text-[12px] sm:text-[14px] py-1 font-medium text-start leading-[18px] sm:leading-[22.4px] font-inter m-0">
                Provide students with hands-on training in essential market-relevant skills, preparing them for future challenges.
              </p>
            </li>

            <li className="text-start pl-3 sm:pl-4 text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[22.4px] font-inter py-2 sm:py-3">
              Custom Curriculum Integration
              <p className="text-gray-700 text-[12px] sm:text-[14px] py-1 font-medium text-start leading-[18px] sm:leading-[22.4px] font-inter m-0">
                Tailored bootcamps that complement your school’s curriculum, blending academic learning with practical, real-world skills.
              </p>
            </li>

            <li className="text-start pl-3 sm:pl-4 text-[14px] sm:text-[16px] font-bold leading-[20px] sm:leading-[22.4px] font-inter py-2 sm:py-3">
              Affordable and Accessible
              <p className="text-gray-700 text-[12px] sm:text-[14px] py-1 font-medium text-start leading-[18px] sm:leading-[22.4px] font-inter m-0">
                Ensure every student has access to cutting-edge tools and learning methods with our cost-effective, live, interactive sessions.
              </p>
            </li>
          </ul>

          <button className="border w-[180px] sm:w-[300px] border-[#0ACF83] text-[#0ACF83] px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-[14px] sm:text-[16px] leading-[20px] sm:leading-[23px] font-inter">
            Organize Skill 4.0 Workshop
          </button>
        </div>
      </div>
    </section>
  );
}
