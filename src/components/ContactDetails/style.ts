import styled from "styled-components";
import media from "styled-media-query";

interface IIconName {
    background: string;
}

export const ContactDetailsContainer = styled.div`

    .iconEdit{
        font-size: 20px;
        margin-right: 16px;
        margin-top: 5px;
    }

    .iconDelete{
        font-size: 20px;
        margin-top: 5px;
    }
`

export const NameInfo = styled.div`

    h1{
        text-align: center;
    }
`

export const IconName = styled.div<IIconName>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: ${props => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: #161618;
    margin: 0 auto;
`

export const ContactInfo = styled.div`
    margin: 0 auto;
    padding: 10px 15px;
    max-width: 100%;
    background: #262626;
    border-radius: 10px;

    p{
        margin: 0px;
        font-weight: 500;
    }

    /* ${media.greaterThan("small")`
        padding: 20px 30px;
    `} */

    ${media.greaterThan("medium")`
        box-sizing: border-box;
        padding-top: 30px;
        margin: 40px auto;  
        /* width: 100%; */
        max-width: 600px;
        height: 300px;

        p{
            margin: 0px;
            font-weight: 500;
            font-size: 22px;
        }
    `}
`
export const Info = styled.div`
    margin-top: 30px;
    display: flex;

    p{
        font-weight: 400;
        max-width: 80%;
    }
    
    .icon{
        font-size: 20px;
        margin-right: 10px;
    }
`