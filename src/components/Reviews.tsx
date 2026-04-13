import { REVIEWS } from "../constants/reviews";
import { useTranslation } from "react-i18next";

export default function ReviewsList() {

    const { t } = useTranslation();

    return (
        <>

            <section className="review-rating flex absolute bg-transparent w-full h-100 my-auto z-10 pointer-events-none">
                <div className="rev-box bg-[#0E0E0E] w-140 h-full flex gap-10">
                    <div className="rating-overview ms-20 my-auto w-75">
                        <p className="font-thin text-xs">*{t('reviews.source')}</p>
                        <p className="font-bold text-5xl">REVIEW <br />100%</p>
                        <p className="text-base">Our clients show full satisfaction bla bla bla bla blabla bla bla blabla bla bla blabla bla bla bla</p>
                    </div>
                        <div className="rating-progress bg-[#444444] w-[1px] h-75 my-auto mx-0"></div>
                </div>
                <div className="rev-shadows inset-y-0 w-50 bg-gradient-to-r from-[#0E0E0E] to-transparent z-10"></div>
            </section>
            <div className="marquee-container relative my-auto w-screen overflow-x-hidden">
                <div className="marquee-track flex">
                    {REVIEWS.map(review => (
                        <div key={review.id} className="card flex-column shrink-0 rounded-xl">
                            <div className="card-header mx-2 mbe-2 mbs-2 border-be pb-3">
                                <p className="text-lg ms-4"><strong>{review.name}</strong></p>
                            </div>
                            <div className="card-text text-base h-[75%] overflow-y-scroll ms-4 me-2">
                                <p className="text-justify me-3">{t(review.content)}</p>
                            </div>
                        </div>
                    ))}
                    {REVIEWS.map(review => (
                        <div key={review.id} className="card flex-column shrink-0 rounded-xl m-0" aria-hidden="true">
                            <div className="card-header mx-2 mbe-2 mbs-2 border-be pb-3">
                                <p className="text-lg ms-4"><strong>{review.name}</strong></p>
                            </div>
                            <div className="card-text h-[75%] overflow-y-scroll ms-4 me-2">
                                <p className="text-justify me-3">{t(review.content)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}