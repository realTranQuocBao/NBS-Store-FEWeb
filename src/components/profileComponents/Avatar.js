import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUserAvatar } from "../../Redux/Actions/userActions";
import ImageCropper from "./ImageCropper";

const Avatar = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const userDetails = useSelector(state => state.userDetails);
  const { user } = userDetails;
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
    formData.append("file", blob);
    dispatch(updateUserAvatar({ user, formData }))

  }
  const onCancelAvt = (e) => {
    e.preventDefault();
    history.push("/profile");
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
          <span className="btn-group-avt">
            <button
              className={`${inputImg}` ? `enableCancel` : "btn-cancel-change-avt"}
              onClick={onCancelAvt}>Cancel</button>
            <button
              className={`${inputImg}` ? `enable` : "btn-submit-change-avt"}
              onClick={onSubmitAvt}
            >Submit</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Avatar;