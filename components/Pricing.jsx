'use client'
import React from 'react'

const pricingData = [
  {
    type: '3 BHK Apartments',
    area: '1600 Sq.Ft.',
    price: '₹ 1.88 Cr*',
    desc: 'Expansive 3 BHK luxury residences featuring generous living-dining areas, master suite, and cross-ventilation.',
  },
  {
    type: '4 BHK Apartments',
    area: '2551 Sq.Ft.',
    price: 'On Request',
    desc: 'Grand 4 BHK luxury residences designed for lavish living with premium specifications, servant room, and panoramic balconies.',
  },
]

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" className="w-full py-10 md:py-14 font-poppins overflow-hidden" style={{ background: '#F3F4F6' }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-10" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#850B6F] text-[#850B6F] bg-white">
            PRICE LIST
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Apartment Options &amp; <span className="text-[#850B6F]">Special Launch Pricing</span>
          </h2>
          <div className="w-16 h-1 bg-[#850B6F] mx-auto mt-3 rounded-full" />
        </div>

        {/* ── MOBILE / SMALL DEVICE CARDS (Visible below md breakpoint) ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {pricingData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
              className="bg-white rounded-[16px] p-6 sm:p-7 border border-[#850B6F]/30 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-between"
              style={{ borderTop: '4px solid #850B6F' }}
            >
              <div>
                {/* Top Header: Unit Type */}
                <div className="pb-4 border-b border-[#f1f5f9] mb-4">
                  <h3 className="text-[#111111] font-black text-[18px] sm:text-[20px] m-0">
                    {item.type}
                  </h3>
                </div>

                {/* Specs: Approximate Size */}
                <div className="mb-4 bg-gray-50 px-3.5 py-2.5 rounded-xl border border-gray-200 flex flex-col min-[340px]:flex-row min-[340px]:items-center justify-between gap-1">
                  <span className="text-gray-600 text-[11.5px] sm:text-xs font-bold uppercase tracking-wider">Approximate Size</span>
                  <strong className="text-[#111111] text-[13.5px] sm:text-[14px] font-extrabold">
                    {item.area}
                  </strong>
                </div>

                {/* Estimated Price Block */}
                <div className="mb-4">
                  <span className="text-[11.5px] text-[#850B6F] font-bold uppercase tracking-wider block mb-1">
                    PRICE
                  </span>
                  <div className="text-[#850B6F] font-black text-[24px] tracking-tight">
                    {item.price}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-3 rounded-[6px] font-extrabold text-[14px] transition-all duration-300 shadow-md active:scale-[0.98] cursor-pointer tracking-wider uppercase"
                style={{
                  background: '#850B6F',
                  color: '#ffffff',
                  border: '2px solid #850B6F',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#6A0958';
                  e.currentTarget.style.borderColor = '#6A0958';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#850B6F';
                  e.currentTarget.style.borderColor = '#850B6F';
                }}
              >
                PRICE BREAKUP
              </button>
            </div>
          ))}
        </div>

        {/* ── DESKTOP TABLE (Visible on md and above) ── */}
        <div className="hidden md:block bg-white rounded-[16px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-x-auto border border-[#850B6F]/30" data-aos="fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#111111] text-white">
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-left whitespace-nowrap">Apartment Type</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Approximate Size</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Price</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#222222] divide-y divide-[#f0f0f0]">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-[#FAF2F8] transition-colors duration-200">
                  <td className="py-5 px-4 lg:px-6 font-extrabold text-[16.5px] text-[#111111] text-left whitespace-nowrap">{item.type}</td>
                  <td className="py-5 px-4 lg:px-6 text-[15px] font-semibold text-[#495057] text-center whitespace-nowrap">{item.area}</td>
                  <td className="py-5 px-4 lg:px-6 font-black text-[17px] text-[#850B6F] text-center whitespace-nowrap">{item.price}</td>
                  <td className="py-5 px-4 lg:px-6 text-center whitespace-nowrap">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-[6px] font-extrabold text-[13px] transition-all duration-300 shadow-md cursor-pointer tracking-wider uppercase"
                      style={{
                        background: '#850B6F',
                        color: '#ffffff',
                        border: '2px solid #850B6F',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#6A0958';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#6A0958';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#850B6F';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#850B6F';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      PRICE BREAKUP
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default Pricing
