import './styles.css';

import CarCardImg from 'assets/images/carcard.png';
import ButtonIcon from 'components/ButtonIcon';

const CarCard = () => {
  return (
    <div className="base-card car-card">
      <div className="card-top-container">
        <img src={CarCardImg} alt="Audi Supra TT" />
      </div>
      <div className="card-bottom-container">
        <div className="card-bottom-container-text">
          <h1>Audi Supra TT</h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </h6>
        </div>
        <ButtonIcon />
      </div>
    </div>
  );
};

export default CarCard;
