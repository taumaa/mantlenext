import useWithdraw from "@/hooks/useWithdraw";

const Withdraw = () => {

    const {write, isSuccess} = useWithdraw();

    return (
        <div>
            <button
                className="text-black bg-greenlight px-4 py-2 text-xl shadow-2xl mt-4"
                onClick={() => write()}
            >
                Withdraw
            </button>
        </div>
    )
}

export default Withdraw