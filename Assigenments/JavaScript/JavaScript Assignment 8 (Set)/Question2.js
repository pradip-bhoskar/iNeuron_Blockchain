/*
    Github: https://github.com/pradip-bhoskar/iNeuron_Blockchain
    JavaScript Assignment 8
    Question 2: 
        Write the syntax for
            a) Creating new set object
            b) Adding new element to set object
            c) Deleting element from set object
 */

/*
    Answer:
        a) Creating new set object 
            const set_name = new Set();

        b) Adding new element to set object
            i)add while creating set
                const set_name = new Set("Pradip");

            ii)use add() method to add values
                set_name.add("Dasharath")

            iii) use add() method to add variables 
                let last_name= "Bhoskar"
                set_name.add(last_name)
*/

    //const full_name = new Set("Pradip");      //splitting each charactor seperately
    const full_name = new Set().add("Pradip");

    full_name.add("Dasharath");

    let last_name = "Bhoskar";
    full_name.add(last_name);

    console.log(full_name);




    
