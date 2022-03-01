import React from 'react';

import HeaderV2 from "../common/HeaderV2";

const Wrapper = (props: any) => {

  return (
      <div id="wrapper">
        <HeaderV2/>
        <div className="clearfix"></div>

        <div className="full-page-container">
          {props.children}
        </div>
      </div>
  );
};

export default Wrapper;