import { lazy, memo, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { loadingFallback } from 'src/components/Fallbacks';
import MessageBox from 'src/components/MessageBox';
import LoadingOrError from 'src/components/LoadingOrError';
const ProductCard = lazy(() => import(/* webpackPrefetch: true */ '../components/ProductCard'));

function SearchResultColumn() {
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;

  return (
    <div className="row center search__results">
      {(!products || products.length < 2) && <div className="placeholder"></div>}
      <LoadingOrError xl wrapClass="placeholder" statusOf={productList} />

      {!loading && (
        <>
          <MessageBox wrapClass="placeholder" show={products?.length < 1}>
            No Product Found
          </MessageBox>

          {products?.map((product, id) => (
            <Suspense fallback={loadingFallback} key={id}>
              <ProductCard product={product} />
            </Suspense>
          ))}
        </>
      )}
      {(!products || products.length < 3) && <div className="placeholder"></div>}
      <div className="row divider-inner"></div>
    </div>
  );
}

export default memo(SearchResultColumn);
