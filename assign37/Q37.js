"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "large", message = "I love TypeScript") {
    console.log(`Size:${size}, Message:${message}`);
}
makeShirt();
// Large shirt with default message
// medium shirt with default meaasage
makeShirt("Medium");
//  customshirt with a different message and size
makeShirt("small", "Please always smile");
