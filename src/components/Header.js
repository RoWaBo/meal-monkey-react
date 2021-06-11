import "./header.scss"

const Header = ({ headingText, interactionContent }) => {
    return ( 
        <header className="header">
            <h2 className="headingText">{ headingText }</h2>
            <div className="interactionContent">{ interactionContent }</div>
        </header>
     );
}
 
export default Header;