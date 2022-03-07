import {CREATE_AD_OVERVIEW, SET_CURRENT_PAGE} from "../type";
import {AdCreatePage} from "../../../../domain/typeDef";

export interface PoposalPageCreatePayload {
  id: string,
  userId: string,
  channel: string,
  targetArea: string,
  budget: number,
  delivryTime: string,
}







