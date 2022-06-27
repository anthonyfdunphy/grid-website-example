const inputKey = document.getElementById('inpKey')
const inputValue = document.getElementById('inpVal')
const submitButton = document.getElementById('submit-button')

/*submitButton.onclick = function(){
    const key = inputKey.value
    const value = inputValue.value

    console.log(key)
    console.log(value)
}*/

submitButton.addEventListener('click', () =>{
    const key = inputKey.value
    const value = inputValue.value

    console.log(key)
    console.log(value)
})
