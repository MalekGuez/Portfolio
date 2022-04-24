import React from 'react';

import TagCloud from '../components/generics/TagCloud';

const Skills = () => {
  
  return (
      <div className="skills__container">
        <div className="skills__content">
          <h1 className="title---circles">SKILLS</h1>

          <div className="skills__texts">
            <div className="skill__text">
              As a junior developer, and beside working for my own projects, I've done few professional projects. <br/><br/>

              I can't wait to have the opportunity to make more, and I will let you know about it here ! <br/><br/>

              Here are some technologies I've been working with lately : <br/><br/>
            </div>
           

            <TagCloud />
          </div>
          
          
        </div>       
      </div>
  );
};

export default Skills;