import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 bg-light mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          &copy; {new Date().getFullYear()} SimpleTicket
        </div>
        <div className="col-md-6 text-center">Get sellin.</div>
      </div>
    </footer>
  );
};

export default Footer;
