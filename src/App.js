import logo from './logo.svg';
import i18n from './i18n'
import './App.css';
import { useTranslation } from 'react-i18next'

const changelanguage = (ln) => {
  return () => {
    console.log(ln)
    i18n.changeLanguage(ln)
  }


}

function App() {

  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t("Welcome ")}</h1>
        <p>
          {/* <select> */}
          <button onClick={changelanguage('en')} >English</button>
          <button onClick={changelanguage('jp')} >Japnese</button>
          <button onClick={changelanguage('it')} >Italian</button>
          {/* </select> */}
          <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
