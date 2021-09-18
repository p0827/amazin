import { memo } from 'react';
import { Link } from 'react-router-dom';

import { dummyMovies } from 'src/utils';

type PropType = {
  movie?: MovieType;
  LinkTo?: Children;
};

function ButtonBuy({ movie = dummyMovies[0], LinkTo = (props: Props) => <Link {...props} /> }: PropType) {
  return (
    <LinkTo
      disabled={!movie.seller}
      //is there any seller sells this movie?
      to={movie.seller ? `/cart/${movie._id}?qty=1` : `#`}
    >
      <button className="banner__button" disabled={!movie.seller}>
        <i className="fa fa-shopping-cart"></i> Buy[Rent]
      </button>
    </LinkTo>
  );
}

export default memo(ButtonBuy);
