import './App.css';
import CoverComponent from './components/cover.component';
import AboutComponent from './components/about.component';

const App = () => {
  return (
    <div className="bg-[url('/src/images/main-background.jpg')] bg-cover bg-fixed">
      <CoverComponent />
      <AboutComponent />
    </div>
  );
}

export default App;
