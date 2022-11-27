import { hello } from "../src/index";

describe("hello()のテスト", () => {
    it("hello()が呼び出されると、'hello world!'が出力される", () => {
        const log = jest.spyOn(console, "log").mockReturnValue();
        hello();
        expect(log).toHaveBeenCalledWith( "hello world!");
        log.mockRestore();
    });

})