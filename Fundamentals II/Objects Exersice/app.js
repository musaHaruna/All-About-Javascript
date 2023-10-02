const numbersArray = [
  '64a4ac99014ab6d0c08ad3a0',
  '64a4acb9014ab6d0c08af6b8',
  '64a4acc5014ab6d0c08b0324',
  '64a4ad00014ab6d0c08b4393',
  '64a4ad0f014ab6d0c08b5236',
  '651acd09d6b42b59c04c1b85',
]
const randomNumber = Math.floor(Math.random() * numbersArray.length)

const selectedNumber = numbersArray[randomNumber]

console.log('Selected Number from Array:', selectedNumber)

const typology = {
  '64a4ad00014ab6d0c08b4393': [
    '651a714c97b3fa9948dcac94',
    '651a73c497b3fa9948e162d0',
    '651a9bbc97b3fa99482ee8dc',
    '651a9be597b3fa99482f37f7',
    '651a9c6497b3fa9948302675',
    '651a9c8097b3fa9948305d5b',
    '651a9c9397b3fa99483080f6',
    '651a9ca497b3fa994830a12b',
  ],
  '64a4ac99014ab6d0c08ad3a0': [
    '651a9d4197b3fa994831d2e9',
    '651a9d5097b3fa994831eeef',
    '651a9d5a97b3fa994832013a',
    '651a9d6797b3fa9948321b65',
  ],
  '64a4acb9014ab6d0c08af6b8': [
    '651a9dab97b3fa9948329b3a',
    '651a9dc597b3fa994832ccad',
    '651a9dd297b3fa994832e576',
    '651a9ddf97b3fa99483300bb',
  ],
  '64a4acc5014ab6d0c08b0324': [
    '651a9e2097b3fa9948337da5',
    '651a9e2d97b3fa994833978e',
    '651a9e3997b3fa994833ae0e',
  ],
  '64a4ad0f014ab6d0c08b5236': [
    '651a9e7097b3fa9948341657',
    '651a9e7b97b3fa9948342c28',
  ],
  '651acd09d6b42b59c04c1b85': [
    '651a9f2b97b3fa9948357850',
    '651a9f4a97b3fa994835b992',
    '651a9f5997b3fa994835d5e8',
  ],
}

const typId = typology[selectedNumber]
console.log(typId)

const randomNumber2 = Math.floor(Math.random() * typId.length)
const randomType = typId[randomNumber2]
console.log('random typology ', randomType)

// const numbersArray = ['id1', 'id2', 'id3', 'id4']
// const randomNumber = Math.floor(Math.random() * 4)

// const selectedNumber = numbersArray[randomNumber] // Adjust index for array (0-based)

// console.log('Random Number:', randomNumber)
// console.log('Selected Number from Array:', selectedNumber)

// const typology = {
//   id1: ['typology1', 'type1'],
//   id2: ['typology2', 'type2'],
//   id3: ['typology3', 'type3'],
//   id4: ['typology4', 'type4'],
// }

// const typId = typology[selectedNumber]
// console.log(typId)
