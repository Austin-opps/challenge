// A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40

function grade(score) {
    // if the score is >79, grade = `A`
    if (score = 100 && score >=80) {
        return `A`
    }
    // if score is less than 79 but greater than 60, grade =`B`
    if (score <= 79 && score>= 60) {
        return `B`
    }
    // if score is lesss than 60 but greater than 49, grade=`C`
    if (score <=59 && score >=49){
        return `C`
    }
    // if score is less than 49 but greater than 40, grade=`D`
    if (score <=48 && score >= 40) {
        return `D`
    }
    // if score  is less than 40, grade=`E`
    if (score<=39){
        return `E`
    }
        console.log(grade());
    }
   

