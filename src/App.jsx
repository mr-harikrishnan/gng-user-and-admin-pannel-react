

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLayout from './component/adminLayout/AdminLayout'
import DashBoard from './component/adminLayout/content/dashborad/Dashboard'
import UsersList from './component/adminLayout/content/users/UsersList'
import UserLayout from './component/userLayout/UserLayout'
import UserCreate from './component/adminLayout/content/users/UserCreate'
import ProductsList from './component/adminLayout/content/products/ProductsList'
import useProducts from './hooks/useProducts'
import ProductCreate from './component/adminLayout/content/products/ProductsCreate'
import VeiwProduct from './component/adminLayout/content/products/VeiwProduct'
import EditProduct from './component/adminLayout/content/products/EditProduct'
import UserViewProduct from './component/userLayout/product/veiwProduct/UserVeiwProduct'



function App() {
  return (

    <BrowserRouter>
      <div className='h-screen w-full overflow-hidden'>
        <Routes>

          <Route path='/skydash' element={<UserLayout></UserLayout>}>
            <Route path='veiwProduct/:id' element={<UserViewProduct></UserViewProduct>}></Route>
          </Route>



          <Route path='/admin' element={<AdminLayout></AdminLayout>}>
            <Route path='dashboard' element={<DashBoard></DashBoard>}></Route>
            <Route path='users' element={<UsersList></UsersList>}></Route>
            <Route path='/admin/users/usercreate' element={<UserCreate></UserCreate>}></Route>
            <Route path='products' element={<ProductsList></ProductsList>}></Route>
            <Route path='/admin/products/product-create' element={<ProductCreate></ProductCreate>}></Route>
            <Route path='/admin/products/veiw-product/:id' element={<VeiwProduct></VeiwProduct>}></Route>
            <Route path='/admin/products/edit-product/:id' element={<EditProduct></EditProduct>}></Route>

          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
