import { REVIEWS } from "../constants/reviews";
import { useTranslation } from "react-i18next";

export default function ReviewsList() {
    
    const { t } = useTranslation();

    return (
        <>
            {REVIEWS.map(review => (
                <div key={review.id} className="card">
                    <div className="card-header">
                        <p><strong>{review.name}</strong></p>
                    </div>
                    <div className="card-content">
                        <p>{t(review.content)}</p>
                    </div>
                </div>
            ))}
        </>
    )
}