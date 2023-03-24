function convert(){
   let amount=document.getElementById('amount').value;
   let variant=document.getElementById('variant').value;
   if (variant=='KZT') {
      document.getElementById('kzt').value='-';
      document.getElementById('usd').value=(amount/431).toFixed(2);
      document.getElementById('eur').value=(amount/509).toFixed(2);
   } else if (variant=='USD') {
      document.getElementById('kzt').value=(amount*429).toFixed(2);
      document.getElementById('usd').value='-';
      document.getElementById('eur').value=(amount*429/509).toFixed(2);
   } else if (variant=='EUR') {
      document.getElementById('kzt').value=(amount*507).toFixed(2);
      document.getElementById('usd').value=(amount*507/431).toFixed(2);
      document.getElementById('eur').value='-';
   }
}