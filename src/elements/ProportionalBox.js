import styled from "styled-components";

export default styled.div`
    display:block;
    width: 100vw;
    padding-top: ${props => props.height || '52%' };
    position: relative;

    ${ props => props.overlay && `
        &::after {
            content: "";
            width: 100%;
            height: 54%;
            position: absolute;
            left: 0;
            bottom: 0;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);     
        }
    `}
`