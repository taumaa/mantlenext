import {useContractWrite, usePrepareContractWrite} from "wagmi";
import {ethers} from "ethers";
import {useState, useEffect} from "react";
import {useWaitForTransaction} from "wagmi";


import {contractAddress, contractABI} from "@/const";

const useWithdraw = () => {

    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: contractABI,
        functionName: 'withdraw',
    })
    const { data, isLoading, isSuccess, write, isError, isIdle } = useContractWrite(config)

    return {
        data,
        isLoading,
        isSuccess,
        isError,
        isIdle,
        write
    }
}

export default useWithdraw