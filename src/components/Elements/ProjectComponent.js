import React from 'react';
import Number from "./Number";
import Card from "../Card"
import ProjectInfo from "./ProjectInfo";

import "./ProjectComponent.css"


const ProjectComponent = props => {
    const number = props.no;
    const title = props.title;
    const dir = props.dir;
    
    return (
        <Card className="project-component">
            <Number no={number}></Number>
            <ProjectInfo title={title} dir={dir}/>
        </Card>
    );
}

export default ProjectComponent;