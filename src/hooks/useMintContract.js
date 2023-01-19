import {useContract} from "wagmi";
import {contractAddress} from "@/const";
import {contractABI} from "@/const";

export default function useMintContract() {
    return useContract(contractAddress, contractABI);
}

