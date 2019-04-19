export class WishList {
  _id: String;
  name: String;
  userId: String;
  cost: String;
  seller: String;

  constructor(_id?, name?, userId?, cost?, seller?) {
    this._id = _id;
    this.name = name;
    this.userId = userId;
    this.cost = cost;
    this.seller = seller;
  }

}
