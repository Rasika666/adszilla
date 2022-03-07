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
      <div className="col-xl-12" style={{margin: "5px 0px"}}>
        <div className="dashboard-box margin-top-0">
          {header.isHeaderVisibility && (
              <div className="headline">
                <h3><i className="icon-material-outline-business-center"></i>{header.text}</h3>
              </div>
          )}

          <div className="content with-padding padding-bottom-10">
            {children}
          </div>
        </div>
      </div>
  );
};

export default CommonCardWrapper;