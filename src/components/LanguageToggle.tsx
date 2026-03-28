import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

interface Language {
    code: string;
    label: string;
}

export default function LanguageToggle() {

    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const menuRed = useRef<HTMLDivElement>(null);

    const languages: Language[] = [
        {code: 'en', label: 'English'},
        {code: 'uk', label: 'Українська'},
    ];

    return (
        <div>
            
        </div>
    )
}