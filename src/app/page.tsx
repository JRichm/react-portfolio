"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import MainHeader from './components/mainHeader'
import Projects from './components/projects'

export default function Home() {
  const skillStyle = "bg-gray-700 text-white rounded-full px-2 w-fit hover:bg-gray-800 hover:cursor-default hover:shadow-sm hover:shadow-gray-500 hover:text-gray-100";
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/data.json')
    .then(response => response.json())
    .then(data => setSkills(data.skills))
    .catch(error => console.error('Error fetching skills:', error));
  }, []);

  return (
    <main>
      <MainHeader />
      <hr />
      <div>
        <div className='bg-gray-200 p-20 text-center'>
          <h1 className='text-3xl'>Hello,</h1>
          <h1 className='text-3xl'>James Richmond</h1>
          <p>Software Engineer / Web Developer</p>
          <p>Finding creating solutions for enigmatic problem</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-3xl'>Projects</h1>
          <div className='flex flex-col self-center'>
            <Projects />
          </div>
        </div>
        <div>
          <h1 className='text-3xl'>About Me</h1>
          <div className='flex flex-row justify-evenly'>
            <div className='max-w-[30%]'>
              <p>I'm James, a full stack developer located in Sandy, UT. I love soving problems in code, listening to music, playing guitar, and going to the beach!</p>
              <p>I enjoy the challenge of solving complex problems and thrive in collaborative environments.</p>
              <p>I believe in the power of elegant design and seamless user experiences. I find inspiration in working on projects that enhance productivity, improve accessibility, foster creativity.</p>
            </div>
            <div>
              <h2 className='text-3xl'>Skills</h2>
              <div className='flex flex-wrap gap-2 max-w-[320px]'>
                {skills.map((skill, index) => (
                  <p key={index} className={`${skillStyle}`}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-3xl'>Featured Posts</h1>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-3xl'>Contact</h1>
          <div className='flex flex-row justify-evenly'>
            <h1 className='w-fit'>Send me a message</h1>          
            <form className='flex flex-col bg-gray-200 p-2 w-[500px] place-self-center'>
              <label htmlFor='name'>name</label>
              <input name='name' type='text'></input>
              <label htmlFor='email'>email</label>
              <input name='email' type='text'></input>
              <label htmlFor='message'>Message</label>
              <textarea name='message'></textarea>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}