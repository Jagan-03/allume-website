import React from "react";

const FooterBanner: React.FC = () => {
  return (
    <div className="bg-primary grid md:grid-cols-2 grid-cols-1">
        <div className="h-full p-10 flex flex-col space-y-5">
            <h1 className="text-5xl text-gray-200 font-semibold">Allume Consultancy</h1>
            <h3 className="text-3xl text-orange-600">Get in Touch</h3>
            <h3 className="text-2xl text-gray-200 border-b-4 pb-5 border-gray-200">
                Let us help you transform and grow
            </h3>
            <p className="text-xl text-gray-200">Follow us on social media</p>
            <div className="flex space-x-4">
                <a href="/">
                    <img width={35} className="hover:scale-105 duration-500" src="/icons/linkedin.png" alt="linkedin" />
                </a>
                <a href="/">
                    <img width={35} className="hover:scale-105 duration-500" src="/icons/facebook.png" alt="facebook" />
                </a>
                <a href="/">
                    <img width={35} className="hover:scale-105 duration-500" src="/icons/twitter.png" alt="twitter" />
                </a>
            </div>
        </div>
        <div className="h-full p-10 flex flex-col md:items-end justify-end space-y-5">
            <div className="w-60 flex items-start space-x-3">
                <img width={20} src="/icons/location.png" alt="location" />
                <p className="text-gray-200">
                    236, 7th Cross Street, Heritage Jayendra Nagar, Senbakkam, Chennai, Tamilnadu, 600044, India
                </p>
            </div>
            <div className="w-60 flex items-start space-x-3">
                <img width={20} src="/icons/telephone.png" alt="location" />
                <p className="text-gray-200">
                    +91 98800 36363 
                </p>
            </div>
        </div>
    </div>
  )
}

export default FooterBanner;
