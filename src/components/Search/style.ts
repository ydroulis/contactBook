import styled from 'styled-components';
import media from "styled-media-query";

export const SearchContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    position: relative;

    .searchIcon{
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 22px;
        }

    ${media.greaterThan("small")`
        padding: 20px 30px;

        .searchIcon{
            top: 35px;
            left: 40px;
        }
    `}

    ${media.greaterThan("medium")`
        padding: 20px 30px;

        .searchIcon{
            top: 41px;
            left: 45px;
        }
    `}
`

export const SearchInput = styled.input`
    background: #353839;
    height: 40px;
    width: 100%;
    border-radius: 20px;
    border: none;
    padding-left: 45px;
    font-weight: 600; 
    box-sizing: border-box;

    &::placeholder{
        color: #a9a9a9;
    }

    ${media.greaterThan("small")`
        height: 50px;
        border-radius: 25px;
    `}

    ${media.greaterThan("medium")`
        height: 65px;
        border-radius: 30px;
        padding-left: 55px;

        &::placeholder{
            font-size: 18px;
            font-weight: 500;
        }
    `}
`