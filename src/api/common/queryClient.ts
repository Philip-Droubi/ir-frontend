import { MutationCache, QueryCache, QueryClient } from 'react-query';
import { notify } from '@/utils/toast';
import { AxiosError } from 'axios';
import { getAxiosErrorMessage } from '@/api/common/base-api';

const queryClientConfig = {
    mutationCache: new MutationCache({
        onError(error: any) {
            console.log(error);
            const axiosError = error as AxiosError<any>;
            const errorMessage = getAxiosErrorMessage(axiosError);
            errorMessage && notify(errorMessage, "error")
        }
    }),

    queryCache: new QueryCache({
        onError(error: any) {
            const axiosError = error as AxiosError<any>;
            const errorMessage = getAxiosErrorMessage(axiosError);
            errorMessage && notify(errorMessage, "error")
        }
    }),
    defaultOptions: {
        queries: {
            throwOnError: true,
            refetchOnWindowFocus: false,
        },
    },
}

export const queryClient = new QueryClient(queryClientConfig);
