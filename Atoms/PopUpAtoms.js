import { atom } from "recoil";

export const openPopUps = atom({
    key: 'openPopUps',
    default: {
        calendarPopUp: false,
        couponPopUp: false,
        karmaPopUp: false,
        walletPopUp: false,
    }
})


export const totalSelectedSlots = atom({
    key: 'totalSelectedSlots',
    default: 0
})