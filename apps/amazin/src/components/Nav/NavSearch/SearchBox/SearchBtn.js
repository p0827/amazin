import { memo } from 'react';

function SearchBtn({ submitHandler }) {
  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' || e?.key === ' ') submitHandler();
  };

  return (
    <div className="search__btn" tabIndex="1" aria-label="Go" onClick={submitHandler} onKeyUp={handleKeyPress}>
      <span className="sprite__search-btn">
        <input type="submit" value="Go"></input>
      </span>
    </div>
  );
}

export default memo(SearchBtn);
