import React, {FC} from 'react';

const Pagination: FC = () => {
  return (
      <nav className="pagination">
        <ul>
          <li className="pagination-arrow"><a href="#" className="ripple-effect"><i
              className="icon-material-outline-keyboard-arrow-left"></i></a></li>
          <li><a href="#" className="current-page ripple-effect">1</a></li>
          <li><a href="#" className="ripple-effect">2</a></li>
          <li><a href="#" className="ripple-effect">3</a></li>
          <li><a href="#" className="ripple-effect">4</a></li>
          <li className="pagination-arrow"><a href="#" className="ripple-effect"><i
              className="icon-material-outline-keyboard-arrow-right"></i></a></li>
        </ul>
      </nav>
  );
};

export default Pagination;