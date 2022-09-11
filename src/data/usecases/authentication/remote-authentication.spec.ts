import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAuthentication } from "./remote-authentication"
import { faker } from '@faker-js/faker'

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
        await sut.authenticate()
        expect(httpPostClientSpy.url).toBe(url)
    })
})