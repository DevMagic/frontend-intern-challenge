import './App.css';

import PageHeader from './components/PageHeader/PageHeader'
import PageFooter from './components/PageFooter/PageFooter'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
    <div className="App">
      <PageHeader />
      <LandingPage />
      <PageFooter />
    </div>
  );
}

export default App;
