import React from 'react';
import './../styles/skills.css'

export default function SkillsComponent() {
  return (
    <section className="w-[1440px] mx-auto py-[112px] border-t border-b border-gray-200">
      <div className="text-center mb-12 relative">
        {/* Learn with us button */}
        <button className="absolute text-[12px] font-normal top-[-7%] left-[30%] inline-flex items-center bg-gradient-to-b from-[#9747FF] to-[#0952E0] text-white px-3 py-3 rounded-lg mb-5 hover:shadow-lg hover:translate-y-1 transition-transform">
          Learn with us
        </button>

        {/* Floating Arrow */}
        <div className="arrow-container">
          <div className="floating-arrow">
            <svg width="35" height="28" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1831_2200)">
                <path
                d="M16.1491 1.52089L41.4835 23.2388C41.641 23.3738 41.5551 23.6358 41.3406 23.6747L6.57051 29.9734C6.33733 30.0157 6.19054 29.758 6.34475 29.5767L17.1292 16.8894C17.1752 16.8354 17.1973 16.7668 17.1908 16.6993L15.7187 1.75002C15.6965 1.52293 15.9771 1.37357 16.1491 1.52089Z"
                fill="url(#paint0_linear_1831_2200)"
                />
                <path
                d="M16.1491 1.52089L41.4835 23.2388C41.641 23.3738 41.5551 23.6358 41.3406 23.6747L6.57051 29.9734C6.33733 30.0157 6.19054 29.758 6.34475 29.5767L17.1292 16.8894C17.1752 16.8354 17.1973 16.7668 17.1908 16.6993L15.7187 1.75002C15.6965 1.52293 15.9771 1.37357 16.1491 1.52089Z"
                stroke="url(#paint1_linear_1831_2200)"
                stroke-width="2.60568"
                />
            </g>
            <defs>
                <filter id="filter0_d_1831_2200" x="0.976074" y="0.165161" width="45.8955" height="39.1134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.133333 0 0 0 0 0.152941 0 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1831_2200"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1831_2200" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1831_2200" x1="23.5" y1="0" x2="23.5" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#9747FF"/>
                <stop offset="100%" stop-color="#0952E0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1831_2200" x1="23.5" y1="0" x2="23.5" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FCFCFC"/>
                <stop offset="100%" stop-color="#D5D5D5"/>
                </linearGradient>
            </defs>
            </svg>


          </div>
        </div>

        <h2 className="text-4xl font-bold text-gray-700 mb-4 py-5">Skills that Matter</h2>
        <p className="text-lg font-bold text-gray-500">
          Unlock your potential with our comprehensive bootcamps, where we cover <span className="text-green-600">50+ essential</span> tools
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex flex-col gap-16 space-x-8 animate-scroll">
          <div className="flex space-x-8 animate-moveLeft ">
            <img src="images/webflow-logotype.svg" alt="Webflow" className="h-12 w-auto" />
            <img src="images/notion-logotype.svg" alt="Notion" className="h-12 w-auto" />
            <img src="images/illustrator-logotype.svg" alt="Illustrator" className="h-12 w-auto" />
            <img src="images/group-141.svg" alt="Figma" className="h-12 w-auto" />
            <img src="images/canva-logotype.svg" alt="Canva" className="h-12 w-auto" />
            <img src="images/blender-logotype.svg" alt="Blender" className="h-12 w-auto" />
            <img src="images/git-hub-logotype.svg" alt="GitHub" className="h-12 w-auto" />
            <img src="images/framer-logotype.svg" alt="Framer" className="h-12 w-auto" />
            <img src="images/wordpress-logotype.svg" alt="WordPress" className="h-12 w-auto" />
            <img src="images/shopify.svg" alt="Shopify" className="h-12 w-auto" />
            <img src="images/chatgpt.svg" alt="ChatGPT" className="h-12 w-auto" />
            <img src="images/webflow-logotype.svg" alt="Webflow" className="h-12 w-auto" />
            <img src="images/notion-logotype.svg" alt="Notion" className="h-12 w-auto" />
            <img src="images/illustrator-logotype.svg" alt="Illustrator" className="h-12 w-auto" />
            <img src="images/group-141.svg" alt="Figma" className="h-12 w-auto" />
            <img src="images/canva-logotype.svg" alt="Canva" className="h-12 w-auto" />
            <img src="images/blender-logotype.svg" alt="Blender" className="h-12 w-auto" />
            <img src="images/git-hub-logotype.svg" alt="GitHub" className="h-12 w-auto" />
            <img src="images/framer-logotype.svg" alt="Framer" className="h-12 w-auto" />
            <img src="images/wordpress-logotype.svg" alt="WordPress" className="h-12 w-auto" />
            <img src="images/shopify.svg" alt="Shopify" className="h-12 w-auto" />
            <img src="images/chatgpt.svg" alt="ChatGPT" className="h-12 w-auto" />
          </div>
          <div className="flex space-x-8 animate-moveRight">
          <img src="images/webflow-logotype.svg" alt="Webflow" className="h-12 w-auto" />
            <img src="images/notion-logotype.svg" alt="Notion" className="h-12 w-auto" />
            <img src="images/illustrator-logotype.svg" alt="Illustrator" className="h-12 w-auto" />
            <img src="images/group-141.svg" alt="Figma" className="h-12 w-auto" />
            <img src="images/canva-logotype.svg" alt="Canva" className="h-12 w-auto" />
            <img src="images/blender-logotype.svg" alt="Blender" className="h-12 w-auto" />
            <img src="images/git-hub-logotype.svg" alt="GitHub" className="h-12 w-auto" />
            <img src="images/framer-logotype.svg" alt="Framer" className="h-12 w-auto" />
            <img src="images/wordpress-logotype.svg" alt="WordPress" className="h-12 w-auto" />
            <img src="images/shopify.svg" alt="Shopify" className="h-12 w-auto" />
            <img src="images/webflow-logotype.svg" alt="Webflow" className="h-12 w-auto" />
            <img src="images/notion-logotype.svg" alt="Notion" className="h-12 w-auto" />
            <img src="images/illustrator-logotype.svg" alt="Illustrator" className="h-12 w-auto" />
            <img src="images/group-141.svg" alt="Figma" className="h-12 w-auto" />
            <img src="images/canva-logotype.svg" alt="Canva" className="h-12 w-auto" />
            <img src="images/blender-logotype.svg" alt="Blender" className="h-12 w-auto" />
            <img src="images/git-hub-logotype.svg" alt="GitHub" className="h-12 w-auto" />
            <img src="images/framer-logotype.svg" alt="Framer" className="h-12 w-auto" />
            <img src="images/wordpress-logotype.svg" alt="WordPress" className="h-12 w-auto" />
            <img src="images/shopify.svg" alt="Shopify" className="h-12 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
