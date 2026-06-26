// main.tsx
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme, type MantineColorsTuple } from '@mantine/core';


const myColor: MantineColorsTuple = [
  '#effde7', '#e1f8d4', '#c3efab', '#a2e67e', '#87de58',
  '#75d93f', '#6bd731', '#59be23', '#4da91b', '#3d920d'
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
  
  // Custom global overrides to paint everything dark gray
  components: {
    AppShell: {
      defaultProps: {
        bg: '#141517', // Baseline website canvas background
      }
    },
    AppShellHeader: {
      defaultProps: {
        bg: '#141517', // Slightly darker gray for contrast on the sticky header
      }
    }
  }
});

// Inject global dark styles to the native HTML body tags
if (typeof document !== 'undefined') {
  document.body.style.backgroundColor = '#1a1b1e';
  document.body.style.margin = '0';
}

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <App />
  </MantineProvider>,
)