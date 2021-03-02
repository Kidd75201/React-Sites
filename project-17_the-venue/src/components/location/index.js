import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.0704668895196!2d-96.81244874897241!3d32.79039078087466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992f5ccee5af%3A0x21611d4f28860fa3!2sAmerican%20Airlines%20Center!5e0!3m2!1sen!2sus!4v1614700781932!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
