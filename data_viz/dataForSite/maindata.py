import pandas as pd
import collections
from pprint import pprint

def appendItem(cell, mainList):
    for el in str(cell).split(","):
        if el != 'The Metropolitan Museum of Art':
            mainList.append(str(el).strip())
    return mainList

metData = pd.read_csv("data_management/DataFrame Transfers and Agents.csv")
zeriData = pd.read_csv("data_viz/dataForSite/resultZeri.csv")

zeriDealer = []

for idx, row in zeriData.iterrows():
    appendItem(row["receivers"], zeriDealer)
    lastSurrender = str(row["surrenders"]).split(",")[-1].strip()
    zeriDealer.append(lastSurrender)

zeriFreq = collections.Counter(zeriDealer)
zeriDealerDf = pd.DataFrame({"freq": zeriFreq})
print(zeriDealerDf)

print("\n", "======", "\n")

metDealer = []

for idx, row in metData.iterrows():
    appendItem(row["agentsTransfer"], metDealer)

metFreq = collections.Counter(metDealer)
metDealerDf = pd.DataFrame({"freq": metFreq})
print(metDealerDf)

artworks = metData[["Title", "Artist Alpha Sort", "Object End Date", "Object Number", "AccessionYear", "lastTransfer"]]

#Export
zeriDealerDf.to_csv("data_viz/dataForSite/exportCsv/zeridealer.csv")
metDealerDf.to_csv("data_viz/dataForSite/exportCsv/metdealer.csv")
artworks.to_csv("data_viz/dataForSite/exportCsv/metartworks.csv")