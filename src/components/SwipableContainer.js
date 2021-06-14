import "../scss/swipable-container.scss"

const SwipableContainer = ({ children }) => {
    let startX
    let currentX

    function touchStart(e) {
        let swipeContainerX = parseInt(e.target.style.left) || 0

        if (swipeContainerX !== 0) {
            startX = e.touches[0].clientX - swipeContainerX     
        } else {
            startX = e.touches[0].clientX     
        }
    }

    function touchMove(e) {
        currentX = e.touches[0].clientX - startX

        e.target.style.left = currentX + "px"
    }

    return ( 
        <div className="swipable-container" onTouchStart={touchStart} onTouchMove={touchMove}>{ children }</div>
     );
}
 
export default SwipableContainer;