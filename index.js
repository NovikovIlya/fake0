const button = document.querySelector('.btn')
const image = document.querySelector('.img')
const url = 'http://aws.random.cat/meow'
const zet1 = document.querySelector('.zet')
const coffeUrl = 'https://api.sampleapis.com/coffee/hot'

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

button.addEventListener('click',()=>{
    let isLoaded = image.complete;

    if (isLoaded){
        fetchHandler()
    }
    
    
})



