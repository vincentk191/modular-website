import { useState, useEffect } from 'react';

/**
 * Custom hook for typewriter/typing animation effect
 * 
 * @param {Array<string>} words - Array of words/phrases to type
 * @param {number} typingSpeed - Speed of typing (ms per character)
 * @param {number} deletingSpeed - Speed of deleting (ms per character)
 * @param {number} delay - Delay before starting to delete (ms)
 * @returns {string} Current displayed text
 */
const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, delay = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(pauseTimer);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
        }
      } else {
        // Deleting mode
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, words, typingSpeed, deletingSpeed, delay, isPaused]);

  return currentText;
};

export default useTypewriter;

