import './App.css';
import CoverComponent from './components/cover.component';
import NavbarComponent from './components/navbar.component';
import AboutComponent from './components/about.component';
import BannerComponent from './components/banner.component';
import SoundsystemComponent from './components/soundsystem.component';
import GalleryComponent from './components/gallery.component';

const App = () => {
  return (
    // <div className="bg-[url('/src/images/main-background.jpg')] bg-cover bg-fixed text-font-title-color">
    <div className="text-font-title-color ">
      <CoverComponent />
      <NavbarComponent />
      <AboutComponent />
      <BannerComponent />
      <SoundsystemComponent />
      <GalleryComponent />
    </div>
  );
}

export default App;
