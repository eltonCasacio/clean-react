export class NotFoundError extends Error {
    constructor () {
        super('Página náo encontrada')
        this.name = 'NotFoundError'
    }
}