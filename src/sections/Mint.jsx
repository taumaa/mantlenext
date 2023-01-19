import useMinted from "@/hooks/useMinted";
import useMint from "@/hooks/useMint";

import MintModal from "@/components/Modal/MintModal";
import {useEffect} from "react";
import {useState} from "react";

const Mint = () => {

    const [modalOpen , setModalOpen] = useState(false)
    const [currentTxHash, setCurrentTxHash] = useState(null)

    const {humanReadableSupply, isLoading: isLoadingSupply} = useMinted();
    const {write, isSuccess} = useMint({
        setModalOpen: setModalOpen,
        setCurrentTxHash: setCurrentTxHash
    });

    useEffect(() => {
        if (modalOpen === false) {
            setCurrentTxHash(null)
        }
    }, [modalOpen])

    return (
        <div className="justify-between flex lg:flex-row flex-col py-32 lg:space-y-0 space-y-16">
            <div className="flex items-center">
                <div className="-mb-8">
                    <div className="mb-8 text-white text-xs">
                        Get a chance to grab a Mantle Punks whitelist spot by minting an exclusive testnet NFT.
                    </div>
                    <button
                        className="text-black bg-greenlight px-4 py-2 text-xl shadow-2xl"
                        onClick={() => write()}
                    >
                        Mint Now
                    </button>
                    <div className="mt-6 text-white text-sm flex flex-col">
                        <span>Mint Price: 30 $BIT</span>
                        <span className="text-xs">(not final price, testnet only)</span>
                    </div>
                    { !!humanReadableSupply && !isLoadingSupply && (
                        <div className="mt-6 text-white text-sm">
                            Minted: {humanReadableSupply}/<span className="text-xl">&infin;</span>
                        </div>
                    )}
                    {!humanReadableSupply && (
                        <div className="mt-3 text-white text-sm">
                            Minted: .../<span className="text-xl">&infin;</span>
                        </div>
                    )}
                    <span className="text-xs text-white">(Max supply disabled for testnet)</span>
                </div>
            </div>
            <div>
                <img src="/mantlegif.gif" alt="Mantle Punks" className="border-8 border-white " />
            </div>
            <MintModal open={modalOpen && !!currentTxHash} setOpen={setModalOpen} isSuccess={isSuccess} txHash={currentTxHash} />
        </div>
    )
}

export default Mint