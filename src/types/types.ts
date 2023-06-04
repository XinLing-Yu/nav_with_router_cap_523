interface Sites{
    name:string,
    detail:string
    url:string
}
interface ListToShow{
    category:string,
    sites:Sites[]
}

export type {Sites,ListToShow}