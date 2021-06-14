import { BsDot } from "react-icons/bs"
import "../scss/extra-info.scss"

const ExtraInfo = ({ contentArray }) => {

    const contents = contentArray
    const listContents = contents.map((content, index) => {
        if (index + 1 === contents.length) {
            return <li className="extra-info__item" key={index}>{content}</li>    
        } 
        return ( 
            <li className="extra-info__item" key={index}>
                {content}
                <BsDot className="extra-info__icon"/>
            </li>
        ); 
    })

    return (
        <ul className="extra-info">{ listContents }</ul>    
    );
}

export default ExtraInfo;