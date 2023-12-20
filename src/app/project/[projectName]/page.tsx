"use client"

import { useParams } from 'next/navigation'
import projectData from '../../../../public/data.json'
import MainHeader from '@/app/components/mainHeader';

export default function ProjectPage() {

    const {projectName} = useParams();
    const selectedProject = projectData.projects.find((project) => project.name === projectName)

    if (!selectedProject) {
      // Handle the case when the project is not found
      return (
        <div>
          <p>Project not found</p>
        </div>
      );
    }

    return (
        <main>
            <MainHeader />
            <div>
            <div>
                <h1>{selectedProject.name}</h1>
                <p>{selectedProject.description}</p>
            
                <h2>Technologies Used:</h2>
                <ul>
                    {selectedProject.technologies ? selectedProject.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                    )) : <p>no technologies defined</p>}
                </ul>
            
                <h2>Images:</h2>
                <div>
                    {selectedProject.images.map((image, index) => (
                    <img key={index} src={`/images/${image}`} alt={`${selectedProject.name} Image`} />
                    ))}
                </div>
                </div>
            </div>
        </main>
        
    )
}