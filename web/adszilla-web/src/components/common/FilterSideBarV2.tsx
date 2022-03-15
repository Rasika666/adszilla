import React from 'react';
import {FormControl, Slider} from "@mui/material";

const FilterSideBarV2 = () => {

  function valuetext(value: number) {
    return `Rs: ${value}`;
  }

  const marks = [
    {
      value: 10,
      label: 'Rs: 10K',
    },
    {
      value: 1000000,
      label: 'Rs: 1000K',
    },
  ];


  return (
      <div className="full-page-sidebar">
        <div className="full-page-sidebar-inner" data-simplebar>
          <div className="sidebar-container">


            <div className="sidebar-widget">
              <h3>Channel</h3>
              <div className="input-with-icon">
                <div id="autocomplete-container">
                  <input id="autocomplete-input" type="text" placeholder="Search on Channel"/>
                </div>
                <i className="icon-material-outline-location-on"></i>
              </div>
            </div>


            <div className="sidebar-widget">
              <h3>Category</h3>
              <div className="keywords-container">
                <div className="keyword-input-container">
                  <input type="text" className="keyword-input" placeholder="Search on Category"/>
                  <button className="keyword-input-button ripple-effect"><i
                      className="icon-material-outline-add"></i></button>
                </div>
                <div className="keywords-list"></div>
                <div className="clearfix"></div>
              </div>
            </div>

            <div className="sidebar-widget">
              <h3>Search on Category</h3>
              <select className="default" multiple data-selected-text-format="count" data-size="7"
                      title="All Categories">
                <option>Admin Support</option>
                <option>Customer Service</option>
                <option>Data Analytics</option>
                <option>Design & Creative</option>
                <option>Legal</option>
                <option>Software Developing</option>
                <option>IT & Networking</option>
                <option>Writing</option>
                <option>Translation</option>
                <option>Sales & Marketing</option>
              </select>
            </div>

            <div className="submit-field">
              <FormControl fullWidth>
                <h3>Search on Budget</h3>
                <Slider
                    getAriaLabel={() => 'Temperature'}
                    orientation="horizontal"
                    getAriaValueText={valuetext}
                    min={10000}
                    max={1000000}
                    valueLabelDisplay="on"
                    marks={marks}
                />
              </FormControl>
            </div>





            <div className="sidebar-widget">
              <h3>Tags</h3>

              <div className="tags-container">
                <div className="tag">
                  <input type="checkbox" id="tag1"/>
                  <label htmlFor="tag1">front-end dev</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="tag2"/>
                  <label htmlFor="tag2">angular</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="tag3"/>
                  <label htmlFor="tag3">react</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="tag4"/>
                  <label htmlFor="tag4">vue js</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="tag5"/>
                  <label htmlFor="tag5">web apps</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="tag6"/>
                  <label htmlFor="tag6">design</label>
                </div>
                <div className="tag">
                  <input type="checkbox" id="tag7"/>
                  <label htmlFor="tag7">wordpress</label>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>

          </div>

          <div className="sidebar-search-button-container">
            <button className="button ripple-effect">Search</button>
          </div>

        </div>
      </div>
  );
};

export default FilterSideBarV2;