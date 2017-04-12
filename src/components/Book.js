import React from 'react';
import styled from 'styled-components';

const BookBody = styled.div`
    background: #fff;
    margin-top: 1rem;
`;

const BookInner = styled.div`
    padding: 1.25rem 2rem;
`;

export const BookTitle = styled.div`
    display: inline-block;
    border-right: 0.25rem solid #f0f0f0;
    width: 40%;
`;

export const BookAuthor = styled.div`
    display: inline-block;
    padding-left: 2rem;
`;

const Book = ({title, author}) => (
        <BookBody>
            <BookInner>
                <BookTitle>{title}</BookTitle>
                <BookAuthor>{author}</BookAuthor>
            </BookInner>
        </BookBody>
)

export default Book
