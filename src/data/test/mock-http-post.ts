/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpPostClientParams } from "../protocols/http";
import { faker } from "@faker-js/faker";

export const mockPostRequest = (): HttpPostClientParams<any> => ({
    url: faker.internet.url(),
    body: faker.helpers.objectValue<any>({})
})