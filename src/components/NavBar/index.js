import './index.css'

const NavBar = props => {
  const {score, remainingTime} = props

  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="nav-logo"
      />
      <ul className="timer-score-container">
        <li>
          <p className="score-text">
            Score: <span className="orange-text">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="orange-text">{remainingTime} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
