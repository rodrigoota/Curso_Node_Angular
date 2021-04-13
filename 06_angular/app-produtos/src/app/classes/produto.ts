export class Produto {

    public _id?: string; //representa o id do produto no banco de dados MongoDB

    //propriedade codigo
    private _codigo?: number;
    public get codigo(): number {
        return this._codigo;
    }
    public set codigo(v: number){
        this._codigo = v;
    }

    //propriedade descricao - usando o atalho 'prop' + tab
    private _descricao? : string;
    public get descricao() : string {
        return this._descricao;
    }
    public set descricao(v : string) {
        this._descricao = v;
    }

    //propriedade unidade
    private _unidade? : string;
    public get unidade() : string {
        return this._unidade;
    }
    public set unidade(v : string) {
        if (v.length < 2 || v.length > 5) {
            throw new Error("A unidade deve ter entre 2 e 5 caracteres");
        }
        this._unidade = v;
    }

    //propriedade preço
    private _preco? : number;
    public get preco() : number {
        return this._preco;
    }
    public set preco(v : number) {
        if (v < 0) {
            throw new Error("O preço não pode ser negativo")
        }
        this._preco = v;
    }
    
    //propriedade categoria
    private _categoria? : string;
    public get categoria() : string {
        return this._categoria;
    }
    public set categoria(v : string) {
        this._categoria = v;
    }
    
}
