import { fakeStoreApi } from "../api/api";


export const productApi = fakeStoreApi.injectEndpoints({

    endpoints:  (builder) => ({
        getProducts: builder.query<ResponseType, void>()
        
}

)