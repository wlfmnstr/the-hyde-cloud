type NavItem = {
    name: string;
    destination: string;
}

export const NAV_ITEMS: { [key: string]: NavItem } = {
    home: {name: 'Home', destination: 'Home'},
    account: {name: 'Account', destination: 'account'},
    lists: {name: 'Lists', destination: 'lists'},
    messages: {name: 'Messages', destination: 'messages'},
    files: {name: 'Files', destination: 'files'},
    photos: {name: 'Photos', destination: 'photos'},
    ai: {name: 'Ai', destination: 'ai'}
}

export const NAV_MAP: {
    start: string[], home: string[],
    account: string[], lists: string[],
    messages: string[], files: string[],
    photos: string[], ai: string[],
    [key: string]: string[]
} = {
    start: [],
    home: ['home', 'account', 'lists', 'messages', 'files', 'photos', 'ai'],
    account: ['home', 'account', 'lists', 'messages', 'files', 'photos', 'ai'],
    lists: ['home', 'account', 'lists', 'messages', 'files', 'photos', 'ai'],
    messages: ['home', 'account', 'lists', 'messages', 'files', 'photos', 'ai'],
    files: ['home', 'account', 'lists', 'messages', 'files', 'photos', 'ai'],
    photos: ['home', 'account', 'lists', 'messages', 'files', 'photos', 'ai'],
    ai: ['home', 'account', 'lists', 'messages', 'files', 'photos', 'ai']
}

// a NAV_SWITCH constant to control the rendering of the nav items
export const NAV_SWITCH: { [key: string]: boolean } = {
    start: false,
    home: true,
    account: true,
    lists: true,
    messages: true,
    files: true,
    photos: true,
    ai: true
}

// Function the get the NAV_ITEMS for the current page
export const getNavItems = (currentPage: string): NavItem[] => {
    return NAV_MAP[currentPage.toLowerCase()]
        .map((key) => {
            return NAV_ITEMS[key];
        });
}

// hardcode the logo presentation logic in an object as a typescript constant,
export const LOGO_SWITCH: { [key: string]: boolean } = {
    start: false,
    home: true,
    account: true,
    lists: true,
    messages: true,
    files: true,
    photos: true,
    ai: true
}