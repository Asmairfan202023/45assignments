//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
const emptyUsreName:string[]=[];
 let userName:string[]=["admin","Eric","Yahya","Irfan","Kabeer"];
 function greetUsers(username: string[]) : void {
    if (username.length===0){
        console.log('we need to find some users!');
        return;
    }
    for(const usernames of username){
        if (usernames.toLowerCase()==='admin'){
            console.log('Hello admin, would you like t see a status report');
        } else{
            console.log(`Hello ${userName}, Thank you loging in again`);
        }
    }
 }
 console.log(' for non_empty user name:\n');
 greetUsers(userName);
 userName = [];
 console.log('\n\n for empty user name');
 greetUsers(userName);
 export{};