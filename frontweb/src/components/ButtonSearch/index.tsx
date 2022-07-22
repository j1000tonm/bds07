import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="btn-container">
      <div className="btn-search">
        <h6>Digite sua busca</h6>
      </div>
      <div className="btn-icon-container">
        <button className="btn btn-primary">
          <h6>BUSCAR</h6>
        </button>
      </div>
    </div>
  );
};

export default ButtonSearch;
