const metry = document.querySelector('#m')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let m = parseInt(metry.value)

    function LiczbaPuszek(m){

        let l = 1;
        let p = 4;
        let i_l = m / p;
        let l_p = Math.ceil(i_l / l);

        return `Liczba potrzebnych puszek: ${l_p}`;
    }

    wynik.innerHTML = `${LiczbaPuszek(m)}`;

})