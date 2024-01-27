export function dailyTemperatures(temperatures) {
    let monoStack = [];
    let result = Array(temperatures.length).fill(0);

    for (let currentDayIndex = 0; currentDayIndex < temperatures.length; currentDayIndex++) {
        while(monoStack.length > 0 && temperatures[monoStack[monoStack.length - 1]] <= temperatures[currentDayIndex]) {
            let previousDayIndex = monoStack.pop();
            result[previousDayIndex] = currentDayIndex - previousDayIndex;
        }
        monoStack.push(currentDayIndex);
    }
    return result;
}
