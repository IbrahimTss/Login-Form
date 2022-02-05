const signUp = e => {
    
    const form ={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value

    }

    localStorage.setItem('form',JSON.stringify(form));
    document.write = localStorage.getItem('form');

}


