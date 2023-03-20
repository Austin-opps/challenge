// A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40
function grade(score) {
    if (score = 100 && score >=80) {
        return `A`
    }
    if (score <= 79 && score>= 60) {
        return `B`
    }
    if (score <=59 && score >=49){
        return `C`
    }
    if (score <=48 && score >= 40) {
        return `D`
    }
    if (score<=39){
        return `E`
    }
        console.log(grade());
    }
   

