//Guessing game

alert("Lets try to guess an object");
alert("You have 5 attempts");

const objects = [
    {
        name: "Microwave",
        hints: [
            "I am used to warm up food",
            "I am in almost all kitchen",
            "I have a door to open",
            "I work with electromagnetic waves",
            "I am fast and quick",

        ],
    },
    {
        name: "Refridgerator",
        hints: [
            "I am used to keep things cold",
            "I can produce ice cubes",
            "I can even filter water",
            "I save food from getting spoiled",
            "I am cold and steady",

        ],
    },
    {
        name: "Blender",
        hints: [
            "I am used to process food",
            "I can be used to make juice",
            "I can chop onions",
            "I have different speedlevel",
            "I make sound while working",

        ],
    },
];

const randomObject = Math.floor(Math.random()*objects.length);
let attempt = objects[randomObject].hints.length;
let remainAtt = attempt;
let answer = null;

for (let i=0; i<attempt; i++){
    alert(objects[randomObject].hints[i]);
    answer = prompt(objects[randomObject].hints[i]);
     
    let objChose = objects[randomObject].name.toLowerCase();

    if(objChose===answer.toLowerCase()){
        alert ("Congrats you win");
        break;
    } else {
        remainAtt--;
        if(remainAtt>0){
            alert(`You have ${remainAtt} left` );
        } else {
            alert(`You lost: right answer is ${objChose}`);
            break;
        }
    }


}
