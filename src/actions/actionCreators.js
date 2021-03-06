// @flow

import {
  REQUEST_COMPANY_DATA,
  RECEIVE_COMPANY_DATA,
  HANDLE_COMPANY_DATA_FAIL,
  REQUEST_ROCKETS_DATA,
  RECEIVE_ROCKETS_DATA,
  HANDLE_ROCKETS_DATA_FAIL,
  REQUEST_LAUNCHES_DATA,
  RECEIVE_LAUNCHES_DATA,
  HANDLE_LAUNCHES_DATA_FAIL,
  TOGGLE_LAUNCHES_MODE,
  CHANGE_LAUNCH_YEAR,
  TOGGLE_METRIC_SYSTEM,
  TOGGLE_MOBILE_MENU_ACTIVITY,
} from './actionTypes';
import type {
  CompanyDataType,
  RocketsDataType,
  LaunchDataType,
} from '../flowTypes/flowTypes';

export function requestCompanyData() {
  return {
    type: REQUEST_COMPANY_DATA,
  };
}

export function receiveCompanyData(companyData: CompanyDataType) {
  return {
    type: RECEIVE_COMPANY_DATA,
    companyData,
  };
}

export function handleCompanyDataFail(error: Error) {
  return {
    type: HANDLE_COMPANY_DATA_FAIL,
    error,
  };
}

export function requestRocketsData() {
  return {
    type: REQUEST_ROCKETS_DATA,
  };
}

export function receiveRocketsData(rocketsData: RocketsDataType) {
  return {
    type: RECEIVE_ROCKETS_DATA,
    rocketsData,
  };
}

export function handleRocketsDataFail(error: Error) {
  return {
    type: HANDLE_ROCKETS_DATA_FAIL,
    error,
  };
}

export function requestLaunchesData(params: string) {
  return {
    type: REQUEST_LAUNCHES_DATA,
    params,
  };
}

export function receiveLaunchesData(launchesData: LaunchDataType) {
  return {
    type: RECEIVE_LAUNCHES_DATA,
    launchesData,
  };
}

export function handleLaunchesDataFail(error: Error) {
  return {
    type: HANDLE_LAUNCHES_DATA_FAIL,
    error,
  };
}

export function toggleLaunchesMode() {
  return {
    type: TOGGLE_LAUNCHES_MODE,
  };
}

export function changeLaunchYear(launchYear: string = '2017') {
  return {
    type: CHANGE_LAUNCH_YEAR,
    launchYear,
  };
}

export function toggleMetricSystem() {
  return {
    type: TOGGLE_METRIC_SYSTEM,
  };
}

export function toggleMobileMenuActivity() {
  return {
    type: TOGGLE_MOBILE_MENU_ACTIVITY,
  };
}
