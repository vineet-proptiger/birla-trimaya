'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Birla Trimaya Phase 4?',
    answer: (
      <>
        Birla Trimaya Phase 4 offers thoughtfully planned <strong className="font-semibold text-[#111111]">3 &amp; 4 BHK luxury apartments</strong> along with select duplex-style homes sized from 1,600 to 2,551 sq. ft., designed with modern architecture, spacious living and dining areas, large private balconies, and optimal natural ventilation.
      </>
    ),
  },
  {
    question: 'What is the starting price of Birla Trimaya Phase 4?',
    answer: (
      <>
        Starting price begins from <strong className="font-semibold text-[#111111]">₹1.88 Cr*</strong>, with premium 3 &amp; 4 BHK apartments available with special launch benefits and priority booking options.
      </>
    ),
  },
  {
    question: 'How large is the project and what is the development structure?',
    answer:
      'Birla Trimaya Phase 4 is a premier integrated township planned across approximately 52 acres with over 32 acres of open green spaces and a curated central lake by Birla Estates.',
  },
  {
    question: 'Where exactly is Birla Trimaya Phase 4 located?',
    answer: (
      <>
        The project is strategically located in <strong className="font-semibold text-[#111111]">Shettigere, Airport Road, Devanahalli, Bangalore</strong>, just minutes from Kempegowda International Airport and key aerospace and hardware IT parks.
      </>
    ),
  },
  {
    question: 'What lifestyle amenities are provided at Birla Trimaya Phase 4?',
    answer:
      'Residents enjoy world-class amenities including a grand clubhouse, swimming pool, gymnasium, sports courts, kids’ play areas, jogging tracks, and landscaped leisure zones—creating a complete lifestyle within the township.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#850B6F] text-[#850B6F] bg-[#FAF2F8]">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked <span className="text-[#850B6F]">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-[#850B6F] mx-auto mt-3 rounded-full" />
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#FAF2F8] text-[#850B6F] font-bold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
