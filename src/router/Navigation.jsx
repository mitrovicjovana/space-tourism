import { Routes, Route } from 'react-router-dom'
import { Home, Destination, Crew, Technology } from '../pages'
import { PATH } from './'

const Navigation = () => {
   return (
      <>
         <Routes>
            <Route path={PATH.home} element={<Home />} />
            <Route path={PATH.destination} element={<Destination />} />
            <Route path={PATH.crew} element={<Crew />} />
            <Route path={PATH.technology} element={<Technology />} />
         </Routes>
      </>
   )
}

export default Navigation
