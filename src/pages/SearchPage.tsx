import { FormEvent, useState } from "react";
import { useGetSearch } from "@/api/Search";
import { SearchParams } from "@/types";
import { SearchBar } from "@/components/SearchBar";
import { SelectChangeEvent } from '@mui/material/Select';
import { Loading } from "@/components/Loading";
import EmptyComponent from "@/components/EmptyComponent";

export const SearchPage = () => {
    const [dataset, setDataSet] = useState('antique')
    const [type, setType] = useState('embed')

    const handleDataSetChange = (event: SelectChangeEvent) => {
        let selectedDataSet = event.target.value;
        setDataSet(event.target.value as string);
        if (selectedDataSet === "clinic")
            setType("embed")
    };

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const [search, setSearch] = useState<SearchParams>({
        query: "",
        dataset_name: "antique",
        type: "embed",
    });

    const { data, isLoading } = useGetSearch({
        query: search.query,
        dataset_name: search.dataset_name,
        type: search.type,
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let search = (
            document.getElementById("search-input") as HTMLInputElement
        ).value;

        console.log(dataset);


        setSearch({
            query: search,
            dataset_name: dataset,
            type: type,
        })
    };

    return (
        <div className="flex items-center justify-center pt-6 px-8 max-w-6xl mx-auto transition-all min-h-screen">
            <div>
                <div className="flex items-center justify-center">
                    <SearchBar
                        handleChangeDataSet={handleDataSetChange}
                        handleChangeType={handleTypeChange}
                        dataSet={dataset}
                        handleSubmit={handleSubmit}
                    />
                </div>
                {isLoading && <div className="pt-4"><Loading /></div>}
                {
                    data &&
                    (data.documents.length > 0 ?
                        data.documents.map((doc: string, index) => {
                            return (
                                <div key={index} className="my-4 border-2 rounded border-secondaryColor p-6" >
                                    <p className="text-gray-600 mb-6 p-2 bg-white w-fit rounded">#doc_{index + 1}</p>
                                    <pre className={`show-description`}>{doc}</pre>
                                </div>
                            );
                        })
                        : !isLoading && <EmptyComponent />)
                }
            </div>
        </div>
    );
}
