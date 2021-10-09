import {useState} from 'react';
import {LocalizationType} from '../types/LocalizationType';
import {Locales} from '../localization/Locales';
import {defaultLocaleKey} from '../config/Config';

export const useLocalizationContext = () => {
    const [locales, setLocales] = useState<LocalizationType>(Locales[defaultLocaleKey]);
    return {locales, setLocales};
};