/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 1
    Question 2: 
        Write a JavaScript program to convert temperatures to and from Celsius,
            Fahrenheit.
            [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
            Fahrenheit ]
            Expected Output :
            60°C is 140 °F
            45°F is 7.222222222222222°C
 */


//celsius to fahernheit
    function toFahernheit(temp){
        let far= (9* (temp/5)) +32;
        console.log(`${temp}°C is ${far}°F`);
    }

//fahernheit to celcius
    function toCelcius(temp){
        let cel= ((temp-32)/9)*5;
        console.log(`${temp}°F is ${cel}°C`);
    }

    toFahernheit(60);
    toCelcius(45);