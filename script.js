function flip() {
    let flp = document.getElementById("clik");
    var rt = 0;
    var s = 0;
    var jmp = setInterval(() => {
        if (s == 400) {
            setTimeout(jmp);
        } else {
            s = s + 1;
            flp.style.transform = 'rotateX(' + rt + 'deg)';
            flp.style.bottom = s + "px";
        }
        rt = rt + 45;
        if (rt == 45045) {
            clearTimeout(jmp);
        } else {
            flp.style.transform = 'rotateX(' + rt + 'deg)';
        }
    });
    setTimeout(fun, 5000);

}


function fun() {
    var x = null;
    x = Math.floor(Math.random() * 2);

    if (x == 1) {

        let h = document.getElementById("btnradio1");
        let t = document.getElementById("btnradio2");
        let s = document.getElementById("show");
        setTimeout(reset, 6000);
        h.addEventListener("click", function () {

            s.style.color = "green";
            s.innerHTML = "Waw ! You Won";
            document.getElementById("clik").src = "images/head.jpg";
        });
        t.addEventListener("click", function () {

            s.style.color = "red";
            s.innerHTML = "I'm sorry Babu! You lost";
            document.getElementById("clik").src = "images/head.jpg";
        });

    }
    else {
        let h = document.getElementById("btnradio1");
        let t = document.getElementById("btnradio2");
        let s = document.getElementById("show");
        setTimeout(reset, 6000);
        h.addEventListener("click", function () {

            s.style.color = "red";
            s.innerHTML = "I'm sorry Babu! You lost";
            document.getElementById("clik").src = "images/teil.jpg";
        });
        t.addEventListener("click", function () {

            s.style.color = "green";
            s.innerHTML = "Waw ! You Won";
            document.getElementById("clik").src = "images/teil.jpg";
        });




    }
}
function reset() {
    window.location.reload(true);
}