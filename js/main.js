import bookApp from './pages/book-app.js';
import appHeader from './cmps/app-header.js';
import appFooter from './cmps/app-footer.js';

const options = {
    el: '#app',
    template: `
        <section>
            <app-header />
            <book-app />
            <app-footer />
        </section>
    `,
    components: {
        bookApp,
        appHeader,
        appFooter
    }
};
const app = new Vue(options);

