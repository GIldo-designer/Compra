class Info {
    constructor() {
        this.id = 1;
        this.arrayCadastro = [];

    };
    salvar() {
        let info = this.lerDados();

        if (this.validar(info)) {
            this.adicionar(info);
        };

        this.fechar();
    };
    lerDados() {
        var nome = $('#nome').val();
        var preco = $('#preco').val();
        var quant = $('#quant').val();

        var info = { nome, preco, quant };
        return info;
    };
    validar(info) {
        let msg = '';

        if (info.nome == '') {
            msg += '-Informe o nome do produto! \n'
        }
        if (info.preco == '') {
            msg += '-Informe o preco! \n'
        }
        if (info.quant == '') {
            msg += '-Informe o quant!'
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;

        return true;
    };
    adicionar(info) {
        this.arrayCadastro.push(info);
        var infoJson = JSON.stringify(this.arrayCadastro);
        localStorage.setItem('dados', infoJson);

        console.log(this.arrayCadastro.length)
    };
    totalAdd() {

    };
    salvarStorag() {
        let arrayCadastro = [];

        if (localStorage.getItem('dados') != null) {
            arrayCadastro = JSON.parse(localStorage.getItem('dados'));
            //console.log(arrayCadastro);
        } else {
            arrayCadastro;
        };
    };
    listar() {
        const tbody = document.querySelector("#body");
        tbody.innerText = '';
        document.querySelector(".inner").style.display = 'none';
        document.querySelector(".inner2").style.display = 'block';
        document.querySelector(".btnLista").style.display = 'none';


            for (let i = 0; i < this.arrayCadastro.length; i++) {
                let tr = tbody.insertRow();

                let td_Id = tr.insertCell();
                let td_nome = tr.insertCell();
                let td_preço = tr.insertCell();
                let td_acoes = tr.insertCell();

                td_Id.innerText = this.arrayCadastro[i].nome;
                td_nome.innerText = this.arrayCadastro[i].preco;
                td_preço.innerText = this.arrayCadastro[i].quant;


                let acoes = document.querySelector('#acoes');

                let btnEditar = document.createElement('button');
                btnEditar.innerText = 'Apagar';
                btnEditar.classList.add('btneditar');
                acoes.appendChild(btnEditar);
                console.log(btnEditar);
            };


    };
    fechar() {
        document.querySelector(".inner").style.display = 'block';
        document.querySelector(".inner2").style.display = 'none';
        document.querySelector(".btnLista").style.display = 'block';
    };
};
var info = new Info;

