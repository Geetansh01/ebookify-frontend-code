import React from 'react'
import { useState, useRef } from 'react'
import Reader from './Reader'
import { Client } from "@gradio/client";
import "../styles/home.css"

const Home = () => {

    // const [chapters, setpages] = useState(["This is sentence 1?\nWho are you\nI am Geetansh\n", "This is sentence 2", "This is sentence 3"]) //Sample data for development
    const [chapters, setchapters] = useState([])
    const [curr_ch, setcurr_ch] = useState(0)
    const [Files, setFiles] = useState(null)
    
    const btnref1 = useRef();

    const uploadFiles = async () => {
        btnref1.current.innerText = "Processing!"
        if (Files && Files.length > 0) {
            // Read the PDF file as Blob 
            const exampleFile = new Blob([await Files[0].arrayBuffer()], { type: Files[0].type });

            try {
                const client = await Client.connect("http://localhost:7860/");
                const response = await client.predict("/process_pdf", { pdf: exampleFile });
                // console.log(response.data[0])
                setchapters(response.data[0])
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        } else {
            console.error("No file uploaded.");
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
        event.target.style.borderColor = "#aaa";
        btnref1.current.innerText = "Convert to pdf"
    };
    
    const handleDragEnter = (event) => {
        event.preventDefault();
        event.target.style.borderColor = "#66b3ff";
    };
    
    const handleDragLeave = (event) => {
        event.preventDefault();
        event.target.style.borderColor = "#aaa";
    };

    return (
        <div className='home bd'>
            {(chapters.length == 0) &&
                <div className='bd navbar'>
                    Ebookify
                </div>
            }
            {(chapters.length == 0) &&
                <div
                    className="dropzone bd"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}>
                    <h1>Drop your pdf like it's hot 🔥</h1>
                    <div>
                        <button ref={btnref1} onClick={() => { uploadFiles() }} >Drop it!</button>
                    </div>
                </div>
            }
            {(chapters.length != 0) && <Reader content={chapters[curr_ch]} setcurr_ch={setcurr_ch} curr_ch={curr_ch} total_chs={chapters.length} />}
        </div>
    )
}

export default Home


