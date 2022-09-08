let int = document.querySelector('#in')
let btn1 = document.querySelector('#btn1')
let noon = document.querySelector('#noon')
let btn2 = document.querySelector('#btn2')

let src=''





localStorage.setItem("srcc", '')



//save in local storage
function save() {
  let G = noon.innerHTML;
  localStorage.setItem("N", `${G}`);
  
}
//end save




//btn for add note and save in local storage
btn1.onclick=()=>{
  
  text=int.value;
  
  src = localStorage.getItem("srcc")
  
  if (text !== ""&&text.trim()!==''|| src!==''&&text.trim()!==''||src!==''&&text.trim()==''){
    
  let div=document.createElement('div');
  div.id='d1';
  
  if (src!==''&&text.trim()!=='')
  {
    div.innerHTML=`
    
    <p id="text"></p>
    
    <br>
    
    <img src="${src}" id="img0">
    
    <button id="clear" class="dd" onclick="M()"></button>
    
    <div>
    <button class="ooo" onclick="K()">
      
    </button>
    </div>
    
    
    <p id='date'></p>
    
    <div id="btn-copy" onclick="copy()">
        <span>Copy</span>
    </div>
    
    
    <div id="btn-edit" onclick="edit()">
        <span>Edit</span>
    </div>
    
    
    
    `
    
    div.childNodes[1].textContent=`${text}`
    div.childNodes[1].style=`margin: 30px 10px 10px`
    
  } else if (src==''&&text.trim()!=='')
  {
    div.innerHTML=`
    
    
    <p id="text"></p>
    
    
    <button id="clear" class="dd" onclick="L()"></button>
    
    
    <div>
    <button class="ooo" onclick="K()">
      
    </button>
    </div>
    
    
    <p id='date'></p>
    
    
    <div id="btn-copy" onclick="copy()">
      <span>Copy</span>
    </div>
    
    
    <div id="btn-edit" onclick="edit()">
      <span>Edit</span>
    </div>
    
    `
    
  
   div.childNodes[1].textContent=`${text}`
    
  } else if(src!==''&&text.trim()=='')
  {
  
    div.innerHTML=`
    
    <img src="${src}" id="img0">
    
    <button id="clear" class="dd" onclick="M()"></button>
    
    <div>
    <button class="ooo" onclick="K()">
      
    </button>
    </div>
    
    
    <p id='date'></p>
    
    `
    
    div.childNodes[1].style=`margin: 25px 0;`
    
  }
  

    if (noon.innerHTML==''){
      noon.appendChild(div);
    } else{
      noon.firstChild.before(div);
    }
    
  }
  
  
  
  ////////////////////
  
  
  dateGG=Number(localStorage.getItem("dateGG"))
  
  if (dateGG===0)
  {
    
    for(let i=0; i<date.length; i++)
    {
      date[i].hidden = true;
    }
    
    
  }
  
  
  
  
  ////////////////////
  
  
  toDoBtnGG=Number(localStorage.getItem("toDoBtnGG"))
  
  
  
  ooo = document.querySelectorAll(".ooo");
  
  if (toDoBtnGG===0)
  {
    
    for(let i=0; i<ooo.length; i++)
    {
      ooo[i].hidden = true;
    }
    
    
  }
  
  
  
    ////////////////////
  
  
  
  
  copyBtnGG=Number(localStorage.getItem("copyBtnGG"))
  
  
  
  btnCopy = document.querySelectorAll("#btn-copy");
  
  if (copyBtnGG===0)
  {
    
    for(let i=0; i<btnCopy.length; i++)
    {
      btnCopy[i].hidden = true;
    }
    
    
  }
  
  
    ////////////////////
    
    
  
  
  editBtnGG = Number(localStorage.getItem("editBtnGG"))
  
  
  
  btnEdit = document.querySelectorAll("#btn-edit");
  
  if (editBtnGG === 0)
  {
  
    for (let i = 0; i < btnEdit.length; i++)
    {
      btnEdit[i].hidden = true;
    }
  
  
  }
  
  
  ////////////////////
  
  
  
  
  
  
  ////////////////////
    
    
  
  
  deletBtnGG = Number(localStorage.getItem("deletBtnGG"))
  
  
  
  btnDelet = document.querySelectorAll("#clear");
  
  if (deletBtnGG === 0)
  {
  
    for (let i = 0; i < btnDelet.length; i++)
    {
      btnDelet[i].hidden = true;
    }
  
  
  }
  
  
  ////////////////////
  
  


  
  
  
  lab.style.background='white'
  lab.style.color='black'
  
  showDate()
  
  int.value='';
  
  src=''
  
  in2.value=''
  
  localStorage.setItem("srcc", '')
  
  
  
  save()
  
}
//end btn add



