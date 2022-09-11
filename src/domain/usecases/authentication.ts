import { AccountModel } from "@/domain/models"

export type AuthenticationParams = {
    username: string
    password: string
}
export interface Authentication {
    authenticate(params: AuthenticationParams): Promise<AccountModel>
}