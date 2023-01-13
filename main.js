const family = [
    {member: 'mother', id:111, coffee: 'Latte', countries: 'Belgium'},
    {member: 'father', id:222, coffee: 'Espresso', countries: 'Bangladesh'},
    {member: 'son', id:333, coffee: 'Cappucino', countries: 'Bulgaria'}
]


// const getCountry = () =>{
//     const listPromise = fetch('https://api.sampleapis.com/countries/countries');
//     return (listPromise
//         .then(data => data.json())
//         .then(countries => {
//             // console.log('list>', countries)
//             const strana = countries.find(res => res.name === 'Belgium')
//             console.log(strana)
//         })
//         .catch(err =>{
//             console.log('Ошибка блин',err)
//         })
//         )
// }
// getCountry()



const getCoffe = (data) => {
    const coffePromise = fetch('https://api.sampleapis.com/coffee/hot');
    return (coffePromise
        .then(data => data.json())
        .then(List => {
            console.log( 'list>', List);
            const coffee1 = List.find(res => res.title === data.coffee)
            console.log(coffee1)
            return {
                ...data,
                coffee: coffee1
            }
        }))
}

//Найти нужного члена семьи
const getFamilyMember = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const member = family.find(res => res.id === id );
            console.log(member)
            if (member){
                resolve(member)
            }else {
                reject(Error('Член семьи не найден!'))
            }
        },1500)
    })
}

const zet = getFamilyMember(111)
    .then(data =>{ return getCoffe(data);})
    .then(data2 => {
        console.log(data2)
    })
    .catch(err=>{
        console.log(err)
    });

getFamilyMember(222)
    .then(data =>{ return getCoffe(data);})
    .then(data2 => {
        console.log(data2)
    })
    .catch(err=>{
        console.log(err)
    });
   
const divv = document.querySelector('.divv')
// divv.appendChild(zet)
console.log(zet.id)