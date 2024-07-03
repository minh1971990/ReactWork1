import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './App.css';
import Example1 from './component/Example';

const Right = () => {
  return (
    <div className="container">
      <div className="header">
        <span className="header-text">Scroll down</span>
      </div>
      <HorizontalScrollCarousel />
      <div className="footer">
        <span className="footer-text">Scroll up</span>
      </div>
    </div>
  );
};



const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <section ref={targetRef} className="carousel-container">
      <div className="sticky-container">
        <motion.div style={{ x }} className="card-container">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const Card = ({ card }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${card.url})`,
        }}
      ></div>
      <div className="card-title">
        <p>{card.title}</p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: '/imgs/abstract/KOA_Nassau_2697x1517.jpg',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/imgs/abstract/KOA_Nassau_2697x1517.jpg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/imgs/abstract/KOA_Nassau_2697x1517.jpg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/imgs/abstract/KOA_Nassau_2697x1517.jpg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/imgs/abstract/KOA_Nassau_2697x1517.jpg',
    title: 'Title 5',
    id: 5,
  },
  {
    url: '/imgs/abstract/KOA_Nassau_2697x1517.jpg',
    title: 'Title 6',
    id: 6,
  },
  {
    url: '/imgs/abstract/KOA_Nassau_2697x1517.jpg',
    title: 'Title 7',
    id: 7,
  },
];

export default Right
