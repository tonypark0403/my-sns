import styled from 'styled-components';

const presenter = styled.div`
    border: 0px solid black;
    box-shadow: 1px 1px 5px grey;
    display: inline-block;
    padding: 0.7rem;
    border-radius: 10px;
    transition: all .2s ease-in-out;
    color: ${(props) => props.color ? props.color : 'white'};
    background: ${(props) => props.background ? props.background : '#3498db'};
    font-size: ${(props) => props.fontSize};
    ${props => props.big && `
        font-size: 2rem;
        padding: 2rem;
    `}
    &:hover {
        transform: scale(1.1);
        color: black;
    }
`;

export default presenter;