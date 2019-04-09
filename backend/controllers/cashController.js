const bankNotes = [100, 50, 20, 10];

exports.processCashRequest = function(req, res) {
  let result = [];
  let currentAmount = req.body.cashAmount;
  for(let i = 0; i < bankNotes.length; i++){
    let currentNote = bankNotes[i];
    if(currentAmount < currentNote)
      continue;
      
    let divide = currentAmount / currentNote;
    let left = currentAmount % currentNote;
    result.push({bankNote : currentNote, amount: Math.floor(divide)});
    currentAmount = left;
    if(left === 0){
      break;
    }
  }
      
  if(currentAmount !== 0){
    res.send({error: "Not Available"});
  }
  res.send({result});
};