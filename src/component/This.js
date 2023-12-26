// import React from "react";

// const This = () => {

//     // function newdata(){
//     //     console.log(this);
        
//     // }
//     // newdata()

//     // const myObject = {
//     //     myMethod() {
//     //         console.log(this);
//     //     }
//     // };

//     const myObject = {
//         myMethod: () => {
//             console.log(this);
//         }
//     };

//     myObject.myMethod();

//     myObject.myMethod();
//     return <div>This</div>;
// };

// export default This;


import React from "react";

const This = () => {

    // function curryfun(shape){
    //     return function(val1){
    //         return function(val2){
    //              switch(shape) {
    //                 case 'ractangle':
    //                     return val1* val2 ;
    //                 case 'circle':
    //                     return Math.PI * val1 *val2   ; 
                
    //                 default:
    //                     return  'not dectected shape'
    //             }
    //         }
    //     }
    // }

    // const ractangleShape = curryfun('ractangle')

    // console.log(ractangleShape(4)(5));


    function add(a){ 
        return function(b){
            return function(c){
                return function(d){
                   return  console.log(a+ b + c +d);
                }
            }
        }
    }

    const total = add(1)(2)(3)(4)  

    console.log(total);

     const sub = e=> f=> g=> h=> e-f-g-h

     console.log(sub(10)(2)(1)(1));
     
     return <div>This</div>;
};

export default This;
