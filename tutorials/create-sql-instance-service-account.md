# Create Service Account
Follow these step-by-step instructions to create the service account for your GCP SQL instance.

- At the left side of the page hit the navigation slide in and locate and pin the `IAM & admin` menu item.
- Click `IAM & admin`.
- At the left, click `Service accounts`.
- At the top, click `+ Create Service Account`.
- Enter the name of your account as `db-admin`.
- In the `Role` dropdown, ensure that both `Cloud SQL Admin` and `Cloud SQL Client` roles are checked.
  - **Note** You can find these two roles by hovering over `Cloud SQL`.
- Check the `Furnish a new private key` and choose the `Key type` of `JSON`.
- Click `Create`.
- You should get a popup to choose where to save this key file.  Create a folder named `service-accounts` in the root of this project and save the file as `db-admin.json`.

You should now have a folder named `service-accounts` in this project.  In this folder you should have a file named `db-admin.json` that contains the keys for your service account.
