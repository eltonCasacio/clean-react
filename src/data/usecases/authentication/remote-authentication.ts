import { AuthenticationParams } from "@/domain/usecases/authentication"
import { HttpPostClient } from "@/data/protocols/http/http-post-client"
import { HttpStatusCode } from "@/data/protocols/http/http-response"
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials.error"
import { UnexpectedError } from "@/domain/errors/unexpected.error"

export class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient
        ){
    }
    async authenticate(params: AuthenticationParams): Promise<void>{
       const response =  await this.httpPostClient.post({url: this.url, body: params})

       switch (response.statusCode) {
        case HttpStatusCode.ok: break
        case HttpStatusCode.unauthorized : throw new InvalidCredentialsError()
        default: throw new UnexpectedError()
       }
    }
}