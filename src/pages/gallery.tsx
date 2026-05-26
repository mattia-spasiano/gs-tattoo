import Masonry from "react-masonry-css"
import { GALLERY } from "../constants/galleryimgs"
import ImgCard from "../components/ImageCard"

export default function ArtGallery() {
    return (
        <>
            <section className="header mbs-5w-screen">
                <h1 className="w-fit mx-auto mbs-20 font-bold text-4xl tracking-[1em] border-be-1 pbe-2">ㅤART GALLERY</h1>
                <p className="w-fit mx-auto font-thin text-2xl mbs-3">"Your Body Is A Canvas. Let It Tell Your Story."</p>
            </section>
            <section className="art-gallery w-full h-fit mx-auto my-20 bg-[#0E0E0E]">
                <Masonry
                    breakpointCols={5}
                    className="my-masonry-grid w-350 mx-auto my-auto"
                    columnClassName="my-masonry-grid_column">
                    {GALLERY.map((img) => (
                        <ImgCard
                        cardImg={img}
                        key={img.id} />
                    ))}
                </Masonry>
            </section>
        </>
    )
}