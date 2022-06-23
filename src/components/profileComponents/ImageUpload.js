import React, { useState } from 'react'
import ImageCropper from './ImageCropper'
import { updateUserAvatar } from '../../Redux/Actions/userActions'
import { useDispatch, useSelector } from 'react-redux';

const ImageUpload = () => {
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.userDetails);
    const { user } = userDetails;


    const [blob, setBlob] = useState(null);
    const [inputImg, setInputImg] = useState('')

    const getBlob = (blob) => {
        // pass blob up from the ImageCropper component
        setBlob(blob)
    }

    const onInputChange = (e) => {
        // convert image file to base64 string
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setInputImg(reader.result)
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const handleSubmitImage = (e) => {
        // upload blob to firebase 'images' folder with filename 'image'
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", inputImg);
        dispatch(updateUserAvatar({ user, formData }))
    }


    return (
        <form onSubmit={handleSubmitImage} className="form-upload-img" enctype="multipart/form-data">
            <input
                className='custom-file-input'
                type='file'
                name='file'
                accept='image/*'
                onChange={onInputChange}
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
                className='btn btn-submit-change-avt'
                type='submit'>Submit</button>
        </form>
    )
}

export default ImageUpload