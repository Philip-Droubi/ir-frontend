import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { request } from "@/api/common/base-api";
import { DataResponse, SearchParams } from "@/types";

async function getSearch(params: SearchParams): Promise<DataResponse> {
    const response = await request({
        url: "search", method: 'post', data: {
            "query": params.query,
            "dataset_name": params.dataset_name,
            "type": params.type ?? "embed",
        }
    }) as AxiosResponse;
    return response.data;
}

export const useGetSearch = (params: SearchParams) => {
    return useQuery({
        queryKey: ["search", { ...params }],
        queryFn: () => getSearch(params),
        enabled: params.query.length > 0,
    });
}