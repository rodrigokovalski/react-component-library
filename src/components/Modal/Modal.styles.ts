import styled from "styled-components";

const StyledModal = styled.dialog`
    width: 400px;
    border-radius: 4px;
    max-height: 80vh;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border: 1px solid #000;
    padding: 16px;
    font-family: Arial, sans-serif;


    &::backdrop {
        background-color: #fff;
        opacity: 0.35;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

`;

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
        margin: 0;
    }
    
`;

const StyledFooter = styled.div`
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    button:last-child {
        margin-left: 16px;
    }
`;

export { StyledModal, StyledHeader, StyledFooter }