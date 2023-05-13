import React from 'react';

const WorkItems = ({item}) => {
  return (
      <div className="work__card" key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <h4 className='work__subtitle'>{item.description}</h4>
        <a href= {item.demo} className='work__button' target="_blank" rel="noreferrer">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href= {item.github} className='work__button' target="_blank" rel="noreferrer">
          Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    )
}

export default WorkItems