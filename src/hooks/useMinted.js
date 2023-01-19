import {useContractRead} from "wagmi";
import {useState, useEffect} from "react";
import {BigNumber} from "ethers";

import {contractAddress} from "@/const";
import {contractABI} from "@/const";

export default function useMinted() {

    const [humanReadableSupply, setHumanReadableSupply] = useState(0);

    const {data, isLoading} = useContractRead({
        address: contractAddress,
        abi: contractABI,
        functionName: 'totalSupply',
        watch:true
    })

    useEffect(() => {
        // Set the human readable supply from data BigNumber
        if (data) {
            setHumanReadableSupply(BigNumber.from(data).toNumber());
        }
    }, [data])

    return {
        humanReadableSupply,
        isLoading
    }

}