"use client"
import './globals.css'
import { createContext, useState } from 'react';

// export const CountContext = createContext(0);
// const ThemeContext = createContext<null | string>(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  return (
    <html lang="en">
      <body className='bg-black'>
        {/* <button
          onClick={() => {
            setCount(count + 1);
          }}
          className='bg-white'
        >
          Click me to add
        </button>
        <CountContext.Provider value={count}>
          {children}
        </CountContext.Provider> */}

        {/* <ThemeContext.Provider value={theme}>
          <label className='text-white'>
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={(e) => {
                setTheme(e.target.checked ? 'dark' : 'light');
              }}
            />
            Use dark mode */}
            {children}
          {/* </label>
        </ThemeContext.Provider> */}
      </body>
    </html>
  )
}
