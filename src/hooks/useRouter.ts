import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const useRouter = () => {
  const navigate = useNavigate()

  return useMemo(
    () => ({
      back() {
        navigate(-1)
      },
      push(pathname: string) {
        navigate({ pathname })
      },
    }),
    [navigate]
  )
}

export default useRouter
