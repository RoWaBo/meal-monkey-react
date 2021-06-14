const SubHeader = ({ heading, actionText }) => {

    // STYLING RULES
    const style = {
        subHeader: {
            display: "flex",
            alignItems: "center",
        },
        heading: {
            color: "#4a4b4d",
            fontSize: "20px",
            fontWeight: "400",
            marginRight: "auto"
        },
        actionText: {
            fontSize: "13px",
            fontWeight: "500",
            color: "#FC6011",
            paddingTop: ".2rem",
            cursor: "pointer"
        }    
    }

    return ( 
        <header className="sub-header" style={style.subHeader}>
            <h2 className="sub-header__heading" style={style.heading}>{ heading }</h2>
            <h3 className="sub-header__action-text" style={style.actionText}>{ actionText }</h3>
        </header>
     );
}
 
export default SubHeader;