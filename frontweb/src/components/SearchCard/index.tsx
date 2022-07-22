import ButtonSearch from 'components/ButtonSearch';
import './styles.css';

const SearchCard = () => {
  return (
    <div className="base-card search-card">
      <div className="searc-btn">
        <div>
          <ButtonSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
