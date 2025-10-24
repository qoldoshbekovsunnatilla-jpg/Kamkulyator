let res =document.querySelector(".res")


let btGroup = document.querySelectorAll ("button")


for (let bt of btGroup) {
    bt.onclick = function(e) {
        // console.log(e.target.textContent);
        if (e.target.textContent == 'C') {
            res.innerHTML = ''

        }else if (e.target.textContent == '<') {
            res.innerHTML =res.innerHTML.slice(0, -1)
        }else if (e.target.textContent == '=') {
           try {
  res.innerHTML = eval(res.innerHTML);
  res.classList.remove("error");
} catch (error) {
  res.innerHTML = "infark qima teknalojiyani🤌🏼";
  res.classList.add("error");
  console.log(error);
}

        }
        else {
            res.innerHTML += e.target.textContent
        }
        
    }
    
}
