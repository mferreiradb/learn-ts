export class Random {
    public static getRandom(min: number, max: number): number {
        const floatRandom = Math.floor(Math.random())
    
        const difference = max - min
    
        // random between 0 and the difference
        const random = Math.floor(Math.round(difference * floatRandom))
    
        const randomWithinRange = random + min
    
        return randomWithinRange
    }
}