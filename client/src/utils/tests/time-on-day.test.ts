import 'jest';

import { timeOnDay } from '../time-on-day';

jest.mock("../../constants", () => ({ clockFormat: '24h' }))

describe("timeOnDay utility function", () => {
    afterEach(() => {
        jest.useRealTimers();
    });

    test("Displays today", () => {
        const result = timeOnDay(new Date());

        expect(result).toContain("Today");
    });

    test("Displays yesterday", () => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const result = timeOnDay(yesterday);

        expect(result).toContain("Yesterday");
    });

    test("Displays dd/mm/yyyy format for 2+ day old dates", () => {
        let twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        const twoDaysAgoResult = timeOnDay(twoDaysAgo);

        expect(twoDaysAgoResult).toContain("/"); // if '/' is within string, we know it is attempting a dd/mm/yyyy timestamp

        const utcDate = new Date("1970-01-01");
        const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000) // local date
        const localDateResult = timeOnDay(localDate);
        
        expect(localDateResult).toEqual("01/01/1970");
    });

    test("Displays 24-hour clock if enabled", () => {
        let utcFakeSystemTime = new Date("2000-01-01");
        let fakeSystemTime = new Date(utcFakeSystemTime.getTime() + utcFakeSystemTime.getTimezoneOffset() * 60000);
        fakeSystemTime.setHours(13, 15); // 13:15

        jest
            .useFakeTimers()
            .setSystemTime(fakeSystemTime.getTime());

        const now = new Date();
        const result = timeOnDay(now);

        expect(result).toContain("13:15");
        expect(result.toUpperCase()).not.toContain("AM");
        expect(result.toUpperCase()).not.toContain("PM");
    });

    test("Displays 12-hour clock if enabled", () => {
        let utcFakeSystemTime = new Date("2000-01-01");
        let fakeSystemTime = new Date(utcFakeSystemTime.getTime() + utcFakeSystemTime.getTimezoneOffset() * 60000);
        fakeSystemTime.setHours(13, 15); // 13:15
        jest
            .useFakeTimers()
            .setSystemTime(fakeSystemTime.getTime());
        
        jest.mock("../../constants", () => ({ clockFormat: '12h' }));

        const now = new Date();
        const result = timeOnDay(now);

        expect(result).toContain("1:15 PM");
    });
})