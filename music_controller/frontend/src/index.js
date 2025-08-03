import { createRoot } from 'react-dom/client';
import App from './components/app'; // Must match the export

const root = createRoot(document.getElementById('app'));
root.render(<App />);