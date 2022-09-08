import { AccountModel } from "../models/account.model"

type AuthenticationRequestParams = {
  username: string
  password: string
}
export interface Authentication {
  auth(params: AuthenticationRequestParams): Promise<AccountModel>
}
