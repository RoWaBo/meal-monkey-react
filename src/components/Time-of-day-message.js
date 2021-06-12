
const TodMessage = () => {

    function timeOfDay() {
        const date = new Date()
        const time = Number(`${date.getHours()}.${date.getMinutes()}`)

        if (time > 5 && time < 12) return "morning"        
        if (time > 12 && time < 18) return "afternoon"        
        if (time > 18 && time < 24) return "evening"   
        if (time > 0 && time < 5) return "night"   
    }

    return ( 
        <>Good { timeOfDay() } </>
     );
}
 
export default TodMessage;