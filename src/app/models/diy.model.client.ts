export class DIY {
  _id: String;
  name: String;
  userId: String;
  description: String;
  cost: String;
  difficulty: String;
  toolsNeeded: String;
  supplies: String;
  url: String;

  constructor(_id?, name?, userId?, description?, cost?, difficulty?, toolsNeeded?, supplies?, url?) {
    this._id = _id;
    this.name = name;
    this.userId = userId;
    this.description = description;
    this.cost = cost;
    this.difficulty = difficulty;
    this.toolsNeeded = toolsNeeded;
    this.supplies = supplies;
    this.url = url;
  }
}
