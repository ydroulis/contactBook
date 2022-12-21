import styled from "styled-components";
import media from "styled-media-query";

export const FormContainer = styled.div`
    .form{
        position: relative;
    }
`

export const FieldContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    .errors{
        color: #8e0000;
        font-weight: 500;
    }

    label{
        margin-bottom: 5px;
    }

    input{
        height: 30px;
        border-radius: 10px;
        background: #353839;
        color: #a9a9a9;
        padding-left: 10px;
        border: none;
    }

    ${media.greaterThan("medium")`
        padding: 0px 70px;
        margin-top: 25px;

        label{
            font-size: 22px;
            margin: 10px 0px;
        }

        input{
            height: 40px;
        }
    `}
`

export const ButtonSubimit = styled.button`
    position: absolute;
    right: 0px !important;
    bottom: 0px !important;
    border-radius: 10px;
    border: none;
    color: #353839;
    font-weight: 600;
    width: 110px;        
    height: 30px;

    ${media.greaterThan("medium")`
        right: 70px !important;
        width: 110px;
        height: 30px;
    `}
`

export const InlcudeField = styled.div`
    margin-top: 20px;
    width: 30px;
    height: 30px;
    background: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    box-sizing: border-box;
    font-size: 20px;
    border-radius: 5px;

    ${media.greaterThan("medium")`
        margin-left: 70px;
        width: 50px;
        height: 50px;
        font-size: 40px;
    `}
`

export const RemoveField = styled.div`
    margin-top: 20px;
    width: 30px;
    height: 30px;
    background: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    box-sizing: border-box;
    font-size: 20px;
    border-radius: 5px;

    ${media.greaterThan("medium")`
        margin-left: 70px;
        width: 50px;
        height: 50px;
        font-size: 40px;
    `}
`