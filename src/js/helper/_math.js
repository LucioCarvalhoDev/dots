export const _math = {
    choose: (...options) => {
        return options[Math.round(Math.random() * (options.length - 1))];
    },
    numberBetween: (...range) => {
        const max = Math.max(...range);
        const min = Math.min(...range);
        // console.log(range, max, min);
        return Math.random() * (max - min) + min;
    }
}