import { React,  useState} from 'react';
import storage from './fireBaseConfig.js'
import {
    getDownloadURL,
    ref,
    uploadBytesResumable
} from 'firebase/storage';

function About() {

    const [percent, setPercent] = useState(0);
    const [file, setFile] = useState("");
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    function handleUpload() { 
        if (!file) { 
            alert("Pleawse choose a file first!")
        }
    
        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
    
                setPercent(percent)
            },
            (err) => console.log(err),
            () => { 
                getDownloadURL(uploadTask.snapshot.ref).then((url) => { 
                    console.log(url)
                })
            }
            
        )
    }
    return (
        <div>
            <div>
            <input type="file" onChange={handleChange} accept="" />
            <button onClick={handleUpload}>Upload to Firebase</button>
                <p>{percent} "% done"</p>
            </div>
        </div>
    );
}

export default About;