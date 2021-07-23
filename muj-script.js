// alert('Ahoj světe')
//alert('Druhá bublina')

let tlacitko = document.querySelector('.moje-tlacitko')

tlacitko.innerHTML = 'baf'

let prepniTema = () => {
    //alert('Bylo kliknuto')
    document.querySelector('body').classList.toggle('je-svetlo')
}

tlacitko.addEventListener('click', prepniTema)