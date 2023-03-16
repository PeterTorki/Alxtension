const els = document.getElementsByTagName("code")


const copyToClipboard = str => {
    const el = document.createElement("div")
    el.innerHTML = `<div
    style="position: fixed; top: 0; margin: 20px; margin-top: 20px;;right: 0; width: 200px; height: 40px; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 9999;"><div style="background: #fff; padding: 20px; border-radius: 5px; text-align: center; font-size: 20px; font-weight: 700;">Copied to clipboard</div></div>`
    el.id = "box"
    
    document.body.appendChild(el)
    setTimeout(() => {
        const box = document.getElementById('box');
        box.style.display = 'none';
        document.body.removeChild(box)
    }, 1500)
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str)
}


for(let c of els) {
    c.addEventListener("click", function(){
       copyToClipboard(c.innerHTML ) 
    })
}