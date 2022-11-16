import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div id="contactForm" className="flex flex-col items-start md:p-20 p-10">
        <h1 className="text-5xl font-bold text-gray-700 mb-10 underline underline-offset-8 decoration-orange-600 leading-snug">
            Let's talk about your project!
        </h1>
        <p className="text-lg">
            To get your project underway, simply contact us and an expert will get in touch with you as soon as possible.
        </p>
      <div className="w-full max-w-5xl">
        <form className="pt-6 pb-8 mb-4">
          <div className="mb-4 grid md:grid-cols-2 grid-cols-1 gap-4">
            <input
              className="shadow appearance-none border w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
            <input
              className="shadow appearance-none border w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow h-48 resize-none appearance-none border w-full break-words p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="How can we help you?"
            />
          </div>
          <div className="flex mb-4 items-center space-x-2">
            <input
                className="w-4 h-4"
                type="checkbox"
                id="checkbox"
            />
            <p>I agree to <span><a href="/" className="underline decoration-orange-600">Privacy Policy</a></span></p>
          </div>
          <div>
            <button type="submit" className="border-2 hover:border-sky-600 hover:bg-sky-600 hover:text-gray-100 duration-300 border-gray-700 px-5 py-2 w-40 rounded-3xl text-xl">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
