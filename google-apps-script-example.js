// Google Apps Script Code to Handle Form Submissions
// Create a new Google Apps Script project at: https://script.google.com
// Replace YOUR_SPREADSHEET_ID with your actual Google Sheets ID

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open your Google Sheet (replace with your sheet ID)
    const sheetId = 'YOUR_SPREADSHEET_ID';
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 4).setValues([['Name', 'Email', 'Phone', 'Registration Date']]);
    }
    
    // Add the new registration data
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.timestamp
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Setup function to enable CORS for web requests
function setupCORS() {
  // This function should be run once to set up CORS permissions
  // In Apps Script editor, go to Deploy > New deployment > Web app
  // Set execute as: Me, and access: Anyone
}
