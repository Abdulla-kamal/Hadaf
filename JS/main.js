fetch("./data.json")
.then(res=>res.json())
.then(products=> {
   console.log(products)
})