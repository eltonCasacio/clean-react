/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosHttpClient } from "./axios-http-client"
import { mockAxios } from "@/infra/test"
import { mockPostRequest } from "@/data/test"
import axios from "axios"

jest.mock('axios')

type SutTypes = {
    sut: AxiosHttpClient,
    mockedAxios: jest.Mocked<typeof axios>
}
const sutFactory = (): SutTypes => {
    return {
        sut: new AxiosHttpClient(),
        mockedAxios: mockAxios()
    }
}

describe("AxiosHttpClient", () => {
    test("should call axios with correct values", async () => {
        const request = mockPostRequest()
        const { sut, mockedAxios } = sutFactory()
        await sut.post({ url: request.url })
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test("should return the correct statusCode and body", () => {
        const { sut, mockedAxios } = sutFactory()
        const promise = sut.post(mockPostRequest())
        expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
})