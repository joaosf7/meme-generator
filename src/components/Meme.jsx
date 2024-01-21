import "./Meme.css"
import { useEffect, useState } from "react"

function Meme(){
    const [meme, setMeme] = useState({
        topText: "Shut up",
        bottomText: "And take my money",
        randomImage: "https://i.imgflip.com/3si4.jpg"
    })
    const [allMemes, setAllMemes] = useState({})

      /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

      useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
      },[])

    function getMeme() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:    memesArray[randomNumber].url
            })
        )
    }

    function hanldeChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className='input-boxes'>
                <div className='input-box'>
                <p className='upside-text'>Top text</p>
                <input
                    type='text'
                    onChange={hanldeChange}
                    name="topText"
                    value={meme.topText} />
                </div>
                <div className='input-box'>
                <p className='upside-text'>Bottom text</p>
                <input
                    type='text'
                    onChange={hanldeChange}
                    name="bottomText"
                    value={meme.bottomText} />
                </div>
            </div>
            <button className='form-button' onClick={getMeme}>Get a new meme image 🖼</button>
            <div className="meme">
                <img className='image' src={meme.randomImage} alt="Meme image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme