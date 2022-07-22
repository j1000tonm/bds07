import CarCard from 'components/CarCard';
import SearchCard from 'components/SearchCard';

import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="container my-4">
        <div className="row">
            <SearchCard />
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
