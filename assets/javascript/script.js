const inputKey = document.getElementById('inpKey')
const inputValue = document.getElementById('inpVal')
const submitButton = document.getElementById('submit-button')

function writeToDiv(p1, p2){
    document.getElementById('footer').innerText = `Key: ${p1} - Value: ${p2}`
}

submitButton.addEventListener('click', () =>{
    const key = inputKey.value
    const value = inputValue.value

    console.log(key)
    console.log(value)

    writeToDiv(key, value)
})

