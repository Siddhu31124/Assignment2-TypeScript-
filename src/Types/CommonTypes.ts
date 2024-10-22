import { GofDetailObjType as OverFieldType } from "./TabDetailsTypes"
export type LeadIdType ={leadId: string | undefined}
export type PropLeadIdType ={leadId:string }
export type StringType=string
export type NumberType=number
export type AssigneesType={id:string, name:string, profilePic: string, lastUpdated: string}
export type StageType={name:string,color:string}
export type GofObjType={id:string,name:string,fields:OverFieldType[]}
export type LeadDataType={leadId:string,name:string,stage:StageType,assignees:AssigneesType[],overviewFields:OverFieldType[],gofs:GofObjType[]}[]
