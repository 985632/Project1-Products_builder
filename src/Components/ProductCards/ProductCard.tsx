import { txtSlicer } from "../../Function/Function";
import { IProduct } from "../../InterFaces/InterFace";
import Image from "../ImageComponent/Image";
import Button from "../Ui/Button";

interface Iprops {
    product: IProduct;
}

const ProductCard = ({ product }: Iprops) => {
    const { title, imageURL, description } = product;
    return (
        <>
            <div className="max-w-sm md:max-w-lg mx-auto  md:mx-0 flex flex-col border p-5 rounded-md space-y-3 ">
                <Image url={imageURL} alt="picture" className="rounded-md h-52 w-full:object-cover "  />
                <h2 className="text-2xl ">{txtSlicer(title)} </h2>
                <p>{txtSlicer(description)}</p>
                <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 bg-sky-700 rounded-full cursor-pointer"></span>
                    <span className="w-5 h-5 bg-gray-950 rounded-full cursor-pointer"></span>
                    <span className="w-5 h-5 bg-stone-700 rounded-full cursor-pointer"></span>
                </div>
                <div className="flex items-center justify-between">
                    <p>500,000 $</p>
                    <img className="w-10 h-10 rounded-full object-cover" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="flex items-center space-x-2  ">
                    <Button className=" bg-red-600">Edit</Button>
                    <Button className=" bg-blue-600">remove</Button>
                </div>
            </div>
        </>
    )
}
export default ProductCard;