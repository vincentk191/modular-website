import React, { useState, useEffect, useRef } from 'react';
import { FaBriefcase, FaProjectDiagram, FaCode, FaUsers } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import './Statistics.scss';

/**
 * Statistics Component
 * 
 * Displays achievement statistics with animated counters.
 * Counters animate when the section comes into view.
 */
const Statistics = () => {
  const { statistics } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Icon mapping
  const iconMap = {
    FaBriefcase: FaBriefcase,
    FaProjectDiagram: FaProjectDiagram,
    FaCode: FaCode,
    FaUsers: FaUsers,
  };

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="statistics" className="statistics section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{statistics.title}</h2>

        <div className="statistics-grid">
          {statistics.items.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || FaBriefcase;
            return (
              <StatCard
                key={index}
                stat={stat}
                IconComponent={IconComponent}
                isVisible={isVisible}
                delay={index * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * StatCard Component
 * Individual statistic card with animated counter
 * Uses requestAnimationFrame for smoother animation
 */
const StatCard = ({ stat, IconComponent, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const startValue = 0;
    const endValue = stat.value;
    let startTime = null;
    let animationFrameId = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure final value is exact
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, stat.value, delay]);

  return (
    <div className="stat-card">
      <div className="stat-icon">
        <IconComponent />
      </div>
      <div className="stat-value">
        {count}{stat.suffix || ''}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

export default Statistics;

