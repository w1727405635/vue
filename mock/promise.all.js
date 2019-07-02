let p = new Promise((resolve,reject)=>{
  resolve(1)
})
let p2 = new Promise((resolve,reject)=>{
  resolve({list:[]})
})
Promise.all([p,p2]).then(data=>{
	console.log(data)[{ bannner:['1'] }]
})