import React from 'react';
import { render, cleanup, fireEvent } from '../../helpers/testUtils';
import 'jest-dom/extend-expect';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import { getFeedSuccess, getFeed } from '../../actions/feedActions';
import { GET_FEED_REQUEST, GET_FEED_SUCCESS } from '../../constants/actionTypes';
import axios from '../../helpers/lioAxiosInstance';
import Search from './Filter/Search';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

beforeEach(() => {
    moxios.install(axios);
});

afterEach(() => {
    cleanup();
    moxios.uninstall(axios);
});

describe('feed', () => {
    it('fetches feed on search', () => {
        const mockAxios = jest.fn();

        const { getByTitle } = render(<Search getFeed={mockAxios} />);

        fireEvent.click(getByTitle('Search'));

        expect(mockAxios).toHaveBeenCalledTimes(1);
    });

    it('creates an action to store feed', () => {
        const feed = [
            {
                _id: '5cdf2ed704a3e270d99c68bc',
                skills: [
                    'React.js',
                    'Redux'
                ],
                title: 'Front-end Developer - React'
            }
        ]

        const expectedAction = {
            type: GET_FEED_SUCCESS,
            payload: { feed }
        };

        expect(getFeedSuccess(feed)).toEqual(expectedAction);
    });

    it('creates GET_FEED_SUCCESS when fetching feed has been done', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { items: [{ title: 'Test' }] },
            });
        });

        const expectedActions = [
            { type: GET_FEED_REQUEST },
            { type: GET_FEED_SUCCESS, payload: { feed: [{ title: 'Test' }] } }
        ];

        const store = mockStore({ feed: [] });

        return store.dispatch(getFeed()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
