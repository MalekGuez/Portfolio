import React, { useEffect, useState } from "react";

import * as s from '../../assets/content/skillsIndex';

import { TagCloud } from 'react-tagcloud';


const data = [
    {value:'HTML', image: s.HTML},
    {value:'CSS', image: s.CSS},
    {value: 'JavaScript', image: s.JavaScript},
    {value: 'React', image: s.React},
    {value:'C#', image: s.CSharp}, 
    {value:'C++', image: s.CPP},
    {value: 'Java', image: s.Java},
    {value:'Python', image: s.Python},
    {value:'Markdown', image: s.Markdown},
    {value:'Git', image: s.Git},
    {value:'SASS', image: s.SASS},
    {value:'MongoDB', image: s.MongoDB}, 
    {value:'NodeJS', image: s.NodeJS}, 
    {value:'Express'}
  ];

  const customRenderer = (tag, size, color) => {

    return (
        <>
        <div className="tag" key={tag.value}
            style={{
                fontSize: `${size / 2}em`,
                border: `2px solid ${color}`,
                borderRadius: '50px',
                margin: '3px',
                padding: '15px',
                display: 'inline-block',
                color: `${color}`,
            }}
        >
            {tag.value}
        </div>
        
        </>
    );
}

export default () => (
    <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
);