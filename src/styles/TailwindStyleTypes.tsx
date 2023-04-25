type CommonHtmlElements = {
    'ul': string
    'li': string
    'a': string
    'nav': string
    'button': string
    'span': string
    'div': string
    'h1': string
    'h2': string
    'h3': string
    'header': string
    'main': string
    'footer': string
}

type CommonTailwindClasses = Partial<CommonHtmlElements>

export type TailwindStyles = CommonTailwindClasses & Record<string, string>