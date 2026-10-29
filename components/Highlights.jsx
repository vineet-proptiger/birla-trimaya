'use client'
import React from 'react'

const highlights = [
  {
    title: '52-Acre Integrated Township',
    description: 'Set within a massive 52-acre integrated township crafted for buyers seeking luxury, connectivity, and long-term value.',
    icon: 'fa-solid fa-tree'
  },
  {
    title: '32+ Acres Greens & Central Lake',
    description: 'Over 32 acres of open green spaces and a beautifully curated central lake delivering a rare low-density lifestyle.',
    icon: 'fa-solid fa-water'
  },
  {
    title: 'Premium 3 & 4 BHK Apartments',
    description: 'Premium 3 and 4 BHK apartments along with select duplex-style homes designed for modern luxury living.',
    icon: 'fa-solid fa-house-chimney'
  },
  {
    title: '1,600 – 2,551 Sq.Ft. Layouts',
    description: 'Super built-up area of 1600 - 2551 Sq.Ft. with spacious layouts, large balconies, and excellent ventilation.',
    icon: 'fa-solid fa-vector-square'
  },
  {
    title: 'Crafted by Birla Estates',
    description: 'Developed by Birla Estates, carrying forward the rich legacy of trust, architectural excellence, and quality.',
    icon: 'fa-solid fa-handshake'
  },
  {
    title: 'Prime Airport Corridor Location',
    description: 'Located in Devanahalli, Shettigere on Airport Road, just minutes from Kempegowda International Airport.',
    icon: 'fa-solid fa-plane-departure'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#FAF2F8' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-10" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#850B6F] text-[#850B6F] bg-white">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            What Makes Birla Trimaya Phase 4 <span className="text-[#850B6F]">Stand Apart</span>
          </h2>
          <div className="w-16 h-1 bg-[#850B6F] mx-auto mt-3 rounded-full" />
        </div>

        {/* 6 Cards: 3 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#850B6F]/25 hover:border-[#850B6F] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(133,11,111,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-full border-2 border-[#850B6F] bg-[#FAF2F8] text-[#850B6F] flex items-center justify-center text-[20px] transition-all duration-300 shadow-xs flex-shrink-0 group-hover:scale-105 group-hover:bg-[#850B6F] group-hover:text-white">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#111111] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#850B6F] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#4A5568] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#850B6F]/25 group-hover:bg-[#850B6F] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-10" data-aos="fade-up">
          <button
            onClick={() => setIsOpen && setIsOpen(true)}
            className="px-8 py-3 rounded-[6px] font-bold text-white uppercase text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            style={{ background: '#850B6F' }}
            onMouseEnter={e => e.currentTarget.style.background = '#6A0958'}
            onMouseLeave={e => e.currentTarget.style.background = '#850B6F'}
          >
            ENQUIRE NOW
          </button>
        </div>

      </div>
    </section>
  )
}

export default Highlights
