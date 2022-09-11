import { HttpPostClientSpy } from "@/data/test"
import { RemoteAuthentication } from "./remote-authentication"
import { mockAccountModel, mockAuthentication } from "@/domain/test"
import { InvalidCredentialsError, UnexpectedError } from "@/domain/errors"
import { HttpStatusCode } from "@/data/protocols/http"
import { AccountModel } from "@/domain/models"
import { AuthenticationParams } from "@/domain/usecases"
import { faker } from '@faker-js/faker'

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const sutFactory = (url = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)

    return {
        sut,
        httpPostClientSpy
    }
}

describe("RemoteAuthentication", () => {
    test("should call httpPostClient with correct url", async () => {
        const url = faker.internet.url()
        const {sut, httpPostClientSpy} = sutFactory(url)
        await sut.authenticate(mockAuthentication())
        expect(httpPostClientSpy.url).toBe(url)
    })

    test("should call httpPostClient with correct body", async () => {
        const {sut, httpPostClientSpy} = sutFactory()
        const body = mockAuthentication()
        await sut.authenticate(body)
        expect(httpPostClientSpy.body).toEqual(body)
    })

    test("should throw InvalidCredentialsError if httpPostClient returns 401", async () => {
        const {sut, httpPostClientSpy} = sutFactory()
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.unauthorized
        }
        const promise = sut.authenticate(mockAuthentication())
        await expect(promise).rejects.toThrow(new InvalidCredentialsError())
    })

    test("should throw UnexpectedError if httpPostClient returns 400", async () => {
        const {sut, httpPostClientSpy} = sutFactory()
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promise = sut.authenticate(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

    test("should throw UnexpectedError if httpPostClient returns 404", async () => {
        const {sut, httpPostClientSpy} = sutFactory()
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promise = sut.authenticate(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

    test("should throw UnexpectedError if httpPostClient returns 500", async () => {
        const {sut, httpPostClientSpy} = sutFactory()
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promise = sut.authenticate(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

    test("should return an AccountModel if HttpPostClient returns 200", async () => {
        const {sut, httpPostClientSpy} = sutFactory()
        const httpResult = mockAccountModel()
        
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.ok,
            body: httpResult
        }
        const account = await sut.authenticate(mockAuthentication())
        expect(account).toEqual(httpResult)
    })
})