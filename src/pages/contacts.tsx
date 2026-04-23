import ContactForm from "../components/ContactForm"

export default function Contacts() {
    return (
        <>
            <section className="contact-form flex mbe-10 h-screen w-screen md:h-150 mbs-10">
                <div className="contacts-img bg-white lg:w-150 md:w-90">
                </div>
                <div className="contact-form lg:w-2xl md:w-80 my-auto mx-auto">
                    <ContactForm />
                </div>
            </section>
            <section className="contacts flex h-100 w-full">
                <div className="my-auto mx-auto w-100">
                    <p>TO DO: small introduction on where people can contact the shop</p>
                    <ul className="contacts-about flex justify-between my-10">
                        <li className="hover:underline">+34 690 03 17 55</li>
                        <li className="hover:underline">Instagram</li>
                        <li className="hover:underline">WhatsApp</li>
                    </ul>
                </div>
                <div className="bg-white h-full w-200 ">
                </div>
            </section>
        </>
    )
}