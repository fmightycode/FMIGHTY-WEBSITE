  const menuId = document.getElementById("menuId");
           let startX = 0
           let endX = 0
            const label = document.getElementById("label");
            const overlay = document.getElementById("overLay");

            label.addEventListener("click", function (){ 
                menuId.classList.toggle("active");
                overlay.classList.toggle("active");
                label.classList.add("active")
            });
            overlay.addEventListener("click", function (){ 
                menuId.classList.remove("active");
                overlay.classList.remove("active")
                label.classList.remove("active")
            });

            label.addEventListener("touchstart", (e) =>{ 
               startX = e.touches[0].clientX;
            });
            label.addEventListener("touchend", (e) =>{ 
               endX = e.changedTouches[0].clientX
            if(startX - endX > 50){ 
               menuId.classList.add("active");
                overlay.classList.add("active");
                label.classList.remove("active")
            }
              });
            menuId.addEventListener("touchstart", (e) =>{ 
               startX = e.touches[0].clientX;
            });
            menuId.addEventListener("touchend", (e) =>{ 
               endX = e.changedTouches[0].clientX
            if(endX - startX > 50){ 
               menuId.classList.remove("active");
                overlay.classList.remove("active");
                label.classList.remove("active")
            }
              });
const textArea = document.getElementById("textArea");
const submitBtn = document.getElementById("submitBtn");
const charErr = document.getElementById("charErr");
const MAX = 280;
const WARNING = 15;

submitBtn.disabled = true;

textArea.addEventListener("input", function () {
  const length = textArea.value.length;
  const remaining = MAX - length;

  charErr.textContent = remaining;
  if(length > 0){ 
  charErr.classList.remove("warning", "danger");
  if(remaining >= 0) {
    charErr.classList.add("warning");
    submitBtn.disabled = false;}
    else{ 
       charErr.classList.add("danger")
       submitBtn.disabled = true;
    }
  }
 else{ 
    submitBtn.disabled = true;
 }
});
const form = document.getElementById("validateForm");
const phone = document.getElementById("phone");
const sname = document.getElementById("name");
const email = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");
form.addEventListener("submit", function () {
  window.location.href = "mailto:agboolaferanmi156@gmail.com";
});
