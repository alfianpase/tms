## [Transport Management System]

Tansport Management System Apps for Erpnext [Frappe]

## [Installing apps to your frappe]
1. Go to your frappe folder 
2. Get this app by using bench command: bench get-app tms https://github.com/alfianpase/tms
3. Make sure tms app has been downloaded to your system by checking it in apps directory
4. Install the app by using bench command: bench --site [your-site-name] install-app tms
5. Run server [if you are on development mode] by using bench command: bench start
6. Open another terminal and clear cache: bench clear-cache or click reload on your desk
7. The app should have been installed on your erpnext
8. Make changes to the database accordingly by using command: bench migrate

*Note: This app has not been tested yet.

## [Importing Master Data]
1. Login to your Desk and go to tms menu
2. Choose the doctype data you want to import. Eg: Master Stock Type
3. Click on Menu then choose Import
4. Make new import data
5. Choose update record on action field
6. Attach the file (eg: Master_Stock_Type.xlsx) and upload it.
7. Check "Submit after commiting"
8. Click Start Import
9. Check if your data has been imported

#### License

MIT
=======
