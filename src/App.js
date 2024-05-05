import logo from "./logo.svg";

// import Icons
import "bootstrap-icons/font/bootstrap-icons.css";

// import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from "react";

import "./App.css";

//Import Pages
import Head from "./components/Head";
import LeftSide from "./leftside/LeftSide";
import Login from "./Login/Login";
import EditProfile from "./Pages/EditProfile";
import CreateAccount from "./Pages/CreateAccount";
import CustomerManagement from "./Pages/CustomerManagement";
import OwnerSideBar from "./Owner/OwnerSideBar";
import CashierLeftSide from "./Cashier/CashierLeftSide";
import SupplierManagement from "./Pages/SupplierManagement";
import CashierMain from "./Cashier/CashierMain";
import OwnerMain from "./Owner/OwnerMain";
import AdminMain from "./Admin/AdminMain";
import AddSupplier from "./Pages/AddSupplier";
import UpdateSupplier from "./Pages/UpdateSupplier";
import AddCustomer from "./Pages/AddCustomer";
import UpdateCustomer from "./Pages/UpdateCustomer";
import Newnew from "./components/Newnew";
import HeadAndLeft from "./components/HeadAndLeft";
import Dashboard from "./Pages/Dashboard";

import CheckPrice from "./Admin/CheckPrice";


import DiscountManage from "./Pages/DiscountManage";
import AddDiscount from "./Pages/AddDiscount";
import UpdateDiscount from "./Pages/UpdateDiscount";
import CategoryManage from "./Pages/CategoryManage";
import AddCategory from "./Pages/AddCategory";
import UpdateCategory from "./Pages/UpdateCategory";
import ChangePassword from "./Pages/ChangePassword";
import AddItem from "./Pages/AddItem";
import ManageItem from "./Pages/ManageItem";
import UpdateItem from "./Pages/UpdateItem";
import AddStock from "./Pages/AddStock";
import DisplayItems from "./Pages/DisplayItems";
import Cashier from "./Cashier/Cashier";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    // Assuming login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         isLoggedIn ? (
    //           <Navigate to="/headandleft/dashboard" />
    //         ) : (
    //           <Login onLogin={handleLogin} />
    //         )
    //       }
    //     />

    //     <Route path="/headandleft" element={<HeadAndLeft />}>
    //       <Route path="dashboard" element={<Dashboard />} />

    //       <Route
    //         path="/headandleft/supplierManagement"
    //         element={<SupplierManagement />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/addsupplier"
    //         element={<AddSupplier />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/updatesupplier/:id"
    //         element={<UpdateSupplier />}
    //       ></Route>

    //       <Route
    //         path="/headandleft/customermanagement"
    //         element={<CustomerManagement />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/addcustomer"
    //         element={<AddCustomer />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/updatecustomer/:id"
    //         element={<UpdateCustomer />}
    //       ></Route>

    //       <Route
    //         path="/headandleft/categorymanage"
    //         element={<CategoryManage />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/addcategory"
    //         element={<AddCategory />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/updatecategory/:id"
    //         element={<UpdateCategory />}
    //       ></Route>

    //       <Route
    //         path="/headandleft/discountmanage"
    //         element={<DiscountManage />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/adddiscount"
    //         element={<AddDiscount />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/updatediscount/:id"
    //         element={<UpdateDiscount />}
    //       ></Route>

    //       <Route
    //         path="/headandleft/manageitem"
    //         element={<ManageItem />}
    //       ></Route>
    //       <Route path="/headandleft/additem" element={<AddItem />}></Route>
    //       <Route
    //         path="/headandleft/updateitem/:id"
    //         element={<UpdateItem />}
    //       ></Route>

    //       <Route path="/headandleft/addstock" element={<AddStock />}></Route>
    //      <Route
    //         path="/headandleft/displayitems/:categoryId"
    //         element={<DisplayItems />}
    //       ></Route> 

    //       {/* <Route
    //         path="/headandleft/displayitems"
    //         element={<DisplayItems />}
    //       ></Route>
    //       <Route
    //         path="/headandleft/updateitem/:id"
    //         element={<UpdateItem />}
    //       ></Route> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // <div>
    //   <OwnerMain/>
    // </div>


    <div>
      <CashierMain/>
      <Cashier/>
    </div>





    // <div>
    //   <BrowserRouter>

    //     <Routes>
    //       {/* <Route path="/" element={<DiscountManage />}></Route>
    //       <Route path="/adddiscount" element={<AddDiscount />}></Route>
    //       <Route
    //         path="/updatediscount/:id"
    //         element={<UpdateDiscount />}
    //       ></Route> */}

    //       </Routes>
    //   </BrowserRouter>

    //  </div>

    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<CategoryManage />}></Route>
    //       <Route path="/addcategory" element={<AddCategory />}></Route>
    //       <Route
    //         path="/updatecategory/:id"
    //         element={<UpdateCategory/>}
    //       ></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    //  <div>
    //       <BrowserRouter>
    //         <Routes>
    //           <Route path="/" element={<ManageItem />}></Route>
    //           <Route path="/additem" element={<AddItem />}></Route>
    //           <Route path="/updateitem" element={ <UpdateItem />}></Route>
    //         </Routes>
    //       </BrowserRouter>
    //</div>
  );
}

export default App;
