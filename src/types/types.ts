interface Sites{
    name:string,
    encrypted:boolean,
    detail:string
    url:string
}
interface ListToShow{
    category:string,
    sites:Sites[]
}

export type {Sites,ListToShow}