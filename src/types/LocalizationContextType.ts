import {LocalizationType} from './LocalizationType';
import React from 'react';

export type LocalizationContextType = {
    locales: LocalizationType,
    setLocales: React.Dispatch<React.SetStateAction<LocalizationType>>
}