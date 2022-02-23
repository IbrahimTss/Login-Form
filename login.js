//   method 1

// const logIn = e => {
    
//     const form ={
//         name:document.getElementById('name').value,
//         email:document.getElementById('email').value,
//         password:document.getElementById('password').value

//     }

//     localStorage.setItem('form',JSON.stringify(form));
//     frmData();

// }

// method 2

const logIn = e =>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('name',name);
    localStorage.setItem('emial',email);
    localStorage.setItem('password',password);

    return;
}



