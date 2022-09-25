import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import App from '../App'
import { store } from '../store'
import { render, screen,waitFor, act } from '@testing-library/react'
import SpellCard from '../components/card.component'
import * as crudActios from '../actions/crudActions'
import { FETCH_SPELLS_LIST_SUCCESS, } from '../constants/actionType'
import * as spells from './dummy-data';

export function renderWithProviders(ui: React.ReactElement) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper }) }
}

describe('Check HomeScreen', () => {
    beforeAll(async () => {
    });
    it('Load home screen & check for labels', () => {
        renderWithProviders(<App />)
        const labelItems = ['SPELLS', 'All', 'Favourite'];
        labelItems.forEach(label => expect(screen.getByText(label)).toBeInTheDocument());
    });

    it('"All" Link should render multiple cards', async () => {

        renderWithProviders(<App />);
        const allAnchor = screen.getByText(/All/i);
        act(() => allAnchor.click());

        await waitFor(() => {
            const elements = screen.queryAllByTestId('data-testid-spell-card')
            expect(elements).not.toBeNull()
        }, { timeout: 5000, interval: 500 })

    }, 5000);

    it('Render & check spellcards', async () => {
        renderWithProviders(<SpellCard />)
        await waitFor(() => {
            const elements = screen.getAllByTestId('data-testid-spell-card')
            expect(elements[0]).toBeInTheDocument()
        }, { timeout: 10000, interval: 500 })
        act(() => {
            const payload: any = spells.spellsDataArray;
            store.dispatch({ type: FETCH_SPELLS_LIST_SUCCESS, payload })
        })
        await waitFor(() => {
            const elements = screen.queryAllByTestId('data-testid-spell-card')
             expect(elements).toHaveLength(2)
        }, { timeout: 10000, interval: 500 })
    }, 10000);
});

describe('Check Favourite Feature', () => {
    it('"Favourite" card should not be there', async () => {
        renderWithProviders(<App />)
        await waitFor(() => {
            const elements = screen.queryByTestId('data-testid-fav-spell-card')
             expect(elements).toBeNull()
        }, { timeout: 10000, interval: 500 })

    }, 10000);

    it('"Favourite" card should be there', async () => {
        renderWithProviders(<App />)
        act(() => {
            const payload: any = spells.spellsDataArray[0];
            payload['isFavourite'] = true;
            const dispatch = crudActios.addToFavourite(payload)
            dispatch(store.dispatch)
        })
        await waitFor(() => {
            const elements = screen.getAllByTestId('data-testid-fav-spell-card')
            expect(elements[0]).toBeInTheDocument()
        }, { timeout: 10000, interval: 500 })

    }, 10000);

})