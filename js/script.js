
let txt = document.querySelector('#slideText')



const string = [ 'Aprendendo Design' ,'Amante de Games', 'Apreciador de Cinema' ,'Louco por Ciência' ,'Sou desenvolvedor Front-End']

function textSlide() {
    

    let i = 0

    setInterval(() => {

        if(i === string.length-1) {
            
            txt.innerHTML = ''
            txt.innerHTML = string[i]
            i = 0
        } else {
            
            txt.innerHTML = ''
            txt.innerHTML = string[i]
            i++
        }
    }, 3000)
        
}

textSlide()