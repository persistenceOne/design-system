import 'bootstrap/dist/css/bootstrap.min.css';
import Staking from "./pages/Staking";
import Transactions from "./pages/Transactions";
import Defi from "./pages/Defi";
import {Route, Routes} from "react-router-dom"
import LayoutDefault from "./layouts/LayoutDefault";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLoginInfo} from "./store/actions/walletConnect";

function App() {
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    const dispatch = useDispatch();
    const info = useSelector((state) => state.wallet.loginInfo.value);
    console.log(loginInfo,  "login");
    if(loginInfo && loginInfo.loginToken !== null){
        dispatch(setLoginInfo({
            value: info,
            error: {
                message: ''
            }
        }));
    }
  return (
      <Routes>
          <Route
              path='/'
              element={
                  <LayoutDefault>
                      <Staking />
                  </LayoutDefault>
                }
          />
          <Route
              path='/defi'
              element={
                  <LayoutDefault>
                      <Defi />
                  </LayoutDefault>
              }
          />
          <Route
              path='/transactions'
              element={
                  <LayoutDefault>
                      <Transactions />
                  </LayoutDefault>
              }
          />
      </Routes>
  );
}

export default App;
