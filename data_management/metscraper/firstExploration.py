import pandas as pd
from pandas import read_sql
from sqlite3 import connect

csvData = pd.read_csv("https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv")
with connect("metDB.db") as con:
    csvData.to_sql("MetCatalog", con, if_exists="replace", index=False)
    con.commit()
with connect("metDB.db") as con:
    query = """
        SELECT *
        FROM `MetCatalog`
        WHERE "Department" = "European Paintings" AND "Artist Nationality" LIKE '%talian%';
    """
    df_sql = read_sql(query, con)
    df_sql.to_csv("data.csv")

"""
On KERNEL >> 
import bq_helper
from bq_helper import BigQueryHelper
# https://www.kaggle.com/sohier/introduction-to-the-bq-helper-package
met = bq_helper.BigQueryHelper(active_project="bigquery-public-data",
                                   dataset_name="the_met")


bq_assistant = BigQueryHelper("bigquery-public-data", "the_met")
bq_assistant.list_tables()
bq_assistant.head("objects")

query1 = 
----- MISSING "
SELECT *
FROM `bigquery-public-data.the_met.objects`
WHERE department = "European Paintings" AND artist_nationality LIKE '%talian%';
------
response1 = met.query_to_pandas_safe(query1)
response1.to_csv("data.csv")
"""