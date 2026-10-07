The "Virtual Pet" Simulator 

🎯 Your Goal 

Create a simple "virtual pet" object. You will then create functions to interact with it. Finally, you'll use loops and if conditions to simulate the passing of time and check on your pet's status. 

📋 Instructions 

Follow the steps below. The complete solution is at the end for you to check your work. 

Part 1: The Pet (Objects) 

First, you need to create your pet. 

Create a single object named pet. 

Give this object four properties: 

name: A string (e.g., "Rex") 

happiness: A number (set it to 50) 

hunger: A number (set it to 50) 

isAwake: A boolean (set it to true) 

 

Part 2: The Actions (Functions) 

Now, create functions that can change your pet's status. These functions will take the pet object as a parameter. 

feed(petObject): This function should: 

Decrease petObject.hunger by 10 (e.g., petObject.hunger = petObject.hunger - 10;). 

Increase petObject.happiness by 5. 

Log a message like "${petObject.name} is eating. Hunger down, happiness up!" 

play(petObject): This function should: 

Increase petObject.happiness by 10. 

Increase petObject.hunger by 5. 

Log a message like "You are playing with ${petObject.name}. It seems happy!" 

goToSleep(petObject): This function should: 

Set petObject.isAwake to false. 

Log a message like ${petObject.name} is now sleeping. 

 

 

Part 3: The Simulation (Loops & if Conditions) 

Let's simulate a "day" for your pet. A day will last 5 "hours" (or 5 loops). 

Use a for loop that runs 5 times (e.g., for (let i = 1; i <= 5; i++)). The variable i will represent the "hour" of the day. 

Inside the loop: 

Log a message for the current hour: console.log(--- Hour ${i} ---); 

Use an if condition to check if your pet's hunger is 60 or more. If it is, call the feed(pet) function. 

Use another if condition (or else if) to check if happiness is 50 or less. If it is, call the play(pet) function. 

At the end of the loop, decrease happiness by 2 and increase hunger by 2 (to simulate time passing). 

After the loop is finished: 

Log a final status message: console.log(The day is over! ${pet.name}'s final status:); 

Log the final pet.hunger and pet.happiness values. 

 

Extra steps:  

Instead of a for loop, use a while loop to keep the simulation going while the pet's happiness is above 0 and hunger is below 100. 

Inside the while loop, you'll need to make decisions (call feed or play) and also make time pass (like in step 3.5).  

Be careful! If you don't change the values, you might create an infinite loop! 

 

 