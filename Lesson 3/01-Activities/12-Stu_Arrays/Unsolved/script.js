// WRITE YOUR CODE HERE
var studentNames = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5" ]

console.log(studentNames)
console.log(studentNames.length)
console.log(`welcome to the class ${studentNames[0]}`)
console.log(`welcome to the class ${studentNames[1]}`)
console.log(`welcome to the class ${studentNames[2]}`)
console.log(`welcome to the class ${studentNames[3]}`)
console.log(`welcome to the class ${studentNames[4]}`)
studentNames[0] = "new name"
console.log(studentNames)
for (i = 0; i < studentNames.length; i++)
    console.log(`Welcome to the class ${studentNames[i]}`)

    if (studentNames[0] != "Name 1")
    console.log(studentNames[0])