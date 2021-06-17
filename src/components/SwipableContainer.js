import { useRef } from "react"
import "../scss/swipable-container.scss"

const SwipableContainer = ({ children }) => {
    let startX
    let currentX
    const swiper = useRef()

    function touchStart(e) {
        let swipeContainerX = parseInt(swiper.current.style.left) || 0

        if (swipeContainerX !== 0) {
            startX = e.touches[0].clientX - swipeContainerX     
        } else {
            startX = e.touches[0].clientX     
        }
    }

    function touchMove(e) {
        currentX = e.touches[0].clientX - startX

        swiper.current.style.left = currentX + "px"
    }

    return ( 
        <div ref={swiper} className="swipable-container" onTouchStart={touchStart} onTouchMove={touchMove}>{ children }</div>
     );
}
 
export default SwipableContainer;