import React, { useState } from "react";
function UploadForm() {
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        console.log('Uploading File:', file);

    };

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
}



export default UploadForm;