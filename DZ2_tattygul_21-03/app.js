var kdorama = {
    name: 'Подснежники',
    releaseDate: "18.12.2021 ",
    mainActor: "Чон Хе Ин, Ким Джису",
    episodes: "16",
    Jeong: {
        rost: "178 cм",
        ves: "64 кг",
        let: "34 лет",
        birthday:"1-апреля",
        instagram:"@holyhaein",
    },
    jisoo: {
        rost: "162 cм",
        ves: "46 кг",
        let: "27 лет",
        birthday:"3-января",
        instagram: "@sooyaaa__",
    }
};

console.log(
    "Название дорамы: ",
    kdorama.name,
    "\nДата выхода дорамы: ",
    kdorama.releaseDate,
    "\nГлавные герои: ",
    kdorama.mainActor,
    "\nКол-во серий: ",
    kdorama.episodes,
    "\nО главном герое: ",
    "\n Рост: ", kdorama. Jeong.rost,
    "\n Вес: ", kdorama.Jeong.ves,
    "\n Лет: ", kdorama. Jeong.let,
    "\n день рождение: ",  kdorama.Jeong.birthday,
    "\n инстаграм : ", kdorama.Jeong.instagram,

    "\nО главном герое: ",
    "\n Рост: ", kdorama. jisoo.rost,
    "\n Вес: ", kdorama.jisoo.ves,
    "\n Лет: ", kdorama. jisoo.let,
    "\n день рождение: ", kdorama.jisoo.birthday,
    "\n инстаграм :",kdorama.jisoo.instagram,
);
 //второе задание

var week = prompt("Введите день недели на английском");

switch (week) {
    case "Monday":
    case "monday":
        alert("Понедельник");
        break;
    case "Tuesday":
    case "tеuesday":
        alert("Вторник");
        break;
    case "Wednesday":
    case "wednesday":
        alert("Среда");
        break;
    case "Thursday":
    case "thursday":
        alert("Четрверг");
        break;
    case "Friday":
    case "friday":
        alert("Пятница");
        break;
    case "Saturday":
    case "saturday":
        alert("Суббота");
        break;
    case "Sunday":
    case "sunday":
        alert("Воскресенье");
        break;
    default:
        alert("Пожалуйста введите правильно");
}
