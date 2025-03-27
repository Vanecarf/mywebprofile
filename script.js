document.getElementById("ig").addEventListener('click',function(){
        window.open("https://www.instagram.com/vanecarf/", "_blank")
});
document.getElementById("linkedin").addEventListener('click',function(){
        window.open("https://www.linkedin.com/in/vanecaraf", "_blank")
});
document.getElementById("gmail").addEventListener('click',function(){
        window.open("mailto:vanecaraf@gmail.com", "_blank")
});
document.getElementById("cv").addEventListener('click',function(){
        window.open("https://drive.google.com/file/d/1Y2JAks_pwRKc2eW4hyzRcVK39i0ON9aj/view?ths=true", "_blank")
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
