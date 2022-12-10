import {Route, BrowserRouter, Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import WalletScreen from "./screens/WalletScreen/WalletScreen";
import PurchaseScreen from "./screens/PurchaseScreen/PurchaseScreen";
import RecieveScreen from "./screens/RecieveScreen/RecieveScreen";
import TransactionScreen from "./screens/TransactionScreen/TransactionScreen";
import SendScreen from "./screens/SendScreen/SendScreen";

import "react-toastify/dist/ReactToastify.css";


function App() {

    return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WalletScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/PurchaseScreen" element={<PurchaseScreen />} />
        <Route exact path="/RecieveScreen" element={<RecieveScreen />} />
        <Route exact path="/TransactionScreen" element={<TransactionScreen />} />
        <Route exact path="/SendScreen" element={<SendScreen />} />

      </Routes>
    </BrowserRouter>
    )}

export default App