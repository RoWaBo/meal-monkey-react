import styled from "styled-components";

export default styled.h1`
font-size: 4em;
font-family: Arial, Helvetica, sans-serif; 
color: ${props => props.theme[props.color]}
`