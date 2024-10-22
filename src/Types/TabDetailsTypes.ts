export type GofDetailObjType = {fieldId: string, name: string, value:number | string | { countryCode: string; phoneNumber: string; } , fieldType: string}


export type TabInfoPropsTypes = 
    {gofName:string,gofDetails:GofDetailObjType[]}

export type ExpandableStateType=boolean
