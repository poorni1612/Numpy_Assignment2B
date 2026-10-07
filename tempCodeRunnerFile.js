const pet={
    name:"Cho",
    happiness:50,
    hunger:50,
    isAwake:true
}

function feed(pet)
{
    pet.hunger=pet.hunger-10;
    pet.happiness+=5;
    console.log(`${pet.name} is eating, Hunger Down ,Happiness Up`)

}
function play(pet)
{
pet.happiness+=10;
pet.hunger+=5;
console.log(`You are playing with ${pet.name}.It seems happy!`)
}
function goToSleep(pet)
{
pet.isAwake=false;
console.log(`${pet.name} is sound asleep`)
}
function hourlyStatus(pet)
{
    for(let i=1;i<=5;i++)
    {
console.log(`--------------Hour ${i}-------------`)
if(pet.hunger>=60)
{
    feed(pet)
}
else if(pet.happiness<=50)
{
    play(pet)
}
else {
            // This runs if hunger is under 60 AND happiness is over 50
            console.log(`${pet.name} is chilling. No action needed.`)
        }
pet.happiness-=2;
pet.hunger+=2;
    }
}
hourlyStatus(pet);
console.log(`The day is over! ${pet.name}'s final status ${pet.hunger} , ${pet.happiness}`);