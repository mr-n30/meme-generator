export default function Main() {
  return (
    <main className="main-meme">
      <form className="form-meme">
        <div className="form-group">
          <label htmlFor="top-text">
            Top Text 
          </label>
          <input id="top-text" className="form-input-meme" placeholder="shut up" type="text" name="top_text" />
        </div>
        <div className="form-group">
          <label htmlFor="bottom-text">
            Bottom Text
          </label>
          <input id="bottom-text" className="form-input-meme" placeholder="and take my money!" type="text" name="bottom_text" />
        </div>
        <button className="form-button-meme">Get a new meme image 🖼️</button>
      </form>
      <div className="meme-image-container">
        <img src="https://wallpapers.com/images/featured/funny-meme-pictures-ppzthb74p3b686b9.jpg" alt="Meme Background Image" className="img-meme" />
      </div>
    </main>
  )
}
