export class Origin {
    public static INTEGRACAO = 1;

    public static returnOriginList() {
        return [
            { value: this.INTEGRACAO, description: "INTEGRAÇÃO", }
        ]
    }
}