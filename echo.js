document.addEventListener("DOMContentLoaded",function(){
    console.log("Javascript loaded");
    initializeEventListeners()
})
function initializeEventListeners(){
    setupProduct();
    setupAbout();
    setupContact();
    setupFooter();
}
function setupProduct(params) {
    const productbtns=document.querySelectorAll(".add-to-cart");
    productbtns.forEach(button=>{
        button.addEventListener("click", function(){
            const prodName=this.getAttribute("data-product");
            alert(prodName + "added to cart!");
        });
    });
}
function setupAbout(){
    const aboutText=document.getElementById("about text");
    if(aboutText){
        aboutText.addEventListener("mouseover",function(){
            aboutText.style.color="blue;"
        })
        aboutText.addEventListener("mousleaver",function(){
            aboutText.style.color="black;"
        })
    }
}
function setupContact(){
    const contactForm=Document.getElementById("contactform");
    if(contactForm){
        contactForm.addEventListener("submit",function(event){
            event.preventDefault();
            const name=document.getElementById("name").value;
            const email=document.getElementById("email").value;
            const message=document.getElementById("message").value;
            fetch("/send-message",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"},
                    body:JSON.stringify({name,email,message}),
                })
                .then(response=> response.text())
                .then(data=>{
                    const responseText=document.getElementById("response");
                    if(responseText){
                        responseText.textContent=data;
                    }
                    contactForm.reset();
                })
                .catch(error=> 
                    console.error("Error:",error));
                });
        }
    }
    function setupFooter(){
        const footerYear=document.getElementById("footerYear");
        if(footerYear){
            const currYear=new Date().getFullYear();
            footerYear.textContent=currYear;
        }
    }
