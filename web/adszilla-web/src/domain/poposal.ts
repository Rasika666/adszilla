export interface Poposal {
  id: string ;
  userId: string;
  channel: string;
  targetArea: string;
  budget: number ;
  delivryTime: string;
}

export class PoposalsDetails {
  id: string ="";
  userId: string = "";
  channel: string = "";
  targetArea: string = "";
  budget: number = 0 ;
  delivryTime: string = "";
}

export class PoposalBuilder {

  private readonly _poposal: Poposal;

  constructor(id: string, userId: string,channel: string,targetArea: string,budget: number, delivryTime: string) {
    this._poposal = {
      id,
      userId: userId,
      channel: channel,
      targetArea: targetArea,
      budget: budget,
      delivryTime: delivryTime
    }
  }

}