import { useSearchParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail'

const PageProductDetail = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  if (!id) return <>잘못된 접근입니다.</>

  return (
    <>
      <ProductDetail productId={id} />
    </>
  )
}

export default PageProductDetail
