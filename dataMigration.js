const admin = require('firebaseAdminConfig.js');
const db = admin.db;
const mysql = require('mysql2');

const connection = mysql.createConnection({
  // Your MySQL connection details
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // Function to migrate data from a MySQL table to Firestore collection
  const migrateData = async (tableName) => {
    const query = `SELECT * FROM ${tableName}`;
    connection.query(query, async (err, results) => {
      if (err) {
        console.error('Error fetching data from MySQL:', err);
        return;
      }
      for (const row of results) {
        // Convert row data to Firestore document structure
        const firestoreDoc = {
          // ... your data mapping here
        };
        await db.collection(tableName).addDoc(firestoreDoc); // Or use setDoc for overwriting
      }
      console.log(`${tableName} data migrated to Firestore`);
    });
  };

  // Migrate data from each of your tables (call migrateData for each table)
  migrateData('categories');
  migrateData('checklists');
  migrateData('users');
  migrateData('levels');
  migrateData('points');
  migrateData('user_levels');
  migrateData('user_points');
  // ... migrateData for other tables

  connection.end();
});