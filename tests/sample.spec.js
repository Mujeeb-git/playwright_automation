import { test, expect } from '@playwright/test';
import exp from 'constants';

test("My first test", async function({page}){
    expect(12).toBe(12);
});

test.skip("My second test", async function({page}){
    expect(100).toBe(10);
});

test("My third test", async function({page}){
    expect(2.0).toBe(2.0);
});

test("My fourth test", async function({page}){
    expect("Mujeeb Mohammed").toContain("Mujeeb");
    expect(true).toBeTruthy;
});

test("My fifth test", async function({page}){
    expect(false).toBeFalsy;
});

test("My sixth test", async function({page}){
    expect("Mujeeb Mohammed".includes("Mohammed")).toBeTruthy();
});