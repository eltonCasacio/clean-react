/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Authentication, AuthenticationParams } from "@/domain/usecases"
import { HttpPostClient, HttpStatusCode } from "@/data/protocols/http"
import { InvalidCredentialsError, UnexpectedError } from "@/domain/errors"
import { AccountModel } from "@/domain/models"

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