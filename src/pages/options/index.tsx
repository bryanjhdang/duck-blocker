import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Options from './Options.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Options />
    </MantineProvider>
  </React.StrictMode>,
)
