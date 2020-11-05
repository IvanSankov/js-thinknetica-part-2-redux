import { createAction } from "@reduxjs/toolkit";
import { REST_DB } from '../middleware/RestDbMiddleware';

export const requestSectionInfo = createAction('requestSectionInfo');
export const successResponseSectionInfo = createAction('successResponseSectionInfo');
export const errorResponseSectionInfo = createAction('errorResponseSectionInfo');

export function initializeRequestSectionInfo() {
  return {
    [REST_DB]: {
      method: 'fetchAllSectionsInfo',
      requestAction: requestSectionInfo,
      successAction: successResponseSectionInfo,
      errorAction: errorResponseSectionInfo
    }
  }
}