import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri"

const Container = styled.section`
    width: 100%;
    height: 87px;
    position: relative;
`

const Image = styled.img`
width: 70px;
height: 70px;
border-radius: ${props => props.form ? "50%" : "10px"};
object-fit: cover;
box-shadow: 1px 2px 4px 2px rgb(0 0 0 / 16%);

position: absolute;
left: 0;
top: 50%;
transform: translate(0, -50%);
z-index: 1; 
`

const BackgroundBox = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 4px 3px 10px 1px rgb(0 0 0 / 15%);
    border-radius: 60px 10px 10px 60px;
    padding-left: 80px;
`

const CardHeading = styled.h2`
    font-size: 22px;
    font-weight: bold;
    line-height: 1.8rem;
    color: #4A4B4D;    
`

const CardDescription = styled.p`
    font-size: 11px;
    color: #B6B7B7;    
`

const Circle = styled.div`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px 1px rgb(0 0 0 / 15%);
    background-color: white;
    color: #FC6011;
    font-size: 1.5rem;

    display: grid;
    place-content: center;

    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1; 
`

const BigCategoryCard = ({ imgUrl, imgForm, heading, description }) => {
    return (
        <Container>
            <Image src={imgUrl} alt={heading} form={imgForm}/>
            <Circle>
                <RiArrowRightSLine />
            </Circle>
            <BackgroundBox>
                <CardHeading>{heading}</CardHeading>
                <CardDescription>{description}</CardDescription> 
            </BackgroundBox>
        </Container>
    );
}

export default BigCategoryCard;