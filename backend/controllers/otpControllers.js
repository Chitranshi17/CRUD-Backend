const generateOtp = (req , res) => {
  
 // For OTP

  const otp = Math.floor(999999 * Math.random()).toString();

  res.send(otp);


  // res.send("123456")

}


module.exports = {generateOtp};