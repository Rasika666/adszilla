import { User } from "../../../domain/user";
import {dummyUsers} from "../../../dummy/data/users";
import {LocalAction} from "../actions/ad-creation-actions/adCreateAction";

export interface UserState{
  users: User[];
};

const initState: UserState = {
  users: dummyUsers
}


export const userReducer = (state: UserState = initState, action: LocalAction<any>) => {
  switch (action.type) {
    default: return state;
  }
}