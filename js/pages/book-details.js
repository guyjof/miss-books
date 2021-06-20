export default {
    props: ['book'],
    template: `
    <section class="book-details">
    <img :src="book.thumbnail">
    <p>Title: <span>{{book.title}}</span></p>
    <p>Subtitle: <span>{{book.subtitle}}</span></p>
    <p>Authors: <span>{{book.authors.join(',')}}</span></p>
    <p>Published Date: <span>{{book.publishedDate}} {{bookAge}}</span></p>
    <p>Price: <span>{{book.listPrice.amount}}</span></p>
    <p>Description: <span>{{book.description}}</span></p>
    <p>Page Count: <span>{{book.pageCount}} pages {{getReadingLength}}</span></p>
    <p>Categories: <span>{{book.categories.join(', ')}}</span></p>
    <p>Language: <span>{{book.language}}</span></p>
    
    <!-- listPrice: {
      amount: 109,
      currencyCode: "EUR",
      isOnSale: false
    } -->
    <p>Id: <span>{{book.id}}</span></p>
        <button @click="$emit('close')">close X</button>
    </section>
    `,
    data() {
        return {
            isRed: null,
            isGreen: null,
            isOnSale: null,
        }
    },
    computed: {
        getReadingLength() {
            if (this.book.pageCount > 500) return 'Long Reading'
            if (this.book.pageCount > 200) return 'Decent Reading'
            if (this.book.pageCount < 100) return 'Light Reading'
        },
        bookAge() {
            const currYear = new Date().getFullYear()
            const yearPublished = this.book.publishedDate
            const diff = (currYear - yearPublished)
            if (diff <= 1) return 'New'
            if (diff > 10) return 'Veteran Book'
        }
    },
};
