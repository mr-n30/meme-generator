import { useState, useEffect } from "react"

export default function Main() {
  const [memeText, setMemeText] = useState({top: "Shut up", bottom: "and take my money!"})
  const [memeUrl, setMemeUrl] = useState("")
  const [id, setId] = useState(0)
  const [memeUrlLength, setMemeUrlLength] = useState(0)
  const [altText, setAltText] = useState("")

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
      .then(({ data }) => {
        setMemeUrlLength(data.memes.length)
        setAltText(data.memes[id].name)
        setMemeUrl(data.memes[id].url)
      })
  }, [id])

  function nextImage() {
    setId(prev => {
      if (prev < memeUrlLength - 1)
        return prev + 1
      return prev
    })
  }

  function previousImage() {
    setId(prev => {
      if (prev > 0)
        return prev - 1
      return prev
    })
  }

  function randomMeme() {
    setId(Math.floor(Math.random() * memeUrlLength) + 0)
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
          <button onClick={previousImage}>Previous Image 🖼️</button>
          <button onClick={nextImage}>Next Image 🖼️</button>
          <button onClick={randomMeme}>Random Meme 🖼️</button>
        </div>
      </form>
      <div className="meme-image-container">
        <span className="top">{memeText.top}</span>
        <span className="bottom">{memeText.bottom}</span>
        <img src={memeUrl} alt={altText + " Meme Image"} className="img-meme" />
      </div>
    </main>
  )
}
