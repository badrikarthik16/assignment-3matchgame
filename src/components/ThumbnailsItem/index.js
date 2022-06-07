import './index.css'

const ThumbnailsItem = props => {
  const {details, checkPicture} = props
  const {id, thumbnailUrl} = details

  const clickThumbnails = () => {
    checkPicture(id)
  }

  return (
    <li className="each-thumb-container">
      <button type="button" className="thumb-button" onClick={clickThumbnails}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}

export default ThumbnailsItem
