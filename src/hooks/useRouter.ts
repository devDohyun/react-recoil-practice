import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const useRouter = () => {
  const navigate = useNavigate()

  return useMemo(
    () => ({
      back() {
        navigate(-1)
      },
      repalce(pathname: string) {
        navigate({ pathname }, { replace: true })
      },
      push(pathname: string) {
        navigate({ pathname })
      },
    }),
    [navigate]
  )
}

export default useRouter
