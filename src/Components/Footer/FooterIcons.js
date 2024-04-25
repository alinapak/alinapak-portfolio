import React from 'react';

function Icon({ name, href }) {
   return (
      <a href={href} target="_blank" className="p-1" rel="noreferrer">
         <i className={`bi fs-3 bi-${name}`}></i>
      </a>
   );
}

export default Icon;
