// Code your solution here

function findMatching(drivers, string) {
    let match = drivers.filter(driver => {
        if (driver.toLowerCase() === string.toLowerCase()) {
            return driver;
        }
    })

    if (match) {
        return match;
    }
}

function fuzzyMatch(drivers, string) {
    let match = drivers.filter(driver => {
        if (driver.startsWith(string)) {
            return driver;
        }
    })

    if (match) {
        return match;
    }
}

function matchName(drivers, string) {
    let match = drivers.filter(driver => {
        if (driver.name === string) {
            return driver;
        }
    })

    if (match) {
        return match;
    }
}