/* 
   • Umholtz, Tommy
   • Full Sail University
   • Web Design and Development, Bachelors of Science – Online
   • Web Design Portfolio 5 (WDPV)
   • Week 1 – API Proof of Concept
   */

let showQRCode =
    (function showQRCode() {

        const codeUrl = "http://api.qrserver.com/v1/create-qr-code/?data=%2BQR+%20Code+%20Test%2B&size=100x100"

        fetch(codeUrl, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'img'
            // },
            mode: 'cors',
        })
            .then(response => {
                generateHTML(response);
            })
            .catch(error => console.log(`Error message ${error}`));

        generateHTML = (data) => {
            const html = `<img src=${data.url}height="175" width="175">`
            console.log(data.url);
            console.log(html);
            console.log(codeUrl);
            const qrElement = document.querySelector('footer');
            console.log(qrElement);
            qrElement.innerHTML = html;
        }
        
        let oneClickOnly = document.getElementById("QRCode");
        oneClickOnly.removeEventListener("click", showQRCode);

    })

window.addEventListener('load', function () {

    document.getElementById("QRCode").addEventListener("click", showQRCode);

});