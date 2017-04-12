import React from 'react';
import styled from 'styled-components';

const CircleButton = styled.i`
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #1f8ceb;
    width: 56px;
    height: 56px;
    border-radius: 100%;
    color: #fff;
    text-align: center;
    line-height: 56px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: width 0.5s, height 0.5s, box-shadow 0.2s;

    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        color: #fff;
    }
`

const AddBookButton = ({onClick}) => (
    <CircleButton className="fa fa-plus" onClick={onClick} />
)

export default AddBookButton;