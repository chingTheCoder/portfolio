import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { Container } from './styles';

export default function Footer() {
    return(
        <Container>
            <p>Made with <FiHeart /> by <a href="https://github.com/chingTheCoder" target="_blank" rel="noopener noreferrer">ChingLiu</a></p>
        </Container>
    );
}