export const CAR_ATTRIBUTE_TYPES = [
    "acceleration",
    "attack",
    "cooling",
    "defense",
    "grip",
    "handling",
    "power",
    "speed",
] as const;
export type CarAttributeType = (typeof CAR_ATTRIBUTE_TYPES)[number];
