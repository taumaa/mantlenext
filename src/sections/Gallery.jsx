import useUserSupply from "@/hooks/useUserSupply";
import SingleItemGallery from "@/components/SingleItemGallery";
import {useState, useEffect} from "react";

const Gallery = () => {
    const {humanReadableUserSupply} = useUserSupply()
    const [arraySupply, setArraySupply] = useState([])


    // Create an array of the number of items the user has
    useEffect(() => {
        if (humanReadableUserSupply) {
            const array = new Array(parseInt(humanReadableUserSupply)).fill(0)
            setArraySupply(array)
        }
    }, [humanReadableUserSupply])


    if (!humanReadableUserSupply) {
        return (
            <div className="text-white">
                <h2 className="mb-2 text-white text-lg">
                    Your collection
                </h2>
                <div className="text-white mt-4 border-4 border-white px-4 py-2">
                    You don't have any Mantle Punk yet.
                </div>
            </div>
        )
    }

    return (
        <>
        <h2 className="mb-2 text-white text-lg">
            Your collection
        </h2>
        {arraySupply.length > 0 && (
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-8">
                {arraySupply.length > 0 && arraySupply.map((item, index) => (
                    <SingleItemGallery index={index} key={index} />
                ))}
            </div>
        )}
        </>
    )

}

export default Gallery