import styled from "styled-components";
import media from "styled-media-query";

interface IPersonIcon {
    background: string
}

export const PersonContainer = styled.div`
    text-align: left;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    ${media.greaterThan("small")`
        margin-top: 28px;
        font-size: 18px;
    `}

    ${media.greaterThan("medium")`
        margin-top: 80px;
        font-size: 28px;
    `}

    
`

export const PersonIcon = styled.div<IPersonIcon>`
    height: 40px;
    width: 40px;
    background: ${props => props.background};
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #efefef;
    font-size: 22px;

    ${media.greaterThan("small")`
        height: 60px;
        width: 60px;
        font-size: 32px;
    `}

    ${media.greaterThan("medium")`
        height: 100px;
        width: 100px;
        margin-right: 40px;
        font-size: 32px;
    `}
`