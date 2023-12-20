import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App(props: any) {
  return (<div className="general-container">
  <Header/>
  <main className="main-container">
      {props.children}
  </main> 
  <Footer/>
</div>
  );
}

export default App;
