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
 */
const StatCard = ({ stat, IconComponent, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCount(Math.min(Math.ceil(increment * currentStep), stat.value));
        } else {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
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

