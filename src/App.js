
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Plat from './components/Plat';

function App() {
  return (
    <div >
      <Header/>
        <main>
        <Plat name="Tacos à l’unité" image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg" price="3"/>
        <Plat name="Enchiladas" image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg" price="12"/>
        <Plat name="Mole poblano" image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg" price="15"/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
