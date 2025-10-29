class Pessoa{
    #CPF;
    #nome;
    #peso;
    constructor(c,n,p){
        this.#CPF = c;
        this.#nome = n;
        this.#peso = p;
    }

    set cpf(c){
        this.#CPF = c;
    }

    get cpf(){
        return(this.#CPF);
    }

    set nome(n){
        this.#nome = n;
    }

    get nome(){
        return(this.#nome);
    }

    set peso(p){
        this.#peso = p;
    }

    get peso(){
        return(this.#peso);
    }
    

}
