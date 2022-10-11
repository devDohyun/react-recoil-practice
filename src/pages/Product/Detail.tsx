import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail'

const PageProductDetail = () => {
  const { id } = useParams()

  if (!id) return <></>

  return (
    <>
      <ProductDetail productId={id} />
    </>
  )
}

export default PageProductDetail
