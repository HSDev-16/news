//https://tr.deployers.repl.co/world?news=1000
//https://tr.deployers.repl.co/indonesia?berita=1000




function fetch_indo(){
  option();
  fetch("https://tr.deployers.repl.co/indonesia?berita=1000")
    .then(res => res.json())
    .then(data => indo(data))
}
function fetch_world(){
  option();
  fetch("https://tr.deployers.repl.co/world?news=1000")
    .then(res => res.json())
    .then(data => world(data))
}



function world(d){
  var item = document.getElementById("item");
  
  item.innerHTML = "";
  
  for (var i = 0; i < d.length; i++) {
    item.innerHTML += `
        
        <li>
          <a href="${d[i]['Link News']}">
            <img src="${d[i].Image}" loading="lazy">
            <br><br>
            <div class="title">
              <h3>${d[i].News}</h3>
            </div>
          </a>
        </li>
        
      `;
  }
}


function indo(d) {
  var item = document.getElementById("item");
  
   item.innerHTML = "";
  
  for (var i = 0; i < d.length; i++) {
    item.innerHTML += `
        
        <li>
          <a href="${d[i]['Link Berita']}">
            <img src="${d[i].Gambar}" loading="lazy">
            <br><br>
            <div class="title">
              <h3>${d[i].Berita}</h3>
            </div>
          </a>
        </li>
        
      `;
  }
}




var int = 1;

function option(){
  let option_list = document.getElementById("option_list");
  let span1 = document.getElementById("span1");
  let span2 = document.getElementById("span2");
  let span3 = document.getElementById("span3");
  

  
  if (int == 1) {
    
    option_list.style.opacity = 1;
    span2.style.display = "none";
    span1.classList.toggle("close1");
    span3.classList.toggle("close2");
    int += 1;
  }else{
    
    option_list.style.opacity = 0;
    span2.style.display = "block";
    span1.classList.toggle("close1");
    span3.classList.toggle("close2");
    
    int -= 1;
  }
  
  
}
fetch_indo();