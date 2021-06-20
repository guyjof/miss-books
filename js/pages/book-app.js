import { bookService } from '../services/book-service.js';
import bookList from '../cmps/book-list.js';
import bookFilter from '../cmps/book-filter.js';
import bookDetails from './book-details.js';

export default {
    template: `
        <section class="book-app">
            <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails" />
            <section v-else="selectedBook">
                <book-filter @filtered="setFilter" />
                <book-list :books="booksToShow" @selected="selectBook" />
            </section>
        </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null
        };
    },
    created() {
        this.books = bookService.query()
    },
    methods: {
        removeBook(id) {
            bookService.remove(id);
        },
        selectBook(book) {
            this.selectedBook = book;
        },
        closeDetails() {
            this.selectedBook = null;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const searchStr = this.filterBy.title.toLowerCase();
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr);
            });
            return booksToShow;
        }
    },
    components: {
        bookList,
        bookFilter,
        bookDetails,
    },
};
