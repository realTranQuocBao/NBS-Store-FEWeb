import React, { useState } from 'react'
// import * as firebase from 'firebase/app'
import ImageCropper from './ImageCropper'
import { updateUserAvatar } from '../../Redux/Actions/userActions'
import { useDispatch, useSelector } from 'react-redux';

const ImageUpload = () => {
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.userDetails);
    const { user } = userDetails;


    const [blob, setBlob] = useState(null);
    console.log("blobbbbbbbbbbbbb", blob);
    const [inputImg, setInputImg] = useState('')
    console.log("inputimgggggggggg", inputImg);

    const getBlob = (blob) => {
        // pass blob up from the ImageCropper component
        setBlob(blob)
        // console.log("blobbbbbbb", blob);
    }

    const onInputChange = (e) => {
        // convert image file to base64 string
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', () => {
            setInputImg(reader.result)
            // console.log(">>>inputimgggggggggggggggggggggg", blob);
        }, false)

        if (file) {
            reader.readAsDataURL(file)
        }
        // dispatch(updateUserAvatar({ user, blob }))


    }

    const handleSubmitImage = (e) => {
        // upload blob to firebase 'images' folder with filename 'image'
        e.preventDefault()
        // firebase
        //     .storage()
        //     .ref('images')
        //     .child('image')
        //     .put(blob, { contentType: blob.type })
        //     .then(() => {
        //         // redirect user 
        //     })
        // const blob = new FormData();
        // console.log(">>>view formData: ", blob);
        // blob.append("file", e.target.files[0]);
        const formData = new FormData();
        // console.log(">>>view formData: ", formData);
        formData.append("file", inputImg);
        // console.log(">>>show inputimg", inputImg);
        dispatch(updateUserAvatar({ user, formData }))
        console.log("This is form dadaaaaaaaaaaaaaaa", { formData });
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