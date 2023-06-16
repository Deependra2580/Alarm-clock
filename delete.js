
var delButtons = document.getElementsByClassName('del-button');
var alarmData = JSON.parse(localStorage.getItem('alarmData'));

Array.from(delButtons).forEach((button) => {
    button.addEventListener('click', () => {
        var listItem = button.parentElement;
        var list = listItem.parentElement;
        var index = Array.from(list.children).indexOf(listItem);

        if (Array.isArray(alarmData) && index !== -1) {
            alarmData.splice(index, 1);
            localStorage.setItem('alarmData', JSON.stringify(alarmData));
            list.removeChild(listItem);
        }
    });
});


















// var delButton = document.getElementsByClassName('del-button');
// var alarmData = JSON.parse(localStorage.getItem('alarmData'));
// var arrayButton = [];

// // storing delButton inn array
// for(let i of delButton){
//     arrayButton.push(i);
// }

//  arrayButton.forEach((e,i) => {
//     e.addEventListener('click',()=> 
//     {
//         console.log(i);
//         if (Array.isArray(alarmData)) { // add a check to make sure alarmData is an array
//             alarmData.splice(i, 1); // remove the item at the clicked index from the alarmData array
//             localStorage.setItem('alarmData', JSON.stringify(alarmData)); // update the localStorage with the new array
//             e.parentElement.remove();
//         }
//     });
// });