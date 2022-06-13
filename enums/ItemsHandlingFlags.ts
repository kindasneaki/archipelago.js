// prettier-ignore
export enum ItemsHandlingFlags {
    NON_REMOTE              = 0,
    FROM_DIFFERENT_WORLDS   = 0b001,
    FROM_OWN_WORLD          = 0b010,
    FROM_STARTING_INVENTORY = 0b100,
    FULLY_REMOTE            = 0b111,
}
