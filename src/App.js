import Assets from "./User/components/pages/assetsPage/assets";
import AssetsPopup from "./User/components/pages/assetsPage/assetsPopup";
import Category from "./User/components/pages/Catergory/catergories";
import EmptyCart from "./User/components/pages/Cart/emptyCart";
import Footer from "./User/components/common/footer";
import Nav from "./User/components/common/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from "./User/components/pages/Wishlist/wishlist";
import Search from "./User/components/pages/Search/search";
import Signup from "./User/components/pages/SignupLogin/signUp";
import LandingMain from "./User/components/pages/landingpage/landingMain";
import Login from "./User/components/pages/SignupLogin/Login";
import SignUpGuest from "./User/components/pages/SignupLogin/SignUpGuest";
import HistoryList from "./User/components/pages/Profile/profile";
import Payment from "./User/components/pages/Payment/payment";
import AdminNavBar from "./Admin/components/common/topBar";
import AdminCategory from "./Admin/components/pages/adminCategory/adminCatergory";
import SideBar from "./Admin/components/common/sideBar";
import AdminUserManage from "./Admin/components/pages/UserManagement/userManage";
import AdminUserProfile from "./Admin/components/pages/UserProfile/userProfile";
import AdminPurchase from "./Admin/components/pages/adminPurchase/adminPurchase";
import SideBarActive from "./Admin/components/common/sideBarActive";
import AssetCatergorylist from "./Admin/components/pages/AssetManagement/assetCatergorylist";
import AssetManagement from "./Admin/components/pages/AssetManagement/assetManagement";
import AddnewAsset from "./Admin/components/pages/AssetManagement/addnewAsset";
import OnlyAdminPrivateRoute from "./OnlyAdminPrivateRoute";
import { UserProvider } from "./redux/user/helperFunctions";
import PrivacyPolicy from "./User/components/pages/privacy policy/privacyPolicy";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Razorpay from "./User/components/pages/razourpay";




const App = () => {
  return (
    <>
      <div className=" w-full h-screen">
        <Router>
          <ToastContainer/>
          <UserProvider>
            {/* <AdminNavBar /> */}
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<NavAndFooterMain />} />
              <Route path="/landingmain" element={<NavAndFooterMain />} />
              <Route path="/category" element={<NavAndFooterCategory />} />
              <Route path="/emptyCart" element={<NavAndFooterCart />} />
              <Route path="/wishlist" element={<NavAndFooterWishlist />} />
              <Route path="/search" element={<NavAndFooterSearch />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signupguest" element={<SignUpGuest />} />
              <Route path="/login" element={<Login />} />
              <Route path="/razorpay" element={<Razorpay />} />
              <Route
                exact
                path="/assets/:categoryId"
                element={<NavAndFooterAssets />}
              />
              <Route path="/" element={<NavAndFooterAssetspop />} />
              <Route path="/profile" element={<NavAndFooterProfile />} />
              <Route path="/payment" element={<NavAndFooterPayment />} />
              <Route path="/privacyPolicy" element={<NavAndFooterPrivacyPolicy />} />

              {/* Protected routes */}
              <Route path="/admin/*" element={<OnlyAdminPrivateRoute />} />
                <Route path="/adminnavbar" element={<AdminNavBar />} />
                <Route path="/admincategory" element={<Admincategory />} />
                <Route path="/sideBar" element={<AdminTopSideBar />} />
                <Route path="/userManagement" element={<Adminusermanage />} />
                <Route path="/userProfile" element={<Adminuserprofile />} />
                <Route path="/adminPurchase" element={<Adminpurchase />} />
                <Route
                  path="/assetCategoryList"
                  element={<Assetcatergorylist />}
                />
                <Route path="/assetManagement" element={<Assetmanagement />} />
                <Route path="/addnewAsset" element={<Addnewasset />} />
                

            </Routes>
          </UserProvider>
        </Router>
      </div>
    </>
  );
};

const NavAndFooterMain = () => (
  <>
    <Nav />
    <LandingMain />
    <Footer />
  </>
);

const NavAndFooterAssets = () => (
  <>
    <Nav />
    <Assets />
    <Footer />
  </>
);

const NavAndFooterCategory = () => (
  <>
    <Nav />
    <Category />
    <Footer />
  </>
);

const NavAndFooterCart = () => (
  <>
    <Nav />
    <EmptyCart />
    <Footer />
  </>
);

const NavAndFooterAssetspop = () => (
  <>
    <Nav />
    <AssetsPopup />
    <Footer />
  </>
);

const NavAndFooterWishlist = () => (
  <>
    <Nav />
    <Wishlist />
    <Footer />
  </>
);

const NavAndFooterSearch = () => (
  <>
    <Nav />
    <Search />
    <Footer />
  </>
);

const NavAndFooterProfile = () => (
  <>
    <Nav />
    <HistoryList />
    <Footer />
  </>
);

const NavAndFooterPayment = () => (
  <>
    <Nav />
    <Payment />
    <Footer />
  </>
);

const NavAndFooterPrivacyPolicy = () => (
  <>
  <Nav/>
    <PrivacyPolicy/>
    <Footer />
  </>
);
const AdminTopSideBar=()=>(
  <>
<AdminNavBar/>
<SideBar/>
  </>
)

const Adminusermanage=()=>(
  <>
  <AdminNavBar/>
  <AdminUserManage/>
  </>

)
const Adminpurchase=()=>(
  <>
  <AdminNavBar/>
  <AdminPurchase/>
  </>

)
const Adminuserprofile=()=>(
  <>
  <AdminNavBar/>
  <AdminUserProfile/>
  </>

)
const Assetcatergorylist=()=>(
  <>
  <AdminNavBar/>
  <AssetCatergorylist/>
  </>

)
const Assetmanagement=()=>(
  <>
  <AdminNavBar/>
  <AssetManagement/>
  </>

)
const Addnewasset=()=>(
  <>
  <AdminNavBar/>
  <AddnewAsset/>
  </>

)
const Admincategory=()=>(
  <>
  <AdminNavBar/>
  <AdminCategory/>
  </>

)


export default App;
