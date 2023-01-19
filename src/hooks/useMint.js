import {useContractWrite, usePrepareContractWrite} from "wagmi";
import {ethers} from "ethers";
import {useState, useEffect} from "react";
import {useWaitForTransaction} from "wagmi";


import {contractAddress, contractABI} from "@/const";

const useMint = ({setModalOpen, setCurrentTxHash}) => {

    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: contractABI,
        functionName: 'publicMint',
        overrides: {
           value: ethers.utils.parseEther('30')
        }
    })
    const { data, isLoading, isSuccess, write, isError, isIdle } = useContractWrite({
        ...config,
        onSuccess(data) {
            console.log("Minted", data);
            setModalOpen(true)
            setCurrentTxHash(data.hash)
        },
        onError(error) {
            setModalOpen(false);
        },
    })

    return {
        data,
        isLoading,
        isSuccess,
        isError,
        isIdle,
        write
    }
}

export default useMint