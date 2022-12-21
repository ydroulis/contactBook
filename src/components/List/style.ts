import styled from "styled-components";
import media from "styled-media-query";

export const ListContainer = styled.div`
    padding: 20px 0px;

    ${media.greaterThan("small")`
        padding: 20px 30px;
    `}

    ${media.greaterThan("medium")`
        padding: 20px 70px;
    `}
`

export const LetterGroups = styled.div`
    display: flex;

    p{
        margin: 10px 40px 10px 10px;
        color: #148dff;
        font-weight: 600;
    }

    ${media.greaterThan("small")`
        p{
            margin-top: 30px;
            font-size: 22px;
        }
    `}

    ${media.greaterThan("medium")`
        p{
            margin-top: 80px;
            font-size: 30px;
        }
    `}

    ${media.greaterThan("large")`
        p{
            font-size: 28px;
        }
    `}
`

export const People = styled.div`

`