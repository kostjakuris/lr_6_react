import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let slider = setInterval(() => {
      index === 0 ? setIndex(people.length - 1) : setIndex(index - 1);
    }, 2000);
    return () => clearInterval(slider);
  }, [index]);
  
  const prevCard = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextCard = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const {id, image, name, title, quote} = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (personIndex === index - 1 || (personIndex === people.length - 1 && index === 0)) {
            position = "lastSlide";            
          }
          return (
            <article key={id} className={position}>
              <img src = {image} alt = {name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={prevCard}>
          <FiChevronLeft/>
        </button>
        <button className='next' onClick={nextCard}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
  );
}


export default App;
