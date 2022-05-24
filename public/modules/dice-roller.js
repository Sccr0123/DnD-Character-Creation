const dice = require("trpg-dice");

const roller = (dice) => {
	function callback(err, result) {
		if (err) {
			throw err;
		} else {
			//console.log(result);
			return result;
		}
	}

	const roll = dice.roll(dice, callback);

	return roll;

	// console.log(roll)
	// console.log("===================")
	// console.log(JSON.stringify(roll.rolls[0].result))
};

export { roller };
