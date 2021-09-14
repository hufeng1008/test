console.log('这是测试代码')
console.log('这是dev分支代码')


// var  m = [4,2,2,7];
// var n = [false,false,false,false,];

// for(let i=0; i<m.length; i++) {
//     for(let j=i+1; j<m.length; j++) {
//         if( m[i] === m[j] ){
//             n[j] = true;
//             n[i] = true
//         }
//     }
// }
// console.log(n)
arr = [
    {data: [{code:1}, {code:2},{code:3},{code:4},{code:5},]},
    {data: [{code:11}, {code:22},{code:33},{code:44},{code:55},]},
    {data: [{code:111}, {code:222},{code:333},{code:444},{code:555},]},
    {data: [{code:1111}, {code:2222},{code:3333},{code:4444},{code:5555},]},
]
code = 444;
// for(let item of arr) {
//     var n = item.data.find(list => list.code=== code)
//     if(n) console.log(n)
    
// }
mm= arr.find(list => list.data.some(item => item.code === code ))
mm= mm.data.find(item => item.code === code )
console.log(mm)
//这是test2分支代码
//修改BUG