(function readJS(win, doc) {
    'us strict'        
    let guardar = document.querySelector(".guardar");
    let listar = document.querySelector(".listar");
    let tbody = doc.querySelector("#tbody");
    var dadosProdu = JSON.parse(localStorage.getItem('produto'));

    var arraylocal = [];   
    let id = 1;
    let nome = doc.querySelector("#nome");
    let preco = doc.querySelector("#preco");
    let quant = doc.querySelector("#quant");

    guardar.addEventListener("click", function guardarF() {

        const produ = {
            id: 1,
            nome: nome.value,
            preco: preco.value,
            quant: quant.value
        }
        arraylocal.push(produ);
        //console.log(arraylocal); Array dentro d eutro array
        if (localStorage.getItem('produto') == null) {
            localStorage.setItem('produto', JSON.stringify([produ]));
        } else {

            dadosProdu = [produ, ...dadosProdu];
            localStorage.setItem('produto', JSON.stringify(dadosProdu));
            console.log(dadosProdu);
            //console.log(dadosProdu[5]);
        }
        function limpar() {
            let nome = doc.querySelector("#nome").value = "";
            let preco = doc.querySelector("#preco").value = "";
            let quant = doc.querySelector("#quant").value = "";
        }
        limpar();
    }, false)

    listar.addEventListener("click", function listarF() {
        let inner = doc.querySelector(".inner").style.display = "none";
        let tbody = doc.querySelector(".body")
        tbody.innerText = '';

        console.log(arraylocal);

        let tr = tbody.insertRow();
        console.log(tr);
        for (let i = 0; i < arraylocal.length; i++) {
            //console.log(arraylocal[i]);
        };

    }, false);

})(window, document);