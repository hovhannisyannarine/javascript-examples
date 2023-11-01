console.log('Objects');
// 1
const getText = {
    getTextForChange : 'this is lowercase text',
    get getLowerCaseText() {
        return this.getTextForChange  ;
    },
    set  changeUpperCase (value) {
        this.getTextForChange   = value.toUpperCase();
    }
};
getText.getLowerCaseText;
console.log(getText.getTextForChange );
getText.changeUpperCase= 'this is uppercase text';
console.log(getText.getTextForChange );
//2
let product = {
    name: 'phone',
    price: 500,
    getTotalPrice :function(quantity,discount) {
        return `Quantity: ${quantity} Total Price: ${this.price * quantity} discount price: ${(this.price * quantity) * (discount/100)}`;
    },
};
console.log (product.getTotalPrice( 5,15));
//3
const twoObject = {
    name:'anonymous',
    profession:'programmer',
    language:{
        language_one:'javascript',
        language_two:'python',
        language_three:'php',
    },
    hobbies:['coding','reading','traveling'],
    contacts: {
        email: 'anonymous@example.com',
        websites: ['my_website.com', 'contact_me.com'],
    },
};
const jsonString = JSON.stringify(twoObject);
console.log(jsonString);
//4
const temperature = {
    temperatureCelsius: 25,
    unit: '°C',
    convertTemperature: function() {
        if (this.unit === '°C') {
            this.temperatureFahrenheit = this.temperatureCelsius * 1.8 + 32;
            this.unit = '°F';
        } else {
            this.temperatureCelsius = (this.temperatureFahrenheit - 32) / 1.8;
            this.unit = '°C';
        }
    }
}
temperature.convertTemperature(); // Convert the temperature
console.log('Initial Temperature:', temperature.temperatureCelsius, '°C');
console.log('Fahrenheit', temperature.temperatureFahrenheit, "°F");
console.log('Celsius', temperature.temperatureCelsius, "°C");
