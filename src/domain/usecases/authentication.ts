import { AccountModel } from "@/domain/models/account.model"

export type AuthenticationParams = {
    username: string
    password: string
}
export interface Authentication {
    authenticate(params: AuthenticationParams): Promise<AccountModel>
}