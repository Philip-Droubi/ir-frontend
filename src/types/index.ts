export type DataResponse = {
    documents: string[],
}

export type SearchParams = {
    query: string,
    dataset_name: string,
    type: string,
}
// (embed | crawl)