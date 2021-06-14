import "../scss/header.scss"
import TimeOfDayMessage from "./Time-of-day-message"

const Header = ({ userName, children }) => {
    return ( 
        <header className="header">
            <h2 className="header__text">Good <TimeOfDayMessage /> { userName }</h2>
            { children }
        </header>
     );
}
 
export default Header;