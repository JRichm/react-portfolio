"use client"

import { useParams } from 'next/navigation'
import projectData from '../../../../public/data.json'
import MainHeader from '@/app/components/mainHeader';

export default function ProjectPage() {

    const {projectName} = useParams();
    const selectedProject = projectData.projects.find((project) => project.name === projectName)
    const skillStyle = 'bg-gray-700 text-white h-fit rounded-full px-2 w-fit hover:bg-gray-800 hover:cursor-default hover:shadow-sm hover:shadow-gray-500 hover:text-gray-100';

    if (!selectedProject) {
      // Handle the case when the project is not found
      return (
        <div>
          <p>Project not found</p>
        </div>
      );
    }

    return (
        <main className='bg-gray-100 min-h-screen flex flex-col place-items-center'>
            <MainHeader />
            <hr className='w-full' />
            <div className='bg-white shadow-lg min-h-screen p-12 flex flex-col w-[1100px]'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-3xl font-bold tracking-wide'>{selectedProject.name}</h1>
                    <div className='flex flex-row flex-wrap gap-3'>
                        {selectedProject.technologies ? selectedProject.technologies.map((tech, index) => (
                        <p key={index} className={`${skillStyle}`}>{tech}</p>
                        )) : <p>no technologies defined</p>}
                    </div>
                </div>
                <p>{selectedProject.description}</p>
                <h2>Technologies Used:</h2>
                <h2>Images:</h2>
                <div>
                    {selectedProject.images.map((image, index) => (
                    <img key={index} src={`/images/${image}`} alt={`${selectedProject.name} Image`} className='w-full' />
                    ))}
                </div>
            </div>
        </main>
        
    )
}