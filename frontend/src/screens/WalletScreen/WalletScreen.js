import React, {useEffect, useState} from 'react'
import styles from"./walletStyle.css"
import { Link } from "react-router-dom";



const WalletScreen = () => {
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


    return (
      <div className={styles.Body}>
        <section class = "header">
          <img src="images/smallLogo.png" alt="Logo" class="image-cont image-shape" height="100" width="100" align="left"/>
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