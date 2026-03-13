import Header from './sections/Header'
import Landing from './sections/Landing';
import Info from './sections/Info';
import Samples from './sections/Samples';
import Footer from './sections/Footer';
import { useTranslation } from 'react-i18next'

function App() {

  const {t, i18n} = useTranslation();

  document.title = t('title');
  
  return (
    <>
      <Header/>
      <main>
        <Landing/>
        <Info/>
        <Samples/>
      </main>
      <Footer/>
    </>
  )
}

export default App
