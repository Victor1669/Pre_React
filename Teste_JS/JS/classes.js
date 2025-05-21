let identificar = 0;

class Div {
    constructor(cor, largura, altura){
        this.width = largura;
        this.height = altura;
        this.color = cor;
    }
    criar(id, classe){
        identificar += 1;

        return eval(`
            let ent${identificar} = document.createElement("div");
            
            document.body.appendChild(ent${identificar});
            ent${identificar}.setAttribute("id", "${id}");
            ent${identificar}.setAttribute("class", "${classe}");
            ent${identificar}.setAttribute("style", 'width: ${this.width}px; height: ${this.height}px; background: ${this.color};');
        `)
    }
}