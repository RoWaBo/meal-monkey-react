import { FaStar } from "react-icons/fa";

const Rating = ({ iconSize }) => {

    const style = {
        small: ".7rem",
        large: "1.5rem"
    }

    function randomFloatNumber() {
        const max = 5
        const min = 2.5
        let randomNumber = Math.random() * (max - min) + min
        return randomNumber.toString().slice(0, 3) 
    }

    return ( 
        <div className="rating" style={{ display:"flex",alignItems:"center",color:"#FC6011" }}>
            <FaStar className="rating__icon" style={{ marginRight:".3rem", fontSize:style[iconSize] }}/>
            <p className="rating__score" style={{ fontSize:"11px" }}>{ randomFloatNumber() }</p>
        </div>
     );
}
 
export default Rating;