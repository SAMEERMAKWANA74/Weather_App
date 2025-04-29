import clouds from '/assests/clouds.svg';
import '../src/index.css';

const CurrentWeather = ({currentWeather}) => {
  return (
      <div className="current-wether">
                      <img src={`icons/${currentWeather.weatherIcon}.svg`} alt="clouds" className="weather-icon" />
                      <h2 className="temperature">{currentWeather.temperature}
                        <span>°C</span></h2>
                      <p className="description">{currentWeather.description}</p>
      </div>
  )
}

export default CurrentWeather
