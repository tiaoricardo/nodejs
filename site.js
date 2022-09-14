
const prompt = require('prompt');

prompt.start();

prompt.get(['raio'], (err, result) => { 

	if (err) {
		return console.log(err);
	}
  
  	const raio = parseFloat(result.raio);
	const n = 3.14159;
	const area = n * Math.pow(raio, 2);
	console.log("A=" + area.toFixed(4));
  
});
