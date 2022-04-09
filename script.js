const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".header-section");
const modal = document.querySelector(".modal");
btnNavEl.addEventListener("click", function(){
	
	modal.classList.toggle("nav-open");
	navbarEl.classList.toggle("nav-open")
});

const trigger = document.querySelector(".product-li");
  const background = document.querySelector(".dropdownBackground");
  const nav = document.querySelector(".header-section");
  
  function handleEnter() {
  	
    this.classList.add("trigger-enter");
    setTimeout(()=> {
      if(this.classList.contains("trigger-enter")){
        this.classList.add("trigger-enter-active")
      }
    }, 150);
      background.classList.add("open");

      const dropdown = this.querySelector(".dropdown")
      
      const dropdownCoords = dropdown.getBoundingClientRect();
      const navCoords = nav.getBoundingClientRect();

      const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top + navCoords.top,
        left: dropdownCoords.left -navCoords.left,
        
      };
      background.style.setProperty("width", `${coords.width}px`);
      background.style.setProperty("height", `${coords.height}px`);
      background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);
     
  }
  function handleLeave() {
  	this.classList.remove("trigger-enter", "trigger-enter-active")
     background.classList.remove("open")
  }

trigger.addEventListener("mouseenter", handleEnter);
trigger.addEventListener("mouseleave", handleLeave);  