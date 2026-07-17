import { EsportsPage } from "../pages/esportsPage";
import { MainPage } from "../pages/mainPage";
import { test as base } from "playwright-bdd"

type Pages = {
    mainPage: MainPage,
    esportsPage: EsportsPage 

}

export const test = base.extend<Pages>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page));
    },
    esportsPage: async ({ page }, use) => {
        await use(new EsportsPage(page));
    }
})

