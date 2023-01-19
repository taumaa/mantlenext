import useSingleItem from "@/hooks/useSingleItem";

const SingleItemGallery = ({ index }) => {

    const {humanId} = useSingleItem(index)

    return (
        <div className="flex flex-col space-y-4">
            <div>
                <img src="/tbapunk.jpg" className="border-4 border-white" />

            </div>
            <div className="text-white">
                Punk #{humanId}
            </div>
        </div>
    )
}

export default SingleItemGallery