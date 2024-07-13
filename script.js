//your JS code here. If requir
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("openModal");
    let span = document.getElementsByClassName("close-modal")[0];

    btn.onclick = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
