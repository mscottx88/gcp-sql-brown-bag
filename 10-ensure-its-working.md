# Ensure It's All Working
If you've completed all the previous steps everything should be working.  Let's kick the tires anyway.

**Note** Ensure the [cloud_sql_proxy](08-setup-cloud-sql-proxy.md) is setup and running.

- In `pgAdmin 4`, expand the tree element for your GCP SQL project.
- Expand the `Databases` element.
- Expand the `postgres` database.
- Right-click `Schemas` and click `Query Tool...`.

You should now see a new tab where you can enter SQL statements.  Try the following:

```sql
CREATE TABLE public.test_table (
  col1 text
);
```

To run, press F5 or click the lightning bolt icon.

**Note** By default, `pgAdmin` client implements `Auto Commit` and `Auto Rollback`.  You can change this by clicking the drop down arrow by the lightning bolt icon.

```sql
INSERT INTO public.test_table (
  col1
)
VALUES ('some-data'), ('some-more-data'), ('even-more-data');
```

```sql
SELECT *
FROM public.test_table;
```

```sql
DELETE
FROM public.test_table;
```
