import { StringType,NumberType} from "./Types/CommonTypes"

export const INITIAL_PATH:StringType="/"
export const LEAD_DETAILS_PATH:StringType = "/lead/:leadId"
export const ACTIVITIES_PATH:StringType = "/lead/:leadId/activities"
export const REMARK_PATH:StringType = "/lead/:leadId/remark"
export const DOCS_PATH:StringType="/lead/:leadId/document"
export const CALL_LOG_PATH:StringType="/lead/:leadId/call"
export const HISTORY_PATH:StringType="/lead/:leadId/history"

export const DATE_FORMAT:StringType="DD/MM/YYYY"

export const EMAIL:StringType="EMAIL"
export const PHONE:StringType="PHONE_NUMBER"
export const SMALL_TEXT:StringType="SMALL_TEXT"
export const LONG_TEXT:StringType="LONG_TEXT"
export const DROPDOWN:StringType="DROPDOWN"
export const NUMBER:StringType="NUMBER"
export const DATE:StringType="DATE"
export const MULTI_SELECT:StringType="MULTI_SELECT"
export const CHECKBOX_GROUP:StringType="CHECKBOX_GROUP"
export const IDENTIFY_URL:StringType="http"
export const LIMIT_OF_SECTION:NumberType=2

export const TYPE_OF_INPUT:StringType='checkbox'
export const CHECKBOX_ID:StringType="toggle"


//Rename the below methods as getLeadDetailedViewPath, as we are not navigating in method, the name does not suit

export const getLeadDetailedViewPath = (leadId:StringType) : StringType=>{
    return `/lead/${leadId}`
}
export const getLeadActivitiesViewPath = (leadId:StringType) : StringType=>{
    return `/lead/${leadId}/activities`
}
export const getLeadRemarkViewPath = (leadId:StringType) : StringType=>{
    return `/lead/${leadId}/remark`
}
export const getLeadDocumentViewPath =(leadId:StringType) : StringType=>{
    return `/lead/${leadId}/document`
}
export const getLeadCallViewPath = (leadId:StringType) : StringType=>{
    return `/lead/${leadId}/call`
}
export const getLeadHistoryViewPath = (leadId:StringType) : StringType=>{
    return `/lead/${leadId}/history`
}
 