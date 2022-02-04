const signUp = e => {
    
    // const form ={
    //     name:document.getElementById('name').value,
    //     email:document.getElementById('email').value,
    //     password:document.getElementById('password').value
       
       
    // }

    // localStorage.setItem('form',JSON.stringify(form));
    // // document.write(localStorage.getItem('form'));
    // document.write = localStorage.getItem('form');

        const myObj={
            name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value
        }
        const myObjString = JSON.stringify(myObj);
        localStorage.setItem('objectGreeting', myObjString);
   }


