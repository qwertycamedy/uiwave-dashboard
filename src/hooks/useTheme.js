import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [themes] = useState(['auto', 'dark', 'light']);
  const [theme, setTheme] = useState(
    localStorage.getItem('uiwaveTheme')
      ? localStorage.getItem('uiwaveTheme')
      : 'auto',
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function onWindowMatch() {
    if (
      localStorage.uiwaveTheme === 'dark' ||
      (!('uiwaveTheme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('uiwaveTheme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('uiwaveTheme', 'light');
        break;
      default:
        localStorage.removeItem('uiwaveTheme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener('change', (e) => {
    if (!('uiwaveTheme' in localStorage)) {
      if (e.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  });

  return { themes, theme, setTheme, element };
};
