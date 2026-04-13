import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
        <div className="h-40 w-full">
            <section className="footer-content text-center text-[#747474] mbs-5 pbe-5 mx-auto border-b w-300">
                <p><Link to='' className="hover:underline">Av. de Carlos V, 13b, 35240 Carrizal, Las Palmas, Spain</Link></p>
                <p><Link to='' className="hover:underline">+34 690 03 17 55</Link></p>
                <p><Link to='' className="hover:underline">Privacy Policy</Link> - <Link to='' className="hover:underline">Contacts</Link></p>
                <p><Link to='' className="hover:underline">Instagram</Link> - <Link to='' className="hover:underline">Tik Tok</Link></p>
            </section>
            <div>

            </div>
        </div>
        </>
    )
}