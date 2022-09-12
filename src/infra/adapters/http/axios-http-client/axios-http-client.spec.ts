import { AxiosHttpClient } from "./axios-http-client"
import axios from 'axios'
import {faker} from '@faker-js/faker'
import { HttpPostClientParams } from "@/data/protocols/http"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
    data: faker.helpers.objectValue<any>({}),
    status: faker.random.alphaNumeric()
}

mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const sutFactory = (): AxiosHttpClient => {
    return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostClientParams<any> => ({
    url:faker.internet.url(),
    body: faker.helpers.objectValue<any>({})
})

describe("AxiosHttpClient", () => {
    test("should call axios with correct values", async() => {
        const request = mockPostRequest()
        const sut = sutFactory()
        await sut.post({url: request.url})
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test("should return the correct statusCode and body", async() => {
        const sut = sutFactory()
        const httpResponse = await sut.post(mockPostRequest())
        expect(httpResponse).toEqual({
            statusCode: mockedAxiosResult.status,
            body: mockedAxiosResult.data
        })
    })
})