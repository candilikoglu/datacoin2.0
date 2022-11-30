import React, {useEffect, useState}from 'react'

function QR() {
  
    const [publicKeyData, setPublicKeyData] = useState("")


    useEffect(() => {
        fetch("http://localhost:3001/publicKey").then(response => response.json())
        .then(data => {setPublicKeyData(data)})
    }, [])
    
    return (
    <div>
          <div id="qrcode" style="width:100px; height:100px; margin-top:15px; margin: 0 auto; display: block;"></div>
        <script type="text/javascript">
            new QRCode(document.getElementById("qrcode"), `https://www.google.com/search?q={publicKeyData}`);
        </script>
    </div>

    )
}

export default QR