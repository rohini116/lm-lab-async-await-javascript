const getPromiseResponse = async () => {
  try{
	const result = await getResult()
	console.log("Yay! Promise resolved with response:" + result);
  }
  catch(err){
	console.log("Boo. Promise rejected with response:" + err);
  }
};
getPromiseResponse();

function getResult(){
	return new Promise((resolve, reject) => {
    // Generate random number between 0 and 9
    const randomInt = Math.floor(Math.random() * 10);

    if (randomInt % 2 === 0) {
      // Success
      setTimeout(() => resolve("done"), 2000);
    } else {
      // Failure
      setTimeout(() => reject("error"), 2000);
    }
  });
}

