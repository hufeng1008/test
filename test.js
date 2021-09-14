console.log('这是测试代码')
console.log('这是dev分支代码')


var  m = [4,2,2,7];
var n = [false,false,false,false,];

for(let i=0; i<m.length; i++) {
    for(let j=i+1; j<m.length; j++) {
        if( m[i] === m[j] ){
            n[j] = true;
            n[i] = true
        }
    }
}
console.log(n)
//test分支代码