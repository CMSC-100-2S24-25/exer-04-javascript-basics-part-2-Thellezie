import { generateUniqueID, addAccount } from './index.js'

// Testings
console.log(generateUniqueID('Luthelle', 'Fernandez')); //valid
console.log(generateUniqueID('', 'Fernandez')); //invalid
console.log(generateUniqueID('Luthelle', '')); //invalid



console.log(addAccount('Luthelle', 'Fernandez', 'llfernandez4@up.edu.ph', 18)); //valid
console.log(addAccount('Luthelle', 'Fernandez', 'llfernandez4@up.edu.ph', 10)); // invalid age
console.log(addAccount('', 'Fernandez', 'llfernandez4@up.edu.ph', 18)); // invalid first name
console.log(addAccount('Luthelle', 'Fernandez', 'llfernandez4up.edu.ph', 18)); //invalid email