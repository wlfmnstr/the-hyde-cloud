import React from "react";

export function getContent(page: string): { hero?: HeroContent; text?: TextContent } {
    return CONTENT[page];
}

export type HeroContent = {
    title?: string;
    subtitle?: string;
    subtitleLinkDestination?: string;
};

export type TextContent = {
    title?: string;
    subtitle?: string;
    paragraphs?: string[];
};

export type Content = {
    hero?: HeroContent;
    text?: TextContent;
};
type PageContentMap = {
    [key: string]: Content;
};

const CONTENT: PageContentMap = {
    'Start': {
        'hero': {
            'title': 'The Hyde Cloud',
            'subtitle': 'Start',
            'subtitleLinkDestination': 'Home'
        }
    },
    'Home': {
        'text': {
            'title': 'Home',
            'subtitle': 'Welcome to The Hyde Cloud',
            'paragraphs': [
                'The Hyde Cloud is a cloud computing platform that provides a variety of services to its users.',
                'It is also a fun and easy place for our family to share our thoughts, ideas, files, photos, and messages.',
                'We hope you enjoy your visit.'
            ]
        }
    },
    'Account': {
        'text': {
            'title': 'Account',
            'subtitle': 'Account Information',
            'paragraphs': [
                'This is where you can view and update your account information.',
                'You can also change your password here.',
                'Please be sure to keep your password secure!',
                'If you have any questions, please contact mailto:casey@thehydecloud.com'
            ]
        },

    },
    'Lists': {
        'text': {
            'title': 'Lists',
            'subtitle': 'Birthday lists. Christmas lists. Grocery lists. You get the idea...',
            'paragraphs': [
                'This is where you can create new lists and view existing lists.',
                'You can also share lists with other users.'
            ]
        },

    },
    'Messages': {
        'text': {
            'title': 'Messages',
            'subtitle': 'Connect with your family members',
            'paragraphs': [
                'Send and receive messages from other family members.',
                'Stay connected and keep the conversation going.'
            ]
        },

    },
    'Files': {
        'text': {
            'title': 'Files',
            'subtitle': 'Share and manage your files',
            'paragraphs': [
                'Upload and download files.',
                'Easily share files with family members and keep everything organized.'
            ]
        },

    },
    'Photos': {
        'text': {
            'title': 'Photos',
            'subtitle': 'Share your memories',
            'paragraphs': [
                'Upload and share your favorite photos with your family.',
                'Create albums and organize your photos for easy viewing.'
            ]
        },

    },
    'AI': {
        'text': {
            'title': 'AI',
            'subtitle': 'Explore the world of Artificial Intelligence',
            'paragraphs': [
                'Learn about the latest AI technologies and how they can benefit your life.',
                'Discover and experiment with AI tools and services.'
            ]
        }
    }
};
