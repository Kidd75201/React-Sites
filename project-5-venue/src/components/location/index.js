import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31914.949436395967!2d-96.80966010414154!3d32.77678194715281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993c763e9a67%3A0xff6fdb309409229e!2sPerot+Museum+of+Nature+and+Science!5e0!3m2!1sen!2sus!4v1553218946395"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
