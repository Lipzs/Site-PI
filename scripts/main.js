jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
    });
});


const contribuir = document.getElementById('contribuir')

const btnclose = document.getElementById('close')

const modal = document.querySelector("#modal")



contribuir.addEventListener("click" ,  () => {
    modal.classList.remove("hide")
})

btnclose.addEventListener("click" , () => {
    modal.classList.add("hide")
})
