document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".foldable").forEach(function(block) {

    block.style.display = "none";

    const toggle = document.createElement("button");
    toggle.textContent = "Show Output";


    toggle.classList.add("foldable-toggle");

    
    block.parentNode.insertBefore(toggle, block);

    toggle.addEventListener("click", function() {
      const isHidden = block.style.display === "none";
      if (isHidden) {
        block.style.display = "block";
        toggle.textContent = "Hide Output";
      } else {
        block.style.display = "none";
        toggle.textContent = "Show Output";
      }
    });
  });
});