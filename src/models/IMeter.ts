
export interface IMeter {
        id: string,
        _type: string[],
        installation_date: string,
        is_automatic: boolean,
        initial_values: number[],
        area: {
            id: string
        }
        description: string,
}

export interface IResults {
    results: IMeter[]
}