/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** Dodato: podrška za srpski ćirilicu i latinicu */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withExtraLanguages({
        "sr-Latn-RS": {
            label: "Srpski (latinica)",
            getMessages: () => import("./i18n.sr")
        },
        "sr-Cyrl-RS": {
            label: "Српски (ћирилица)",
            getMessages: () => import("./i18n.sr-Cyrl")
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
