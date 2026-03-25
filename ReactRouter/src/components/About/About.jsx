import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="THE BAR AREA.png"
                          alt="image"
                          className='rounded-3xl w-110 h-110' 
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          CHHAHARI ARCHITECTURAL STUDIOS
                      </h2>
                      <p className="mt-6 text-gray-600">
                       chhaharistudios@gmail.com<br></br><br></br>nepal +977 9802365339<br></br><br></br>
                       Chhahari Architectural Studios is a Kathmandu based design led architecture and interior design practice with a strong focus on finely crafted projects.
                       To us architecture goes beyond the four walls. Architecture for us is a means to interrogate social, political, economic and philosophical ideas and issues that surrounds us. It looks at history, culture and art to form ideas and points of references.  It is a means to understand these topics from a different perspective with the hope of finding solutions or suggest paths that lead to some sort of solution. We believe in simple, locally innovative, holistic design approach and to produce clever site responsive architecture and design solutions that challenges the status quo. 
                      </p>
                      <p className="mt-4 text-gray-600">
                        We believe that materials, space, lighting and the composition of these elements can change the way one experiences space. 
                        We like to think of our projects as a human; unique and particular to the site, clients, brief and purpose at hand, with a focus on sustainability and integration with landscape and community.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}