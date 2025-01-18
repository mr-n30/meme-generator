import { useState } from "react"

export default function Main() {
  const [memeText, setMemeText] = useState({top: "Shut up", bottom: "and take my money!"})

  function handleChange(event) {
    const {value, name} = event.currentTarget
    setMemeText(prev => ({
      ...prev,
      [name]: value
    }))
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
        <button className="form-button-meme">Get a new meme image 🖼️</button>
      </form>
      <div className="meme-image-container">
        <span className="top">{memeText.top}</span>
        <span className="bottom">{memeText.bottom}</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHz4zJFmNhrBqYd-tbdiw_og5CrCQcv207NQ&s" alt="Meme Background Image" className="img-meme" />
      </div>
    </main>
  )
}
