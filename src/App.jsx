

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './component/adminLayout/AdminLayout'
import DashBoard from './component/adminLayout/content/dashborad/Dashboard'
import UsersList from './component/adminLayout/content/users/UsersList'
import UserLayout from './component/userLayout/UserLayout'
import UserCreate from './component/adminLayout/content/users/UserCreate'
import ProductsList from './component/adminLayout/content/products/ProductsList'
import useProducts from './hooks/useProducts'



function App() {
  return (

    <BrowserRouter>
      <div className='h-screen w-full overflow-hidden'>
        <Routes>

        <Route path='/' element={<UserLayout></UserLayout>}></Route>


          <Route path='/admin' element={<AdminLayout></AdminLayout>}>
            <Route path='dashboard' element={<DashBoard></DashBoard>}></Route>
            <Route path='users' element={<UsersList></UsersList>}></Route>
            <Route path='/admin/users/usercreate' element={<UserCreate></UserCreate>}></Route>
            <Route path='products' element={<ProductsList></ProductsList>}></Route>

          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
