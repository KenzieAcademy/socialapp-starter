import React from 'react'
import DataService from "../../dataService"
import {store} from '../../redux'
import { Button } from 'evergreen-ui';

function UploadPicture() {
    const client=new DataService();
    const uploadedImage = React.useRef(null)
    const imageUploader = React.useRef(null)

    // Assume upload picture is on self profile
    const username = store.getState().auth.login.result.username
    console.log(username)
    const handleImageUpload = e => {
        const [file] = e.target.files;
        const picture = new FormData()
        picture.append('picture', file)
        client.setUsersPicture(username, picture)
      }

      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none"
            }}
          />
          <img
              ref={uploadedImage}
              style={{
                width: "100%",
                height: "100%"
              }}
           ></img>
           
          <Button 
          marginRight={16} appearance="primary"  onClick={() => imageUploader.current.click()}>
          Click to Upload Profile Image
           </Button>
        </div>
      );
    }


export default UploadPicture

 
