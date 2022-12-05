<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
=======
import React, {useEffect} from 'react'
>>>>>>> 648f558fe21cbcc8ab0e89bcae19a242ae5a0c3f
import styles from"./walletStyle.css"
import { Link,  useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";



const WalletScreen = () => {
<<<<<<< HEAD
  const [publicKeyData, setPublicKeyData] = useState("")
    const [balanceData, setBalanceData] = useState("")
    const [transactionData, setNumTransaction] = useState("")



    useEffect(() => {
        fetch("http://localhost:3001/publicKey").then(response => response.json())
        .then(data => {setPublicKeyData(data)})
    }, [])


    useEffect(() => {
        fetch("http://localhost:3001/balance").then(response => response.json())
        .then(data => {setBalanceData(data)})
    }, [])

    useEffect(() => {
      fetch("http://localhost:3001/transactions").then(response => response.json())
      .then(data => {setNumTransaction(data)})
  }, [])

=======
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:3001",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie("jwt");
    navigate("/login");
  };
>>>>>>> 648f558fe21cbcc8ab0e89bcae19a242ae5a0c3f

    return (
      <div className={styles.Body}>
        <section class = "header">
          <img src="images/smallLogo.png" alt="Logo" class="image-cont image-shape" height="100" width="100" align="left"/>
          <button onClick={logout} align="right">Logout</button>
          <center>  <h3> Data Pirates CryptoCurrency </h3> </center>
          <div class="container2">
            <center> <h1> Account Overview </h1> </center>
            <Link to={"/SendScreen"} class="button">Send Coins</Link> 
            <Link to={"/RecieveScreen"} class="button">Recieve Coins</Link>
            <Link to={"/TransactionScreen"} class="button">View Transactions</Link>
            <Link to={"/PurchaseScreen"} class="button">Purchase Data Coin</Link>
         </div>
    </section>
   
    <section class = "main_Wallet">
        <div class="mainPage">
          <center> <h2> <u>  Account Balance  </u> </h2> </center>
          <center> <h2> {balanceData} </h2> </center>
            <div class="row">
              <div class="column">
                <center> <h2> <u> Unconfirmed Balance </u> </h2> </center>
                <center><h2>$186</h2></center>
              </div>
              <div class="column">
                <center><h2><u>Number of Transactions</u></h2></center>
                <center><h2>{transactionData}</h2></center>
              </div>
            </div>
            <a href="walletUI.html" class="secbutton">Refresh</a>
            <a href="walletUI.html" class="secbutton">Copy Key</a>
          </div>
    </section>
    <div>
            <p> Your public key is: {publicKeyData}</p>
        </div>
      </div>
    )
  }
  export default WalletScreen