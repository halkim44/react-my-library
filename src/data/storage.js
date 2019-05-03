let userBooks = [{
        title: "Colorless Tsukuru Tazaki and His Years of Pilgrimage",
        author: "Haruki Murakami",
        pages: "370",
        read: false
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R Tolkien",
        pages: "1323",
        read: false
    }
];

if (storageAvailable()) {
    // replace data template with stored useData
    userBooks = JSON.parse(localStorage.getItem('user-books')) || userBooks;
}

function storageAvailable() {
    try {
        var storage = window['localStorage'],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefoxw
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

export function updateLS() {
    localStorage.setItem('user-books', JSON.stringify(userBooks));
}

export default userBooks
