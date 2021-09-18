export type ScalerAction = {
    type:
        'INCREMENT_R' |
        'DECREMENT_R' |
        'INCREMENT_G' |
        'DECREMENT_G' |
        'INCREMENT_B' |
        'DECREMENT_B'
}

export type ScalerState = {
    r: number,
    g: number,
    b: number,
}
