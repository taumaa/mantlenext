import {useContractRead} from "wagmi";
import {useState, useEffect} from "react";
import {BigNumber} from "ethers";
import {useAccount} from "wagmi";

import {contractAddress} from "@/const";
import {contractABI} from "@/const";

export default function useUserSupply() {

    const [humanReadableUserSupply, setHumanReadableUserSupply] = useState(0);
    const {address} = useAccount();


    const {data, isLoading} = useContractRead({
        address: contractAddress,
        abi: contractABI,
        functionName: 'balanceOf',
        watch:true,
        args: [address]
    })

    useEffect(() => {
        // Set the human readable supply from data BigNumber
        if (data) {
            setHumanReadableUserSupply(BigNumber.from(data).toNumber());
        }
    }, [data])

    return {
        humanReadableUserSupply,
        isLoading
    }

}