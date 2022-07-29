const app = Kdu.createApp({
    data() {
        return {
            url: 'https://nkduy-cloud.web.app',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});

app.mount("#app");
