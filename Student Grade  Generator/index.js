// A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40
document.getElementById('grade')
function grade(score) {
    // if the score is >79, grade = `A`
    if (score >= 0 && score < 39) {
        return 'E'
    }else
    // if score is less than 79 but greater than 60, grade =`B`
    if (score > 40 && score <= 49) {
        return 'D'
    }else
    // if score is lesss than 60 but greater than 49, grade=`C`
    if (score >= 50 && score <= 59){
        return 'C'
    }else
    // if score is less than 49 but greater than 40, grade=`D`
    if (score >= 60 && score <=79) {
        return 'B'
    }else
    // if score  is less than 40, grade=`E`
    if (score > 80 && score <=100){
        return 'A'
    }
    
    }
   grade();

