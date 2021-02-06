module.exports = function reverse (n) {
   if (n < 0) {
       n = n * (-1);
   }
   let str = String(n);
   let arr = str.split('');
   let arrRev = arr.reverse();
   let strRev = arrRev.join('');
   return String(strRev);
}
