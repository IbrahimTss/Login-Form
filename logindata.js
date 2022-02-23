document.addEventListener('click' , () =>{


    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const email = params.get('email');
    const password = params.get('password');

    document.getElementById('name').innerHTML = name ;
    document.getElementById('email').innerHTML = email ;
    document.getElementById('password').innerHTML = password ;

    
})