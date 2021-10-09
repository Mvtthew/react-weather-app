import {useContext} from 'react';
import {LocalizationContext} from '../App';
import {LocalizationContextType} from '../types/LocalizationContextType';

export const useLocales = (): LocalizationContextType => useContext<LocalizationContextType>(LocalizationContext);