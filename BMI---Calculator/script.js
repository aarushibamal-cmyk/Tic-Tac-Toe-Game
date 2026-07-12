const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height!"
    }
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`
        if(bmi<=18.5){
            result.innerHTML = `Your BMI is ${bmi} <p>UnderWeight</p>`
        }
<<<<<<< HEAD
        else if(bmi<=24.9){
            result.innerHTML = `Your BMI is ${bmi} <p>Normal Weigth</p>`
        }
        else if(bmi<=29.9){
            result.innerHTML = `Your BMI is ${bmi} <p>Overweight</p>`
        }
        else {
=======
       else if(bmi<=24.9){
            result.innerHTML = `Your BMI is ${bmi} <p>Normal Weigth</p>`
        }
       else  if(bmi<=29.9){
            result.innerHTML = `Your BMI is ${bmi} <p>Overweight</p>`
        }
       else {
>>>>>>> 0e53473177db4305ceade0726f20c892f35bcdf6
            result.innerHTML = `Your BMI is ${bmi} <p>Obese</p>`
        }
    }
});
