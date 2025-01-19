import { useState, useEffect } from "react"

export default function Main() {
  const [memeText, setMemeText] = useState({top: "Shut up", bottom: "and take my money!"})
  const [memeUrl, setMemeUrl] = useState("")
  const [id, setId] = useState(99)
  const [memeUrlLength, setMemeUrlLength] = useState(0)

  function handleChange(event) {
    const {value, name} = event.currentTarget
    setMemeText(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Fetch meme API
  useEffect(function() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        setMemeUrlLength(data.data.memes.length)
        return setMemeUrl(data.data.memes[id].url)
      })
  }, [id])

  function nextImage() {
    setId(prev => {
      if (prev < memeUrlLength - 1)
        return prev + 1
      else
        return prev
    })
  }

  function previousImage() {
    setId(prev => {
      if (prev > 1)
        return prev - 1
      else
        return prev
    })
  }

  function randomMeme() {
    setId(Math.floor(Math.random() * (99 - 1 + 1)) + 1)
  }

  return (
    <main className="main-meme">
      <form className="form-meme" onSubmit={event => event.preventDefault()}>
        <div className="form-group">
          <label htmlFor="top-text">
            Top Text 
          </label>
          <input id="top-text" className="form-input-meme" placeholder="shut up" type="text" name="top" onChange={handleChange} value={memeText.top} />
        </div>
        <div className="form-group">
          <label htmlFor="bottom-text">
            Bottom Text
          </label>
          <input id="bottom-text" className="form-input-meme" placeholder="and take my money!" type="text" name="bottom" onChange={handleChange} value={memeText.bottom} />
        </div>
        <div className="form-button-group">
          <button onClick={previousImage}>Previous image 🖼️</button>
          <button onClick={nextImage}>Next image 🖼️</button>
          <button onClick={randomMeme}>Random Meme 🖼️</button>
        </div>
      </form>
      <div className="meme-image-container">
        <span className="top">{memeText.top}</span>
        <span className="bottom">{memeText.bottom}</span>
        <img src={memeUrl} alt="Meme Background Image" className="img-meme" />
      </div>
    </main>
  )
}
