import { clockFormat } from "../constants";

/** Shows the day and time from the given timestamp 
 * @param timestamp date which the function returns a relative time for.
 * @example If it is 5:00 PM:
 * ```ts
 *  timeOnDay(new Date())
 * ```
 * The function will return `Today at 5:00 PM`.
*/
export function timeOnDay(timestamp: Date) {
    const now = new Date();
    let day: string | undefined;

    if (
        timestamp.getDate() === now.getDate()
        && timestamp.getMonth() === now.getMonth()
        && timestamp.getFullYear() === now.getFullYear()
    ) {
        day = 'Today'
    } else if (
        timestamp.getDate() === now.getDate() - 1
        && timestamp.getMonth() === now.getMonth()
        && timestamp.getFullYear() === now.getFullYear()
    ) {
        day = 'Yesterday'
    }

    if (day) {
        const timeSuffix = timestamp.getMinutes() >= 12 ? 'PM' : 'AM';
        
        return clockFormat === '24h' 
            ? `${day} at ${timestamp.getHours()}:${timestamp.getMinutes()}`
            : `${day} at ${timestamp.getHours() % 12}:${timestamp.getMinutes()} ${timeSuffix}`; 
    }

    // dd/mm/yyyy format
    return `${String(timestamp.getDate()).padStart(2,'0')}/${String(timestamp.getMonth()+1).padStart(2,'0')}/${timestamp.getFullYear()}`;
}