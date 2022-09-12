/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpPostClient, HttpPostClientParams, HttpResponse } from "@/data/protocols/http";
import axios from 'axios'
export class AxiosHttpClient implements HttpPostClient<any, any> {
    async post(params: HttpPostClientParams<any>): Promise<HttpResponse<any>> {
        const { data, status } = await axios.post(params.url, params.body)
        return {
            statusCode: status,
            body: data
        }
    }
}