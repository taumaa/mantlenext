import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {useWaitForTransaction} from "wagmi";
import {Ring} from "@uiball/loaders";

export default function MintModal({open, setOpen, txHash}) {

    const { data, isError, isLoading, isSuccess, isIdle } = useWaitForTransaction({
        hash: txHash,
    })

    useEffect(() => {
        console.log("*****")
        console.log("isIdle", isIdle)
        console.log("isLoading", isLoading)
        console.log("isSuccess", isSuccess)
        console.log("isError", isError)
        console.log("*****")
    }, [isIdle, isLoading, isSuccess, isError])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden border-4 border-black bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                                {isLoading && (
                                    <div className="flex flex-col items-center space-y-4 ">
                                        <Ring size={32} />
                                        <div>
                                            Loading
                                        </div>
                                    </div>
                                )}
                                {!isLoading && isSuccess && (
                                    <div className="flex flex-col items-center space-y-4 text-sm space-y-4">
                                        <div>Congrat, you minted your Testnet Mantle Punk !</div>
                                        <div className="text-xs">Early mints might be rewarded</div>
                                        <div className="flex flex-row space-x-4">
                                            <div className="bg-twitter text-white px-4 py-2 border-2 border-black">
                                                Twitter
                                            </div>
                                            <div className="bg-discord text-white px-4 py-2 border-2 border-black">
                                                Join Discord (TBA)
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}