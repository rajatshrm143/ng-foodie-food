import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {

    createDb() {
        let bookDetails = [
            {
                serial: 1,
                bookname: 'One Indian Girl'
            },
            {
                serial: 2,
                bookname: 'LOOSER'
            },
            {
                serial: 3,
                bookname: 'Rich Dad Poor Dad'
            },
            {
                serial: 4,
                bookname: 'Wings of Fire'
            },
            {
                serial: 5,
                bookname: 'Two States'
            },
            {
                serial: 6,
                bookname: 'The Alchemist'
            },
            {
                serial: 7,
                bookname: 'Death'
            },
        ];

        return { books: bookDetails };
    }

}