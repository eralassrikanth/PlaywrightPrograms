class Book {
    title: string;
    author: string;
    genre: string;
    year: number;

    constructor(title: string, author: string, genre: string, year: number) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }

    printDetails(): void {
        console.log(`📖 Title: ${this.title}`);
        console.log(`✍️ Author: ${this.author}`);
        console.log(`📚 Genre: ${this.genre}`);
        console.log(`📅 Year: ${this.year}`);
        console.log('---------------------------');
    }
}

// Example usage
const books: Book[] = [
    new Book("The Pragmatic Programmer", "Andrew Hunt", "Programming", 1999),
    new Book("Clean Code", "Robert C. Martin", "Software Engineering", 2008),
    new Book("Atomic Habits", "James Clear", "Self-help", 2018),
    new Book("1984", "George Orwell", "Dystopian Fiction", 1949)
];

// Print all book details
books.forEach(book => book.printDetails());
