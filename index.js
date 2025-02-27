/*
* Author: Luthelle L. Fernandez
  Student Number: 2023 - 12438

  test.js contains the functions to be tested in index.js

*/
// Import Modules
import { v4 as uuidv4 } from 'uuid';
import { appendFileSync } from 'node:fs';
import validator from 'validator';


// ---- Functions ---- //

// Function : Generate Unique ID -> makes us of uuid module
function generateUniqueID(Fname, Lname){
    if ( (typeof(Fname) !== 'string')  || typeof(Lname) !== 'string' || Fname === '' || Lname === '') {
        return "Error: First Name and Last Name is a string and not empty"
    }

    // Convert to Lowercase
    const firstLetter = Fname.charAt(0).toLowerCase();
    const surnameLower = Lname.toLowerCase();

    // Concatenate lowercased letters
    const name_concat = firstLetter.concat(surnameLower);

    // Unique code from uuid
    const UniqueId = uuidv4();
    
    // Get length of 8 in the uuid
    let id_8 = '';
    for (let i = 0; i != 8; i++){
        id_8 += UniqueId[i];
    }

    // Concat id_8 to name_concat
    return name_concat.concat(id_8);

   
}

// Function : add account -> makes use of validator module 
function addAccount(Fname, Lname, email, age){
    if(typeof(Fname) !== 'string' || typeof(Lname) !== 'string' || typeof(email) !== 'string' || typeof(age) !== 'number' || Fname === '' || Lname === '' || email === ''){
        return "Error: All fields must be present";
    }
    
    // Check if email is in a valid format
    if (validator.isEmail(email)){ // -> Email is valid
        const Age = age;
        if (Age >= 18){ // Check age if atleast 18
            // If the conditions are all met, save the text to users.txt
            
            // Concatenate first everything -> firstname, Lastname, Email, age, UniqueID
            const UniqueID = generateUniqueID(Fname, Lname);
            const user_info = Fname + ',' + Lname + ',' + email + ',' + age + ',' + UniqueID + '\n'; // join data to be pushed in the users.txt
            
            appendFileSync('users.txt', user_info , 'utf8'); 
        }
    }else { // -> Email is not valid
        return "Error: Email is not valid";
    }
}

console.log(generateUniqueID('Luthelle', 'Fernandez'));
console.log(addAccount('Luthelle', 'Fernandez', 'llfernandez4@up.edu.ph', 18));