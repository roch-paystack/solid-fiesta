

const send = () => {

    const ref = document.getElementById('ref').value;

    window.location = `https://pstk-shop.paystackintegrations.com/callback?trxref=${ref}&reference=${ref}`
    console.log('sending', ref)
}
