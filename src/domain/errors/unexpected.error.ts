export class UnexpectedError extends Error {
    constructor () {
        super('Ocorreu um erro inesperado, tente novamente mais tarde ou contacte o administrador do sistema')
        this.name = 'UnexpectedError'
    }
}