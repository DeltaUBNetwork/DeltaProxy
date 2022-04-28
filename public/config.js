
 var tabSpoofTitle = (localStorage.getItem("tabSpoofTitle") || localStorage.setItem("tabSpoofTitle","Delta unbl0cker (v.1.0)")) 
var tabSpoofIcon = (localStorage.getItem("tabSpoofIcon") || localStorage.setItem("tabSpoofIcon",`${location.href}/images/fed.png`))
var proxType = (localStorage.getItem("proxType") ||  localStorage.setItem("proxType","Ultraviolet"))
var changeTitleBox = document.getElementById('pros-form')
var changeIconBox = document.getElementById('pros-form1')

 function $(id) {
            return document.getElementById(id);
         
}
$('pros-form').addEventListener('submit', async event => {
    event.preventDefault();
    var titlep = $('urltitle').value.trim()
    document.title=titlep
    localStorage.setItem("tabSpoofTitle",titlep)
    
});
$('pros-form1').addEventListener('submit', async event => {
    event.preventDefault();
    var titlez = $('urlicon').value.trim()
    document.querySelector("link[rel='shortcut icon']").href = titlez

document.querySelector("link[rel*='icon']").href = titlez
    localStorage.setItem("tabSpoofIcon",titlez)
    
});

/*
function updateStuff(title,icon) {
  var tabSpoofTitle = (localStorage.getItem("tabSpoofTitle") || localStorage.setItem("tabSpoofTitle","Delta unbl0cker (v.1.0)")) 
var tabSpoofIcon = (localStorage.getItem("tabSpoofIcon") || localStorage.setItem("tabSpoofIcon",`${location.href}/images/fed.png`))
  localStorage.setItem("tabSpoofTitle",title)
  localStorage.setItem("tabSpoofIcon",icon)
document.title = title
document.querySelector("link[rel='shortcut icon']").href = icon

document.querySelector("link[rel*='icon']").href = tabSpoofIcon
}
*/
