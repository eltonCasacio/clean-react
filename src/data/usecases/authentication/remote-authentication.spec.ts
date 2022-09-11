import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAuthentication } from "./remote-authentication"

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy
}

const sutFactory = (url = 'url_default'): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)

    return {
        sut,
        httpPostClientSpy
    }
}

describe("RemoteAuthentication", () => {
    test("should call httpPostClient with correct url", async () => {
       const {sut, httpPostClientSpy} = sutFactory('any_url')
        await sut.authenticate()
        expect(httpPostClientSpy.url).toBe('any_url')
    })
})