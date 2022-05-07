import React from "react";
import { TagCloud } from 'react-tagcloud';


const data = [
    {value:'HTML'},
    {value:'CSS'},
    {value: 'JavaScript'},
    {value: 'React'},
    {value:'C#'}, 
    {value:'C++'},
    {value: 'Java'},
    {value:'Python'},
    {value:'Markdown'},
    {value:'Git'},
    {value:'SASS'},
    {value:'MongoDB'}, 
    {value:'NodeJS'}, 
    {value:'Express'}
  ];

  const customRenderer = (tag, size, color) => {

    return (
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
    );
}

export default () => (
    <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
);