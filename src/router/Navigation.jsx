import { Routes, Route } from 'react-router-dom'
import { Home, Destination, Crew, Technology } from '../pages'
import { Header } from '../components'
import { PATH } from './'

const Navigation = () => {
   return (
      <>
         <Header />
         <main>
            <Routes>
               <Route path={PATH.home} element={<Home />} />
               <Route path={PATH.destination} element={<Destination />} />
               <Route path={PATH.crew} element={<Crew />} />
               <Route path={PATH.technology} element={<Technology />} />
            </Routes>
         </main>
      </>
   )
}

export default Navigation
