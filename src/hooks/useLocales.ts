import {useContext} from "react";
import {LocalizationType} from "../types/LocalizationType";
import {LocalizationContext} from "../index";

export const useLocales = (): LocalizationType => useContext<LocalizationType>(LocalizationContext);