import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E2329] transition-opacity duration-500">
      <div className="relative w-[200px] h-[200px]">
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <style>
            {`
              /* Define loading animation: opacity changes from high to low */
              @keyframes triangle-load {
                0% { opacity: 1; fill: #F0B90B; }
                100% { opacity: 0.1; fill: #F0B90B; }
              }
              
              /* Apply animation to each triangle */
              .loader-tri {
                fill: #F0B90B; /* Basic fill color */
                opacity: 0.1;  /* Default low opacity */
                animation: triangle-load 1.2s infinite ease-in-out;
              }

              /* Set delay for each triangle to create a rotation effect */
              .t1 { animation-delay: 0s; }
              .t2 { animation-delay: 0.2s; }
              .t3 { animation-delay: 0.4s; }
              .t4 { animation-delay: 0.6s; }
              .t5 { animation-delay: 0.8s; }
              .t6 { animation-delay: 1.0s; }
            `}
          </style>

          <circle cx="100" cy="100" r="95" fill="#1E2329"/>

          <g>
            <path className="loader-tri t1" d="M100 100 L100 55 L139 77.5 Z" />
            <path className="loader-tri t2" d="M100 100 L139 77.5 L139 122.5 Z" />
            <path className="loader-tri t3" d="M100 100 L139 122.5 L100 145 Z" />
            <path className="loader-tri t4" d="M100 100 L100 145 L61 122.5 Z" />
            <path className="loader-tri t5" d="M100 100 L61 122.5 L61 77.5 Z" />
            <path className="loader-tri t6" d="M100 100 L61 77.5 L100 55 Z" />
          </g>

          <circle cx="100" cy="100" r="85" fill="none" stroke="#F0B90B" strokeWidth="10"/>

          <path d="M100 55 L139 77.5 V122.5 L100 145 L61 122.5 V77.5 L100 55 Z"
            fill="none"
            stroke="#F0B90B"
            strokeWidth="10"
            strokeLinejoin="round"/>
          
          <path d="M100 55 V145 M61 77.5 L139 122.5 M139 77.5 L61 122.5"
            fill="none"
            stroke="#F0B90B"
            strokeWidth="6"
            strokeLinecap="round"/>

          <circle cx="100" cy="100" r="15" fill="#F0B90B"/>
        </svg>
      </div>
    </div>
  );
};