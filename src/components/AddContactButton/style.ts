import styled from "styled-components";
import media from "styled-media-query";


export const AddContactButtonContainer = styled.button`
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: #3333ff;
    color: #a9a9a9;
    font-size: 30px;
    border: none;
    border-radius: 10px;
    width: 40px;
    height: 40px;

    ${media.greaterThan("medium")`
        bottom: 30px;
        right: 30px;
        font-size: 50px;
        border-radius: 20px;
        width: 80px;
        height: 80px;
    `}

    ${media.greaterThan("large")`
        bottom: 50px;
        right: 50px;
        font-size: 60px;
        /* font-size: 50px;
        border-radius: 10px;
        width: 80px;
        height: 80px; */
    `}
`