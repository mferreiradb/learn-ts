export class Util {
    public static randomizar(inicio: number, fim: number): number {
        return inicio + Math.floor(Math.random() * (fim - inicio));
    }
}
