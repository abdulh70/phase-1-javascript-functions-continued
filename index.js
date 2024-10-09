// code your solution here
function saturdayFun(act = "roller-skate") {
    return `This Saturday, I want to ${act}!`;
  }
  const mondayWork = function(x = 'go to the office'){
    return `This Monday, I will ${x}.`
}
function wrapAdjective(visual = '*'){
    return function(y = "special"){
        return `You are ${visual}${y}${visual}!`
    }
}