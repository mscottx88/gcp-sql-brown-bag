# Setup `cloud_sql_proxy`
You'll need the `cloud_sql_proxy` to connect to your GCP SQL instance from your machine.

**Warning** You can connect with other techniques such as whitelisting your IP, but that exposes a security risk.

**Note** This command needs the prerequisite actions to be completed:
* [Instance Connection Name](get-instance-connection-name.md).
* [Google Cloud SQL API](enable-google-cloud-sql-api.md).
* [Service Account Credentials](create-sql-instance-service-account.md).

Follow these step-by-step instructions to download and setup the `cloud_sql_proxy` tool, needed for connecting to your GCP SQL Instance.

- Visit https://cloud.google.com/sql/docs/postgres/sql-proxy.
- Locate and follow the `Installing the Cloud SQL Proxy` instructions, relevant for your machine.

Once complete, you'll need two paths:
1. Path to `cloud_sql_proxy`;
2. Path to the downloaded **Service Account Credentials**.

Now, let's invoke it from a terminal.

For example:

```sh
# navigate to the location of your downloaded cloud_sql_proxy
cd /path/to/installation

# invoke the cloud_sql_proxy
cloud_sql_proxy -credential_file="/path/to/service-account-credentials/db-admin.json" -instances=my-gcp-sql-project:us-central1:my-gcp-sql-instance=tcp:3302
```

**Tip** You might find it easier to setup aliases, symlinks, and `PATH` changes to allow quicker access to the `cloud_sql_proxy` and then invoke it from within the folder containing the credentials.

Let's examine the command above to understand what it is doing.

In the above example:
* Project is `my-gcp-sql-project`;
* Region is `us-central1`;
* SQL instance is `my-gcp-sql-instance`;
* Port and protocol is `tcp:3302`.

If goes well, you should see in your terminal the message `Ready for new connections`.

**Tip** Leave this terminal window open for later exercises and/or return to this page for reference when the `cloud_sql_proxy` is needed.
