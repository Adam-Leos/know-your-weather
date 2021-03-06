// @flow

import {
  RECEIVE_LAUNCHES_DATA,
  TOGGLE_LAUNCHES_MODE,
  CHANGE_LAUNCH_YEAR,
  HANDLE_LAUNCHES_DATA_FAIL,
} from './../actions/actionTypes';
import type { StoreType, ActionType, LaunchesType } from '../flowTypes/flowTypes';

type LaunchesActionType = {
  ...$Exact<ActionType>,
  launchesData: LaunchesType,
  launchYear: string,
  error: Error,
}

function launches(state: StoreType = {}, action: LaunchesActionType) {
  switch (action.type) {
    case RECEIVE_LAUNCHES_DATA: {
      const { launchesData } = action;
      const newLaunchesDataArray = Array.isArray(launchesData) ? launchesData : [launchesData];

      return {
        ...state,
        launchesData: newLaunchesDataArray,
      };
    }

    case HANDLE_LAUNCHES_DATA_FAIL: {
      return {
        ...state,
        error: action.error,
      };
    }

    case TOGGLE_LAUNCHES_MODE: {
      return {
        ...state,
        isPastLaunches: !state.isPastLaunches,
      };
    }

    case CHANGE_LAUNCH_YEAR: {
      return {
        ...state,
        launchYear: action.launchYear,
      };
    }

    default:
      return state;
  }
}

export default launches;
