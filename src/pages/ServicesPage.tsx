import { Link } from "react-router-dom"

export default function Services() {
    return (
        <>
            <section className="tattoos w-screen h-screen my-10">
                <div className="tattoos-img bg-grey-500 h-full relative">
                    <div className="sevice-content grid w-fit h-70 absolute place-content-between right-40 bottom-70 border-s ps-20 py-10">
                        <div className="service-info h-fit">
                            <p className="w-100">PlaceHolder PlaceHolder PlaceHolder PlaceHolder PlaceHolder PlaceHolder PlaceHolder PlaceHolder PlaceHolder </p>
                        </div>
                        <Link to='/contacts' className="CTA bg-black p-2 h-fit w-fit rounded-lg border text-center">GET IN TOUCH</Link>
                    </div>
                </div>
                <div>

                </div>
            </section>

            {/* TO DO: test on Figma and see what works best, depending on the result it might be worth using the .map() method  */}
        </>
    )
}