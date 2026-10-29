'use client'
import React from 'react'

const amenities = [
  {
    title: 'Grand Clubhouse',
    subtitle: 'Expansive clubhouse for leisure, recreation & wellness',
    icon: 'fa-solid fa-landmark',
  },
  {
    title: 'Swimming Pool',
    subtitle: 'Resort-style pool with expansive relaxation sun deck',
    icon: 'fa-solid fa-person-swimming',
  },
  {
    title: 'Modern Gymnasium',
    subtitle: 'Fully-equipped fitness studio & health center',
    icon: 'fa-solid fa-dumbbell',
  },
  {
    title: 'Sports Courts',
    subtitle: 'Dedicated courts for badminton, tennis & outdoor sports',
    icon: 'fa-solid fa-basketball',
  },
  {
    title: 'Kids’ Play Areas',
    subtitle: 'Safe and engaging children play zones & adventure park',
    icon: 'fa-solid fa-child-reaching',
  },
  {
    title: 'Jogging Tracks',
    subtitle: 'Scenic paved tracks weaving through green corridors',
    icon: 'fa-solid fa-person-running',
  },
  {
    title: 'Landscaped Leisure Zones',
    subtitle: 'Curated green gardens & shaded seating pavilions',
    icon: 'fa-solid fa-seedling',
  },
  {
    title: 'Central Lake & Greens',
    subtitle: '32+ acres of open greenery & curated central lake',
    icon: 'fa-solid fa-water',
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-12 md:py-16 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#850B6F] text-[#850B6F] bg-[#FAF2F8]">
            WORLD CLASS AMENITIES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Lifestyle That Complements Your <span className="text-[#850B6F]">Vision of Luxury</span>
          </h2>
          <div className="w-16 h-1 bg-[#850B6F] mx-auto mt-3 rounded-full" />
        </div>

        {/* 4x2 Clean Cards Grid (No Images, Exact Reference Design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {amenities.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={((index % 4) * 60).toString()}
                className="group relative bg-white rounded-[22px] p-7 border border-[#850B6F]/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(133,11,111,0.12)] hover:border-[#850B6F] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
              >
                {/* Center Content */}
                <div className="flex flex-col items-center w-full">
                  {/* Round Icon Badge */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] mb-5 transition-all duration-300 group-hover:scale-108 bg-[#FAF2F8] border border-[#850B6F]/30 text-[#850B6F] group-hover:bg-[#850B6F] group-hover:text-white shadow-xs font-bold">
                    <i className={item.icon}></i>
                  </div>

                  {/* Amenity Title */}
                  <h3 className="font-bold text-[17px] sm:text-[18px] mb-2 leading-snug transition-colors duration-200 text-[#111111] group-hover:text-[#850B6F]">
                    {item.title}
                  </h3>

                  {/* Amenity Subtitle */}
                  <p className="text-[#6c757d] text-[13px] sm:text-[13.5px] leading-relaxed m-0 font-medium max-w-[230px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Amenities
