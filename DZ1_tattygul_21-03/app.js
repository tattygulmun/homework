let day = Number(prompt('введите число рождение: '));
let month =  prompt('введите месяц рождение: ');

if (day >=21 && day <=31 && month === 'март' || day >= 1 && day <= 20 && month === 'апрель') {
    console.log('ваш знак задиака овен')
}else if (day >=21 && day <=31 && month === 'апрель' || day >= 1 && day <= 20 && month === 'май'){
        console.log('ваш знак задиака телец')
}else if (day >=21 && day <=31 && month === 'май' || day >= 1 && day <= 21 && month === 'июнь'){
    console.log('ваш знак задиака близнецы')
}else if (day >=22 && day <=31 && month === 'июнь' || day >= 1 && day <= 22 && month === 'июль'){
    console.log('ваш знак задиака рак')
}else if (day >=23 && day <=31 && month === 'июль' || day >= 1 && day <= 23 && month === 'август'){
    console.log('ваш знак задиака лев')
}else if (day >=24 && day <=31 && month === 'август' || day >= 1 && day <= 23 && month === 'сентябрь'){
    console.log('ваш знак задиака дева')
}else if (day >=24 && day <=31 && month === 'сентябрь' || day >= 1 && day <= 23 && month === 'октябрь'){
    console.log('ваш знак задиака весы')
}else if (day >=24 && day <=31 && month === 'октябрь' || day >= 1 && day <= 22 && month === 'ноябрь'){
    console.log('ваш знак задиака скорпион')
}else if (day >=23 && day <=31 && month === 'ноябрь' || day >= 1 && day <= 21 && month === 'декабрь'){
    console.log('ваш знак задиака стрелец')
}else if (day >=22 && day <=31 && month === 'декабрь' || day >= 1 && day <= 20 && month === 'январь'){
    console.log('ваш знак задиака козерог')
}else if (day >=21 && day <=31 && month === 'январь' || day >= 1 && day <= 18 && month === 'февраль'){
    console.log('ваш знак задиака водолей')
}else if (day >=19 && day <=31 && month === 'февраль' || day >= 1 && day <= 20 && month === 'март'){
    console.log('ваш знак задиака рыбы')
}else {
    console.error('error')
}