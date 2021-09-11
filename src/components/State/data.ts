import {CardTheme} from "./types";

export const themes: CardTheme[] = [
    {
        background: 'primary',
        name: "Default",
        foreground: 'white'
    },
    {
        background: 'warning',
        name: "Warning",
        foreground: 'dark'
    },
    {
        background: 'info',
        name: "Info",
        foreground: 'dark'
    },
    {
        background: 'danger',
        name: "Danger",
        foreground: 'white'
    },
    {
        background: 'success',
        name: "Success",
        foreground: 'white'
    }
];

export const defaultTheme: CardTheme = themes[0];
