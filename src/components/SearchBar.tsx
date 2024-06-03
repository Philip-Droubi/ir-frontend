import { FormEvent } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SearchBar = ({
    dataSet,
    handleChangeDataSet,
    handleChangeType,
    handleSubmit,
}: {
    dataSet: string,
    handleChangeDataSet: (event: SelectChangeEvent) => void;
    handleChangeType: (event: SelectChangeEvent) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => {
    return (
        <div className="w-fit border-2 border-blue-400 bg-blue-50 backdrop-blur-sm rounded px-14 py-8">
            <form onSubmit={handleSubmit} className="flex items-center">
                <Box sx={{ minWidth: 120, maxWidth: 400, backgroundColor: "white" }}>
                    <FormControl fullWidth>
                        <InputLabel>Data set</InputLabel>
                        <Select
                            id="dataset-input"
                            label="Dataset"
                            defaultValue={"antique"}
                            onChange={handleChangeDataSet}
                        >
                            <MenuItem value={"antique"}>Antique</MenuItem>
                            <MenuItem value={"clinic"}>Clinical</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className={`${dataSet != "antique" ? "hidden" : undefined} ml-4`}>
                    <Box sx={{ minWidth: 120, maxWidth: 400, backgroundColor: "white" }}>
                        <FormControl fullWidth>
                            <InputLabel>Type</InputLabel>
                            <Select
                                id="dataset-input"
                                label="Dataset"
                                defaultValue={"embed"}
                                onChange={handleChangeType}
                            >
                                <MenuItem value={"embed"}>Embedding</MenuItem>
                                <MenuItem value={"crawl"}>Crawling</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="p-1 rounded border-[1px] bg-white border-[#c4c4c4] focus-within:border-2 focus-within:border-primaryColor ml-4 ">
                    <InputBase
                        id="search-input"

                        sx={{
                            ml: 1,
                            paddingRight: "10px",
                            minWidth: 500,
                        }}
                        placeholder={"Search for somthing"}
                        inputProps={{ "aria-label": "Search for somthing" }}
                    />
                    <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </div>
            </form>
        </div>
    );
};
