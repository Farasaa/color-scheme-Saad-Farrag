    let colorsSchemeArr = []
    const navBar = document.getElementById('nav-bar')
    const colorInput = document.getElementById('color-input')
    const colorScheme = document.getElementById('colors-scheme')




    document.addEventListener('submit',function(e){
        e.preventDefault()
        e.target.id === ('nav-bar')
        let colorHex = colorInput.value.slice(1)
        let colorMode = colorScheme.value

        

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorMode}&count=5`)
    .then(res => res.json())
    .then(data => {
        let footerHtml = ''
        let html = ''
        colorsSchemeArr = data.colors
        colorsSchemeArr.forEach(function(hexNumber){
            html += `
            <div class="colors-box" style="background-color: ${hexNumber.hex.value};"></div> `
            footerHtml += `<P>${hexNumber.hex.value}</P>`
        })
        
        
        document.getElementById('colors-api').innerHTML = html
        document.getElementById('hex-value').innerHTML = footerHtml
    })    

})
