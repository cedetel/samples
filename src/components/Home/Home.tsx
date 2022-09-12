import Filter from 'components/Filter';
import Loader from 'components/Loader';
import Products from 'components/Products';
import { useProducts } from 'contexts/products-context';
import { useEffect } from 'react';
import * as S from '../App/style';

function Home() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {isFetching && <Loader />}
      <S.TwoColumnGrid>
        <S.Side>
          <Filter />
          {/* <GithubStarButton /> */}
        </S.Side>
        <S.Main>
          <S.MainHeader>
            <p>{products?.length} Product(s) found</p>
          </S.MainHeader>
          <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>{' '}
      )
    </>
  );
}

export default Home;
