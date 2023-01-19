import {useContractRead} from "wagmi";
import {useState, useEffect} from "react";
import {BigNumber} from "ethers";
import {useAccount} from "wagmi";

import {contractAddress} from "@/const";
import {contractABI} from "@/const";

export default function useSingleItem(index) {

    const [humanId, setHumanId] = useState(0);
    const {address} = useAccount();

    const {data, isLoading} = useContractRead({
        address: contractAddress,
        abi: contractABI,
        functionName: 'tokenOfOwnerByIndex',
        watch:true,
        args: [address, index]
    })

    useEffect(() => {
        // Set the human readable supply from data BigNumber
        if (data) {
            setHumanId(BigNumber.from(data).toNumber());
        }
    }, [data])

    return {
        humanId,
        isLoading
    }

}