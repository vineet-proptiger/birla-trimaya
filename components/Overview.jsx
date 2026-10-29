'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const overviewSpecs = [
  {
    title: 'Configuration',
    desc: '3 & 4 BHK Apartments',
  },
  {
    title: 'Total Land Parcel',
    desc: '52-Acre Integrated Township',
  },
  {
    title: 'Apartment Size Range',
    desc: '1,600–2,551 sq.ft',
  },
  {
    title: 'Open Green Spaces',
    desc: '32+ Acres & Central Lake',
  },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Birla Trimaya Phase 4" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#850B6F] text-[#850B6F] bg-[#FAF2F8]">
                WELLNESS ARCHITECTURE
              </span>
              <h2 className="text-[#850B6F] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-2 tracking-wider uppercase">
                OVERVIEW
              </h2>
              <div className="w-16 h-1 bg-[#850B6F] mb-4 rounded-full" />

              <div className="mb-6">
                <div className={`text-[#4A5568] text-[15px] leading-[1.75] text-left ${!isExpanded ? 'line-clamp-4 overflow-hidden' : ''}`}>
                  <p className="m-0 mb-3">
                    Premium new launch by <strong className="text-[#850B6F]">Birla Estates</strong> in Devanahalli, just minutes from Kempegowda International Airport, North Bangalore. Set within a massive 52-acre integrated township, this project offers premium 3 and 4 BHK apartments along with select duplex-style homes, crafted for buyers seeking luxury, connectivity, and long-term value.
                  </p>
                  <p className="m-0 mb-3">
                    With over 32 acres of open green spaces and a beautifully curated central lake, <strong className="text-[#850B6F]">Birla Trimaya Phase 4</strong> delivers a rare low-density lifestyle in a fast-appreciating airport corridor. Spacious layouts, large balconies, excellent ventilation, and premium specifications ensure every home is designed for comfort and modern living.
                  </p>
                  <p className="m-0">
                    Residents enjoy world-class amenities including a grand clubhouse, swimming pool, gymnasium, sports courts, kids’ play areas, jogging tracks, and landscaped leisure zones—creating a complete lifestyle within the township.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#111111] hover:text-[#850B6F] font-bold text-[14.5px] mt-2.5 inline-flex items-center gap-1.5 hover:underline cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Action Buttons as in Reference Image 1 */}
              <div className="flex flex-wrap items-center gap-3 my-5">
                <button
                  type="button"
                  onClick={() => setIsOpen && setIsOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-white text-[13px] font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                  style={{ background: '#850B6F' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#6A0958'}
                  onMouseLeave={e => e.currentTarget.style.background = '#850B6F'}
                >
                  <i className="fa-solid fa-download text-xs" />
                  <span>Download Brochure</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen && setIsOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-white text-[13px] font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                  style={{ background: '#850B6F' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#6A0958'}
                  onMouseLeave={e => e.currentTarget.style.background = '#850B6F'}
                >
                  <i className="fa-solid fa-file-invoice text-xs" />
                  <span>Request Cost Sheet</span>
                </button>
              </div>

              {/* Exactly 4 Specs with Matching Theme Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-gray-100">
                {overviewSpecs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FAF2F8] border border-[#850B6F] text-[#850B6F] flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5 shadow-sm font-bold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#111111] font-bold text-[16px] sm:text-[17px] mb-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[#6c757d] text-[13.5px] sm:text-[14px] font-medium m-0 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
