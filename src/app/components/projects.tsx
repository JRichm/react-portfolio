"use client"

import React, { useState, useEffect } from 'react'
import ProjectCard from './projectCard';

interface projectType {
    id:string;
    name:string;
    description:string;
    technologies:string[];
    images:string[];
}

export default function Projects() {
    
    const [projects, setProjects] = useState<projectType[]>([]);
  
    useEffect(() => {
      fetch('/data.json')
      .then(response => response.json())
      .then(data => setProjects(data.projects))
      .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className='flex flex-row'>
            <div className='bg-black w-20'>

            </div>
            <div className="flex flex-col gap-6">
                { projects.map((project: projectType, index) => (
                    <ProjectCard key={project.id} project={project} />
                )) }
            </div>
        </div>
    )
}