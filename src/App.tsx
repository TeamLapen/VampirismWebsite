import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Downloads from './pages/Downloads'
import Addons from './pages/Addons'
import Images from './pages/Images'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </BrowserRouter>
  )
}
