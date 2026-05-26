import { type CardImg } from "../constants/galleryimgs"

interface ImgCardProps {
    cardImg: CardImg;
}


export default function ImgCard ({ cardImg } : ImgCardProps) {
    return(
        <>
            <div className="overflow-hidden rounded-xl">
                <img src={cardImg.thumb} alt={cardImg.alt} className="w-full h-auto"/>
            </div>
        </>
    
)  
}