

const send = () => {

    const ref = document.getElementById('ref').value;

    window.location = `https://pstk-shop.paystackintegrations.com/finalize?shop=nifty-gifts-za.myshopify.com&reference=${ref}`
    console.log('sending', ref)
}