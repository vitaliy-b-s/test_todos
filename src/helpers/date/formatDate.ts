export function formatDate(date: Date) {
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return (date.getMonth() + 1) + "." + date.getDate() + "." + date.getFullYear() + "  " + strTime;
}