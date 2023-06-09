import React from 'react';
import { Container } from './styles';

export default function Project({ project }) {
    return(
        <Container>
            <img src={ `./images/${ project.image }` } alt ="Project" />
            <h3>{ project.name }</h3>
            <p>{ project.description }</p>

            <div>
                { project.link && <a href={ project.link } target="_blank" rel="noopener noreferrer" className="link linkWebsite">Website</a> }
                <a href={ project.github } target="_blank" rel="noopener noreferrer" className="link linkGithub">Repositóry</a>
            </div>
        </Container>
    );
}