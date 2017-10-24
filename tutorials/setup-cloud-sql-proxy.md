# Setup `cloud_sql_proxy`
Follow these step-by-step instructions to download and setup the `cloud_sql_proxy` tool,
needed for connecting to your GCP SQL Instance.

- Visit https://cloud.google.com/sql/docs/postgres/sql-proxy.
- Locate and follow the `Installing the Cloud SQL Proxy` instructions, relevant
for your machine.
- Once you've obtained the `cloud_sql_proxy` tool, let's invoke it from a terminal.

**Note** This command needs the [Instance Connection Name](get-instance-connection-name.md).

**Note** This command needs the [Google Cloud SQL API](enable-google-cloud-sql-api.md).

**Note** This command needs the [Service Account Credentials](create-sql-instance-service-account.md).

For example:

```sh
cloud_sql_proxy -credential_file="../service-accounts/db-admin.json" \
  -instances=my-gcp-sql-project:us-central1:my-gcp-sql-instance=tcp:3302
```

In the above example, my project is `my-gcp-sql-project`, the region of my
project is `us-central1`, and the name of my SQL instance is `my-gcp-sql-instance`.

Finally, the `tcp:3302` tells the `cloud_sql_proxy` to listen on port number
`3302` for incoming requests.  You can use a different port if you want.  But why?

If goes well, you should see in your terminal the message `Ready for new connections`.
