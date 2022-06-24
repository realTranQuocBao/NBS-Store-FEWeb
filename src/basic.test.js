import {checkProduct, checkUser} from './basic.js'

test("test api product", () => {
    async () => {
        return checkProduct().then(data => {
            expect(JSON.parse(data)).toMatch("HAWTHORNE PLAIN OXFORD")
        })
    }
})

test("test api user", () => {
    async () => {
        return await checkUser("phamxuannhut@gmail.com", "123456@Aa").then(data => {
            expect(JSON.parse(data).status).toBe(200)
        })
    }
})