import ApiService from '../Util/ApiService';
import Urls from '../Util/Urls';
import ApiResponse from '../Mapping/ApiResponse';
import ProductResponse from '../Mapping/Response/productResponse';


export const getListService = () => {
    return new ApiService({
        baseURL: process.env.REACT_APP_FURNITURE_DEV_HOST || "",
        endpoint: Urls.PRODUCT.getList,
        parser: parseData
    }).get();
}

const parseData = (data: any) => data?.result?.length ? {
    ...data,
    result: data.result.map((item: any) => new ProductResponse(item))
} : new ApiResponse(data);