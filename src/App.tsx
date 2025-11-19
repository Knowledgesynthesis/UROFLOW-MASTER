import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import IncontinenceModule from './pages/modules/IncontinenceModule';
import LUTSModule from './pages/modules/LUTSModule';
import PelvicFloorModule from './pages/modules/PelvicFloorModule';
import FemaleInterfaceModule from './pages/modules/FemaleInterfaceModule';
import MaleInterfaceModule from './pages/modules/MaleInterfaceModule';
import NeurogenicModule from './pages/modules/NeurogenicModule';
import DiagnosticsModule from './pages/modules/DiagnosticsModule';
import ManagementModule from './pages/modules/ManagementModule';
import Assessment from './pages/Assessment';
import Glossary from './pages/Glossary';
import Settings from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/incontinence" element={<IncontinenceModule />} />
            <Route path="/luts" element={<LUTSModule />} />
            <Route path="/pelvic-floor" element={<PelvicFloorModule />} />
            <Route path="/female-interface" element={<FemaleInterfaceModule />} />
            <Route path="/male-interface" element={<MaleInterfaceModule />} />
            <Route path="/neurogenic" element={<NeurogenicModule />} />
            <Route path="/diagnostics" element={<DiagnosticsModule />} />
            <Route path="/management" element={<ManagementModule />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
