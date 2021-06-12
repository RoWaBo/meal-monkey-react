import "../scss/welcome-header.scss"
import FaIcon from "./Fa-icon"
import TimeOfDayMessage from "./Time-of-day-message"

const Header = ({ userName, faIconClassName }) => {
    return ( 
        <header className="welcome-header">
            <h2 className="welcome-header__text"><TimeOfDayMessage />{ userName }</h2>
            <div className="welcome-header__icon"><FaIcon faIconClassName={ faIconClassName }/></div>
        </header>
     );
}
 
export default Header;