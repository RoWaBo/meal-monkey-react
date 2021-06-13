import "../scss/header.scss"
import TimeOfDayMessage from "./Time-of-day-message"

const Header = ({ userName, actionText, children }) => {
    const actionElmnt = actionText || children 
    return ( 
        <header className="header">
            <h2 className="header__text"><TimeOfDayMessage />{ userName }</h2>
            <div className="header__actionElmnt">{ actionElmnt }</div>
        </header>
     );
}
 
export default Header;