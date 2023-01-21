function saturdayFun(activity = 'roller-skate'){
    return`This Saturday, I want to ${activity}!`;
}
saturdayFun()

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
mondayWork()

function wrapAdjective(wrapWith = "*"){
    return function inner(adjective = 'special'){
        return `You are ${wrapWith}${adjective}${wrapWith}!`;
    }
}
wrapAdjective()