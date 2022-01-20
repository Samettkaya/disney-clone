import React from 'react';

const features = [
    {
      name: 'Eternals',
      description:
        'Sinemalarda.',
      image:'https://lumiere-a.akamaihd.net/v1/images/eu_payoff_eternals_c169_r_d81b0011.jpeg?region=0,0,1460,824&width=600',
      category:'Marvel'
    
    },
    {
      name: 'Erkenden rezervasyon yaptır',
      description:
        'En uygun fiyatlarımız arasından seçim yap ve esnek rezervasyon imkanlarımızdan faydalan.',
      image:'https://lumiere-a.akamaihd.net/v1/images/eu_dlp-reopening-2021_c169_r_c8457f27.jpeg?region=0,0,1460,824&width=600',
      category:'DISNEYLAND® PARIS'
    },
 
  ]

function Section() {
  return (
    <div className="py-5 bg-[#F1F2F3] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" ">
          <dl className="  space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white">
                <figure className="overflow-hidden">
                <img className='cursor-pointer hover:scale-105 transition delay-150 duration-300 ease-in' src={feature.image} />
                </figure>
               
                <div className='p-8 h-44 items-center justify-center'>
                  <dt>
                    <p className=" cursor-pointer text-lg leading-6 font-medium ">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-[14px]  text-base ">
                    {feature.description}
                  </dd>
                  <p className='absolute inset-x-8 bottom-8 font-bold text-xs'>{feature.category}</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Section;
