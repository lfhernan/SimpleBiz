const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const button = document.querySelector('button[type="submit')
const table = document.querySelector('#table-body')
const emailHelp = document.querySelector('#emailHelp');
const passwordHelp = document.querySelector('#passwordHelp');

const emailGood = new RegExp(/^.{3,20}\@.{3,20}\..{2,10}$/i)
const passwordGood = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i)

const accounts = []

email.addEventListener('keyup',()=>{
    let val = email.value
    if(!emailGood.test(val)){
        email.style.borderColor = "red"
        emailHelp.innerHTML = 'bad email'
    }
    else{
        email.style.borderColor = "green"
        emailHelp.innerHTML = 'good email'
    }
})

password.addEventListener('keyup',()=>{
    let val = password.value
    if(!passwordGood.test(val)){
        password.style.borderColor = "red"
        passwordHelp.innerHTML = 'bad password'
    }
    else{
        password.style.borderColor = "green"
        passwordHelp.innerHTML = 'good password'
    }
})

button.addEventListener('click',(e)=>{
    e.preventDefault()
    if(emailGood.test(email.value) && passwordGood.test(password.value)){
        

        accounts.push({email: email.value, password: password.value})
        
        email.value = ''
        password.value = ''
        emailHelp.innerHTML = ''
        passwordHelp.innerHTML = ''
        email.style.borderColor = "#ccc"
        password.style.borderColor = "#ccc"

        addToTable()
    }
    else{
        alert('bad email or/and password')
    }
})


function addToTable(){
    let container = ''

    for(let i = 0; i < accounts.length; i++){
        container += `<tr>
                        <th scope="row">${i+1}</th>
                        <td>${accounts[i].email}</td>
                        <td>${accounts[i].password}</td>
                      </tr>`
    }

    table.innerHTML = container
}
