const dice = require('trpg-dice');

const roller = () => {

  function callback(err, result) {
    if (err) {
      throw err;
    } else {
      //console.log(result);
      return result;
    }
  }

  const roll= (dice.roll("3d6", callback));

  // console.log(roll)
  // console.log("===================")
  // console.log(JSON.stringify(roll.rolls[0].result))
}