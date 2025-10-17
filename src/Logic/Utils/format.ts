const TIME_UNITS = [
    { label: "y", value: 31536000 },
    { label: "d", value: 86400 },
    { label: "h", value: 3600 },
    { label: "m", value: 60 },
    { label: "s", value: 1 },
];

export const formatDuration = (seconds: number) => {
    const result = [];

    for (const { label, value } of TIME_UNITS) {
        const amount = Math.floor(seconds / value);
        if (amount > 0) result.push(`${amount}${label}`);
        seconds %= value;
    }

    return result.join(" ");
};

const SI_SYMBOLS = ["", "k", "M", "G", "T", "P", "E", "Z", "Y", "R", "Q"];

export const formatLargeNumber = (value: number, decimalPlaces: number = 3): string => {
    if (value < 1000) return value.toLocaleString();

    let currentValue = value;
    let suffixIndex = 0;

    while (currentValue >= 1000 && suffixIndex < SI_SYMBOLS.length - 1) {
        currentValue = Math.round(currentValue / 1000);
        suffixIndex++;
    }

    const scaled = value / Math.pow(1000, suffixIndex);
    const finalValue = trimZeros(scaled.toFixed(decimalPlaces));

    return `${finalValue}${SI_SYMBOLS[suffixIndex]}`.trim();
};

const trimZeros = (formattedNumber: string): string => {
    const [intPart, decPart] = formattedNumber.split(".");

    return decPart ? formattedNumber.replace(/0+$/, "").replace(/\.$/, "") : intPart;
};

