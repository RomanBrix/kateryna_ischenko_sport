export function addBackslash(str) {
    const specialChars = "|()*#.!_[]`~+-={}"; // Список специальных символов
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (specialChars.includes(str[i])) {
            result += "\\"; // Добавляем символ "\\" перед специальным символом
            // result += "\\"; // Добавляем символ "\\" перед специальным символом
        }
        result += str[i];
    }

    return result;
}
