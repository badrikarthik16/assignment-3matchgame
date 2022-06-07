import './index.css'

const ScoreCard = props => {
  const {score, onRefresh} = props

  const onclickRefresh = () => {
    onRefresh()
  }

  return (
    <div className="score-card-container">
      <div className="score-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
        <p className="score-card-heading">YOUR SCORE</p>
        <h1 className="score-card-heading score-count">{score}</h1>
        <button
          type="button"
          className="refresh-button"
          onClick={onclickRefresh}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p className="score-card-heading play-again-text">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
