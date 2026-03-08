import Header from './components/Header';
import Summary from './components/Summary';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import Education from './components/Education';
import AdditionalInfo from './components/AdditionalInfo.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Summary />
        <TechSkills />
        <Projects />
        <Education />
        <AdditionalInfo />
      </main>
    </div>
  );
}

export default App;