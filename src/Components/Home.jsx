import React from 'react'
import { useState, useRef } from 'react'
import Reader from './Reader'
import { Client } from "@gradio/client";
import pg_3_sample from "../assets/sample_pdfs/pg_3_sample.pdf"
import "../styles/home.css"

const Home = () => {

    // const [chapters, setpages] = useState(["This is sentence 1?\nWho are you\nI am Geetansh\n", "This is sentence 2", "This is sentence 3"]) //Sample data for development
    const [chapters, setchapters] = useState([])
    const [curr_ch, setcurr_ch] = useState(0)
    const [Files, setFiles] = useState(null)

    const btnref1 = useRef();

    const uploadFiles = async (sample = false) => {
        btnref1.current.innerText = "Processing! Only first 2 pages will be converted to eBook (Limits of free resources 😢)"
        if (sample || (Files && Files.length > 0)) {
            // Read the PDF file as Blob 
            let exampleFile;
            if (sample) {
                //Use hard coded "chapters" for sample PDF "../assets/sample_pdfs/pg_3_sample.pdf"
                setchapters([
                    'THE BOY WHO LIVED\n' +
                    'r. and Mrs. Dursley, of number four, Privet Drive, were\n' +
                    'Ne to say that they were perfectly normal, thank\n' +
                    "you very much. They were the last people you'd expect to be in-\n" +
                    'volved in anything strange or mysterious, because they just didn’t\n' +
                    'hold with such nonsense.\n' +
                    'Mr. Dursley was the director of a firm called Grunnings, which\n' +
                    'made drills. He was a big, beefy man with hardly any neck, al-\n' +
                    'though he did have a very large mustache. Mrs. Dursley was thin\n' +
                    'and blonde and had nearly twice the usual amount of neck, which\n' +
                    'came in very useful as she spent so much of her time craning over\n' +
                    'garden fences, spying on the neighbors. The Dursleys had a small\n' +
                    'son called Dudley and in their opinion there was no finer boy\n',
                    'anywhere.\n' +
                    'The Dursleys had everything they wanted, but they also had a\n' +
                    'secret, and their greatest fear was that somebody would discover it.\n',
                    '= CHAPTER ONE id\n' +
                    'They didn’t think they could bear it if anyone found out about the\n' +
                    'Potters. Mrs. Potter was Mrs. Dursley’s sister, but they hadn’t met\n' +
                    'for several years; in fact, Mrs. Dursley pretended she didn’t have a\n' +
                    'sister, because her sister and her good-for-nothing husband were\n' +
                    'as unDursleyish as it was possible to be. The Dursleys shuddered\n' +
                    'to think what the neighbors would say if the Potters arrived in the\n' +
                    'street. The Dursleys knew that the Potters had a small son, too, but\n' +
                    'they had never even seen him. This boy was another good reason\n' +
                    'for keeping the Potters away; they didn’t want Dudley mixing with\n',
                    'a child like that.\n' +
                    'When Mr. and Mrs. Dursley woke up on the dull, gray Tuesday\n' +
                    'our story starts, there was nothing about the cloudy sky outside to\n' +
                    'suggest that strange and mysterious things would soon be happen-\n' +
                    'ing all over the country. Mr. Dursley hummed as he picked out his\n' +
                    'most boring tie for work, and Mrs. Dursley gossiped away happily\n' +
                    'as she wrestled a screaming Dudley into his high chair.\n' +
                    'None of them noticed a large, tawny owl flutter past the\n',
                    'window.\n' +
                    'At half past eight, Mr. Dursley picked up his briefcase, pecked\n' +
                    'Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but\n' +
                    'missed, because Dudley was now having a tantrum and throwing\n' +
                    'his cereal at the walls. “Little tyke,” chortled Mr. Dursley as he left\n' +
                    'the house. He got into his car and backed out of number four’s\n',
                    'drive.\n' +
                    'It was on the corner of the street that he noticed the first sign\n' +
                    'of something peculiar — a cat reading a map. For a second, Mr.\n' +
                    'Dursley didn’t realize what he had seen — then he jerked his head\n' +
                    'around to look again. There was a tabby cat standing on the corner\n',
                    '+” THE BOY WHO IIVED *s\n' +
                    'of Privet Drive, but there wasn’t a map in sight. What could he\n' +
                    'have been thinking of? It must have been a trick of the light. Mr.\n' +
                    'Dursley blinked and stared at the cat. It stared back. As Mr. Durs-\n' +
                    'ley drove around the corner and up the road, he watched the cat in\n' +
                    'his mirror. It was now reading the sign that said Privet Drive — no,\n' +
                    'looking at the sign; cats couldn’t read maps or signs. Mr. Dursley\n' +
                    'gave himself a little shake and put the cat out of his mind. As he\n' +
                    'drove toward town he thought of nothing except a large order of\n' +
                    'drills he was hoping to get that day.\n' +
                    'But on the edge of town, drills were driven out of his mind\n' +
                    'by something else. As he sat in the usual morning traffic jam, he\n' +
                    'couldn’t help noticing that there seemed to be a lot of strangely\n' +
                    'dressed people about. People in cloaks. Mr. Dursley couldn’t bear\n' +
                    'people who dressed in funny clothes — the getups you saw on\n' +
                    'young people! He supposed this was some stupid new fashion. He\n' +
                    'drummed his fingers on the steering wheel and his eyes fell on a\n' +
                    'huddle of these weirdos standing quite close by. They were whis-\n' +
                    'pering excitedly together. Mr. Dursley was enraged to see that a\n' +
                    'couple of them weren’t young at all; why, that man had to be older\n' +
                    'than he was, and wearing an emerald-green cloak! The nerve of\n' +
                    'him! But then it struck Mr. Dursley that this was probably some\n' +
                    'silly stunt — these people were obviously collecting for something\n' +
                    '... yes, that would be it. The traffic moved on and a few minutes\n' +
                    'later, Mr. Dursley arrived in the Grunnings parking lot, his mind\n',
                    'back on drills.\n' +
                    'Mr. Dursley always sat with his back to the window in his office\n' +
                    'on the ninth floor. If he hadn’t, he might have found it harder to\n' +
                    'concentrate on drills that morning. He didn’t see the owls swooping\n',
                    'THE VANISHING GLASS\n' +
                    'early ten years had passed since the Dursleys had woken\n' +
                    'up to find their nephew on the front step, but Privet Drive\n' +
                    'had hardly changed at all. The sun rose on the same tidy front gar-\n' +
                    'dens and lit up the brass number four on the Dursleys’ front door;\n' +
                    'it crept into their living room, which was almost exactly the same\n' +
                    'as it had been on the night when Mr. Dursley had seen that fateful\n' +
                    'news report about the owls. Only the photographs on the mantel-\n' +
                    'piece really showed how much time had passed. Ten years ago,\n' +
                    'there had been lots of pictures of what looked like a large pink\n' +
                    'beach ball wearing different-colored bonnets — but Dudley Durs-\n' +
                    'ley was no longer a baby, and now the photographs showed a large\n' +
                    'blond boy riding his first bicycle, on a carousel at the fair, playing\n' +
                    'a computer game with his father, being hugged and kissed by his\n' +
                    'mother. The room held no sign at all that another boy lived in the\n',
                    'house, too.\n',
                    'x 18 *\n',
                    '+” THE VANISHING GLASS *s\n' +
                    'Yet Harry Potter was still there, asleep at the moment, but not\n' +
                    'for long. His Aunt Petunia was awake and it was her shrill voice\n' +
                    'that made the first noise of the day.\n' +
                    '“Up! Get up! Now!”\n' +
                    'Harry woke with a start. His aunt rapped on the door again.\n' +
                    '“Up!” she screeched. Harry heard her walking toward the\n' +
                    'kitchen and then the sound of the frying pan being put on the\n' +
                    'stove. He rolled onto his back and tried to remember the dream he\n' +
                    'had been having. It had been a good one. There had been a flying\n' +
                    'motorcycle in it. He had a funny feeling he’d had the same dream\n',
                    'before.\n' +
                    'His aunt was back outside the door.\n' +
                    '“Are you up yet?” she demanded.\n' +
                    '“Nearly,” said Harry.\n' +
                    '“Well, get a move on, I want you to look after the bacon. And\n' +
                    'don’t you dare let it burn, I want everything perfect on Duddy’s\n',
                    'birthday.”\n',
                    'Harry groaned.\n“What did you say?” his aunt snapped through the door.\n',
                    '“Nothing, nothing. . .”\n' +
                    'Dudley’s birthday — how could he have forgotten? Harry got\n' +
                    'slowly out of bed and started looking for socks. He found a pair\n' +
                    'under his bed and, after pulling a spider off one of them, put them\n' +
                    'on. Harry was used to spiders, because the cupboard under the\n' +
                    'stairs was full of them, and that was where he slept.\n' +
                    'When he was dressed he went down the hall into the kitchen.\n' +
                    'The table was almost hidden beneath all Dudley’s birthday pres-\n' +
                    'ents. It looked as though Dudley had gotten the new computer he\n',
                    'x 19 *\n'
                ])
            }
            else {
                exampleFile = new Blob([await Files[0].arrayBuffer()], { type: Files[0].type });
            }

            // Check file size (<= 1MB)
            const fileSize = exampleFile.size / (1024 * 1024); // Convert to MB
            if (fileSize > 1) {
                console.error("File size exceeds 1MB limit.");
                btnref1.current.innerText = "Due to limited free resources, only PDFs ≤ 1MB are supported. Try the sample PDF below instead!";
                return; // Exit the function if the file is too large
            }

            try {
                // const client = await Client.connect("http://localhost:7860/"); //For development phase
                const client = await Client.connect("Geetansh01/ebookify-backend2/"); //For production (using my hf spaces API (from gradio): it's public, anyone can use it 😊)
                const response = await client.predict("/process_pdf", { pdf: exampleFile });
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
                        <button className='read_ebook_btn' ref={btnref1} onClick={() => { uploadFiles() }} >Drop it!</button>
                    </div>
                </div>
            }
            {(chapters.length == 0) &&
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <p>Read the sample pdf below as eBook if above non-responsive. Backend sleeps after 48 hours of inactivity due to free hosting 😢 </p>
                    <a href={pg_3_sample}>Download PDF</a>
                    <button className='read_ebook_btn' style={{ width: '170px' }} onClick={() => { uploadFiles(true) }} >Read as eBook!</button>
                </div>}
            {(chapters.length != 0) && <Reader content={chapters[curr_ch]} setcurr_ch={setcurr_ch} curr_ch={curr_ch} total_chs={chapters.length} />}
        </div>
    )
}

export default Home


