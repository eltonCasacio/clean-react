import { HttpPostClientSpy } from "@/data/test/mock-http-client"
import { RemoteAuthentication } from "./remote-authentication"
import { faker } from '@faker-js/faker'
import { mockAuthentication } from "@/domain/test/mock-authentication"
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials.error"
import { HttpStatusCode } from "@/data/protocols/http/http-response"

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy
}

const sutFactory = (url = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
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
})