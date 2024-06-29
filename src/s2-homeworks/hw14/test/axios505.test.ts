import MockAdapter from "axios-mock-adapter";
import axios from "axios";

test('axios505', () => {
    const mock = new MockAdapter(axios)

    mock.onGet('api/3.0/homework/test2').reply(500, {
        errorText: 'Внутренняя ошибка сервера'
    });
})