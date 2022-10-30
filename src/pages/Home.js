import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="section section-welcome">
        <h1 className="text-9xl text-pink-400">Cookie ❤</h1>
      </div>
      <div className="section section-services">section 2</div>
      <div className="section section-space">section 2</div>
      <div className="section section-about">
        <div></div>
      </div>
      <div className="section section-contact">
        <div className="flex">
          <div>
            <iframe
              title="fgym"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4450.1730944011515!2d23.638985085703062!3d37.93632717989913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1666543862925!5m2!1sen!2sgr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>Tel: 2101234567</div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
