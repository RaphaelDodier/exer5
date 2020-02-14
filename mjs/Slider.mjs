export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')

    }

    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        elmSlides.classList.add('slides')
        let k=1
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            elmSlide.id = 'slides-' + k
            k++
            let elmImg = document.createElement("img")
            elmImg.src = unSlide.img
            elmSlide.appendChild(elmImg)
            elmSlides.appendChild(elmSlide)     
        }
        let elmPrec = document.createElement("a")
        elmPrec.className = "prec"
        let flechePrec = document.createTextNode('>&#10094;')

        let elmProc = document.createElement("a")
        elmProc.className = "proc"
        let flecheProc = document.createTextNode('>&#10095;')

        elmPrec.appendChild(flechePrec)
        elmProc.appendChild(flecheProc)


        elmSlider.appendChild(elmSlides)

        //Fait apparaitre les flèches
        elmSlider.appendChild(elmPrec)
        elmSlider.appendChild(elmProc)

        this.elmMonSlider.appendChild(elmSlider)

        // <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        // <a class="next" onclick="plusSlides(1)">&#10095;</a>

    }


}