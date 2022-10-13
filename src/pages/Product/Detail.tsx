import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail'

const PageProductDetail = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!id) return <>잘못된 접근입니다.</>

  return (
    <>
      <ProductDetail productId={id} />
    </>
  )
}

export default PageProductDetail
