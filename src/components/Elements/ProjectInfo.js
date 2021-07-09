import "./ProjectInfo.css"
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import LinkButton from "./LinkButton";

const ProjectInfo = props => {
    const title = props.title;
    const dir = props.dir;
    console.log(dir);

    return (
        <div className="project-info">
            <p className="title">{title}</p>
            <div className="link-button">
                <BrowserRouter forceRefresh={true}>
                    <Link to={dir} target="_blank" rel="noopener noreferrer">
                        <LinkButton />
                    </Link>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default ProjectInfo;