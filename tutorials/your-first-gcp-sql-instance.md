# Setup Your First GCP SQL Instance
Let's setup your very first GCP SQL Instance!

**Note**
If you haven't done so already, visit and sign in to your project here https://console.cloud.google.com

**Note**
Ensure you've selected your GCP Project you already created.

Follow these step-by-step instructions to setup your first GCP SQL Instance.

- From the home page of your project, click the menu button at the upper left.
  - **Note** This slide in allows you to navigate to various panels inside GCP.  You should get familiarized with this slide in.  Also, you should consider pinning and reorganizing menu items in the slide in.
- Scroll down and pin the `SQL` menu item.
- Now, `SQL` should appear at the top of the menu.  Click it.
- You should see an option to `Create Instance`.  Click it.
- You should see options to choose between `MySQL` and `PostgreSQL`.  Choose `PostgreSQL` and click `Next`.
  - **Note** `MySQL` eats up `1GB` of cloud storage in overhead alone. `PostgreSQL` on the other hand only uses `100MB` of overhead, and is open-source.
  - **Note** You might have to wait for the `Compute Engine API` to initialize.
- In the next panel, enter your instance ID.
  - **Note** If creativity escapes you, try `my-gcp-sql-instance`.
- Enter a default password for the default user `postgres`.
  - **Note** This is just a sandbox, so you could just use `postgres` as the password too.
- Select your Region and Zone.
  - **Note** Seems like the West is a pretty popular place.  You might have better luck getting a VM from `us-central1` and `us-central1-a`.
- Once all set, click `Create`.
  - **Note** This is another long-running process, be patient.

Once the SQL instance is setup, you should see a green check mark.  If it
never turns green, try checking your Notifications and refreshing the page.
