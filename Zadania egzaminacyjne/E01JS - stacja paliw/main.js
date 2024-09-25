const rodzaj = document.querySelector('#r')
const ilosc = document.querySelector('#i_l')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let r = parseInt(rodzaj.value)
    let i = parseInt(ilosc.value)

    function oblicz(r, i){
        let w

        if (r === 1)
            w = i * 4
        else if(r === 2)
            w = i * 3.5
        else
            w = 0

        return w;
    }

    wynik.innerHTML = `koszt paliwa: ${oblicz(r, i)} zł`
})