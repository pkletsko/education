/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
export function minEatingSpeed(pilesOfBananas, totalHoursWithoutGuard) {
    let theBestMinBananasPerHour = 0;

    let minBananasPerHour = 0;
    let maxBananasPerHour = Math.max(...pilesOfBananas);

    function isEnoughHoursToEatAllBananas(bananasPerHour) {
        let remainedHours = totalHoursWithoutGuard;
        for(const pileOfBananas of pilesOfBananas) {
            let usedHours = Math.ceil(pileOfBananas / bananasPerHour);
            remainedHours -= usedHours;
        }
        return remainedHours >= 0;
    }

    while(minBananasPerHour <= maxBananasPerHour) {
        let possibleTheBestMinBananasPerHour = minBananasPerHour + Math.floor((maxBananasPerHour - minBananasPerHour) / 2);

        if (isEnoughHoursToEatAllBananas(possibleTheBestMinBananasPerHour)) {
            theBestMinBananasPerHour = possibleTheBestMinBananasPerHour;
            maxBananasPerHour = possibleTheBestMinBananasPerHour - 1;
        } else {
            minBananasPerHour = possibleTheBestMinBananasPerHour + 1;
        }
    }

    return theBestMinBananasPerHour;
}
