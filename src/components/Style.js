import { ThemeProvider } from "styled-components";
import LargeHeading from "../elements/LargeHeading";
import ProportionalBox from "../elements/ProportionalBox";
import ImageCover from "../elements/ImageCover";
import Rating from "./Rating";
import ExtraInfo from "./ExtraInfo";

const theme = {
    primary: "goldenrod",
    secondary: "teal",
    warning: "red",
    alert: "orange",
    succes: "green"
}

const Styled = () => {
    return (
        <ThemeProvider theme={theme}>
            <section>
                <LargeHeading color="goldenrod" as="h2">Styled components</LargeHeading>
                <input type="text" name="bla" id="bla" />
                <button>Create</button>
            </section>
            <ProportionalBox overlay>
                <ImageCover src="https://source.unsplash.com/featured/?chocolatecake" />
                <div style={{ position:"absolute", bottom:"1rem", left:"1rem", zIndex:"1"}}>
                    <h4 style={{ color:"white", fontSize:"1rem" }}>Dark Chocolate Cake</h4>
                    <div style={{ display: "flex", gap: ".5rem"}}>
                        <Rating />
                        <ExtraInfo contentArray={ ["Cakes by Tella", "Desserts"] } />
                    </div>                    
                </div>
            </ProportionalBox>
        </ThemeProvider>
    );
}

export default Styled;