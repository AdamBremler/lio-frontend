import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import { login } from '../../actions/userActions';
import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../../constants/actionTypes';
import axios from '../../helpers/lioAxiosInstance';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

beforeEach(() => {
    moxios.install(axios);
});

afterEach(() => {
    moxios.uninstall(axios);
});

describe('login', () => {
    it('creates LOGIN_SUCCESS and redirects to /profile after sending login request', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { token: 'test', user: { email: 'test@test.com' } },
            });
        });

        const expectedActions = [
            { type: LOGIN_REQUEST },
            { type: LOGIN_SUCCESS, payload: { token: 'test', user: { email: 'test@test.com' } } },
            { type: "@@router/CALL_HISTORY_METHOD", payload: { args: ['/profile'], method: 'push' } }
        ];

        const store = mockStore({ token: null, user: null });

        return store.dispatch(login()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
