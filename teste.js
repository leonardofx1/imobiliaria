

class Car {
  

   static create =(car)=> {
        return {
            name:car.name,
            value:car.value
        }
    }
}

const car = {name:'ferrari',value:100000}

const resFactory = Car.create(car)
console.log(resFactory)