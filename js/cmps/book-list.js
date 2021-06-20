import bookPreview from './book-preview.js';

export default {
    props: ['books'],
    template: `
    <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-preview-container">
            <book-preview :book="book" @click.native="select(book)" />
            <div class="actions">
                <button @click="select(book)">More Details</button>
            </div>
        </li>
    </ul>
    `,
    methods: {
        select(book) {
            this.$emit('selected', book);
        },
        log(bookId) {
            console.log('logging th id', bookId);
        }
    },
    components: {
        bookPreview
    }

};

