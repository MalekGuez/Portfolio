import React, { useEffect, useState } from "react";

import * as s from '../../assets/content/skillsIndex';

import { TagCloud } from 'react-tagcloud';


const data = [
    {value:'HTML', image: s.HTML, key: 1},
    {value:'CSS', image: s.CSS, key: 2},
    {value: 'JavaScript', image: s.JavaScript, key: 3},
    {value: 'React', image: s.React, key: 4},
    {value:'C#', image: s.CSharp, key: 5}, 
    {value:'C++', image: s.CPP, key: 6},
    {value: 'Java', image: s.Java, key: 7},
    {value:'Python', image: s.Python, key: 8},
    {value:'Markdown', image: s.Markdown, key: 9},
    {value:'Git', image: s.Git, key: 10},
    {value:'SASS', image: s.SASS, key: 11},
    {value:'MongoDB', image: s.MongoDB, key: 12}, 
    {value:'NodeJS', image: s.NodeJS, key: 13}, 
    {value:'Express', key: 14}
  ];

  const customRenderer = (tag, size, color) => {

    return (
        <div className="tag" key={tag.key}
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
    );
}

export default () => (
    <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
);