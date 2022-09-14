
const prompt = require('prompt');

prompt.start();

prompt.get(['n1','n2'], (err, input) => { 

	if (err) {
		return console.log(err);
	}

	var lines = [input.n1, input.n2];
  
  	// atualizar daqui pra baixo no computador
  	const n1 = parseInt(lines[0]);
  	const n2 = parseInt(lines[1]);
  	const soma = n1 + n2;

  	console.log("SOMA = " + soma);
  
});
