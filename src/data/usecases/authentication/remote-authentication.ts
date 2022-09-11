/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Authentication, AuthenticationParams } from "@/domain/usecases/authentication"
import { HttpPostClient } from "@/data/protocols/http/http-post-client"
import { HttpStatusCode } from "@/data/protocols/http/http-response"
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials.error"
import { UnexpectedError } from "@/domain/errors/unexpected.error"
import { AccountModel } from "@/domain/models/account.model"

export class RemoteAuthentication implements Authentication{
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
        ){
    }
    async authenticate(params: AuthenticationParams): Promise<AccountModel>{
       const response =  await this.httpPostClient.post({url: this.url, body: params})

       switch (response.statusCode) {
        case HttpStatusCode.ok: return response.body!
        case HttpStatusCode.unauthorized : throw new InvalidCredentialsError()
        default: throw new UnexpectedError()
       }
    }
}