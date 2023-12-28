import React from 'react';

interface projectType {
  id: string;
  name: string;
  description: string;
  technologies: string[] | undefined;
  images: string[] | undefined;
}

const skillStyle = 'bg-gray-700 text-white rounded-full px-2 w-fit hover:bg-gray-800 hover:cursor-default hover:shadow-sm hover:shadow-gray-500 hover:text-gray-100';

export default function ProjectCard({ project }: { project: projectType }) {
  return (
    <div className="flex flex-col border p-5 gap-3 rounded">
      <h3 className="text-2xl">{project.name}</h3>
      <div className='flex flex-row gap-5'>
        <div className='w-[500px] min-h-[250px] flex justify-center place-items-center'>
            {project.images && project.images[0] ? (
                <img src={`/images/${project.images[0]}`} alt={project.name} />
            ) : null}
        </div>
        <div className='flex flex-col gap-3 w-[500px]'>
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies ? (
                project.technologies.map((tech, index) => (
                    <p key={index} className={`${skillStyle}`}>
                    {tech}
                    </p>
                ))
                ) : (
                <p>No technologies specified</p>
                )}
            </div>
            <a href={`/project/${project.name}`} className="self-end border mt-auto border-black rounded w-fit px-5 py-1 bg-black text-white hover:text-black hover:bg-transparent transition-all hover:cursor-pointer">View Project</a>
        </div>
      </div>
    </div>
  );
}