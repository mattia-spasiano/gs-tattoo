import React, { useState } from 'react';
import { useTranslation } from "react-i18next";


export default function ContactForm() {
    const { t } = useTranslation();

    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "e63a281c-9f47-46bf-a0de-2d1ae84ae00a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <>
            <form onSubmit={onSubmit} className="flex flex-col max-w-128 min-w-70 mx-auto my-auto">
                    <h1 className="font-bold text-2xl">Contact us!</h1>
                <p className='text-right font-thin'>{t('*Name')}</p> {/* Reminder: to change into i18next thing for name */}
                <input type="text" name="name" className="border bg-black text-white placeholder:text-gray-400 p-1 rounded" placeholder='Write your name here...' required />
                <p className='mbs-3 text-right font-thin'>{t('*Email')}</p> {/* Reminder: to change into i18next thing for email */}
                <input type="email" name="email" className="border bg-black text-white placeholder:text-gray-400 p-1 rounded" placeholder='Ex. mariorossi@gmail.com' required />
                <p className='mbs-3 text-right font-thin'>{t('Number')}</p> {/* Reminder: to change into i18next thing for email */}
                <input type="text" name="Phone Number" className="border bg-black text-white placeholder:text-gray-400 p-1 rounded" placeholder='Ex. 3311216199'></input>
                <p className='mbs-3 text-right font-thin'>{t('*Message')}</p> {/* Reminder: to change into i18next thing for message */}
                <textarea name="message" className="border bg-black h-30 text-white placeholder:text-gray-400 p-1 rounded max-h-75" placeholder='Write your question here...' required></textarea>
                <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                <p className='text-sm'>* means the field is required.</p>
                <button type="submit" className='w-25 h-10 mbs-5 bg-transparent hover:bg-white hover:text-black rounded border'>Submit</button>
                <p>{result}</p>
            </form>
        </>
    );
}