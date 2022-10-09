import { Route, Routes } from 'react-router-dom'
import PageHome from '../../pages/Home'

const ServiceRoutes = () => (
  <Routes>
    <Route path="/" element={<PageHome />} />
  </Routes>
)

export default ServiceRoutes
