import React from 'react'

const Footer = () => {
  return (
    <div
    className="flex flex-col items-center bg-pink-900 text-white text-center text-surface dark:bg-pink-800 dark:text-white lg:text-left">
    <div className="container p-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="content-center mb-6 md:mb-0">
          

          <p className="mb-4">
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 ml-5 mt-10'>
          Cessame's <span className='font-bold text-pink-300'>Sweetz</span>
        </h1>
          We sell cakes, cupcakes and other sweet pastries.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
       <a className="mb-2 font-medium bg-black/20 rounded-md p-2" href='https://maps.app.goo.gl/ZNTGW45yGym1n5sr8'>Google Map Location</a>

          <iframe className='max-w-[750px] hidden md:flex lg:flex mb-4 mt-4 rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245937.94534153954!2d120.78852471612088!3d15.60337769052735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d7bab7e237a7%3A0x834d65aba6688bca!2sCabisuculan%20-%20Magtanggol%20Rd%2C%20Science%20City%20of%20Mu%C3%B1oz%2C%20Nueva%20Ecija!5e0!3m2!1sen!2sph!4v1715676353239!5m2!1sen!2sph"
       width="800" 
       height="300"  
       allowFullScreen="
       "  referrerPolicy="no-referrer-when-downgrade" title='CessSweets Location'></iframe>
        </div>
      </div>
    </div>

    
    <div className="w-full bg-black/5 p-4 text-center">
      © 2024 Copyright: <br></br>
      <a href="https://www.facebook.com/CessameSweetz.ph">Cessame's Sweetz</a>
    </div>
  </div>
  )
}

export default Footer
