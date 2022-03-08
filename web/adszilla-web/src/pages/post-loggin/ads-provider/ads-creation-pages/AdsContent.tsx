import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setAdCurrentPageAction} from "../../../../redux/post-loggin/actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";
import ImageUploading, {ImageListType} from "react-images-uploading";

const AdsContent = () => {
  const dispatch = useDispatch();

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const updateCurrentPage = () => {
    dispatch(setAdCurrentPageAction(AdCreatePage.CONTENT));
  };

  useEffect(() => {
    updateCurrentPage();
  }, []);


  const onChange = (
      imageList: ImageListType,
      addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };


  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i>Upload Ads</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">

          <div className="row">
            <div className="col-md-12">

              <div className="boxed-list-headline margin-bottom-25">
                <h3><i className="icon-material-outline-broken-image"></i> Image Uploader</h3>
              </div>

                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                >
                  {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps
                    }) => (
                      // write your building UI
                      <div>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                          <button className="button"
                                  style={isDragging ? {color: "red"} : undefined}
                                  onClick={onImageUpload}
                                  {...dragProps}
                          >
                            Click or Drop here Images
                          </button>
                          &nbsp;
                          <button className="button" onClick={onImageRemoveAll}>Remove all images</button>
                        </div>

                        <div className="margin-bottom-25"></div>

                        {imageList.map((image, index) => (
                            <div key={index}  style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                              <img src={image.dataURL} alt="" width="100"/>
                              <div>
                                <button className="button" onClick={() => onImageUpdate(index)}>Update</button> &nbsp;
                                <button className="button" onClick={() => onImageRemove(index)}>Remove</button>
                              </div>
                            </div>
                        ))}


                      </div>
                  )}
                </ImageUploading>
              </div>

            <div className="col-md-12">

              <div className="boxed-list-headline margin-bottom-25">
                <h3><i className="icon-material-outline-broken-image"></i> Video Uploader</h3>
              </div>

              <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
              >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                  }) => (
                    // write your building UI
                    <div>
                      <div style={{display: "flex", justifyContent: "space-between"}}>
                        <button className="button"
                                style={isDragging ? {color: "red"} : undefined}
                                {...dragProps}
                        >
                          Click or Drop here Videos
                        </button>
                        &nbsp;
                        <button className="button" >Remove all Videos</button>
                      </div>

                      <div className="margin-bottom-25"></div>

                      {imageList.map((image, index) => (
                          <div key={index}  style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <img  alt="" width="100"/>
                            <div>
                              <button className="button">Update</button> &nbsp;
                              <button className="button" >Remove</button>
                            </div>
                          </div>
                      ))}


                    </div>
                )}
              </ImageUploading>


            </div>

            <div className="col-md-12">

              <div className="boxed-list-headline margin-bottom-25">
                <h3><i className="icon-material-outline-broken-image"></i> Additional Documents Uploader(pdf*)</h3>
              </div>

              <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
              >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                  }) => (
                    // write your building UI
                    <div>
                      <div style={{display: "flex", justifyContent: "space-between"}}>
                        <button className="button"
                                style={isDragging ? {color: "red"} : undefined}
                                {...dragProps}
                        >
                          Click or Drop here Documents
                        </button>
                        &nbsp;
                        <button className="button">Remove all Documets</button>
                      </div>

                      <div className="margin-bottom-25"></div>

                      {imageList.map((image, index) => (
                          <div key={index}  style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <img alt="" width="100"/>
                            <div>
                              <button className="button" >Update</button> &nbsp;
                              <button className="button" >Remove</button>
                            </div>
                          </div>
                      ))}


                    </div>
                )}
              </ImageUploading>


            </div>


            </div>
          </div>
        </div>
        );
        };

        export default AdsContent;