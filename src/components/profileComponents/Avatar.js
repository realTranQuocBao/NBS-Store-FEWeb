import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAvatar } from "../../Redux/Actions/userActions";
import ImageCropper from "./ImageCropper";

const Avatar = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.userDetails);
  const { user } = userDetails;
  // console.log(">>>User", user);
  const [inputImg, setInputImg] = useState('');
  const [blob, setBlob] = useState(null);

  const getBlob = (blob) => {
    // pass blob up from the ImageCropper component
    setBlob(blob)
  }

  const handleFileSelect = (e) => {
    e.preventDefault();
    // convert image file to base64 string
    const file = e.target.files[0]
    setBlob(file)
    const reader = new FileReader()

    reader.addEventListener('load', () => {
      setInputImg(reader.result)
    }, false)

    if (file) {
      reader.readAsDataURL(file)
    }
  }
  const onSubmitAvt = () => {
    const formData = new FormData();
    // console.log(">>>view formData: ", formData);
    formData.append("file", blob);
    // console.log(">>>View avatarUrl: ", avatarUrl);
    dispatch(updateUserAvatar({ user, formData }))

  }
  return (
    <>
      <div className="col-md-12">
        <div className="form">
          <label>Change Profile Avatar</label>
          <input
            className="form-control"
            type="file"
            name="image"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileSelect}
          />
          {
            inputImg && (
              <ImageCropper
                getBlob={getBlob}
                inputImg={inputImg}
              />
            )
          }
          <button
            className="btn btn-submit-change-avt"
            onClick={onSubmitAvt}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Avatar;
