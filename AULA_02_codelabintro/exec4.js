function table(name, note) {
  this.Names = name;
  this.Notes = note;
}

let aline = new table("Aline", 9.0);
let mario = new table("Mário", 10);
let sergio = new table("Sérgio", 4.5);
let shirley = new table("Shirley", 7.0);

console.table([aline, mario, sergio, shirley]);
