let h1Elem = document.querySelector('.title')

h1Elem.addEventListener('click', clickEvent)

function clickEvent () {
    h1Elem.style.textAlign = 'center'
    console.log('AAA')
}
