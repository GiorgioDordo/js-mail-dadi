console.log('ok');

const userNumber = document.getElementById('user');
userValue = Math.floor(Math.random() * 11);
console.log(userValue);
userNumber.innerHTML = `<strong>PC:<strong> ${userValue}`;

const pcNumber = document.getElementById('pc');
pcValue = Math.floor(Math.random() * 11);
console.log(pcValue);
pcNumber.innerHTML = `<strong>PC:<strong> ${pcValue}`;

const winnerDeclaration = document.getElementById('winner');
if (userValue > pcValue) {
    winnerDeclaration.innerHTML = `Congratulation <strong>user<strong>. You are the winner`;
} else if (pcValue > userValue) {
    winnerDeclaration.innerHTML = `Congratulation <strong>pc<strong>. You are the winner`;
} else {
    winnerDeclaration.innerHTML = `parity`;
}

