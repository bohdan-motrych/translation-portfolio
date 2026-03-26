import Header from './sections/Header';
import Landing from './sections/Landing';
import AboutMe from './sections/AboutMe';
import Standards from './sections/Standards';
import Samples from './sections/Samples';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  document.title = t('title');
  
  return (
    <>
      <Header/>
      <main>
        <Landing/>
        <AboutMe/>
        <Standards/>
        <Samples/>
        <Contacts/>
      </main>
      <Footer/>
    </>
  )
}

export default App
