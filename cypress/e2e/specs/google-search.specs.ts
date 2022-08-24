//This is spec file, inside your google-search.spec.ts
import { GoogleSearch } from '../../page-objects/google-search.page';
const search = new GoogleSearch();

describe('Google Navigation', () => {
    it('Google Search',() => {
        cy.visit('https://www.google.com');

        search.googleSearch().type('Something');
        search.googleSearchBtn().click({ force: true });
        search.searchResults().should('be.visible');
    });
});
