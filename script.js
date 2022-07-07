/* 
    #1 Pow(x,n)
    Sonning xoxlagan darajasini hisoblay oladigan funksiya
*/

function myPow(x, n) {
    return Math.pow(x,n)
}
console.log(myPow(7,7));


/* 
    #2 Sqrt(x)
    Ildiz da chiqgan sonni  butun songa aylantirish
    Math.sqrt() -> bu method sonni ildizda chiqarib beradi
    Math.floor() -> bu method yaxlitlab beradi 
    Math.floor(Math.sqrt()) -> ildizda chiqqan sonni yaxlitlab olish
*/

function mySqrt(x) {
    return Math.floor(Math.sqrt(x))
}
console.log(mySqrt(5));
