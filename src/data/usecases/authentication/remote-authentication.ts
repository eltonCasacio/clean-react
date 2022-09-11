import { HttpPostClient } from "../../protocols/http/http-post-client"

export class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient
        ){
    }
    async authenticate(): Promise<void>{
        await this.httpPostClient.post(this.url)
        return Promise.resolve()
    }
}