fetch("./products.json")
.then(res=>res.json())
.then(objProduct=> {
   let arrOgProducts = Object.keys(objProduct);

   // select container of boxes 
   let container = document.querySelector(".articles .container");
   arrOgProducts.forEach(product=> {
      let box = document.createElement("div");
      // container ... box 
      box.className = "box";
      let img = document.createElement('img');
      img.setAttribute("src", objProduct[product][0]);
      console.log(img)
      let content = document.createElement("div");
      // container ... box ...  content 
      content.className = "content";
      let h3 = document.createElement("h3");
      h3.innerHTML = `${product} - ${objProduct[product][1]}`;
      let p = document.createElement("p");
      p.innerHTML = objProduct[product][2];
      content.appendChild(h3);
      content.appendChild(p);
      // container ... box ... info
      let info = document.createElement("div");
      info.className = "info";
      let a = document.createElement("a");
      a.setAttribute("href", "https://api.whatsapp.com/send/?phone=218924245371&text&type=phone_number&app_absent=0");
      a.innerHTML = "Contact Us"
      let i = document.createElement("i");
      i.className = "fas fa-long-arrow-alt-right";
      info.appendChild(a);
      info.appendChild(i);
      //
      box.appendChild(img);
      box.appendChild(content);
      box.appendChild(info);
      container.appendChild(box)
   })
})

 