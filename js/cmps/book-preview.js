export default {
    props: ['book'],
    template: `
    <div class="book-preview">
        <div class="thumbnail">
            <img :src="book.thumbnail">
        </div>
        <p class="title">{{book.title}}</p>
        <p class="author">{{book.authors.join(', ')}}</p>
    </div>
    `,
};
