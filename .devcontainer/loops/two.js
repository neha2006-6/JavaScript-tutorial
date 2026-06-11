//for of
//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
for(const num of arr)
{
// console.log(num)
}

const greet="heyyyy"
for(const nu  of greet)
{
// console.log(`each char is ${greet}`)
}

//mapsss

const map= new Map()
map.set('IN',"India")
map.set('IN',"USA")
map.set('fr',"france")
map.set('IN',"USA")
console.log(map)

for(const key of map)
{
    console.log(key);
}
for(const [key,value] of map)
{
    console.log(key,':-',value);
}
const muob=
{
    'game1':'nfs',
    'game2':'spid'
}
