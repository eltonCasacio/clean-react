import { AuthenticationParams } from "@/domain/usecases/authentication";
import {faker} from '@faker-js/faker'

export const mockAuthentication = (): AuthenticationParams => {
    return {
        username: faker.internet.email(),
        password: faker.internet.password()
    }
}