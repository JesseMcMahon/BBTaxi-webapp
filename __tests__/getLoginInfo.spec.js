describe("Login functionality", () => {
    test("it should get user login info from form", () => {
        const input = {
            username: "jesse123",
            password: "123456"
        };

        const output = [{username: "jesse123", password: "123456"}]

        expect(getLoginInfo(input).toEqual(output))
    })
})
