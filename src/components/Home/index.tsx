import { Link } from 'react-router-dom'
import TextTop from '../common/TextTop'
import ProductItem from './ProductItem'

const Home = () => {
  return (
    <>
      <TextTop typography="h4">쇼핑하기</TextTop>
      <Link to="/product/1">
        <ProductItem />
      </Link>
    </>
  )
}

export default Home
