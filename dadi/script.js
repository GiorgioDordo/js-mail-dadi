console.log('ok');

const userNumber = document.getElementById('user');
userValue = Math.floor(Math.random() * 7);
console.log(userValue);
userNumber.innerHTML = `<strong>USER:<strong> ${userValue}`;

const cpuNumber = document.getElementById('pc');
cpuValue = Math.floor(Math.random() * 7);
console.log(cpuValue);
cpuNumber.innerHTML = `<strong>PC:<strong> ${cpuValue}`;

const winnerDeclaration = document.getElementById('winner');
if (userValue > cpuValue) {
    winnerDeclaration.innerHTML = `Congratulation <strong>user</strong>, you are the winner`;
} else if (cpuValue > userValue) {
    winnerDeclaration.innerHTML = `Congratulation <strong>pc</strong>, you are the winner`;
} else {
    winnerDeclaration.innerHTML = `parity`;
}

