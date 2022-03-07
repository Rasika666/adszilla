import React, {FC, PropsWithChildren} from 'react';

export interface CommonCardWrapperProps{
  header: CommonCardHeaderProps,
};

export interface CommonCardHeaderProps{
  isHeaderVisibility: boolean,
  text: string;
};

const CommonCardWrapper: FC<CommonCardWrapperProps>= ({header, children}) => {
  return (
      <div className="col-xl-12">
        <div className="dashboard-box margin-top-0">
          {header.isHeaderVisibility && (
              <div className="headline">
                <h3><i className="icon-material-outline-business-center"></i>{header.text}</h3>
              </div>
          )}

          <div className="content">
            {children}
          </div>
        </div>
      </div>
  );
};

export default CommonCardWrapper;