# Connecting to Your GCP SQL Instance
Let's learn how to connect to your GCP SQL Instance!

Follow these step-by-step instructions to connect to your GCP SQL Instance.

- Launch `pgAdmin 4` if you haven't already.
  **Note** The [pgAdmin Setup](setup-pg-admin-client.md) must be completed.
- At the top, click the menu item `Object`.
- Hover over `Create` and click `Server...`.
- In the `General` tab:
  - Enter the name of your GCP SQL Instance as the `Name`.
- In the `Connection` tab
  - Set `Host name/address` to `127.0.0.1`.
  - Set `Port` to `3302`.
    - **Note** Unless you chose a different port number.
  - Set `Maintenance database` to `postgres`.
  - Set `Username` to `postgres`.
  - Set `Password` to `postgres`.
    - **Note** Unless you chose a different starting password for `postgres` user.
  - Hit Save.

If all goes well, your `pgAdmin` client should display a new element under
`Servers` which should be the name of the server you've setup.
