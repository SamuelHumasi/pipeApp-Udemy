export enum Color {
    rojo, verde, azul, negro
}


export interface Hero {
    name:string,
    canFly: boolean,
    color: Color
}