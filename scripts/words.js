const bank=[
"the quick brown fox jumps over the lazy dog",
"eases aseasesafhsdf dfhoadhfkjadjkfio",
"Wild blades of grass wait outside for the pale screen watcher",
"Real green grass grows past the door for the indoor person",
"Bare toes touch cold dirt far away from the glowing monitor screen",
"Fresh air blows past the open window onto the tired desk chair",
"Real sunlight hits the green lawn outside the dark bedroom wall"
]

//gives a random item in the bank
function randomBank(){
//Picks a random number based on the length of the list
const randomBankIndex=Math.floor(Math.random()*bank.length)
console.log(randomBankIndex)
return bank[randomBankIndex]
}