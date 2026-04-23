export default function About() {
    return(
        <>
            <section className="about-hero flex w-full h-screen my-10">
                <div className="about-hero-txt w-350 my-auto grid grid-rows-8 h-full mx-auto bg-[#0E0E0E]">
                    <p className="w-150 mx-auto row-start-4">Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder PlaceholderPlaceholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder PlaceholderPlaceholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder</p>
                </div>
                <div className="about-hero-img bg-white w-full">
                    <div className="img-shadow"></div>
                </div>
            </section>

            <section className="about-content flex w-screen h-75">
                <div className="img bg-white w-full h-full"> 
                </div>
                <div className="txt w-300 grid grid-rows-8 h-full mx-auto bg-[#0E0E0E]">
                    <p className="w-100 h-fit mx-auto row-start-3">Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder PlaceholderPlaceholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder PlaceholderPlaceholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder</p>
                </div>
            </section>
            <section className="about-values flex my-10 w-full h-100 justify-between bg-[#0E0E0E]">
                <div className="flex flex-col w-fit h-fit my-auto mx-50">
                    <div className="bg-white w-50 h-50">
                    </div>
                    <p className="text-center">placehold</p>    
                </div>
                <div className="flex flex-col w-fit h-fit my-auto">
                    <div className="bg-white w-50 h-50">
                    </div>
                    <p className="text-center">placehold</p>    
                </div>
                <div className="flex flex-col w-fit h-fit my-auto mx-50">
                    <div className="bg-white w-50 h-50">
                    </div>
                    <p className="text-center">placehold</p>    
                </div>
            </section>
            {/* Might be okay to actually use a .map method, but can think about it. It was easier on the go to do it that way. */}
        </>
    )
}