const button = document.querySelector('.btn')
const image = document.querySelector('.img')
const url = 'http://aws.random.cat/meow'
const zet1 = document.querySelector('.zet')
const coffeUrl = 'https://api.sampleapis.com/coffee/mde'

async function fetchHandler(){
    try{
        const response = await fetch(url)
        const data = await response.json()

        image.src = data.file
        console.log(data)

        const responseCoffe = await fetch(coffeUrl)
        const dataCoffee = await responseCoffe.json()
        const vaCoffe = dataCoffee.find(item=>item.title === 'Latte')
        const vaCoffeName = vaCoffe.title
        zet1.innerText = vaCoffeName;

        console.log(vaCoffeName)
    }catch(error){
        console.log(error)
    }
}

fetchHandler()

button.addEventListener("click",()=>{
    fetchHandler()
})




async function getUsers(names) {
    const responses = await Promise.all(names.map(name => fetch(`https://api.github.com/users/${name}`)));
    
    return (await Promise.all(responses.map(response => response.json() )));
}

let user = {
    name: 'Johnzzz',
    surname: 'Smithzzz'
};

async function getUserz(names){
    let response = await fetch(`https://reqres.in/api/users`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
    let result = await response.json();
    console.log(result)
}

let user1 = {
    id: '25',
};

async function getUserz1(){
    let response = await fetch(`https://reqres.in/api/users`,{
        // method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json;charset=utf-8'
        // },
        // body: JSON.stringify(user1)
        method: "GET",
         headers: {
             Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
         },
        
    });
    let result = await response.json();
    kek = result.data;

    console.log(kek)
    
    const vay = kek.find(item => {
        return(
        item.id == 2)})
    console.log(vay)
}

let doggy = {
    "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggieZZZ",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
};

async function getUserzDog(){
    let response = await fetch(`https://reqres.in/api/users`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(doggy)
    });
    let result = await response.json();
    console.log(result)
}

async function getUserz1Doggy(){
    let response = await fetch(`https://reqres.in/api/users/2`,{
        // method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json;charset=utf-8'
        // },
        // body: JSON.stringify(user1)
        method: "GET",
         headers: {
             Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
         },
        
    });
    let result = await response.json();
    

    console.log(result)
    
    
}

