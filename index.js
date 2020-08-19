let convertBtn = document.getElementById('btn')

convertBtn.addEventListener('click', function(event){

    let fahrTemp = document.getElementById('temperature').value

    fahrTemp = parseInt(fahrTemp)

    let celsTemp = document.querySelector('#result')

    fahrTemp ? celsTemp.textContent = ((fahrTemp - 32) *  5/9).toFixed(2) : 'NaN'
    
})