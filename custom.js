const inputFields = document.querySelectorAll('input[type="text"');
// function inputPrompts(){
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('new-div');
//     newDiv.innerText = 'New Text';
//     inputFields.insertAdjacentElement('beforebegin', newDiv);
// }
// inputFields.forEach(function(field){
//     console.log('clicking here');
//     field.addEventListener('click', inputPrompts);
// });

function watermark(input, event){
    if (event.type == "focus"){
        input.setAttribute("rel", input.getAttribute("placeholder"));
        input.removeAttribute("placeholder");
    }
    if(event.type == "blur"){
        input.setAttribute("placeholder", input.getAttribute("rel"));
        input.removeAttribute("rel");
    }
}