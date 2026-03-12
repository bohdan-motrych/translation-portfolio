
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  document.title = t('title');
  
  return (
    <>
      
    </>
  )
}

export default App
