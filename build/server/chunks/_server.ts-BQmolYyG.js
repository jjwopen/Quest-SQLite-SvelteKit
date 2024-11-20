import { j as json } from './index2-BIAFQWR9.js';
import Database from 'better-sqlite3';

const db = new Database("scores.sqlite", { verbose: console.log });
db.exec(`
  CREATE TABLE IF NOT EXISTS scores (
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT NOT NULL,
contact TEXT NOT NULL,
score INTEGER NOT NULL,
xten INTEGER NOT NULL,
timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
const GET = () => {
  const stmt = db.prepare(`SELECT * FROM scores ORDER BY score DESC, xten DESC`);
  const users = stmt.all();
  let filteredUsers = [...users];
  filteredUsers.forEach((t) => {
    t.username = t.username.slice(0, 1) + "*" + t.username.slice(2);
    if (t.contact.includes("010")) {
      t.contact = `010-****-${t.contact.slice(7)}`;
    } else if (t.contact.includes("@")) {
      t.contact = t.contact.replace(/(?<=^\w{3})[\w.]+(?=@.*)/, "*");
    }
  });
  console.log(filteredUsers);
  return json(users);
};
const POST = async ({ request }) => {
  const { username, contact, score, xten } = await request.json();
  try {
    const stmt = db.prepare("INSERT INTO scores (username, contact, score, xten) VALUES (?, ?, ?, ?)");
    stmt.run(username, contact, score, xten);
    return json({ success: true });
  } catch (err) {
    return json({ error: err.message }, { status: 500 });
  }
};

export { GET, POST };
//# sourceMappingURL=_server.ts-BQmolYyG.js.map
