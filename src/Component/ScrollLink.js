import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollLink = ({ to, children }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      if (router.pathname === '/') {
        // If the target section is on the same page (home page)
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If the target section is on a different page
        // Navigate to the home page and add a query parameter for the section
        router.push(`/?section=${to}`);
      }
    }
  };

  useEffect(() => {
    const link = document.querySelector(`a[href="${to}"]`);
    if (link) {
      link.addEventListener('click', handleClick);

      return () => {
        link.removeEventListener('click', handleClick);
      };
    }
  }, [to]);

  return <a href={to}>{children}</a>;
};

export default ScrollLink;