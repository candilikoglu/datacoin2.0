import React, {useEffect, useState} from 'react'
import styles from"./transactions.css"
import { Link } from "react-router-dom";
import axios from 'axios';


const TransactionScreen = () => {
  const [transactionPool, listTransaction] = useState("")
  const [publicKeyData, setPublicKeyData] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/publicKey").then(response => response.json())
    .then(data => {setPublicKeyData(data)})
}, [])

    useEffect(() => {
        fetch("http://localhost:3001/transactList").then(response => response.json())
        .then(data => {listTransaction(data)})
        console.log(transactionPool)
    }, [])

   /* useEffect(()=>{
              axios.get('http://localhost:3001/transactList')
                 .then(res =>{
                     console.log(res.input.amount)
                })
                .catch(err=>{
                     console.log(err);
                  })
          },[])*/
    return (
      <div className={styles.Body}>
        <img src="images/smallLogo.png" alt="Logo" /*className={styles.image-cont} {...image-shape}*/ height="100" width="100" align="left"/>
    <center>  <h3> Data Pirates CryptoCurrency </h3> </center>
    <center> <h1> Transaction History </h1> </center>
    <form>
        <div className={styles.container}>
            <label>Senders Adress :  </label>
            <input type="text" placeholder= {publicKeyData} name="sender" readOnly={true}/>
            <label>Recipient Adress : </label>
            <input type="text" placeholder="" name="recipient" readOnly={true}/>
            <label>Amount : </label>
            <input type="text" placeholder={transactionPool} name="amount" readOnly={true}/>
            <label>Date : </label>
            <input type="text" placeholder="DD/MM/YYYY" name="date" readOnly={true} />
        </div>
    </form>
    <form>
        <div className={styles.container}>
            <label>Senders Adress : </label>
            <input type="text" placeholder="Sender's Adress" name="sender" />
            <label>Recipient Adress : </label>
            <input type="text" placeholder="Recipients's Adress" name="recipient" />
            <label>Amount : </label>
            <input type="text" placeholder="000.00" name="amount" />
            <label>Date : </label>
            <input type="text" placeholder="DD/MM/YYYY" name="date" />
        </div>
    </form>
    <center><Link to={"/"} className={styles.button}>Return to HomePage</Link></center>
      </div>
    )
  }
  export default TransactionScreen