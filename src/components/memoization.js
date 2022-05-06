// const add = (n) => n + 10;
// add(9);
// a simple memoized function to add something

const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = 1;
      for (i = 1; i < n; i++) {
        result *= i;
      }
      cache[n] = result;
      return result;
    }
  };
};

// returned function from memoizedAdd
// const newAdd = memoizedAdd();
// console.log(newAdd(9)); // calculated
// console.log(newAdd(9)); // cached

let student = {
  makeSound: () => "Wohoo",
  age: 15,
};
student["name"] = "erhes";
delete student.age;
console.log(student);
