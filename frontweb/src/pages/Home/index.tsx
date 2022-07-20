import { ReactComponent as HeaderImage } from 'assets/images/car-header-image.svg';
import Navbar from 'components/Navbar';
import ButtonIcon from 'components/ButtonIcon';

import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card1">
            <div className="home-card1-content-container">
                <h1>O carro perfeito para você</h1>
                <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>
            <div className="home-card1-image-container">
                <HeaderImage />
            </div>
        </div>
        <div className="home-card2">
            <div className="home-card2-content-container">
              <ButtonIcon />
              <p>Comece agora a navegar</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
