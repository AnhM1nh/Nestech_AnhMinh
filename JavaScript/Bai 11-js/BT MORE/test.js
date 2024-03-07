let obj = [{
        name: "a",
        age: 25,
        salary: 15000000
    },
    {
        name: "b",
        age: 15,
        salary: 5000000
    },
    {
        name: "c",
        age: 20,
        salary: 10000000
    },
    {
        name: "d",
        age: 21,
        salary: 20000000
    },
    {
        name: "e",
        age: 25,
        salary: 151000000
    }
]

obj.sort((a, b) => a.age - b.age)
console.log("Các mảng xắp xếp theo độ tuổi là: ", obj);


let total_salary = 0;

for (let i = 0; i < obj.length; i++) {
    total_salary += obj[i].salary;
}
console.log("Tổng lương của tất cả nhân viên là: ", total_salary);