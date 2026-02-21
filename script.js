function scrollToSection(id){
  document.getElementById(id).scrollIntoView({
    behavior:'smooth'
  });
}

function whatsapp(){
  window.open("https://wa.me/5511999999999","_blank");
}

function pix(){
  alert("Pagamento via Pix — chave: contato@fastime.com");
}

function cartao(){
  alert("Pagamento com cartão em breve!");
}

// Antes / Depois slider
const slider = document.getElementById("slider");
const afterImg = document.getElementById("afterImg");

if(slider){
  slider.addEventListener("input", function(){
    afterImg.style.clipPath = `inset(0 ${100 - slider.value}% 0 0)`;
  });
}