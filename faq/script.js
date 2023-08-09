const faqBtns = document.querySelectorAll('.faq-toggle');
faqBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.currentTarget.parentNode.classList.toggle('active');
    })
})