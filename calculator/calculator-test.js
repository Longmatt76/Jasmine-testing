
it('should calculate the monthly rate correctly', function () {
   const values = {
    amount: 75000,
    years: 15,
    rate: 2, 
    
   }
   expect(calculateMonthlyPayment(values)).toEqual("482.63");

   
});


it("should return a result with 2 decimal places", function() {
  expect(134.54634.toFixed(2)).toEqual("134.55");
  expect(21.599384.toFixed(2)).toEqual("21.60");
  expect(4.1111111.toFixed(2)).toEqual("4.11");
  
});

it("should work with a crazy amount of years", function () {
const values = {
  amount: 500000,
  years: 5465,
  rate: 7,
}
expect(calculateMonthlyPayment(values)).toEqual("2916.67");
})

