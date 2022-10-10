import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { productsQuery } from '../../../store'
import ProductListItem from './Item'

const ProductList = () => {
  const products = useRecoilValue(productsQuery)

  return (
    <>
      {products.map((item) => (
        <Link key={item.id} to={`/product/${item.id}`}>
          <ProductListItem item={item} />
        </Link>
      ))}
    </>
  )
}

export default ProductList
