import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAvatar } from "../../Redux/Actions/userActions";

const Avatar = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.userDetails);
  const { user } = userDetails;
  // console.log(">>>User", user);

  const handleFileSelect = (e) => {
    e.preventDefault();
    // console.log(">>>view img", e.target.files[0]);
    const formData = new FormData();
    // console.log(">>>view formData: ", formData);
    formData.append("file", e.target.files[0]);
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
        </div>
      </div>
    </>
  );
};

export default Avatar;
