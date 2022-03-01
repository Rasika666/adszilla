import React from 'react';

import '../../css/style.css';
import '../../css/colors/blue.css';

import Header from "../common/Header";
import Footer from "../common/Footer";

const DashboardLayout = (props: any) => {
  return (
      <div id="wrapper">
        <Header />

        <div className="container">
          {props.children}
        </div>
        <Footer />

      </div>
  );
};

export default DashboardLayout;