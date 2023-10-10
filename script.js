const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = '2';

    }else{
        body.style.background = "black";
        body.style.color = "white"
        body.style.transition = '2'
    }
})


    // angle function
// let hello = ""

// hello = () => {
//     return 'you try'
// }

// document.getElementById("demo").innerHTML = hello()




// angle function with parenthensis
// let ello = "";

// ello = (ben) => "hello " + ben;
// document.getElementById("trial").innerHTML = ello("Nigeria")



// syntax for class
// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

// const car1 = new Car("Mercedes", 2021);
// const car2 = new Car("Camry", 2006);
// const car3 = new Car("Audi", 2005);

// document.getElementById("demo").innerHTML = 
// car1.name + "  "+ car2.name + "  "+ car3.name;




    // Syntax for class method
// class ClassName{
//     constructor() {....}
//     method_1() {...}
//     method_1() {...}
//     method_1() {...}
// }


class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year
    }
}

const myCar = new Car("Camry", 2020);
// document.getElementById("demo").innerHTML = "My car is " + myCar.age() + "years old"

document.getElementById("demo").innerHTML = "My " + myCar.name + " car is " + myCar.age() + " years old."