//restore what we put in local storge
window.onload=()=>{
  
  
  
  
       //
  let deletBtnGG=Number(localStorage.getItem("deletBtnGG"))
  
  
  if (deletBtnGG===1) {
    
    deletBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(deletBtnGG===0)
  {
    
    deletBtn.style = `
    background: white;
    `
    
  }
  //
  
  
  
  
  
  
     //
  let editBtnGG=Number(localStorage.getItem("editBtnGG"))
  
  
  if (editBtnGG===1) {
    
    editBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(editBtnGG===0)
  {
    
    editBtn.style = `
    background: white;
    `
    
  }
  //
  
  
  
  
  
    //
  let copyBtnGG=Number(localStorage.getItem("copyBtnGG"))
  
  
  if (copyBtnGG===1) {
    
    copyBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(copyBtnGG===0)
  {
    
    copyBtn.style = `
    background: white;
    `
    
  }
  //
  
  
  
  
  
  //
  let toDoBtnGG=Number(localStorage.getItem("toDoBtnGG"))
  
  
  if (toDoBtnGG===1) {
    
    toDoBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(toDoBtnGG===0)
  {
    
    toDoBtn.style = `
    background: white;
    `
    
  }
  //
  
  
  
  
  
  let imgBtnGG=Number(localStorage.getItem("imgBtnGG"))
  
  
  if (imgBtnGG===1) {
    
    imgBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    
    lab.style.display='flex'
    
    
    
  } else if(imgBtnGG===0)
  {
    
    imgBtn.style = `
    background: white;
    `
    
    lab.style.display='none'
    
  }
  
  
  
  
  
  
  
  let BtextGG=Number(localStorage.getItem("BtextGG"))
  
  
  if (BtextGG===1) {
    
    Btext.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    
    btn2.style.display='block'
    
    
    
  } else if(BtextGG===0)
  {
    
    Btext.style = `
    background: white;
    `
    
    
    btn2.style.display='none'
    
    
    
  }
  
  
  
  
  dateGG=Number(localStorage.getItem("dateGG"))
  
  
  
  if (dateGG===1) {
    
    dateBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(dateGG===0)
  {
    
    dateBtn.style = `
    background: white;
    `
  }
  
  
  
  
  let H = localStorage.getItem("N")
  
  if (H!=""){
    noon.innerHTML= H;
  }
}
//end restore





//btn for delete element
function L()
{
  
  let S=event.srcElement.parentNode
  
  event.srcElement.parentNode.innerHTML=''
  
  S.parentNode.removeChild(S)
  save()
}
//end of btn delete




//btn for delete element with img
function M()
{
  
  let E = event.srcElement.parentNode
  
  
  E.parentNode.removeChild(E)
  
  save()
}
//end of btn delete









//btn for scroll

let btnup = document.getElementById('btnup')

window.onscroll = function() {
  if (window.scrollY >= 200) {
    btnup.style.display = "block";
  } else {
    btnup.style.display = "none";
  }
};


btnup.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}


//end button for scroll






// save img src in local storge

document.querySelector("#in2").addEventListener("change", function () {
  
  const reader = new FileReader()
  
  reader.addEventListener("load", () => {
    localStorage.setItem("srcc", reader.result)
  })
  
  
  reader.readAsDataURL(this.files[0])
  
  
  gl()
})

//end save src in local storge









// change color for label for btn select img

let lab = document.querySelector('#lab')


function gl() {
  
  if (in2.value !== '') {
    lab.style.background = '#D62828'
    lab.style.color='white'
    
  }
  
  
}


gl()

//end change color










//btn for checkbox


function K()
{
  
  let D=event.srcElement
  
  if(
    D.style.background==`transparent`||
    D.style.background==``
  )
  {
    D.style=`
  background: url(img/toDo.jpg);
  background-size: cover;
  `
  }else if(D.style.background!=`transparent`)
  {
    D.style.background=`transparent`
  }
  
  save()
}

//end btn for checkbox










//show data and time
function showDate(){
  
  const d = new Date();
  
  
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();
  let hour = d.getHours();
  let mint = d.getMinutes();
  
  
  if(mint<10){
    mint=`0${mint}`
  }
  
  
  
  
  if (hour>12){
    
    document.querySelector('#date').innerHTML = `
      
      
      ${year}/${month+1}/${day}
      => ${hour-12}:${mint} PM
      
      
      
      `;
    
  } else if (hour<=12){
    
    document.querySelector('#date').innerHTML = `
  
  
  ${year}/${month+1}/${day}
  => ${hour}:${mint} AM
  
  
  
  `;
    
  }
  
  
}
//end show data and time




let areatext=document.querySelector('#area-text');


// show Big text page 


btn2.addEventListener('click',()=>{
  
  areatext.style.display='block'
  textint.value=int.value
})

  
// end of big text



// back

let back = document.querySelector('#back-area')

back.onclick=()=>{
  
  areatext.style.display='none'
  
}

  
// end of back




// add area

let addarea = document.querySelector('#add-area')
let textint = document.querySelector('#text-int')

addarea.onclick=()=>{
  
  int.value = textint.value;
  areatext.style.display='none'
  
}

  
// end of add









///function to copy

function copy() {
  
  let T = event.srcElement.parentNode.parentNode
  
  let x = document.createElement('textarea')
  x.value=T.children[0].textContent
  document.body.appendChild(x)
  x.select()
  x.setSelectionRange(0,99999);
  document.execCommand("copy");
  document.body.removeChild(x)
}


//end of copy




//edit function


let btnedit = document.querySelector('#btn-edit')

let addEdit = document.querySelector('#add-edit')
  
let textEdit = document.querySelector('#text-edit')
  
let editText = document.querySelector('#edit-text')
  
let backEdit = document.querySelector('#back-edit')

let E1;

let xE;
  

function edit() {
  
  E1 = event.srcElement.parentNode.parentNode
  xE=E1.children[0].textContent
  

  editText.style.display='block';
  textEdit.value=xE;
  
  
}



function backedit() {
  
  editText.style.display='none';
  
}


function addedit() {
  
  if(textEdit.value!==''&&textEdit.value!==' ')
  {
    
    E1.children[0].textContent = textEdit.value;
    editText.style.display = 'none';
    save();
  
  } else {
    
    
    editText.style.display = 'none';
    save();
    
  }
  
}


//end of edit




// setting

let settings = document.querySelector('#settings')

let settingDone = document.querySelector('#setting-done')

let settingPage = document.querySelector('#setting-page')

function showSett() {
  
  settingPage.style.display='block'
  
}

function hideSett() {
  save()
  settingPage.style.display = 'none'

}






let dateText = document.querySelector('.dateText')

let Btext = document.querySelector('.Btext')

let imgBtn = document.querySelector('.imgBtn')

let dateBtn = document.querySelector('.dateBtn')

let toDoBtn = document.querySelector('.toDoBtn')

let copyBtn = document.querySelector('.copyBtn')

let editBtn = document.querySelector('.editBtn')

let deletBtn = document.querySelector('.deletBtn')


let dateGG;
let toDoBtnGG;
let copyBtnGG;
let editBtnGG;
let deletBtnGG;




/////////////////


dateBtn.addEventListener('click',()=>{
  
  let date = document.querySelectorAll("#date")
  
  
  
  if (
    dateBtn.style.background === `white`
  )
  {
    dateBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    for(let i=0; i<date.length; i++)
    {
      date[i].hidden = false;
    }
    
    dateGG = 1;
    localStorage.setItem("dateGG", 1);
    
   
    
    
  } else if (dateBtn.style.background !== `white`)
  {
    dateBtn.style.background = `white`
    
    for(let i=0; i<date.length; i++)
    {
      date[i].hidden = true;
    }
    
    dateGG = 0;
    localStorage.setItem("dateGG", 0);
    
    
  }
  
  
  
})


////////////////




////////////////


Btext.addEventListener('click',()=>{
  

  
  if (
    Btext.style.background === `white`
  )
  {
    Btext.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    btn2.style.display='block'
    
    
    localStorage.setItem("BtextGG",1)
  
    
    
  } else if (Btext.style.background !== `white`)
  {
    
    Btext.style.background = `white`
    
    btn2.style.display='none'
    
    localStorage.setItem("BtextGG",0)
    
  }
  
  
  
  
  
})



////////////////







////////////////

imgBtn.addEventListener('click',()=>{
  
  if (
    imgBtn.style.background === `white`
  )
  {
    imgBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    lab.style.display='flex'
    
    
    localStorage.setItem("imgBtnGG",1)
  
    
    
  } else if (imgBtn.style.background !== `white`)
  {
    
    imgBtn.style.background = `white`
    
    lab.style.display='none'
    
    localStorage.setItem("imgBtnGG",0)
    
  }
  
  
})



////////////////





////////////////


let ooo;


toDoBtn.addEventListener('click',()=>{
  
  ooo = document.querySelectorAll(".ooo")
  
  if (
    toDoBtn.style.background === `white`
  )
  {
    toDoBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    for (let i = 0; i < ooo.length; i++)
    {
      ooo[i].hidden = false;
    }
    
    
    localStorage.setItem("toDoBtnGG",1)
    
    
    
  } else if (toDoBtn.style.background !== `white`)
  {
    
    toDoBtn.style.background = `white`
    
    for (let i = 0; i < ooo.length; i++)
    {
      ooo[i].hidden = true;
    }
    
    localStorage.setItem("toDoBtnGG",0)
    
  }
  
})



////////////////





////////////////
  
let btnCopy;


copyBtn.addEventListener('click',()=>{
  
  btnCopy = document.querySelectorAll("#btn-copy")
  
  if (
    copyBtn.style.background === `white`
  )
  {
    copyBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    for (let i = 0; i < btnCopy.length; i++)
    {
      btnCopy[i].hidden = false;
    }
    
    
    localStorage.setItem("copyBtnGG",1)
    
    
    
  } else if (copyBtn.style.background !== `white`)
  {
    
    copyBtn.style.background = `white`
    
    for (let i = 0; i < btnCopy.length; i++)
    {
      btnCopy[i].hidden = true;
    }
    
    localStorage.setItem("copyBtnGG",0)
    
  }
  
  
  
})


////////////////







////////////////
  
let btnEdit;


editBtn.addEventListener('click',()=>{
  
  btnEdit = document.querySelectorAll("#btn-edit")
  
  if (
    editBtn.style.background === `white`
  )
  {
    editBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    for (let i = 0; i < btnEdit.length; i++)
    {
      btnEdit[i].hidden = false;
    }
    
    
    localStorage.setItem("editBtnGG",1)
    
    
    
  } else if (editBtn.style.background !== `white`)
  {
    
    editBtn.style.background = `white`
    
    for (let i = 0; i < btnEdit.length; i++)
    {
      btnEdit[i].hidden = true;
    }
    
    localStorage.setItem("editBtnGG",0)
    
  }
  
  
  
})


////////////////



////////////////

let btnDelet;


deletBtn.addEventListener('click', () => {

  btnDelet = document.querySelectorAll("#clear")

  if (
    deletBtn.style.background === `white`
  )
  {
    deletBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `

    for (let i = 0; i < btnDelet.length; i++)
    {
      btnDelet[i].hidden = false;
    }


    localStorage.setItem("deletBtnGG", 1)



  } else if (deletBtn.style.background !== `white`)
  {

    deletBtn.style.background = `white`

    for (let i = 0; i < btnDelet.length; i++)
    {
      btnDelet[i].hidden = true;
    }

    localStorage.setItem("deletBtnGG", 0)

  }



})


////////////////




////////////////







// end of setting 















///////*start  enter*/////////

document.querySelector("#in").addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector("#btn1").click();
  }
});

///////*end  enter*/////////