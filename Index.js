const temperature = () => {
    const number = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_difference');
    const valueTemp = temp_difference.options[tempSelected.selectedIndex ].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round(((cel*9)/5) + 32);
        return fahrenheit
    }

    const celToKel = (cel) => {
        let kelvin = Math.round((parseInt(cel)+273.15));
        return kelvin
    }

    const FahToCel = (fah) => {
        let celsius = Math.round((fah-32)*5/9);
        return celsius
    }

    const FahToKel = (fah) => {
        let fahr = Math.round(((fah - 32)*5/9) + 273.15);
        return fahr
    }

    const kelToCel = (kel) => {
        let kelvin = Math.round(kel - 273.15);
        return kelvin
    }

    const kelToFah = (kel) => {
        let kelvin = Math.round(((kel - 273.15)*9/5) + 32);
        return kelvin
    }


    let result1;
    let result2;

    if(valueTemp == 'cel'){
        result1 = celToFah(number);
        result2 = celToKel(number);
       
        document.getElementById('resultContainer1').innerHTML = `= ${result1} °Fahrenheit`
        document.getElementById('resultContainer2').innerHTML = `= ${result2} Kelvin`
        
       
    }else if(valueTemp == 'fah'){
        result1 = FahToCel(number);
        result2 = FahToKel(number);
        document.getElementById('resultContainer1').innerHTML = `= ${result1} °Celsius`
        document.getElementById('resultContainer2').innerHTML = `= ${result2} Kelvin`
    }else{
        result1 = kelToCel(number);
        result2 = kelToFah(number);
        document.getElementById('resultContainer1').innerHTML = `= ${result1} °Celsius`
        document.getElementById('resultContainer2').innerHTML = `= ${result2} °Fahrenheit`
    }
}