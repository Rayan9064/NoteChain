import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import DomainGrid from './components/pages/DomainGrid'
import CourseGrid from './components/pages/CourseGrid'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* I want to redirect to the blogs page by default when tried to ping diferent router */}
          {/* <Route path="/" element={<Navigate to='/blogs' replace/>}/> */}
          <Route path="/" element={<Home />}/>
          <Route path="/courses" element={<DomainGrid />} />
          <Route path="/courses/:domainId" element={<CourseGrid />} />

          {/* Catch-all route for any unexpected paths */}
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App